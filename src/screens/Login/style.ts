import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BLACK_800};
`;

export const ImageBackground = styled.View`
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  z-index: -1;
  position: absolute;
  top: ${windowHeight / 2 - 375 / 2}px;
`;

export const Image = styled.Image`
  width: 100%;
`;

export const ContentContainer = styled(SafeAreaView)`
  flex: 1;
  width: 343px;
  margin-right: auto;
  margin-left: auto;
`;

export const LogoContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 56px;
  margin-right: 56px;
  margin-left: 56px;
`;

export const InputContainer = styled.View`
  align-items: center;
  margin-top: 32px;
`;

export const ButtonContainer = styled.View`
  align-items: center;
  margin-top: 48px;
`;

export const ButtonTextContainer = styled.View`
  align-items: center;
  justify-content: space-between;
  height: 128px;
  margin-top: 31px;
`;
