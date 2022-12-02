import styled from "@emotion/styled";

export const StyledButton = styled.button({
  height: "3.2rem",
  width: "3.2rem",
  borderRadius: "50%",
  backgroundColor: "#321fb2",
  border: "none",
  cursor: "pointer",
  color: "#fff",
  transition: "all 0.15s ease-in",
  "&:hover": {
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
    transform: "scale(1.01)",
  },
});
