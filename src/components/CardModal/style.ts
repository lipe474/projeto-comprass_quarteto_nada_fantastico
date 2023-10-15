import styled from "styled-components/native";
import { TextInputMask } from "react-native-masked-text";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const Content = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  height: 526px;
  margin-top: 16px;
  border-top-left-radius: 34px;
  border-top-right-radius: 34px;
  overflow: hidden;
  elevation: 1;
  box-shadow: 0px -5px 5px rgba(0, 0, 0, 0.5);
`;

export const ContentAdd = styled.View`
  justify-content: center;
  align-self: center;
  margin-top: 16px;
`;

export const ContentInput = styled.View`
  justify-content: center;
  align-self: center;
  width: 343px;
`;

export const Close = styled.TouchableOpacity`
  flex: 1;
  zindex: 9px;
`;

export const Detail = styled.View`
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 38px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 8px;
  elevation: 2;
`;

export const Method = styled.Text`
  align-self: center;
  margin-top: 32px;
  margin-bottom: 32px;
  font-size: ${({ theme }) => theme.FONT_SIZE.XMD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.BLACK_900};
`;

export const MaskInput = styled(TextInputMask)`
  justify-content: center;
  align-self: center;
  width: 343px;
  height: 64px;
  margin-bottom: 16px;
  padding: 20px;
  border-width: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_100};
  color: ${({ theme }) => theme.COLORS.BLACK_900};
`;

export const ErrorText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.RED_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  top: -8px;
`;
