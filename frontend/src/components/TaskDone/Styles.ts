import styled from "@emotion/styled";

export const StyledTaskDone = styled.div({
  height: "2rem",
  width: "2rem",
  borderRadius: "50%",
  boxShadow: "inset 0 0 0 2.5px #321fb2",
  color: "#321fb2",
  position: "relative",
  cursor: "pointer",
});

export const LongDiv = styled.div({
  position: "relative",
  height: "2.5px",
  width: "18px",
  backgroundColor: "#321fb2",
  borderRadius: "6px",
  boxShadow: "0 -2px 0 1px #fff",
  transform: "rotate(-42deg)",
  top: "6px",
  left: "6.5px",
});

export const ShortDiv = styled.div({
  position: "absolute",
  height: "8px",
  width: "2.5px",
  backgroundColor: "#321fb2",
  borderRadius: "6px",
  bottom: "0",
  left: "0",
});
