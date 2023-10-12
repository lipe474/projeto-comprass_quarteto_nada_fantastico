import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
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
