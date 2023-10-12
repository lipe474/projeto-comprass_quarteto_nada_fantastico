import styled from "styled-components/native";

export const ActionContainer = styled.SafeAreaView`
  flex: 1;
  margin-top: 60px;
`;

export const ActionSecoudContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 8px;
  width: 370px;
  height: 260px;
  elevation: 5;
  margin-top: 80px;
  align-self: center;
`;

export const ActionButton = styled.TouchableOpacity`
  flex: 1;
  zindex: 9px;
`;

export const InputResearch = styled.TextInput`
  width: 370px;
  height: 48px;
  padding: 16px;
  border-radius: 18px;
  border-width: 6px;
  border-style: solid;
  border-color: red;
  align-self: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  margin-top: 20px;
  position: absolute;
`;

export const InputContainer = styled.View``;

export const FilterContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-self: center;
  width: 380px;
  height: 320px;
`;

export const FilterTitle = styled.Text`
  justify-content: center;
  align-self: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.XXS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const Filter = styled.FlatList``;

export const ItensContainer = styled.View`
  flex: 1;
  width: 370px;
  align-self: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  gap: 10px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const ItensSecondContainer = styled.View`
  flex: 1;
`;

export const PriceSecondContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ImageProduct = styled.Image`
  width: 48px;
  height: 68px;
  border-radius: 4px;
`;

export const Product = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.BLACK_800};
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.BLACK_900};
`;

export const Price = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.EXTRA_BOLD};
  color: ${({ theme }) => theme.COLORS.RED_500};
`;

export const Money = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.EXTRA_BOLD};
  color: ${({ theme }) => theme.COLORS.RED_500};
  left: 4px;
`;
