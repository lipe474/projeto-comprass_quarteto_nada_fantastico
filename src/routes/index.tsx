import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components/native";
import { StackRoutes } from "./stack.routes";
import { TabRoutes } from "./tab.routes";
import { ShippingAddress } from "@screens/ShippingAddress";

export function Routes() {
  const { COLORS } = useTheme();
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.BLACK_800} barStyle="light-content" />
      <TabRoutes />
    </NavigationContainer>
  );
}
