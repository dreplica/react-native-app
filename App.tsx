import "core-js/stable/atob";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Constants from "expo-constants";

import AuthStackNavigator from "./src/Navigation/AuthNavigator";
import MainNavigator from "./src/Navigation/MainNavigator";
import Theme from "./src/Navigation/NavigatorTheme";
import { StyleSheet, Text, View } from "react-native";
import colors from "./src/config/colors";
import useNetInfoCustom from "./src/Hooks/useNetInfoCustom";
import { useRef, useState } from "react";
import { AuthContext } from "./src/Context/AuthContext/AuthContext";
import * as SplashScreen from "expo-splash-screen";
import { useAuthToken } from "./src/Hooks/useAuth";
import rootNavigator, {
  RootNavigatorContext,
} from "./src/Navigation/rootNavigator";
import RootNavigator from "./src/Navigation/rootNavigator";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const netInfo = useNetInfoCustom();
  const [appIsReady, setAppIsReady] = useState(false);
  const refNavigator = useRef();
  const { user, setUser } = useAuthToken(setAppIsReady);

  if (appIsReady) {
    SplashScreen.hideAsync();
  }

  return (
    <GestureHandlerRootView>
      <AuthContext.Provider value={{ user, setUser }}>
        <RootNavigatorContext.Provider value={refNavigator?.current}>
          <NavigationContainer
            ref={refNavigator as any}
            theme={Theme}
          >
            {!netInfo.hasInternet && (
              <View style={styles.offline}>
                <Text style={styles.offlineText}> No internet connection</Text>
              </View>
            )}
            {!user ? <AuthStackNavigator /> : <MainNavigator />}
          </NavigationContainer>
        </RootNavigatorContext.Provider>
      </AuthContext.Provider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  offline: {
    backgroundColor: colors.danger,
    position: "absolute",
    width: "100%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    top: Constants.statusBarHeight,
    zIndex: 1,
  },
  offlineText: {
    color: "white",
  },
});
