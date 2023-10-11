import styled from "styled-components/native";
import { CaretLeft } from "phosphor-react-native";

export const Container = styled.View`
  flex-direction: column;
  align-items: flex-start;
  height: auto;
  width: 343px;
  margin-right: auto;
  margin-left: auto;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.EXTRA_BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: center;
  margin-top: 26px;
`;

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: left;
  margin-top: 16px;
`;

export const BackButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  justify-content: flex-start;
  flex-direction: row;
  align-items: flex-end;
`;

export const Spacer = styled.View`
  height: 40px;
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: theme.FONT_SIZE.XL,
  color: theme.COLORS.WHITE,
  weight: "bold"
}))`
  left: -6px;
  bottom: -3px;
`;
