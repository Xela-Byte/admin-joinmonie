import styled, { css } from "styled-components";

export const Centering = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const colors = {
  blue: "#0707e0",
  white: "#ffffff",
  black: "#000000",
  grey: "#6b6363",
  cyan: "#99ffff",
  pink: "#ff99ff",
  purple: "#8704b3",
};

export const fontSizes = {
  large: "30px",
  medium: "19px",
  small: "14px",
};
export const Line = styled.div`
  width: 50%;
  height: 0.3rem;
  margin-top: 20px;
  border-radius: 20px;
  background: ${colors.blue};
`;

export const ToastifyProps = {
  position: "top-right",
  autoClose: 5000,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
  style: {
    borderRadius: "10px",
    fontFamily: "Cairo",
  },
};
