import styled from "styled-components/native";

export const Container = styled.View`
  width: 343px;
  height: 104px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 8px;
  flex-direction: row;
`;

export const Image = styled.Image`
  width: 104px;
  height: 104px;
`;

export const ContentContainer = styled.View`
  flex: 1;
  padding: 12px 16px 12px 12px;
  width: 239px;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.BLACK_900};
`;

export const CounterContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CounterButtonsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 109px;
`;

export const CounterButton = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
  color: ${({ theme }) => theme.COLORS.BLACK_900};
  top: -4px;
`;

export const RemoveButton = styled.TouchableOpacity`
  width: 29px;
  height: 28px;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.RED_500};
  position: absolute;
  right: 0;
  top: 0;
`;
