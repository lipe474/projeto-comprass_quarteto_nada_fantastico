import {
  createNativeStackNavigator,
  NativeStackNavigationProp
} from "@react-navigation/native-stack";
import { ForgotPassword } from "@screens/ForgotPassword";
import { Login } from "@screens/Login";
import { SignUp } from "@screens/SignUp";

type StackRoutes = {
  login: undefined;
  signUp: undefined;
  forgotPassword: undefined;
};

export type StackProps = NativeStackNavigationProp<StackRoutes>;

const Stack = createNativeStackNavigator<StackRoutes>();

export function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signUp" component={SignUp} />
      <Stack.Screen name="forgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}
