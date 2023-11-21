import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { AsteroidsListScreen } from '../../features/images/asteroids/screens/asteroids-list.screen';
import { AsteroidsDetailsScreen } from '../../features/images/asteroids/screens/asteroids-details.screen';

const { Navigator, Screen } = createStackNavigator();

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
