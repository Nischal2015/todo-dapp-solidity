import { PropsWithChildren } from "react";
import { StyledContainer } from "./Styles";

function Container({ children }: PropsWithChildren) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
