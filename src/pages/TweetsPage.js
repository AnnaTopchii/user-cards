import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Tweets } from "../components/Tweets";
// import { getTrending } from "services/api";

const users = [
  {
    user: "Ivan",
    tweets: 777,
    followers: 100500,
    avatar: "url.jpg",
    id: 1,
  },
  {
    user: "Kate",
    tweets: 100,
    followers: 500,
    avatar: "url.jpg",
    id: 2,
  },
  {
    user: "Tetyana",
    tweets: 300,
    followers: 222,
    avatar: "url.jpg",
    id: 3,
  },
];

const TweetsPage = () => {
  //   const [users, setUsers] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "/Home");

  // useEffect(() => {
  //   // Simulate data fetching delay
  //   const delay = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);

  //   return () => clearTimeout(delay);
  // }, []);

  //   useEffect(() => {
  //     setIsLoading(true);
  //     getTrending()
  //       .then((response) => {
  //         setUsers(response.results);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       })
  //       .finally(setIsLoading(false));
  //   }, []);

  return (
    <div>
      <Link to={backLinkLocationRef.current}> Back </Link>

      <div>
        <h1>Users cards</h1>
        <Tweets users={users} />
        <button> Load more </button>
      </div>
    </div>
  );
};

export default TweetsPage;
