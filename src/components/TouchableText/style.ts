import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  height: auto;
  width: 200px;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: center;
`;
