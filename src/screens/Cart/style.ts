import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const ContentContainer = styled(SafeAreaView)`
  flex: 1;
  width: 343px;
  margin-right: auto;
  margin-left: auto;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  color: ${({ theme }) => theme.COLORS.BLACK_900};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-top: 64px;
  margin-bottom: 16px;
`;

export const FooterContainer = styled.View`
  height: 94px;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 24px;
`;

export const FooterTextContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 343px;
`;

export const FooterText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const FooterTextPrice = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XMD}px;
  color: ${({ theme }) => theme.COLORS.BLACK_900};
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
`;
