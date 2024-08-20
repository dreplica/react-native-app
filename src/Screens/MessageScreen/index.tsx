import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import ScreenLayout from "../../Components/ScreenLayout";
import Entypo from "@expo/vector-icons/Entypo";
import { useRef, useState } from "react";

const messages = [
  {
    image: require("../../assets/mosh.jpg"),
    title: "hello",
    description: "something about hello",
    hasChevron: true,
  },
  {
    image: require("../../assets/mosh.jpg"),
    title: "hello 2",
    description:
      "something about hello 2 something about hello 2something about hello 2",
    hasChevron: true,
  },
];

const MessageItem = ({ image, title, description, hasChevron }) => {
  return (
    <TouchableOpacity
      style={messageStyle.container}
      onPress={() => console.log("message")}
    >
      <Image source={image} style={messageStyle.image} />
      <View style={messageStyle.info}>
        <Text
          numberOfLines={1}
          style={[messageStyle.content, { color: "black" }]}
        >
          {title}
        </Text>
        <Text
          numberOfLines={2}
          style={[messageStyle.content, { color: "#aeaeae" }]}
        >
          {description}
        </Text>
      </View>
      {hasChevron && <Entypo name="chevron-right" size={24} color="#aeaeae" />}
    </TouchableOpacity>
  );
};

const messageStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  info: {
    flex: 1,
    marginHorizontal: 10,
  },
  content: {
    textTransform: "capitalize",
  },
});

const MessageScreen = () => {
  const refresherTimer = useRef<NodeJS.Timeout>();
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(true);
    refresherTimer.current = setTimeout(() => {
      clearTimeout(refresherTimer.current);
      setRefresh(false)
    }, 7000);
  }

  return (
    <ScreenLayout>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.title}
        renderItem={({ item: all }) => <MessageItem {...all} />}
        refreshing={refresh}
        onRefresh={handleRefresh}
        ItemSeparatorComponent={() => (
          <View
            style={{
              width: "100%",
              height: 0.5,
              backgroundColor: "#e7e7e7",
            }}
          />
        )}
      />
    </ScreenLayout>
  );
};

export default MessageScreen;
