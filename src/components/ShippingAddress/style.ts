import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Title = styled.Text`
  text-align: left;
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
