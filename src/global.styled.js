import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 600px;
  padding: 40px;
  background-size: cover;
  background-image: url("https://wallpapercave.com/wp/wp2557274.jpg");
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  margin-left: auto;
  margin-right: auto;
`;

export const SmallContainer = styled.div`
  display: flex;
`;

export const Title = styled.h1`
  margin-bottom: 0px;
  margin-top: 0px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 36px;
  color: #373737;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 24px;
  color: #373737;
`;

export const Button = styled(Link)`
  margin-top: 36px;
  padding: 20px 40px;
  font-weight: 600;
  font-size: 24px;
  color: #373737;
  text-align: center;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-color: #ffffff;
  outline: 3px solid #373737;
  border: 10px solid #471ca9;
  text-decoration: none;
`;

export const NavButton = styled(Link)`
  padding: 10px 40px;
  font-weight: 600;
  font-size: 24px;
  color: #373737;
  text-align: center;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: 3px solid #471ca9;
  text-decoration: none;
  margin-right: 500px;
`;
