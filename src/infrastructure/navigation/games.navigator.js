import { createDrawerNavigator } from '@react-navigation/drawer';
import { DragAndDropNavigator } from './drag-and-drop.navigator';
import { AstroAviatorNavigator } from './astro-aviator.navigator';
import { TriviaNavigator } from './trivia.navigator';

const { Navigator, Screen } = createDrawerNavigator();

export const GamesNavigator = () => {
  return (
    <Navigator>
      <Screen
        name='DragAndDrop'
        component={DragAndDropNavigator}
        options={{
          headerShown: false,
          drawerLabel: 'Drag & Drop',
        }}
      />
      <Screen
        name='AstroAviator'
        component={AstroAviatorNavigator}
        options={{
          headerShown: false,
          drawerLabel: 'Astro Aviator',
        }}
      />
      <Screen
        name='TriviaAviator'
        component={TriviaNavigator}
        options={{
          headerShown: false,
          drawerLabel: 'Trivia',
        }}
      />
    </Navigator>
  );
};
