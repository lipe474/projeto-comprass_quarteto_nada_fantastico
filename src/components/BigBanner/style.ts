import styled from "styled-components/native";

import ImageLogoSvg from "@assets/icons/logo.svg";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 400px;
`;

export const ImageBG = styled.ImageBackground`
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

export const ImageLogo = styled(ImageLogoSvg)`
  flex: 1;
  align-self: center;
  padding-top: 140px;
`;

export const SecondContainer = styled.View`
  flex: 1;
  margin-left: 16px;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
