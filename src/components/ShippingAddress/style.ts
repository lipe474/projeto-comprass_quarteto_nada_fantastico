import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  justify-content: center;
  align-itens: center;
  align-self: center;
`;

export const TextTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
  color: ${({ theme }) => theme.COLORS.BLACK_900};
`;

export const TextAddres = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.BLACK_900};
`;

export const PagMethod = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Title = styled.Text`
  text-align: left;
  margin-top: 32px;
  margin-bottom: 16px;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.BLACK_900};
`;

export const ButtonAddress = styled.Pressable`
  width: 348px;
  height: 128px;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const TitleButton = styled.Text`
  margin-top: 8px;
  left: 24px;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const TitleChange = styled.Text`
  text-align: right;
  margin-top: 18px;
  right: 24px;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
  color: ${({ theme }) => theme.COLORS.RED_500};
`;
