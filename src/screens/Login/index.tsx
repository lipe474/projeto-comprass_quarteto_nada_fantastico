import { CustomInput } from "@components/Input";
import {
  Container,
  LogoContainer,
  InputContainer,
  ButtonContainer,
  ButtonTextContainer,
  ContentContainer,
  ErrorText
} from "./style";
import { useState } from "react";

import LogoImage from "@assets/icons/logo.svg";
import { CustomButton } from "@components/Button";
import { TouchableText } from "@components/TouchableText";
import { BackgroundAuth } from "@components/BackgroundAuth";

import { useNavigation } from "@react-navigation/native";
import { StackProps } from "@routes/stack.routes";
import { FormLoginDTO } from "@dtos/FormLoginDTO";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@utils/validation/schemaLogin";
import { LoginUserDTO } from "@dtos/UserDTO";
import { LoginUser } from "@requests/index";
import { useTheme } from "styled-components/native";
import Toast from "react-native-root-toast";
import { SetErrorInputs } from "@utils/ErrorInAllInputs";

export function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const { COLORS } = useTheme();
  const navigation = useNavigation<StackProps>();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormLoginDTO>({
    resolver: yupResolver(loginSchema)
  });

  async function handleLogin({ email, password }: LoginUserDTO) {
    try {
      setIsLoading(true);
      await LoginUser({ email, password });

      Toast.show("User successfully logged in.", {
        duration: 3000,
        position: 40,
        backgroundColor: COLORS.GREEN,
        textColor: COLORS.WHITE
      });

      // navigation.navigate("home");

      setIsLoading(false);
    } catch (error: any) {
      let { message } = error.message ?? "Something happened, try again later";

      if (message === "Unauthorized") {
        message = "Your email or password is incorrect";

        SetErrorInputs("manual", message, setError, ["email", "password"]);
      }

      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  function handleNavigateToSignUp() {
    navigation.navigate("signUp");
  }

  function handleNavigateToForgotPassword() {
    navigation.navigate("forgotPassword");
  }

  return (
    <BackgroundAuth source={require("@assets/images/background.png")}>
      <Container>
        <ContentContainer>
          <LogoContainer>
            <LogoImage width={263} />
          </LogoContainer>

          <InputContainer>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <CustomInput
                  label="Email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.email?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <CustomInput
                  label="Password"
                  isPasswordField
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.password?.message}
                />
              )}
            />
          </InputContainer>
          {
            <ErrorText>
              {errors.email?.message ?? errors.password?.message}
            </ErrorText>
          }

          <ButtonContainer>
            <CustomButton
              title="LOGIN"
              width={343}
              height={48}
              onPress={handleSubmit(handleLogin)}
              isLoading={isLoading}
            />
          </ButtonContainer>

          <ButtonTextContainer>
            <TouchableText onPress={handleNavigateToSignUp}>
              Not have an account yet? Sign up
            </TouchableText>
            <TouchableText onPress={handleNavigateToForgotPassword}>
              I forgot my password
            </TouchableText>
            <TouchableText>I don't want to log in</TouchableText>
          </ButtonTextContainer>
        </ContentContainer>
      </Container>
    </BackgroundAuth>
  );
}
