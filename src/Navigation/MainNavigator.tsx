import { TouchableOpacity, View } from "react-native";
import {
  ViewImageScreen,
  MyAccountScreen,
  ListingEditScreen,
  MessageScreen,
} from "../Screens";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import Routes from "./Routes";

const Tab = createBottomTabNavigator();
const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff",
        },
        tabBarActiveTintColor: "#fc5c65",
      }}
    >
      <Tab.Screen
        name={Routes.FEED}
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name={Routes.LISTING}
        component={ListingEditScreen}
        options={{
          tabBarButton: (props) => (
            <TouchableOpacity {...props}>
              <View
                style={{
                  width: 80,
                  height: 80,
                  backgroundColor: "#fc5c65",
                  borderColor: "#fff",
                  borderWidth: 5,
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="plus-circle"
                  color="white"
                  size={40}
                />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name={Routes.ACCOUNT}
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
