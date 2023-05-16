import { useState, useEffect } from "react";
import {
  List,
  Card,
  Background,
  Logo,
  Line,
  Border,
  Round,
  StyledTweets,
  Followers,
  Button,
} from "./Tweets.styled";
import logo from "../images/logo.png";
import background from "../images/background.png";
import line from "../images/line.png";
import border from "../images/avatar-border.png";
// import { getTrending } from "services/api";

export const Tweets = ({ users }) => {
  return (
    <List>
      {users.map(({ id, tweets, followers, avatar }) => (
        <Card key={id}>
          <Logo src={logo} alt="Logo" />
          <Background src={background} alt="background photo" />
          {/* <Line src={line} alt="border line" /> */}
          <Line />
          <Round />
          {/* <Border src={border} alt="border" /> */}
          <StyledTweets>{tweets} tweets</StyledTweets>
          <Followers>{followers} followers</Followers>
          <Button>Follow</Button>
        </Card>
      ))}
    </List>
  );
};
