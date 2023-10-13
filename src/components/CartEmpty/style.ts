import styled from "styled-components/native";

export const ContentContainer = styled.View`
  width: 327px;
  min-height: 100%;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.BLACK_900};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  text-align: center;
  margin-top: 16px;
`;
