import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { Colors, Variant } from "~/types";
import { StyledButton } from "./Styles";

export type ButtonVariant = {
  variant?: Variant;
  color?: Colors;
};

type BtnProps = {
  onClick?: () => void;
  disabled?: boolean;
};

type ButtonProps = PropsWithChildren<BtnProps> & {} & Omit<
    ComponentPropsWithoutRef<"button">,
    keyof BtnProps
  > &
  ButtonVariant;

function Button({
  children,
  disabled = false,
  onClick = () => {},
  variant = "contained",
  color = "primary",
}: ButtonProps) {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      color={color}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
