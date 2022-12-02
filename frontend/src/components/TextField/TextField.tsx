import { ComponentPropsWithRef, ElementType, forwardRef } from "react";
import { Variant } from "~/types";
import { StyledLabel, StyledTextField } from "./Style";

type FieldProps<T extends ElementType> = {
  as?: T;
  label: string;
};

export interface TextFieldVariant {
  variant?: Variant;
}

export type TextFieldProps<T extends ElementType> = ComponentPropsWithRef<T> &
  FieldProps<T> &
  TextFieldVariant;

function TextField<T extends ElementType = "input">(
  props: TextFieldProps<T>,
  ref: any
) {
  const { label = "", variant, as, ...rest } = props;
  return (
    <div>
      <StyledLabel htmlFor='basic-outlined' fontWeight='600'>
        {label.toUpperCase()}
      </StyledLabel>
      <StyledTextField
        as={as}
        id='basic-outlined'
        variant={variant}
        autoFocus={variant === "contained"}
        {...rest}
        ref={ref}
      />
    </div>
  );
}

export default forwardRef(TextField);
