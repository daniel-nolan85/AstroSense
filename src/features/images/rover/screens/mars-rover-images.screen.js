import { Text, View } from 'react-native';

export const MarsRoverImagesScreen = ({ route }) => {
  const { rover } = route.params;

  console.log('rover => ', rover);

  return (
    <View>
      <Text>{rover.name}</Text>
    </View>
  );
};
