import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const Content = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  height: 280px;
  margin-top: 16px;
  border-top-left-radius: 34px;
  border-top-right-radius: 34px;
  overflow: hidden;
  elevation: 1;
  box-shadow: 0px -5px 5px rgba(0, 0, 0, 0.5);
`;

export const Close = styled.TouchableOpacity`
  flex: 1;
  zindex: 9px;
`;

export const Detail = styled.View`
  width: 10px;
  height: 1px;
  border-radius: 3px;
  color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const Method = styled.Text`
  align-self: center;
  margin-top: 32px;
  margin-bottom: 32px;
  font-size: ${({ theme }) => theme.FONT_SIZE.XMD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.BLACK_900};
`;

export const Payment = styled.TouchableOpacity`
  width: 100%;
  height: 48px;
  justify-content: center;
  padding-left: 16px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const TitleSelected = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
  color: ${({ theme }) => theme.COLORS.BLACK_900};
`;
