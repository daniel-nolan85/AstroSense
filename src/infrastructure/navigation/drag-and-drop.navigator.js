import { createStackNavigator } from '@react-navigation/stack';
import { DragAndDropGameScreen } from '../../features/games/drag-and-drop/screens/drag-and-drop-game.screen';

const { Navigator, Screen } = createStackNavigator();

export const DragAndDropNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name='DragAndDropGame' component={DragAndDropGameScreen} />
    </Navigator>
  );
};
