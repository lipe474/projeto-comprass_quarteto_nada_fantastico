import { CustomInput } from "@components/Input";
import {
  LogoContainer,
  InputContainer,
  ButtonContainer,
  ButtonTextContainer,
  ContentContainer,
  ErrorText,
  Container,
  ImageBackground
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
import { GetUserBySession, LoginUser } from "@requests/index";
import { useTheme } from "styled-components/native";
import Toast from "react-native-root-toast";
import { SetErrorInputs } from "@utils/ErrorInAllInputs";
import { TabProps } from "@routes/tab.routes";
import { useTranslation } from "react-i18next";
import { useUserStore } from "@contexts/UserStore";
import { storageUserSave } from "../../storage/storageUser";
import { storageAuthTokenSave } from "../../storage/storageAuthToken";
import { useAuth } from "@hooks/useAuth";

export function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();

  const user = useUserStore();

  const { COLORS } = useTheme();
  const stackNavigation = useNavigation<StackProps>();
  const tabNavigation = useNavigation<TabProps>();
  const { t, i18n } = useTranslation();

  const {
    control,
    handleSubmit,
    setError,
    setValue,
    resetField,
    formState: { errors }
  } = useForm<FormLoginDTO>({
    resolver: yupResolver(loginSchema)
  });

  const sucessMessage = t("User successfully logged in.");

  async function handleLogin({ email, password }: LoginUserDTO) {
    try {
      setIsLoading(true);

      await login(email, password);

      Toast.show(sucessMessage, {
        duration: 3000,
        position: 40,
        backgroundColor: COLORS.GREEN,
        textColor: COLORS.WHITE
      });

      tabNavigation.navigate("home");
      resetField("email");
      resetField("password");

      setIsLoading(false);
    } catch (error: any) {
      let { message } =
        error.message ?? t("Something happened, try again later");

      if (message === "Unauthorized") {
        message = t("Your email or password is incorrect");

        SetErrorInputs("manual", message, setError, ["email", "password"]);
        setValue("email", "");
        setValue("password", "");
      }

      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  function handleNavigateToSignUp() {
    stackNavigation.navigate("signUp");
    resetField("email");
    resetField("password");
  }

  function handleNavigateToForgotPassword() {
    stackNavigation.navigate("forgotPassword");
    resetField("email");
    resetField("password");
  }

  function handleNavigateToHomePage() {
    tabNavigation.navigate("home");
    resetField("email");
    resetField("password");
  }

  return (
    <Container>
      <ImageBackground>
        <BackgroundAuth source={require("@assets/images/background.png")} />
      </ImageBackground>
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
                label={t("Password")}
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
            title={t("LOGIN")}
            width={343}
            height={48}
            onPress={() => {
              if (errors.email?.message ?? errors.password?.message) {
                setValue("email", "");
                setValue("password", "");
              } else {
                handleSubmit(handleLogin)();
              }
            }}
            isLoading={isLoading}
          />
        </ButtonContainer>

        <ButtonTextContainer style={{ display: isLoading ? "none" : "flex" }}>
          <TouchableText onPress={handleNavigateToSignUp}>
            {t("Not have an account yet?")} {t("Sign up")}
          </TouchableText>
          <TouchableText onPress={handleNavigateToForgotPassword}>
            {t("I forgot my password")}
          </TouchableText>
          <TouchableText onPress={handleNavigateToHomePage}>
            {t("I don't want to log in")}
          </TouchableText>
        </ButtonTextContainer>
      </ContentContainer>
    </Container>
  );
}
