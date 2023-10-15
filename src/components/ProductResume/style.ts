import styled from "styled-components/native";

import { Plus, Minus } from "phosphor-react-native";

export const Container = styled.TouchableOpacity`
  width: 150px;
  height: auto;
`;

export const ProductImage = styled.Image`
  width: 150px;
  height: 184px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const ProductDetails = styled.View`
  width: 100%;
  height: auto;
  margin-top: 8px;
`;

export const ProductName = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  margin-bottom: 4px;
`;

export const ProductDescription = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.BLACK_900};
  margin-bottom: 6px;
`;

export const ProductPrice = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.EXTRA_BOLD};
  color: ${({ theme }) => theme.COLORS.RED_500};
`;

export const ContainerCount = styled.View`
  flex-direction: row;
  width: 150px;
  height: 21px;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonMinus = styled.TouchableOpacity`
  width: 51.5px;
  height: 21px;
  border-top-left-radius: 12px;
  background-color: ${({ theme }) => theme.COLORS.RED_500};
  justify-content: center;
  align-items: center;
`;

export const ButtonPlus = styled.TouchableOpacity`
  width: 51.5px;
  height: 21px;
  border-top-right-radius: 12px;
  background-color: ${({ theme }) => theme.COLORS.RED_500};
  justify-content: center;
  align-items: center;
`;

export const CountIndicator = styled.Text`
  width: 47px;
  height: 21px;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_500};
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
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
