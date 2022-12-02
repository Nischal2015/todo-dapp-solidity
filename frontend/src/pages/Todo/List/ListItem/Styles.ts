import styled from "@emotion/styled";
import { StyledListItemProps } from "./ListItem.d";

export const StyledDiv = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const StyledListItem = styled.div<StyledListItemProps>(
  {
    cursor: "pointer",
    display: "grid",
    gridTemplateColumns: "1fr 47fr",
    alignItems: "center",
    gap: "2rem",
    marginBottom: "0.8rem",
    backgroundColor: "#fff",
    padding: "0.2rem 1.6rem",
    borderRadius: "4px",
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px",
    "&:hover": {
      backgroundColor: "#f8f9ff",
    },
  },
  (props) =>
    props.isDragging && {
      backgroundColor: "#f4f5ff",
      boxShadow:
        "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
    }
);

export const DeleteWrapper = styled.span({
  height: "3.2rem",
  width: "3.2rem",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  zIndex: 2,
  transition: "transform 100ms ease",
  opacity: 0.9,
  "& > *": {
    height: "2.2rem",
    width: "2.2rem",
  },
  "&:hover": {
    transform: "scale(1.2)",
  },
  "&:active": {
    transform: "scale(1.05)",
  },
});
