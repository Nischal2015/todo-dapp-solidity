import styled from "@emotion/styled";
import { ButtonVariant } from "./Button";

export const StyledButton = styled.button<ButtonVariant>(
  {
    position: "relative",
    padding: "1.2rem 1.6rem",
    fontSize: "1.6rem",
    fontWeight: "500",
    border: "none",
    cursor: "pointer",
    borderRadius: "8px",
    transition: "all 0.25s ease-in",
    display: "inline-block",
    "&:enabled::after": {
      content: '""',
      position: "absolute",
      top: "0",
      left: "0",
      height: "100%",
      width: "100%",
      opacity: "0",
      transition: "0.15s ease-in",
      borderRadius: "8px",
    },
    "&:hover:enabled::after": {
      opacity: 1,
    },
  },
  (props) => ({
    "&:disabled": {
      backgroundColor: props.theme.colors.disabled,
      color: "#fff",
      cursor: "not-allowed",
    },
  }),
  (props) => {
    if (props.variant === "contained") {
      return {
        background: props.theme.colors[props.color!],
        color: "#fff",
        position: "relative",
        "&:enabled:after": {
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
        },
      };
    }

    if (props.variant === "outlined") {
      return {
        background: "#fff",
        color: props.theme.colors[props.color!],
        boxShadow: `inset 0 0 0 1.5px ${props.theme.colors[props.color!]}`,
        "&:enabled::after": {
          boxShadow: `rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,rgba(0, 0, 0, 0.04) 0px 10px 10px -5px, inset 0 0 0 1.5px ${
            props.theme.colors[props.color!]
          }`,
        },
      };
    }
  }
);
