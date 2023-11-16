import { createDrawerNavigator } from '@react-navigation/drawer';
import { ApodScreen } from '../../features/images/apod/screens/apod.screen';
import { MarsRoverNavigator } from './rover.navigator';

const Drawer = createDrawerNavigator();
const { Navigator, Screen } = Drawer;

export const ImagesNavigator = () => {
  return (
    <Navigator>
      <Screen
        name='Apod'
        component={ApodScreen}
        options={{
          headerShown: false,
          drawerLabel: 'Picture of the Day',
        }}
      />
      <Screen
        name='MarsRovers'
        component={MarsRoverNavigator}
        options={{
          headerShown: false,
          drawerLabel: 'Mars Rovers',
        }}
      />
    </Navigator>
  );
};
