import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, RegisterScreen, WelcomeScreen } from '../Screens';
import Routes from './Routes';

const Stack = createNativeStackNavigator();
export const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.WELCOME}
    >
      <Stack.Screen name={Routes.WELCOME} component={WelcomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name={Routes.LOGIN} component={LoginScreen} />
      <Stack.Screen name={Routes.SIGN_UP} component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator