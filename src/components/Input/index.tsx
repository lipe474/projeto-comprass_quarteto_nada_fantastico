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
  HidePasswordButton
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
    isPasswordField?: boolean;
    isDisabled?: boolean;
    border?: boolean;
  };

export function CustomInput({
  label,
  showIcon,
  onChangeText,
  value,
  errorMessage,
  formSubmitted,
  isSearch,
  isPasswordField,
  isDisabled,
  border,
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
    fontWeight: "400",
    bottom: -2
  };

  return (
    <>
      <Container>
        <InputContainer
          secureTextEntry={isPasswordField ? isPasswordVisible : false}
          label={label}
          inputStyle={inputStyle}
          labelStyle={labelStyle}
          style={{
            borderColor: errorMessage
              ? COLORS.RED_200
              : isDisabled
              ? COLORS.GRAY_100
              : formSubmitted &&
                !errorMessage &&
                hasValue &&
                showIcon &&
                !isSearch
              ? COLORS.GREEN
              : border
              ? COLORS.GRAY_100
              : undefined,
            backgroundColor: isDisabled ? COLORS.GRAY_100 : COLORS.WHITE,
            borderWidth: border ? 1 : 2,
            borderBottomWidth: border ? 1 : 2
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChangeText={onChangeText}
          value={value}
          editable={!isDisabled}
          {...rest}
        />
        {isSearch && showIcon ? (
          <IconLoading accessibilityHint="loading-icon" />
        ) : (
          (formSubmitted && !errorMessage && hasValue && showIcon && (
            <SuccessIcon />
          )) ||
          (errorMessage && showIcon && <ErrorIcon />)
        )}

        {isPasswordField && !isDisabled && (
          <HidePasswordButton onPress={togglePasswordVisibility}>
            {isPasswordVisible ? (
              <EyeOffSVG width={25} accessibilityHint="eye-closed-icon" />
            ) : (
              <EyeSVG width={25} />
            )}
          </HidePasswordButton>
        )}
      </Container>
    </>
  );
}
