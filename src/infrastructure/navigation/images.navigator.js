import { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { ApodScreen } from '../../features/images/apod/screens/apod.screen';
import { Ionicons } from '@expo/vector-icons';
import Calendar from '../../../assets/calendar.svg';
import { ApodContext } from '../../services/images/apod/apod.context';
import { MarsRoverNavigator } from './rover.navigator';

const Drawer = createDrawerNavigator();
const { Navigator, Screen } = Drawer;

export const ImagesNavigator = ({ navigation }) => {
  const { open, setOpen } = useContext(ApodContext);

  return (
    <Navigator>
      <Screen
        name='Apod'
        component={ApodScreen}
        options={{
          title: '',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.dispatch(DrawerActions.openDrawer());
              }}
              style={{ paddingLeft: 20 }}
            >
              <Ionicons name='md-menu' size={30} color='#009999' />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => setOpen(!open)}
              style={{ paddingRight: 20 }}
            >
              <Calendar width={24} height={24} />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#efefef',
          },
          drawerLabel: 'Picture of the Day',
        }}
      />
      <Screen
        name='MarsRovers'
        component={MarsRoverNavigator}
        options={{
          title: '',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.dispatch(DrawerActions.openDrawer());
              }}
              style={{ paddingLeft: 20 }}
            >
              <Ionicons name='md-menu' size={30} color='#009999' />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#efefef',
          },
          drawerLabel: 'Mars Rovers',
        }}
      />
    </Navigator>
  );
};
