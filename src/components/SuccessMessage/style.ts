import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  width: 251px;
  min-height: 102px;
  max-height: 350px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
`;

export const Spacer = styled.View`
  height: 71px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.BLACK_900};
  margin-bottom: 12px;
`;

export const SubTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.BLACK_900};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  text-align: center;
`;

export const Image = styled.Image`
  width: 100%;
  margin-bottom: 16px;
`;
