import React from "react";
import { Container, Title } from "./style";
import { TouchableOpacityProps, ActivityIndicator } from "react-native";
import { useTheme } from "styled-components/native";

type Props = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
  width?: number;
  height?: number;
  isDisabled?: boolean;
};
export function CustomButton({
  title,
  width,
  height,
  isLoading = false,
  isDisabled,
  ...rest
}: Props) {
  const { COLORS } = useTheme();

  return (
    <>
      <Container
        style={{
          height: height,
          width: width,
          backgroundColor: isDisabled ? COLORS.GRAY_900 : COLORS.RED_500,
          opacity: isLoading ? 0.5 : 1
        }}
        disabled={isLoading || isDisabled}
        {...rest}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color={COLORS.GRAY_900} />
        ) : (
          <Title>{title}</Title>
        )}
      </Container>
    </>
  );
}