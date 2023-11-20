import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { AsteroidsListScreen } from '../../features/images/asteroids/screens/asteroids-list.screen';
import { AsteroidsDetailsScreen } from '../../features/images/asteroids/screens/asteroids-details.screen';

const RoverStack = createStackNavigator();
const { Navigator, Screen } = RoverStack;

export const AsteroidsNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        ...TransitionPresets.ModalSlideFromBottomIOS,
        headerShown: false,
      }}
    >
      <Screen name='AsteroidsList' component={AsteroidsListScreen} />
      <Screen name='AsteroidsDetails' component={AsteroidsDetailsScreen} />
    </Navigator>
  );
};
