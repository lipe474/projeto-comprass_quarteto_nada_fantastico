import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ContentContainer = styled.View`
  height: 219px;
`;

export const ContentContainerLogin = styled.View`
  height: 219px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  color: ${({ theme }) => theme.COLORS.BLACK_900};
  font-family: ${({ theme }) => theme.FONT_FAMILY.EXTRA_BOLD};
  margin-top: 64px;
  margin-left: 16px;
  margin-bottom: 16px;
`;

export const Image = styled.Image`
  align-items: center;
  justify-content: center;
  border-radius: 71px;
  align-self: center;
  width: 142px;
  height: 142px;
`;

export const Name = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.BLACK_900};
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
  margin-bottom: 8px;
`;
export const Email = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
  left: 2px;
`;

export const Message = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.BLACK_900};
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
  align-self: center;
  margin-bottom: 16px;
`;

export const ContainerNameEmail = styled.View`
  align-items: flex-start;
  justify-content: center;
  align-self: center;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const TextEdit = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.BLACK_900};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Informations = styled.TouchableOpacity`
  height: 73px;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  border-bottom-width: 1px;
  justify-content: center;
  border-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const ViewModal = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const TitleModal = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XMD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.BLACK_900};
  margin-top: 16px;
  margin-bottom: 32px;
  align-self: center;
`;

export const ContentModal = styled.View`
  width: 100%;
  height: 188px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-top-left-radius: 34px;
  border-top-right-radius: 34px;
  align-items: center;
  justify-content: flex-start;
`;

export const Option = styled.TouchableOpacity`
  width: 100%;
  height: 48px;
  align-items: center;
  justify-content: center;
  padding-left: 16px;
`;

export const ModalMessage = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
  align-self: flex-start;
`;
