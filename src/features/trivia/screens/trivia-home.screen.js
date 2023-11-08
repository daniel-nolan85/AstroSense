import { Image, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { TriviaTitle } from '../components/trivia-title.component';

export const TriviaHomeScreen = ({ navigation }) => {
  const { navigate } = navigation;

  return (
    <View style={styles.container}>
      <TriviaTitle titleText='QUIZZLER' />
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: 'https://res.cloudinary.com/daufzqlld/image/upload/v1699439826/eatjtvd270uo6gdtrjyh.png',
          }}
          style={styles.banner}
          resizeMode='contain'
        ></Image>
      </View>
      <TouchableOpacity
        onPress={() => navigate('TriviaQuestion')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>START</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  banner: {
    height: 300,
    width: 300,
  },
  button: {
    width: '100%',
    backgroundColor: '#1a759f',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fw: '600',
    color: 'white',
  },
});
