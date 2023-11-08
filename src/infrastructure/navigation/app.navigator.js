import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';
import { SafeArea } from '../../components/utils/safe-area.component';
import { PlanetsNavigator } from './planets.navigator';
import { TriviaNavigator } from './trivia.navigator';

const Tab = createBottomTabNavigator();
const { Navigator, Screen } = Tab;

const TAB_ICON = {
  Apod: 'md-image',
  Planets: 'md-planet',
  Games: 'md-game-controller',
  Settings: 'md-settings',
};

const Apod = () => (
  <SafeArea>
    <Text>Apod</Text>
  </SafeArea>
);
const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    headerShown: false,
    tabBarActiveTintColor: '#660094',
    tabBarInactiveTintColor: 'gray',
    tabBarShowLabel: false,
  };
};

export const AppNavigator = () => (
  <NavigationContainer>
    <Navigator screenOptions={createScreenOptions}>
      <Screen name='Apod' component={Apod} />
      <Screen name='Planets' component={PlanetsNavigator} />
      <Screen name='Games' component={TriviaNavigator} />
      <Screen name='Settings' component={Settings} />
    </Navigator>
  </NavigationContainer>
);
