import { CustomInput } from "@components/Input";
import {
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
import { BackgroundAuth } from "@components/BackgroundAuth";

import { useNavigation } from "@react-navigation/native";
import { StackProps } from "@routes/stack.routes";

export function Login() {
  const navigation = useNavigation<StackProps>();

  function handleNavigateToSignUp() {
    navigation.navigate("signUp");
  }

  return (
    <BackgroundAuth source={require("@assets/images/background.png")}>
      <Container>
        <ContentContainer>
          <LogoContainer>
            <LogoImage width={263} />
          </LogoContainer>

          <InputContainer>
            <CustomInput label="Email" />
            <CustomInput label="Password" />
          </InputContainer>

          <ButtonContainer>
            <CustomButton title="LOGIN" width={343} height={48} />
          </ButtonContainer>

          <ButtonTextContainer>
            <TouchableText onPress={() => handleNavigateToSignUp()}>
              Not have an account yet? Sign up
            </TouchableText>
            <TouchableText>I forgot my password</TouchableText>
            <TouchableText>I don't want to log in</TouchableText>
          </ButtonTextContainer>
        </ContentContainer>
      </Container>
    </BackgroundAuth>
  );
}
