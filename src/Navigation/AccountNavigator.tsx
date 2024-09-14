import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MessageScreen, MyAccountScreen } from "../Screens";
import ROUTES from "./Routes";

const stack = createNativeStackNavigator();
const AccountNavigator = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name={ROUTES.ACCOUNT_BASE}
        component={MyAccountScreen}
        options={{ headerShown: false }}
      />
      <stack.Screen name={ROUTES.MESSAGES} component={MessageScreen} />
    </stack.Navigator>
  );
};

export default AccountNavigator;
