import { useState, useEffect } from "react";
import {
  List,
  Card,
  Background,
  Logo,
  Line,
  Round,
  Avatar,
  StyledTweets,
  Followers,
  Button,
  Text,
  LoadMore,
  Select,
  Option,
} from "./Tweets.styled";
import logo from "../images/logo.png";
import background from "../images/background.png";
import { updateUser, fetchUsers, fetchTotalUsers } from "../services/api";
import { Loader } from "./Loader";

export const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filter, setFilter] = useState("All");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchTotalUsers("All")
      .then((response) => {
        const totalPages = Math.ceil(response / 3);
        setTotalPages(totalPages);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setCurrentPage(1);
    setIsLoading(true);
    fetchUsers(currentPage, filter)
      .then((response) => {
        setUsers(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(setIsLoading(false));
  }, [filter]);

  useEffect(() => {
    fetchTotalUsers(filter)
      .then((response) => {
        const totalPages = Math.ceil(response / 3);
        setTotalPages(totalPages);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [filter]);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    setIsLoading(true);
    fetchUsers(nextPage, filter)
      .then((response) => {
        const uniqueUsers = response.filter(
          (user) => !users.some((existingUser) => existingUser.id === user.id)
        );

        setUsers((prevUsers) => [...prevUsers, ...uniqueUsers]);
        setCurrentPage(nextPage);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(setIsLoading(false));
  };

  const handleClick = async (id, following, followers) => {
    try {
      if (following) {
        await updateUser(id, false, followers - 1);
        setUsers((prevUsers) =>
          prevUsers.map((user) => {
            if (user.id === id) {
              return {
                ...user,
                following: false,
                followers: user.followers - 1,
              };
            }
            return user;
          })
        );
      } else {
        await updateUser(id, true, followers + 1);
        setUsers((prevUsers) =>
          prevUsers.map((user) => {
            if (user.id === id) {
              return {
                ...user,
                following: true,
                followers: user.followers + 1,
              };
            }
            return user;
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Select
        id="users"
        name="users"
        value={filter}
        onChange={handleFilterChange}
      >
        <Option value="All"> All users </Option>
        <Option value="Follow">Follow</Option>
        <Option value="Following">Following</Option>
      </Select>
      {users.length === 0 ? (
        <Text>Sorry, we have no users</Text>
      ) : (
        <List>
          {users.map(({ id, tweets, followers, avatar, following }) => (
            <Card key={id}>
              <Logo src={logo} alt="Logo" />
              <Background src={background} alt="background photo" />
              <Line />
              <Round>
                <Avatar src={avatar} alt="user photo" />
              </Round>
              <StyledTweets>{tweets} tweets</StyledTweets>
              <Followers>
                {followers.toLocaleString("en-US")} followers
              </Followers>
              <Button
                style={{ backgroundColor: following ? "#5CD3A8" : "#ebd8ff" }}
                onClick={() => handleClick(id, following, followers)}
              >
                {following ? "Following" : "Follow"}
              </Button>
            </Card>
          ))}
        </List>
      )}
      {currentPage < totalPages && (
        <LoadMore onClick={handleLoadMore}>Load More</LoadMore>
      )}
    </>
  );
};
