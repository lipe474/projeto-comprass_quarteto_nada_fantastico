import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const ContainerTop = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.COLORS.BLACK_900};
  font-family: ${({ theme }) => theme.FONT_FAMILY.EXTRA_BOLD};
  margin-top: 64px;
  margin-bottom: 16px;
  align-items: center;
  justify-content: center;
`;
export const ImageBackground = styled.Image`
align-items: center;
justify-content: center;
`;

export const Name = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.BLACK_900};
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
  margin-top: 64px;
  margin-bottom: 16px;
  align-items: center;
  justify-content: center;

`;
export const Email = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
  margin-top: 64px;
  margin-bottom: 16px;
  align-items: center;
  justify-content: center;
`;
export const ContainerMiddle = styled.Text`
align-items: center;
justify-content: flex-start;
`
export const Informations = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.BLACK_900};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-top: 64px;
  margin-bottom: 16px;
`;


