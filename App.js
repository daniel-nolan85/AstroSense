import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider } from 'styled-components/native';
import { Text } from 'react-native';
import {
  useFonts as useAudiowide,
  Audiowide_400Regular,
} from '@expo-google-fonts/audiowide';
import {
  useFonts as useQuestrial,
  Questrial_400Regular,
} from '@expo-google-fonts/questrial';
import { Ionicons } from '@expo/vector-icons';
import { theme } from './src/infrastructure/theme';
import { SafeArea } from './src/components/utils/safe-area.component';
import { PlanetsContextProvider } from './src/services/planets/planets.context';
import { PlanetsScreen } from './src/features/planets/screens/planets.screen';

const Tab = createBottomTabNavigator();
const { Navigator, Screen } = Tab;

const TAB_ICON = {
  Apod: 'md-image',
  Planets: 'md-planet',
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

export default function App() {
  const [audiowideLoaded] = useAudiowide({ Audiowide_400Regular });
  const [questrialLoaded] = useQuestrial({ Questrial_400Regular });
  if (!audiowideLoaded || !questrialLoaded) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <PlanetsContextProvider>
          <NavigationContainer>
            <Navigator screenOptions={createScreenOptions}>
              <Screen name='Apod' component={Apod} />
              <Screen name='Planets' component={PlanetsScreen} />
              <Screen name='Settings' component={Settings} />
            </Navigator>
          </NavigationContainer>
        </PlanetsContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );
}
