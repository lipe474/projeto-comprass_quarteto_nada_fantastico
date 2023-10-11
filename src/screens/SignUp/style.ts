import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const ContentContainer = styled.View`
  width: 343px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 32px;
`;

export const ButtonContainer = styled.View`
  align-items: center;
  margin-top: 48px;
`;
