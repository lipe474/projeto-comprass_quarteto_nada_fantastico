import { BackgroundAuth } from "@components/BackgroundAuth";
import { HeaderAuth } from "@components/HeaderAuth";
import {
  ButtonContainer,
  Container,
  ContentContainer,
  ErrorText
} from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import {
  FormCheckEmailDTO,
  FormForgotPasswordDTO
} from "@dtos/FormForgotPasswordDTO";
import {
  checkEmailSchema,
  forgotPasswordSchema
} from "@utils/validation/schemaForgotPassword";
import { CustomInput } from "@components/Input";
import { CustomButton } from "@components/Button";
import { useState } from "react";
import Toast from "react-native-root-toast";
import { useTheme } from "styled-components/native";
import { StackProps } from "@routes/stack.routes";
import { GetAllUsers, UpdatePassword } from "@requests/index";
import { UserDTO } from "@dtos/UserDTO";

export function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingEmail, setIsLoadingEmail] = useState(false);
  const [checkEmailValue, setCheckEmailValue] = useState(true);
  const [userFound, setUserFound] = useState<number | undefined>(undefined);

  const { COLORS } = useTheme();
  const navigation = useNavigation<StackProps>();

  const formPasswords = useForm<FormForgotPasswordDTO>({
    resolver: yupResolver(forgotPasswordSchema)
  });

  const formEmail = useForm<FormCheckEmailDTO>({
    resolver: yupResolver(checkEmailSchema)
  });

  async function handleCheckEmail({ email }: FormCheckEmailDTO) {
    try {
      setIsLoadingEmail(true);

      const response = await GetAllUsers();

      const user = response
        .map((user: UserDTO) => (user.email === email ? user : null))
        .filter((user: UserDTO | null) => user !== null)[0];

      if (!user) {
        formEmail.setError("email", {
          type: "manual",
          message: "This email doesn’t exist"
        });
        formPasswords.clearErrors("password");
        formPasswords.clearErrors("password_confirm");
        formPasswords.resetField("password");
        formPasswords.resetField("password_confirm");
        setIsLoadingEmail(false);
        return;
      }

      setIsLoadingEmail(false);
      setUserFound(user.id);
    } catch (error: any) {
      let message = error.message ?? "Something happened, try again later";

      formEmail.setError("root", {
        type: "manual",
        message
      });

      setIsLoadingEmail(false);
    } finally {
      setIsLoadingEmail(false);
    }
  }

  async function handleForgotPassword({ password }: FormForgotPasswordDTO) {
    try {
      setIsLoading(true);

      await UpdatePassword(userFound!, password);

      Toast.show("Password was changed successfully.", {
        duration: 3000,
        position: 40,
        backgroundColor: COLORS.GREEN,
        textColor: COLORS.WHITE
      });

      navigation.navigate("login");

      setIsLoading(false);
    } catch (error: any) {
      let message = error.message ?? "Something happened, try again later";

      formPasswords.setError("root", {
        type: "manual",
        message
      });

      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  function handleNavigateToLogin() {
    navigation.navigate("login");
  }

  return (
    <BackgroundAuth source={require("@assets/images/background.png")}>
      <Container>
        <HeaderAuth
          showBackButton
          title="Forgot Password"
          onPress={handleNavigateToLogin}
        >
          Enter your email and let us see if it exists for you to change your
          password :)
        </HeaderAuth>

        <ContentContainer>
          <Controller
            control={formEmail.control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <CustomInput
                label="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                isSearch={isLoadingEmail}
                isEmailField
                formSubmitted={formEmail.formState.isSubmitted}
                showIcon
                onChangeText={(text) => {
                  onChange(text);
                  setCheckEmailValue(!text);
                }}
                value={value}
                errorMessage={formEmail.formState.errors.email?.message}
              />
            )}
          />

          <Controller
            control={formPasswords.control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <CustomInput
                label="New Password"
                isPasswordField
                isDisabled={!formEmail.formState.isSubmitSuccessful}
                onChangeText={onChange}
                value={value}
                errorMessage={formPasswords.formState.errors.password?.message}
              />
            )}
          />

          <Controller
            control={formPasswords.control}
            name="password_confirm"
            render={({ field: { onChange, value } }) => (
              <CustomInput
                label="Confirm New Password"
                isPasswordField
                isDisabled={!formEmail.formState.isSubmitSuccessful}
                onChangeText={onChange}
                value={value}
                returnKeyType="send"
                errorMessage={
                  formPasswords.formState.errors.password_confirm?.message
                }
              />
            )}
          />
          {
            <ErrorText>
              {formEmail.formState.errors.email?.message ??
                formPasswords.formState.errors.password?.message ??
                formPasswords.formState.errors.password_confirm?.message}
            </ErrorText>
          }
        </ContentContainer>

        <ButtonContainer>
          <CustomButton
            title="SEARCH"
            width={343}
            height={48}
            onPress={formEmail.handleSubmit(handleCheckEmail)}
            isDisabled={checkEmailValue || isLoadingEmail}
          />

          <CustomButton
            title="CONFIRM"
            width={343}
            height={48}
            onPress={formPasswords.handleSubmit(handleForgotPassword)}
            isLoading={isLoading}
            isDisabled={!formEmail.formState.isSubmitSuccessful}
          />
        </ButtonContainer>
      </Container>
    </BackgroundAuth>
  );
}
