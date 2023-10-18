import {
  createNativeStackNavigator,
  NativeStackNavigationProp
} from "@react-navigation/native-stack";
import Checkout from "@screens/Checkout";
import { ForgotPassword } from "@screens/ForgotPassword";
import { Login } from "@screens/Login";
import { ShippingAddress } from "@screens/ShippingAddress";
import { SignUp } from "@screens/SignUp";

type StackRoutes = {
  login: undefined;
  signUp: undefined;
  forgotPassword: undefined;
  checkout: undefined;
  address: undefined;
};

export type StackProps = NativeStackNavigationProp<StackRoutes>;

const Stack = createNativeStackNavigator<StackRoutes>();

export function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signUp" component={SignUp} />
      <Stack.Screen name="forgotPassword" component={ForgotPassword} />
      <Stack.Screen name="checkout" component={Checkout} />
      <Stack.Screen name="address" component={ShippingAddress} />
    </Stack.Navigator>
  );
}
