import { StatusBar } from "react-native";
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  OpenSans_800ExtraBold,
} from "@expo-google-fonts/open-sans";

import theme from "./src/theme";

import { Routes } from "@routes/index";
import { Loading } from "@components/Loading";
import { ThemeProvider } from "styled-components/native";
import "./src/utils/translation/i18n";
import { AuthContextProvider } from "@contexts/AuthContext";

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_800ExtraBold,
  });

  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <StatusBar barStyle="default" translucent />
        {fontsLoaded ? <Routes /> : <Loading />}
      </AuthContextProvider>
    </ThemeProvider>
  );
}
