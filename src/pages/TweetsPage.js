import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { Tweets } from "../components/Tweets";
import { Container, Title, NavButton, SmallContainer } from "../global.styled";

const TweetsPage = ({ isLoading }) => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "/Home");

  return (
    <Container>
      <SmallContainer>
        <NavButton to={backLinkLocationRef.current}> Back </NavButton>
        <Title>Users</Title>
      </SmallContainer>
      <Tweets />
    </Container>
  );
};

export default TweetsPage;
