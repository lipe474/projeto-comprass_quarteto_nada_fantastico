import { Check, X } from "phosphor-react-native";
import styled from "styled-components/native";
import { Hoshi } from "react-native-textinput-effects";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const InputContainer = styled(Hoshi).attrs(({ theme }) => ({
  borderHeight: 0,
  animationDuration: 700,
  inputPadding: 16,
  maxWidth: "80%"
}))`
  flex: 1;

  min-height: 64px;
  max-height: 64px;

  border-color: ${({ theme }) => theme.COLORS.WHITE};

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  max-width: 100%;

  border-radius: 12px;

  elevation: 1;
`;

export const HidePasswordButton = styled.TouchableOpacity`
  position: absolute;
  right: 16px;
`;

export const SuccessIcon = styled(Check).attrs(({ theme }) => ({
  size: theme.FONT_SIZE.LG,
  color: theme.COLORS.GREEN,
  weight: "bold"
}))`
  position: absolute;
  right: 20px;
`;

export const ErrorIcon = styled(X).attrs(({ theme }) => ({
  size: theme.FONT_SIZE.XMD,
  color: theme.COLORS.RED_500,
  weight: "bold"
}))`
  position: absolute;
  right: 20px;
`;

export const IconLoading = styled.ActivityIndicator.attrs(({ theme }) => ({
  size: theme.FONT_SIZE.XL,
  color: theme.COLORS.RED_200
}))`
  position: absolute;
  right: 20px;
`;
