import { StatusBar, StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  OpenSans_800ExtraBold
} from "@expo-google-fonts/open-sans";
import { ThemeProvider } from "styled-components/native";

import { Routes } from "@routes/index";
import theme from "./src/theme";

import BigBanner from "./src/components/BigBanner/index";

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_800ExtraBold
  });

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
