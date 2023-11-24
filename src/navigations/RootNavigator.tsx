import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './navigation.types';
import BottomTabNavigator from './BottomTabNavigator';
import HomeScreen from '../screens/home/HomeScreen';

function RootNavigator() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
