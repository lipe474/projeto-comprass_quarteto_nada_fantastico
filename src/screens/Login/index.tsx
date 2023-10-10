import { CustomInput } from "@components/Input";
import {
  ImageBackground,
  Container,
  LogoContainer,
  InputContainer,
  ButtonContainer,
  ButtonTextContainer,
  ContentContainer
} from "./style";
import LogoImage from "@assets/icons/logo.svg";
import { CustomButton } from "@components/Button";
import { TouchableText } from "@components/TouchableText";
export function Login() {
  return (
    <Container>
      <ImageBackground
        source={require("@assets/images/background.png")}
        resizeMode="contain"
      >
        <ContentContainer>
          <LogoContainer>
            <LogoImage width={263} />
          </LogoContainer>

          <InputContainer>
            <CustomInput label="Email" />
            <CustomInput label="Password" />
          </InputContainer>

          <ButtonContainer>
            <CustomButton title="Entrar" width={343} height={48} />
          </ButtonContainer>

          <ButtonTextContainer>
            <TouchableText>Not have an account yet? Sign up</TouchableText>
            <TouchableText>I forgot my password</TouchableText>
            <TouchableText>I don't want to register</TouchableText>
          </ButtonTextContainer>
        </ContentContainer>
      </ImageBackground>
    </Container>
  );
}
