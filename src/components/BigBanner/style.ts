import styled from "styled-components/native";
import { useTheme } from "styled-components/native";

import ImageLogoSvg from "@assets/Comprass-logo.svg";
import CartSvg from "@assets/cart.svg";

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  position: relative;
  margin-top: 28px;
`;

export const ImageBG = styled.ImageBackground`
  width: 420px;
  height: 420px;
  align-items: flex-start;
  position: absolute;
`;

export const SubmitButton = styled.TouchableOpacity`
  flex: 1;
  align-self: flex-end;
  padding-top: 26px;
  right: 26px;
`;

export const ImageLogo = styled(ImageLogoSvg)`
  flex: 1;
  align-self: center;
  position: relative;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
  color: ${({ theme }) => theme.COLOR.WHITE};
  left: 16px;
`;

export const SecondContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const ImageDetail = styled(CartSvg)`
  left: 16px;
`;

export const InputResearch = styled.TextInput`
  width: 360px;
  height: 48px;
  padding: 16px;
  border-radius: 18px;
  border-width: 6px;
  border-style: solid;
  border-color: red;
  align-self: center;
  background-color: #fff;
  margin-top: 80px;
  position: absolute;
`;

//////////////////////// FILTER //////////////////////////

export const FilterContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-self: center;
  width: 380px;
  height: 320px;
`;

export const FilterTitle = styled.Text``;

export const Filter = styled.FlatList`
  background-color: #fff;
  border-radius: 8px;
`;

export const ItensContainer = styled.View`
  padding: 16px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const ItensSecondContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const ImageProduct = styled.Image`
  width: 60px;
  height: 48px;
`;

export const Product = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLOR.BLACK_800};
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLOR.BLACK_900};
`;

export const Price = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.EXTRA_BOLD};
  color: ${({ theme }) => theme.COLOR.RED_500};
`;
