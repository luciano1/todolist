import { NavigationProp } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import ExampleForRoute from "../screens/ExampleForRoute";
import Home from "../screens/Home";

type RootStackParamList = {
  Home: undefined;
  firstRoute: undefined;
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="firstRoute" component={ExampleForRoute} />
    </Navigator>
  );
}
