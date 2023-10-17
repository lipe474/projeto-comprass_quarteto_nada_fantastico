import { ImageBackground, LogoContainer } from "./style";
import { ActivityIndicator } from "react-native";

import LogoImage from "@assets/icons/logo.svg";
import { useTheme } from "styled-components/native";

export function Loading() {
  const { COLORS } = useTheme();

  return (
    <ImageBackground
      source={require("@assets/images/background.png")}
      resizeMode="contain"
      accessibilityHint="image-background"
    >
      <LogoContainer>
        <LogoImage width={263} />
      </LogoContainer>
      <ActivityIndicator size={80} color={COLORS.RED_500} />
    </ImageBackground>
  );
}
