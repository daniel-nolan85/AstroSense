import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { PlanetsScreen } from '../../features/planets/screens/planets.screen';
import { PlanetDetailsScreen } from '../../features/planets/screens/planet-details.screen';

const PlanetStack = createStackNavigator();
const { Navigator, Screen } = PlanetStack;

export const PlanetsNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerShown: false,
      }}
    >
      <Screen name='PlanetsList' component={PlanetsScreen} />
      <Screen name='PlanetDetails' component={PlanetDetailsScreen} />
    </Navigator>
  );
};
