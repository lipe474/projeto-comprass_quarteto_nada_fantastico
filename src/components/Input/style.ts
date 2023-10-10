import { Check, X } from "phosphor-react-native";
import styled from "styled-components/native";
import { Hoshi } from "react-native-textinput-effects";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

export const InputContainer = styled(Hoshi).attrs(({ theme }) => ({
  borderHeight: 0,
  inputPadding: 20,
  maxWidth: "80%",
  inputStyle: {
    color: theme.COLORS.BLACK_900,
    fontSize: theme.FONT_SIZE.SM,
    fontFamily: theme.FONT_FAMILY.REGULAR,
    bottom: 1
  }
}))`
  flex: 1;

  min-height: 64px;
  max-height: 64px;

  border-width: 1px;

  border-color: ${({ theme }) => theme.COLORS.WHITE};

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  text-align: left;
  justify-content: flex-start;

  max-width: 100%;

  border-radius: 6px;

  elevation: 1;
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

export const ErrorText = styled.Text`
  color: ${({ theme }) => theme.COLORS.RED_200};
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  margin-bottom: 2px;
  margin-left: 3px;
  bottom: 6px;
  text-align: left;
`;
