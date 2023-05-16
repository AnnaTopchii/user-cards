import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

const Home = () => {
  //   const [users, setUsers] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

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
      <h1>Hello!</h1>
      <p>We have {users.length} users. Do you want to see them?</p>
      <Link to="/tweets"> Lets's start!</Link>
    </div>
  );
};

export default Home;
