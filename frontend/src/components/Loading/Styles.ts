import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const growShrink = keyframes`
from {
    transform: scaleY(0.1)
},
to {
    transform: scaleY(1)
}
`;

export const BarWrapper = styled.div({
  display: "flex",
  gap: "8px",
});

export const ContentWrapper = styled.div({
  position: "fixed",
  zIndex: "1000",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -70%)",
  display: "flex",
  flexDirection: "column",
  gap: "4rem",
  alignItems: "center",
});

const BaseBar = styled.span({
  display: "inline-block",
  width: "10px",
  height: "80px",
  borderRadius: "4px",
  animation: `600ms ease-in-out ${growShrink} infinite alternate`,
});

export const BarTwo = styled(BaseBar)({
  background: "#4285F4",
  animationDelay: "200ms",
});

export const BarOne = styled(BaseBar)({
  background: "#DB4437",
  animationDelay: "400ms",
});

export const BarFour = styled(BaseBar)({
  background: "#F4B400",
  animationDelay: "600ms",
});

export const BarThree = styled(BaseBar)({
  background: "#0F9D58",
  animationDelay: "800ms",
});
