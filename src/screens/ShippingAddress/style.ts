import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CaretLeft } from "phosphor-react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const HeaderContainer = styled.View`
  width: 100%;
  height: 44px;
  justify-content: center;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_BORDER};
`;

export const HeaderTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XMD}px;
  color: ${({ theme }) => theme.COLORS.BLACK_900};
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
  text-align: center;
`;

export const BackButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 8px;
  top: 8px;
  justify-content: flex-start;
  align-items: center;
`;

export const ContentContainer = styled.View`
  width: 343px;
  height: 384px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  width: 343px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 12px;
  justify-content: flex-end;
  align-items: center;
`;

export const ErrorText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.RED_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  top: -8px;
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: theme.FONT_SIZE.LG,
  color: theme.COLORS.BLACK_900,
  weight: "bold"
}))`
  left: -6px;
  bottom: -3px;
`;
