import { createStackNavigator } from '@react-navigation/stack';
import { TriviaHomeScreen } from '../../features/trivia/screens/trivia-home.screen';
import { TriviaQuestionScreen } from '../../features/trivia/screens/trivia-question.screen';
import { TriviaResultScreen } from '../../features/trivia/screens/trivia-result.screen';

const PlanetStack = createStackNavigator();
const { Navigator, Screen } = PlanetStack;

export const TriviaNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name='TriviaHome' component={TriviaHomeScreen} />
      <Screen name='TriviaQuestion' component={TriviaQuestionScreen} />
      <Screen name='TriviaResult' component={TriviaResultScreen} />
    </Navigator>
  );
};
