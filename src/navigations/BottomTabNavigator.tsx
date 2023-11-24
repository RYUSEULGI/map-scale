import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ColorSchemeName, useColorScheme} from 'react-native';
import HomeScreen from '../screens/home/HomeScreen';
import theme from '../styles/theme';
import {isIphone} from '../utils/iphone';

function BottomTabNavigator() {
  const BottomTab = createBottomTabNavigator();
  const colorScheme = useColorScheme() as NonNullable<ColorSchemeName>;

  return (
    <BottomTab.Navigator
      initialRouteName="TabDashboard"
      screenOptions={{
        tabBarActiveTintColor: theme[colorScheme].tint,
        tabBarStyle: {
          paddingLeft: 12,
          paddingRight: 12,
          paddingVertical: 10,
          paddingBottom: isIphone ? 13 : 16,
          height: isIphone ? 64 : 72,
        },
      }}
    >
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={() => ({
          title: '홈',
          tabBarIcon: ({color}) => (
            <></>
            // <TabBarIcon name="pie-chart" color={color} />
          ),
        })}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;
