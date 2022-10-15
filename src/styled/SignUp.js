import styled from "styled-components";

import { colors, fontSizes } from "./UniversalStyles";

export const SignUpContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 5%;

  @media screen and (min-width: 991px) {
    width: 70%;
    height: auto;
  }
`;

export const SignUpHeaderText = styled.p`
  font-size: ${fontSizes.medium};
  font-weight: 600;
  color: ${colors.blue};
  margin-top: 5%;
`;

export const SignUpForm = styled.form`
  padding-top: 5%;
  width: 100%;
  height: 85%;
  & > p {
    font-size: calc(${fontSizes.medium} - 2px);
    font-weight: 600;
    margin-bottom: 5%;
    color: ${colors.blue};
  }
`;

export const SignUpInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 5%;
  position: relative;
  & > label {
    font-size: calc(${fontSizes.small});
    margin-bottom: 5px;
  }
  & > input {
    padding: 0.7rem;
    border: 1px solid ${colors.blue};
    outline: none;
    font-size: ${fontSizes.small};
  }
  & > p {
    font-size: ${fontSizes.small};
  }
  & > img {
    width: 20px;
    height: 20px;
    position: absolute;
    left: 90%;
    bottom: 45%;
  }
  @media screen and (min-width: 991px) {
    & > img {
      width: 20px;
      height: 20px;
      position: absolute;
      left: 90%;
      bottom: 55%;
    }
  }
`;

export const SignUpDropdown = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: ${fontSizes.small};
  padding-bottom: 5%;
  & > div {
    display: flex;
  }
  & > div:first-child > p:last-child {
    margin-left: auto;
  }
  .dropdown-signup {
    width: 48%;
    border: 1px solid ${colors.blue};
  }
  .dropdown-signup:first-child {
    margin-right: 4%;
  }
  .profile {
    width: 100%;
  }
`;

export const SignUpBtn = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  font-size: ${fontSizes.medium};
  border-radius: 10px;
  color: ${colors.white};
  background: ${colors.blue};
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  @media screen and (min-width: 991px) {
    padding: 15px;
    font-size: 3vh;
    width: 25%;
    margin-bottom: 20px;
  }
`;

export const ReferralText = styled.div`
  text-align: center;
  width: 100%;
  height: 10%;
  color: ${colors.black};
  & > a {
    color: ${colors.blue};
  }
  margin-top: 5%;

  margin-bottom: 50px;
`;

export const PasswordTC = styled.div`
  color: ${colors.blue};
  width: 100%;
  padding-bottom: 10%;
  & > p {
    font-size: ${fontSizes.small};
  }
  & > p > a {
    margin-left: 5px;
    color: ${colors.blue};
    text-decoration: none;
    font-weight: 600;
  }
`;

export const SecurityHeader = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  & > img {
    width: 35px;
    height: 35px;
  }
  & > p {
    text-align: center;
    font-size: 18px;
    margin-left: 20%;
    color: ${colors.blue};
  }
  @media screen and (min-width: 991px) {
    margin-bottom: 5%;
    & > p {
      margin: auto;
      font-size: 4vh;
    }
  }
`;
