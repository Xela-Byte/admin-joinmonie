import styled from "styled-components";
import { colors } from "./UniversalStyles";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 5%;
  @media screen and (min-width: 991px) {
    width: 50%;
    margin: auto;
  }
`;

export const HomeHeader = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  gap: 5%;
`;

export const HomeIcon = styled.div`
  width: 20%;
  height: 100%;
  & > img {
    cursor: pointer;
    width: 60%;
    height: 60%;
  }
`;

export const HomeWelcome = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10%;
  & > p {
    font-size: 14px;
    color: ${colors.blue};
    font-weight: 600;
  }
  & > img {
    cursor: pointer;
    width: 45px;
    margin-left: auto;
    height: 45px;
    border-radius: 10px;
  }
  @media screen and (min-width: 991px) {
    & > p {
      font-size: 4vh;
    }
  }
`;

export const HomeTabContainer = styled.div`
  width: 100%;
  height: 80%;
  padding-top: 15%;
`;

export const HomeTab = styled.div`
  width: 100%;
  cursor: pointer;
  padding: 10px;
  display: flex;
  gap: 7%;
  & > img {
    width: 35px;
    cursor: pointer;
    height: 35px;
  }
  & > img:last-child {
    transform: rotate(180deg);
    cursor: pointer;
    margin-left: auto;
  }
`;
