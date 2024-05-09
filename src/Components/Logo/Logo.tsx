import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";

interface AppLogoProps {
  source: ImageSourcePropType;
  text: string;
}

const AppLogo = (props: AppLogoProps) => {
  const { source, text } = props;
  return (
    <View style={[styles.flexView, styles.logoWrapper]}>
      <Image style={styles.image} source={source} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default AppLogo;

const styles = StyleSheet.create({
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
  text: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: "800",
  },
});
