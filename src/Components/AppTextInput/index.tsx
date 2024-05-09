import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {
  StyleSheet,
  TextInput,
  View,
  TextInputProps,
  Platform,
} from "react-native";
import Colors from "../../config/colors";

interface AppTextInput extends TextInputProps {
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
}

const AppTextInput = (props: AppTextInput) => {
  const { icon, ...rest } = props;

  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          color={Colors.black}
          size={20}
          style={styles.icon}
        />
      )}
      <TextInput
        style={[styles.text]}
        placeholderTextColor={Colors.medium}
        {...rest}
      />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginBottom: 20,
    backgroundColor: Colors.light,
    borderRadius: 20,
  },
  icon: {
    marginRight: 5,
  },
  text: {
    color: Colors.dark,
    fontSize: 16,
    flex: 1,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
