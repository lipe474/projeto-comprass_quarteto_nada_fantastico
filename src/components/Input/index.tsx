import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

import { HoshiProps } from "react-native-textinput-effects";

import {
  Container,
  SuccessIcon,
  InputContainer,
  ErrorText,
  ErrorIcon,
  IconLoading
} from "./style";

type Props = TextInputProps &
  HoshiProps & {
    label: string;
    showIcon?: boolean;
    errorMessage?: string | null;
    formSubmitted?: boolean;
    isSearch?: boolean;
  };

export function CustomInput({
  label,
  showIcon,
  onChangeText,
  value,
  errorMessage,
  formSubmitted,
  isSearch,
  ...rest
}: Props) {
  const { COLORS, FONT_SIZE } = useTheme();

  const [isFocused, setIsFocused] = useState(false);

  const hasValue = value && value.trim() !== "";

  const labelStyle = {
    fontSize: isFocused || hasValue ? FONT_SIZE.XS : FONT_SIZE.SM,
    top: isFocused || hasValue ? 10 : -2,
    color: COLORS.GRAY_500
  };

  return (
    <>
      <Container>
        <InputContainer
          label={label}
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
        {isSearch ? (
          <IconLoading />
        ) : (
          (formSubmitted && !errorMessage && hasValue && showIcon && (
            <SuccessIcon />
          )) ||
          (errorMessage && showIcon && <ErrorIcon />)
        )}
      </Container>
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </>
  );
}
