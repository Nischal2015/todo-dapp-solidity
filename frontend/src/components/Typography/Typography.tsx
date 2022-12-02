import {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from "react";
import { Colors } from "~/types";
import { StyledTypography } from "./Styles";

type TextProps<T extends ElementType> = {
  as?: T;
  color?: Colors;
};

export type StyledTypographyProps = {
  fontSize?: string;
  fontWeight?: string;
};

export type TypographyProps<T extends ElementType> = PropsWithChildren<
  TextProps<T>
> &
  Omit<ComponentPropsWithoutRef<T>, keyof TextProps<T>> &
  StyledTypographyProps;

function Typography<T extends ElementType = "span">({
  as,
  children,
  fontSize,
  color,
  ...restProps
}: TypographyProps<T>) {
  return (
    <StyledTypography as={as} {...restProps} fontSize={fontSize} color={color}>
      {children}
    </StyledTypography>
  );
}

export default Typography;
