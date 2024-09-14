import {
  FlatList,
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
} from "react-native";
import UserListing from "../../Components/UserListing";
import IconToList from "../../Components/List/IconToList";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { useNavigation } from "@react-navigation/native";
import Routes from "../../Navigation/Routes";
import SecureStore from "../../Store/SecureStore";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

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
    target: Routes.MESSAGES,
  },
];

const logout = {
  icon: "logout",
  iconbg: "#ffe66d",
  title: "Logout",
};

const MyAccountScreen = () => {
  const navigator = useNavigation();
  const userDataContext = useContext(AuthContext);
  const handleLogout = () => {
    SecureStore.removeItem("token");
    userDataContext?.setUser(null);
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight
        underlayColor="azure"
        style={styles.user}
        onPress={() => console.log("Me")}
      >
        <UserListing
          imgSource={require("../../assets/mosh.jpg")}
          title={userDataContext?.user?.name || ''}
          subtitle={userDataContext?.user?.email || ''}
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
            <Swipeable>
              <IconToList
                item={item}
                onPress={() => navigator.navigate(item.target as never)}
              />
            </Swipeable>
          )}
        />
      </View>
      <View style={styles.listWrappper}>
        <IconToList item={logout} onPress={handleLogout} />
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
