import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BLACK_800};
`;

export const ImageBackground = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
  z-index: -1;
  position: absolute;
`;

export const ContentContainer = styled.View`
  width: 343px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 32px;
`;

export const ButtonContainer = styled.View`
  align-items: center;
  margin-top: 48px;
  height: 112px;
  justify-content: space-between;
`;

export const ErrorText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.RED_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  top: -8px;
`;
