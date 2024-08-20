import { StyleSheet, View, StatusBar, ImageBackground } from "react-native";

import Button from "../../Components/Button/Button";
import AppLogo from "../../Components/Logo/Logo";
import Colors from "../../config/colors";
import { useNavigation } from "@react-navigation/native";
import Routes from "../../Navigation/Routes";

const WelcomeScreen = () => {
  const navigator = useNavigation();
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.flexView}
      source={require("../../assets/background.jpg")}
    >
      <View style={[styles.flexView, styles.wrapper]}>
        <AppLogo
          source={require("../../assets/logo-red.png")}
          text="Sell what you don't need"
        />
        <Button
          title="Login"
          color={Colors.primary}
          onPress={() => {
            navigator.navigate(Routes.LOGIN)
          }}
        />
        <Button
          title="Signup"
          color={Colors.secondary}
          onPress={() => {
            navigator.navigate(Routes.SIGN_UP)
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
  },
  wrapper: {
    justifyContent: "flex-start",
    paddingTop: 80,
    paddingBottom: 40,
  },
  flexView: {
    flex: 1,
  },
  logoWrapper: {
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
  },
  image: {
    width: 80,
    height: 80,
  },
});
