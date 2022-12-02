import styled from "@emotion/styled";
import { StyledTypography } from "../Typography/Styles";
import { TextFieldVariant } from "./TextField";

export const StyledTextField = styled.input<TextFieldVariant>(
  {
    width: "100%",
    boxSizing: "border-box",
    fontSize: "1.6rem",
    padding: "1.2rem 0.4rem",
    fontFamily: '"Poppins", sans-serif',
  },
  (props) => ({
    color: props.theme.colors.secondary,
  }),
  (props) => {
    switch (props.variant) {
      case "outlined": {
        return {
          color: props.theme.colors.secondary,
          border: `1px solid ${props.theme.colors.primary}`,
          borderRadius: "2px",
          "&:focus": {
            outline: `2px solid ${props.theme.colors.disabled}`,
          },
        };
      }

      case "contained": {
        return {
          border: "none",
          outline: "none",
          "&::placeholder": {
            color: props.theme.colors.lightgray,
          },
        };
      }
    }
  }
);

export const StyledLabel = styled(StyledTypography.withComponent("label"))({
  display: "inline-block",
  marginBottom: "0.4rem",
});
