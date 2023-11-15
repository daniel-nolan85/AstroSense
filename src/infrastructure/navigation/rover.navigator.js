import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { MarsRoverScreen } from '../../features/images/rover/screens/mars-rover.screen';
import { MarsRoverImagesScreen } from '../../features/images/rover/screens/mars-rover-images.screen';

const RoverStack = createStackNavigator();
const { Navigator, Screen } = RoverStack;

export const MarsRoverNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        ...TransitionPresets.ModalSlideFromBottomIOS,
        headerShown: false,
      }}
    >
      <Screen name='MarsRoverScreen' component={MarsRoverScreen} />
      <Screen name='MarsRoverImages' component={MarsRoverImagesScreen} />
    </Navigator>
  );
};
