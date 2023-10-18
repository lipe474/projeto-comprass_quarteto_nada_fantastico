import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const windowWidth = Dimensions.get("window").width;

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const ContainerAll = styled(SafeAreaView)`
  flex: 1;
  width: 271px;
  gap: 16px;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const TitleNoUser = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
  color: ${({ theme }) => theme.COLORS.BLACK_900};
  margin-top: 32px;
`;

export const Content = styled.View`
  width: ${windowWidth}px;
  padding-left: 17px;
  padding-right: 17px;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 32px;
  flex: 1;
  align-items: center;
`;

export const ContentTitle = styled.View``;

export const ContentPrice = styled.View``;

export const Title = styled.Text`
  text-align: left;
  margin-bottom: 12px;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const TitleValue = styled.Text`
  text-align: right;
  margin-bottom: 12px;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const Summary = styled.Text`
  text-align: left;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const SummaryValue = styled.Text`
  text-align: right;
  font-size: ${({ theme }) => theme.FONT_SIZE.XMD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const ButtonContainer = styled.View`
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  margin-bottom: 12px;
`;
