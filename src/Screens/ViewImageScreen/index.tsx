import {
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Image,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";

const ViewImageScreen = () => {
  const {
    container,
    flexView,
    buttonsWrapper,
    image,
  } = styles;

  return (
    <SafeAreaView style={container}>
      <View style={flexView}>
        <View style={buttonsWrapper}>
          <MaterialIcons name="close" color={"#fff"} size={30} />
          <MaterialIcons name="trash-can-outline" color={"#fff"} size={30} />
        </View>
        {/* <Image
          resizeMode="contain"
          style={image}
          source={require("../../assets/jacket.jpg")}
        /> */}
      </View>
    </SafeAreaView>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#000",
  },
  flexView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsWrapper: {
    position: "absolute",
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: "auto",
    top: 0,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
