import { BackgroundAuth } from "@components/BackgroundAuth";
import { ButtonContainer, Container, ContentContainer } from "./style";
import { HeaderAuth } from "@components/HeaderAuth";
import { CustomInput } from "@components/Input";
import { CustomButton } from "@components/Button";

export function SignUp() {
  return (
    <BackgroundAuth source={require("@assets/images/background.png")}>
      <Container>
        <HeaderAuth showBackButton title="Sign Up">
          Choose a really cool name that only contains spaces as special
          characters. Oh, and your password must have more than 4 digits! :)
        </HeaderAuth>

        <ContentContainer>
          <CustomInput label="Name" />
          <CustomInput label="Email" />
          <CustomInput label="Password" />
          <CustomInput label="Confirm Password" />
        </ContentContainer>

        <ButtonContainer>
          <CustomButton title="SIGN UP" width={343} height={48} />
        </ButtonContainer>
      </Container>
    </BackgroundAuth>
  );
}
