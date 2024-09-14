import LottieView from "lottie-react-native";
import { View } from "react-native";

const ActivityIndicator = ({ visible }: { visible: boolean }) => {
  if (!visible) return null;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
      }}
    >
      <LottieView
        autoPlay
        loop
        style={{ width: 40, height: 40 }}
        source={require("../../assets/animations/loader.json")}
      />
    </View>
  );
};

export default ActivityIndicator;
