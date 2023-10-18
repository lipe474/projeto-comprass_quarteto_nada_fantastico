import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const ContentModal = styled.View`
  width: 243px;
  height: 140px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 34px;
`;

export const TitleModal = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.BLACK_900};
  margin-left: 16px;
  margin-top: 16px;
  margin-bottom: 10px;
  align-self: flex-start;
`;

export const MessageContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-left: 16px;
  height: 100%;
  flex: 1;
`;

export const Message = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.BLACK_900};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  height: 40px;
  width: 120px;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.BLACK_900};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-bottom: 4px;
`;
