import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { TriviaTitle } from '../components/trivia-title.component';

export const TriviaResultScreen = ({ navigation, route }) => {
  const { navigate } = navigation;
  const { score } = route.params;

  const resultBanner =
    score === 100
      ? 'https://res.cloudinary.com/daufzqlld/image/upload/v1699449171/jdgy9nbajkhphrcdlm92.png'
      : score < 100 && score > 40
      ? 'https://res.cloudinary.com/daufzqlld/image/upload/v1699448221/tvebochdq986s6rwpebp.png'
      : 'https://res.cloudinary.com/daufzqlld/image/upload/v1699448239/fmgf8luubra2hxtbd2m1.png';

  return (
    <View style={styles.container}>
      <TriviaTitle titleText='RESULTS' />
      <Text style={styles.scoreValue}>{score}</Text>
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: resultBanner,
          }}
          style={styles.banner}
          resizeMode='contain'
        ></Image>
      </View>
      <TouchableOpacity
        onPress={() => navigate('TriviaHome')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>GO TO HOME</Text>
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
  scoreValue: {
    fontSize: 24,
    fontWeight: '800',
    alignSelf: 'center',
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
