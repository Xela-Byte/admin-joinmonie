import styled from "styled-components";
import { Centering, colors } from "./UniversalStyles";

export const DonationContainer = styled.div`
  width: 100%;
  color: ${colors.blue};
  padding: 5%;
  & > img {
    width: 35px;
    height: 35px;
    cursor: pointer;
  }
  & > p {
    color: ${colors.blue};
    font-size: 20px;
    text-align: center;
    margin-bottom: 5%;
  }
  @media screen and (min-width: 991px) {
    width: 50%;
    margin: auto;
    & > p {
      font-size: 4vh;
    }
  }
`;

export const DonationInputContainer = styled.div`
  width: 100%;
  height: 10%;
  & > input {
    padding: 0.5rem;
    margin-top: 5%;
    outline: none;
    border: 1px solid ${colors.blue};
  }
  & > button {
    background: ${colors.blue};
    padding: 0.7rem;
    border: none;
    color: #fff;
    cursor: pointer;
    margin: 5%;
    font-size: 16px;
    border-radius: 5px;
  }
  @media screen and (min-width: 991px) {
    & > input {
      margin: 5%;
    }
  }
`;

export const DonationCampaignContainer = styled.div`
  width: 100%;
`;

export const DonationAmountTab = styled.div`
  width: 50px;
  height: 50px;
  margin: auto;
  border-radius: 50%;
  background: ${colors.blue};
  color: #fff;
  ${Centering}
`;
