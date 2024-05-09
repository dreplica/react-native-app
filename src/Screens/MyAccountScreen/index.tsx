import {
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import UserListing from "../../Components/UserListing";
import IconToList from "../../Components/List/IconToList";

const accountItems = [
  {
    icon: "format-list-bulleted",
    iconbg: "#FF7074",
    title: "My Listings",
    id: "1",
  },
  {
    icon: "email",
    iconbg: "#7fc9aa",
    title: "My Messages",
    id: "2",
  },
];

const logout = {
  icon: "logout",
  iconbg: "#ffe66d",
  title: "Logout",
};

const MyAccountScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        underlayColor="azure"
        style={styles.user}
        onPress={() => console.log("Me")}
      >
        <UserListing
          imgSource={require("../../assets/mosh.jpg")}
          title="Adejo David"
          subtitle="thradishion@gmail.com"
        />
      </TouchableHighlight>
      <View style={[styles.listItems, styles.listWrappper]}>
        <FlatList
          data={accountItems}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => (
            <View
              style={{
                width: "100%",
                height: 1,
                backgroundColor: "whitesmoke",
              }}
            />
          )}
          renderItem={({ item }) => (
            <IconToList item={item} onPress={() => console.log(item)} />
          )}
        />
      </View>
      <View style={styles.listWrappper}>
        <IconToList item={logout} onPress={() => console.log(logout)} />
      </View>
    </View>
  );
};

export default MyAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: "#f8f4f4",
  },
  user: {
    width: "100%",
    height: "auto",
    padding: 0,
    backgroundColor: "white",
  },
  listWrappper: {
    backgroundColor: "white",
  },
  listItems: {
    marginTop: 40,
    marginBottom: 20,
  },
});
