import { View } from "react-native";
import {
  WelcomeScreen,
  ViewImageScreen,
  ItemListingScreen,
  ItemsScreen,
  MyAccountScreen,
  LoginScreen,
  RegisterScreen,
  ListingEditScreen,
} from "./src/Screens";

export default function App() {
  return (
    <ListingEditScreen />
    // <View
    //   style={{
    //     flex: 1,
    //     backgroundColor: "white",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <View
    //     style={{
    //       width: 100,
    //       height: 100,
    //       backgroundColor: "dodgerblue",
    //       shadowColor: "grey",
    //       shadowOffset: { width: 0, height: 0 },
    //       shadowOpacity: 0.9,
    //       shadowRadius: 20,
    //       elevation: 10,
    //     }}
    //   ></View>
    // </View>
  );
}
