import { Button } from "~/components";
import { SectionHero, Container } from "~/layouts";
import {
  HeroContentContainer,
  HeroContentHeadingContainer,
  HeroContentSubHeadingContainer,
  ButtonWrapper,
} from "./Styles";

interface HeroProps {
  disable: boolean;
  buttonHandler: () => void;
}

export default function Hero({ disable, buttonHandler }: HeroProps) {
  return (
    <SectionHero>
      <HeroContentContainer>
        <Container>
          <HeroContentHeadingContainer>
            <h1>The ToDo App</h1>
          </HeroContentHeadingContainer>
          <HeroContentSubHeadingContainer>
            <h2>
              Always forget your task? Try our ToDo app to list your important
              tasks.
            </h2>
          </HeroContentSubHeadingContainer>
          <ButtonWrapper>
            <Button onClick={buttonHandler} disabled={disable}>
              Connect Wallet
            </Button>
          </ButtonWrapper>
        </Container>
      </HeroContentContainer>
    </SectionHero>
  );
}
