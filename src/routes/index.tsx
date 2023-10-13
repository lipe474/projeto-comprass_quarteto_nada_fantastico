import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stack.routes";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components/native";
import { Cart } from "@screens/Cart";
import { TabRoutes } from "./tab.routes";

export function Routes() {
  const { COLORS } = useTheme();
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.BLACK_800} barStyle="light-content" />
      <TabRoutes />
    </NavigationContainer>
  );
}
