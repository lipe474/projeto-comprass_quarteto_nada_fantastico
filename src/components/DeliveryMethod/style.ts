import styled from "styled-components/native";

export const Container = styled.View`
  align-itens: center;
  justify-content: center;
`;

export const Content = styled.View``;

export const TitleText = styled.Text`
  left: 32px;
  margin-top: 6px;
  margin-bottom: 16px;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
  color: ${({ theme }) => theme.COLORS.BLACK_900};
`;

export const Title = styled.Text`
  margin-top: 6px;
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const ScrollBar = styled.View`
  width: 80px;
  height: 4px;
  background-color: ${({ theme }) => theme.COLORS.RED_500};
`;
