import styled from "@emotion/styled";

interface HoverSpanProps {
  size?: string;
}

export const Header = styled.div({
  display: "flex",
  justifyContent: "space-between",
});

export const Body = styled.div({
  marginBottom: "2.4rem",
  display: "flex",
  flexDirection: "column",
  gap: "2.4rem",
});

export const Footer = styled.div(
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingTop: "2.4rem",
    gap: "1.6rem",
  },
  (props) => ({
    borderTop: `1px solid ${props.theme.colors.primary}`,
  })
);

export const HoverSpan = styled.span<HoverSpanProps>(
  {
    borderRadius: "50%",
    transition: "all 0.15s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  (props) => ({
    height: props.size || "2.4rem",
    width: props.size || "2.4rem",
    "&:hover": {
      backgroundColor: props.theme.colors.disabled,
    },
  })
);
