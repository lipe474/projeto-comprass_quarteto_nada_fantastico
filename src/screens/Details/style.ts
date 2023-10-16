import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions } from "react-native";
import { Plus, Minus, CaretLeft } from "phosphor-react-native";

const windowWidth = Dimensions.get("window").width;

export const Container = styled(SafeAreaView)`
  position: relative;
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  justify-content: center;
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

export const ContainerCount = styled.View`
  flex: 1;
  position: absolute;
  z-index: 1;
  bottom: 0;
  flex-direction: row;
  width: ${windowWidth}px;
  padding-top: 28px;
  padding-bottom: 28px;
  padding-left: 36px;
  padding-right: 36px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ButtonMinus = styled.TouchableOpacity`
  width: ${windowWidth * 0.28}px;
  height: 43px;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  background-color: ${({ theme }) => theme.COLORS.RED_500};
  justify-content: center;
  align-items: center;
`;

export const ButtonPlus = styled.TouchableOpacity`
  width: ${windowWidth * 0.28}px;
  height: 43px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: ${({ theme }) => theme.COLORS.RED_500};
  justify-content: center;
  align-items: center;
`;

export const CountIndicator = styled.Text`
  width: ${windowWidth * 0.27}px;
  height: 43px;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_500};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
  text-align: center;
  justify-content: center;
  padding-top: 3px;
`;

export const PlusIcon = styled(Plus).attrs(({ theme }) => ({
  size: theme.FONT_SIZE.LG,
  color: theme.COLORS.WHITE,
  weight: "bold"
}))``;

export const MinusIcon = styled(Minus).attrs(({ theme }) => ({
  size: theme.FONT_SIZE.LG,
  color: theme.COLORS.WHITE,
  weight: "bold"
}))``;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: theme.FONT_SIZE.LG,
  color: theme.COLORS.BLACK_900,
  weight: "bold"
}))`
  left: -6px;
  bottom: -3px;
`;
