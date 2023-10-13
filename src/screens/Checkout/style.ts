import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
`;

export const Content = styled.View`
  flex-direction: row;
  margin-top: 32px;
`;

export const ContentTitle = styled.View`
  left: 16px;
`;

export const ContentPrice = styled.View`
  text-align: flex-end;
  align-self: flex-end;
`;

export const Title = styled.Text`
  margin-bottom: 12px;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const Summary = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_500};
`;
