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
  top: -16px;
  right: 16px;
`;
