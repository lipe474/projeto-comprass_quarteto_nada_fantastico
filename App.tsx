import { StatusBar } from "react-native";

import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  OpenSans_800ExtraBold,
} from "@expo-google-fonts/open-sans";

import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";
import BigBanner from "@components/BigBanner";
import { Routes } from "@routes/index";
import { Loading } from "@components/Loading";
import { Home } from "@screens/Home";
import CardModal from "@components/CardModal";
import Checkout from "@screens/Checkout";
import { ProductList } from "@components/ProductList";

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_800ExtraBold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="transparent" translucent />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
