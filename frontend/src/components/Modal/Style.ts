import styled from "@emotion/styled";
import { ModalVariant } from "./Modal";

export const StyledModal = styled.div<ModalVariant>(
  {
    display: "block",
    width: "600px",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "fixed",
    zIndex: "100",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -60%)",
    borderRadius: "6px",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
  },
  (props) => {
    switch (props.variant) {
      case "contained": {
        return {
          color: props.theme.colors.white,
          backgroundColor: props.theme.colors.primary,
        };
      }
      case "outlined": {
        return {
          backgroundColor: props.theme.colors.white,
          color: props.theme.colors.primary,
        };
      }
    }
  }
);

export const StyledModalOverlay = styled.div({
  position: "fixed",
  inset: 0,
  zIndex: "50",
  backgroundColor: "rgba(5,3,12,0.6)",
  backdropFilter: "blur(10px)",
});

export const StyledModalGuts = styled.div({
  padding: "3.2rem",
  width: "100%",
  height: "100%",
});
