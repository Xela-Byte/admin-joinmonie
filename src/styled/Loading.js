import styled from "styled-components";

import { Centering } from "./UniversalStyles";

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: transparent;
  z-index: 6;
  backdrop-filter: blur(2px);
`;

export const LoadingContent = styled.div`
  width: 90%;
  height: 50%;
  position: absolute;
  top: 25%;
  left: 5%;
  ${Centering}
  gap: 5%;
  flex-direction: column;
  border-radius: 20px;
  z-index: 6;
`;

export const LoadingIcon = styled.div`
  width: 100%;
  height: 100%;
  ${Centering};
  border-radius: 20px;
  & > img {
    width: 20%;
    height: 20%;
  }
  @media screen and (min-width: 991px) {
    & > img {
      width: 20%;
      height: 30%;
    }
  }
`;
