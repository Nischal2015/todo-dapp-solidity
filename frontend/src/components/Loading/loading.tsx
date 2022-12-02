import { createPortal } from "react-dom";
import { useTransaction } from "~/context";
import { StyledModalOverlay } from "../Modal/Style";
import { Typography } from "../Typography";
import {
  BarFour,
  BarOne,
  BarThree,
  BarTwo,
  BarWrapper,
  ContentWrapper,
} from "./Styles";

export default function Loading() {
  const { isTransacting } = useTransaction();
  const $root = document.getElementById("root") as HTMLElement;

  return (
    <>
      {isTransacting &&
        createPortal(
          <>
            <StyledModalOverlay />
            <ContentWrapper>
              <Typography fontSize='28px' fontWeight='600' color='white'>
                Your transaction is processing
              </Typography>
              <BarWrapper>
                <BarOne />
                <BarTwo />
                <BarThree />
                <BarFour />
              </BarWrapper>
            </ContentWrapper>
          </>,
          $root
        )}
    </>
  );
}
