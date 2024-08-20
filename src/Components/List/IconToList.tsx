import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface IconToListProps {
  item: Record<string, string|undefined>;
  onPress(): void;
}

const IconToList = (props: IconToListProps) => {
  const { item, onPress } = props;
  return (
    <TouchableHighlight underlayColor={"azure"} onPress={onPress}>
      <View style={styles.container}>
        <View style={[{ backgroundColor: item?.iconbg }, styles.iconWrapper]}>
          <MaterialCommunityIcons
            name={item?.icon as any}
            color="white"
            size={18}
          />
        </View>
        <Text style={styles.title} >{item.title}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default IconToList;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  iconWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  title: {
    fontWeight: "500",
    marginLeft: 10,
  },
});
