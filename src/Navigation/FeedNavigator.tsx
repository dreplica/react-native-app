import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ItemListingScreen, ItemsScreen } from '../Screens';
import Routes from './Routes';

const Stack = createNativeStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={Routes.LISTING} component={ItemsScreen}/>
        <Stack.Screen name={Routes.LISTING_DETAILS} component={ItemListingScreen} options={{presentation: 'modal'}}/>
    </Stack.Navigator>
  )
}

export default FeedNavigator