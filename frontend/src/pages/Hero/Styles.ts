import styled from "@emotion/styled";

export const HeroContentContainer = styled.div({
  padding: "22.5rem 0 0",
  textAlign: "center",
});

export const HeroContentHeadingContainer = styled("div")({
  color: "#343a40",
  marginBottom: "2rem",
});

export const HeroContentSubHeadingContainer = styled("div")({
  color: "#343a40",
  letterSpacing: ".01rem",
  maxWidth: "63rem",
  margin: "0 auto 4.8rem",
  "& h2": {
    opacity: 0.7,
  },
});

export const ButtonWrapper = styled.div({
  display: "inline-block",
  transition: "100ms ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
  "&:active": {
    transform: "scale(1)",
  },
});
