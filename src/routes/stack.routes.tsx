import {
  createNativeStackNavigator,
  NativeStackNavigationProp
} from "@react-navigation/native-stack";
import { Login } from "@screens/Login";
import { SignUp } from "@screens/SignUp";

type AuthRoutes = {
  login: undefined;
  signUp: undefined;
};

export type AuthProps = NativeStackNavigationProp<AuthRoutes>;

const Stack = createNativeStackNavigator<AuthRoutes>();

export function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signUp" component={SignUp} />
    </Stack.Navigator>
  );
}
