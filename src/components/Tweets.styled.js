import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
  list-style: none;
`;

export const Card = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Background = styled.img`
  width: 308px;
  height: 168px;
  margin: 28px 36px 18px;
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
`;

export const Line = styled.div`
  width: 100%;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Round = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  top: 178px;
  left: 150px;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 40px;
`;

export const Avatar = styled.img`
  position: absolute;
  top: 9px;
  left: 9px;
  width: 62px;
  height: 62px;
  border-radius: 30px;
  object-fit: contain;
`;

export const StyledTweets = styled.p`
  margin-top: 62px;
  margin-bottom: 0px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #ebd8ff;
`;

export const Followers = styled.p`
  margin-top: 16px;
  margin-bottom: 0px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #ebd8ff;
`;

export const Button = styled.button`
  margin-top: 26px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  padding: 14px;
  text-align: center;
  width: 196px;
  height: 50px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 24px;
  color: #373737;
`;

export const LoadMore = styled.button`
  margin-top: 36px;
  padding: 20px 40px;
  font-weight: 600;
  font-size: 24px;
  color: #373737;
  padding: 14px;
  text-align: center;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-color: #ffffff;
  outline: 3px solid #373737;
  border: 10px solid #471ca9;
  text-decoration: none;
  text-transform: uppercase;
`;

export const Select = styled.select`
  margin-bottom: 24px;
  padding: 10px 40px;
  font-weight: 400;
  font-size: 24px;
  color: #373737;
  align-self: flex-end;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: 3px solid #471ca9;
`;

export const Option = styled.option`
  font-weight: 400;
  font-size: 20px;
  color: #373737;
`;
