import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BLACK_900};
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ButtonContainer = styled.View`
  position: absolute;
  z-index: 1;
  top: -10px;
  right: 16px;
`;

export const ContainerProfile = styled.View`
  height: 22px;
  position: absolute;
  z-index: 1;
  top: 8%;
  left: 16px;
  padding-right: 13px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  flex-direction: row;
  align-items: center;
  gap: 4px;
  padding-left: 1px;
  border-radius: 12px;
  elevation: 10;
`;

export const ProfileImage = styled.Image`
  width: 22px;
  height: 22px;
  border-radius: 11px;
`;

export const Name = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.BLACK_900};
`;
