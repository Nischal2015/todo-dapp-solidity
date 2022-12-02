import styled from "@emotion/styled";

export const StyledImg = styled.img({
  height: "100%",
  width: "100%",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

export const StyledDiv = styled.div({
  height: "4rem",
  width: "4rem",
  borderRadius: "50%",
  cursor: "pointer",
  overflow: "hidden",
  transition: "all 0.1s ease-in",
});
