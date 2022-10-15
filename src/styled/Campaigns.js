import styled from "styled-components";
import { colors } from "./UniversalStyles";

export const CampaignContainer = styled.div`
  width: 100%;
  color: ${colors.blue};
  padding: 5%;
  & > img {
    cursor: pointer;
    width: 35px;
    height: 35px;
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

export const CampaignTab = styled.div`
  width: 100%;
  border-radius: 10px;
  margin-top: 5%;
  padding: 5%;
  box-shadow: -5px 5px 10px #c5c5c5, 10px -10px 17px #fbfbfb;
  & > img {
    width: 100%;
    border-radius: 10px;
    max-height: 200px;
    cursor: pointer;
    object-fit: cover;
  }
  & > p {
    color: ${colors.blue};
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 600;
    margin-top: 5%;
  }
`;

export const CampaignInfo = styled.div`
  margin-top: 5%;
  width: 100%;
  & > p:first-child {
    font-size: 16px;
    font-weight: 600;
  }
  & > div {
    display: flex;
  }
  & > div > img {
    cursor: pointer;
    width: 25px;
    height: 25px;
    margin-left: auto;
  }
`;
