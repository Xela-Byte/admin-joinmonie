import styled from "styled-components";
import { colors } from "./UniversalStyles";

export const UserTab = styled.div`
  width: 100%;
  padding: 5%;
  display: flex;
  & > div > p {
    font-size: 16px;
    color: ${colors.blue};
  }
  & > div > p:first-child {
    font-size: 18px;
    font-weight: 600;
  }

  & > img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
`;
