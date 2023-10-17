import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.View`
  position: absolute;
  z-index: 1;
  top: 16px;
  right: 16px;
`;
