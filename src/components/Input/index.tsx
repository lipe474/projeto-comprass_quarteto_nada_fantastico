import React, { useState } from "react";
import { StyleProp, TextInputProps, TextStyle } from "react-native";
import { useTheme } from "styled-components/native";

import { HoshiProps } from "react-native-textinput-effects";

import {
  Container,
  SuccessIcon,
  InputContainer,
  ErrorIcon,
  IconLoading,
  HidePasswordButton,
  HidePasswordIcon,
  ShowPasswordIcon
} from "./style";

import EyeSVG from "@assets/icons/eye.svg";
import EyeOffSVG from "@assets/icons/eye-closed.svg";

type Props = TextInputProps &
  HoshiProps & {
    label: string;
    showIcon?: boolean;
    errorMessage?: string | null;
    formSubmitted?: boolean;
    isSearch?: boolean;
    isEmailField?: boolean;
    isPasswordField?: boolean;
  };

export function CustomInput({
  label,
  showIcon,
  onChangeText,
  value,
  errorMessage,
  formSubmitted,
  isSearch,
  isEmailField,
  isPasswordField,
  ...rest
}: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setPasswordVisibility] = useState(true);

  const { COLORS, FONT_SIZE, FONT_FAMILY } = useTheme();

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };

  const hasValue = value && value.trim() !== "";

  const labelStyle = {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: isFocused || hasValue ? FONT_SIZE.XS : FONT_SIZE.SM,
    top: isFocused || hasValue ? 10 : -4,
    color: COLORS.GRAY_500
  };

  const inputStyle: StyleProp<TextStyle> = {
    color: COLORS.BLACK_900,
    fontSize: FONT_SIZE.SM,
    fontFamily: FONT_FAMILY.REGULAR,
    fontWeight: "600",
    bottom: -2
  };

  return (
    <>
      <Container>
        <InputContainer
          secureTextEntry={isPasswordVisible}
          label={label}
          inputStyle={inputStyle}
          labelStyle={labelStyle}
          style={{
            borderColor: errorMessage ? COLORS.RED_200 : undefined
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChangeText={onChangeText}
          value={value}
          {...rest}
        />
        {isSearch && isEmailField ? (
          <IconLoading />
        ) : (
          (formSubmitted &&
            !errorMessage &&
            hasValue &&
            showIcon &&
            isEmailField && <SuccessIcon />) ||
          (errorMessage && showIcon && isEmailField && <ErrorIcon />)
        )}

        {isPasswordField && (
          <HidePasswordButton onPress={togglePasswordVisibility}>
            {isPasswordVisible ? (
              <EyeOffSVG width={25} />
            ) : (
              <EyeSVG width={25} />
            )}
          </HidePasswordButton>
        )}
      </Container>
    </>
  );
}
