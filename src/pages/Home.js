import { useState, useEffect } from "react";
import { fetchTotalUsers } from "../services/api";
import { HomeContainer, Title, Button, Text } from "../global.styled";
import { Loader } from "../components/Loader";

const Home = () => {
  const [totalUsers, setTotalUsers] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchTotalUsers("All")
      .then((response) => {
        setTotalUsers(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <HomeContainer>
      <Title>Hello!</Title>
      {totalUsers === 0 ? (
        <Text>Sorry, we have no users</Text>
      ) : (
        <Text>We have {totalUsers} users. Do you want to see them?</Text>
      )}

      <Button to="/tweets"> Lets's start!</Button>
    </HomeContainer>
  );
};

export default Home;
