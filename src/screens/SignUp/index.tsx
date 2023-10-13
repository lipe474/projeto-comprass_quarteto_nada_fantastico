import { BackgroundAuth } from "@components/BackgroundAuth";
import {
  ButtonContainer,
  Container,
  ContentContainer,
  ErrorText,
  ImageBackground
} from "./style";
import { ScrollView } from "react-native";
import Toast from "react-native-root-toast";
import { HeaderAuth } from "@components/HeaderAuth";
import { CustomInput } from "@components/Input";
import { CustomButton } from "@components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { StackProps } from "@routes/stack.routes";
import { FormCreateUserDTO } from "@dtos/FormCreateUserDTO";
import { signUpSchema } from "@utils/validation/schemaCreateUser";
import { useState } from "react";
import { CreateUser } from "@requests/index";
import { CreateUserDTO } from "@dtos/UserDTO";
import { useTheme } from "styled-components/native";

export function SignUp() {
  const [isLoading, setIsLoading] = useState(false);

  const { COLORS } = useTheme();
  const navigation = useNavigation<StackProps>();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormCreateUserDTO>({
    resolver: yupResolver(signUpSchema)
  });

  async function handleSignUp({ name, email, password }: CreateUserDTO) {
    try {
      setIsLoading(true);

      await CreateUser({ name, email, password });

      Toast.show("User created successfully.", {
        duration: 3000,
        position: 40,
        backgroundColor: COLORS.GREEN,
        textColor: COLORS.WHITE
      });

      navigation.navigate("login");

      setIsLoading(false);
    } catch (error: any) {
      let message = error.message ?? "Unable to create account, try later";

      setError("root", {
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
    <Container>
      <ImageBackground>
        <BackgroundAuth source={require("@assets/images/background.png")} />
      </ImageBackground>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <HeaderAuth
          showBackButton
          title="Sign Up"
          onPress={() => handleNavigateToLogin()}
        >
          Choose a really cool name that only contains spaces as special
          characters. Oh, and your password must have more than 6 digits! :)
        </HeaderAuth>

        <ContentContainer>
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <CustomInput
                label="Name"
                keyboardType="default"
                autoCapitalize="words"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.name?.message}
              />
            )}
          />

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

          <Controller
            control={control}
            name="password_confirm"
            render={({ field: { onChange, value } }) => (
              <CustomInput
                label="Confirm Password"
                isPasswordField
                onChangeText={onChange}
                value={value}
                returnKeyType="send"
                errorMessage={errors.password_confirm?.message}
              />
            )}
          />
        </ContentContainer>
        {
          <ErrorText>
            {errors.name?.message ??
              errors.email?.message ??
              errors.password?.message ??
              errors.password_confirm?.message}
          </ErrorText>
        }

        <ButtonContainer>
          <CustomButton
            title="SIGN UP"
            width={343}
            height={48}
            onPress={handleSubmit(handleSignUp)}
            isLoading={isLoading}
          />
        </ButtonContainer>
      </ScrollView>
    </Container>
  );
}
