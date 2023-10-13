import styled from "styled-components/native";

import ImageLogoSvg from "@assets/icons/logo.svg";
import CartSvg from "@assets/icons/cart.svg";

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  position: relative;
  margin-top: 28px;
`;

export const ModalContainer = styled.Modal`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding-top: 16px;
`;

export const SubmitButton = styled.TouchableOpacity`
  align-self: flex-end;
  padding-top: 26px;
  right: 26px;
`;

export const ImageBG = styled.ImageBackground`
  width: 420px;
  height: 420px;
  align-items: flex-start;
  position: absolute;
`;

export const ImageLogo = styled(ImageLogoSvg)`
  flex: 1;
  align-self: center;
  padding-top: 140px;
`;

export const SecondContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
  left: 20px;
`;

export const ImageDetail = styled(CartSvg)`
  left: 20px;
`;
