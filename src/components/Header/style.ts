import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-left: 15px;
  margin-bottom: 15px;
  width: 100%;
  max-heigth: 60px;
`;

export const Title = styled.Text`
  width: 70%;
  font-size: 22px;
  margin-left: 12px;
  text-align: center;
  align-self: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.XMD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.BLACK_900};
`;

export const ButtonMenu = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;
