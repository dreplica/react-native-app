import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import AuthStackNavigator from "./src/Navigation/AuthNavigator";
import MainNavigator from "./src/Navigation/MainNavigator";
import Theme from './src/Navigation/NavigatorTheme'

export default function App() {
  const loggedIn = true;
  return (
    <GestureHandlerRootView>
      <NavigationContainer theme={Theme}>
        {!loggedIn ? <AuthStackNavigator /> : <MainNavigator />}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
