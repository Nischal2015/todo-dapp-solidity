import styled from "@emotion/styled";
import { theme } from "../../context/emotion/emotion";
import { StyledTypographyProps } from "./Typography";

export const StyledTypography = styled.p<StyledTypographyProps>(
  (props) => {
    const lineHeight = Number(props.fontSize?.slice(0, 3)) * 1.5;
    return {
      color:
        props.theme.colors[props.color as keyof typeof theme.colors] ||
        "#321fb2",
      fontSize: props.fontSize || "1.4rem",
      fontWeight: props.fontWeight || "400",
      lineHeight: lineHeight ? `${lineHeight}rem` : "2.1rem",
    };
  },
  (props) => {
    if (props.as === "h1") {
      return {
        fontSize: "4rem",
        marginBottom: "5.6rem",
        fontWeight: "500",
        lineHeight: "6rem",
      };
    }

    if (props.as === "h2") {
      return {
        fontSize: "2.4rem",
        marginBottom: "3.2rem",
        fontWeight: "500",
        lineHeight: "3.6rem",
      };
    }
  }
);
