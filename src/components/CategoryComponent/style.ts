import styled from "styled-components/native";

export const Container = styled.View`
  height: 341px;
  margin-bottom: 16px;
  margin-top: 16px;
`;

export const ContainerRow = styled.View`
  height: 44px;
  width: 390px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CategoryTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.EXTRA_BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.COLORS.BLACK_900};
  margin-left: 16px;
`;

export const ViewAll = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  color: ${({ theme }) => theme.COLORS.BLACK_900};
  margin-right: 16px;
`;
