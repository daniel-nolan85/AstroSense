import { View, StyleSheet, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import { Text } from '../../../components/typography/text.component';

export const TriviaResultScreen = ({ navigation, route }) => {
  const { navigate } = navigation;
  const { score, setOkTyping, setShowOk, questionsAmount } = route.params;

  const maxPossibleScore = questionsAmount * 10;
  const scorePercentage = (score / maxPossibleScore) * 100;
  const resultBanner =
    scorePercentage === 100
      ? require('../../../../assets/landed.json')
      : scorePercentage < 100 && scorePercentage > 40
      ? require('../../../../assets/flying.json')
      : require('../../../../assets/crash.json');
  const resultText =
    scorePercentage === 100
      ? "Outstanding, Commander! You've successfully completed your cosmic mission with flying colors. Your knowledge of the universe is unparalleled, and you've proven yourself as a true cosmic explorer. The stars themselves applaud your stellar achievements. Until our next cosmic adventure, revel in the cosmic glory you've earned!"
      : scorePercentage < 100 && scorePercentage > 40
      ? "Well done, Commander! You've skillfully navigated the perils of our cosmic journey, demonstrating a solid understanding of the celestial realm. However, there's always room for improvement as we strive for greater cosmic knowledge. Keep exploring, and soon you'll be an unparalleled master of the universe!"
      : "Commander, it seems we've encountered a few cosmic bumps along the way, and we've crash-landed in an unknown celestial location. But fear not, even in the face of challenges, your determination to explore the universe is commendable. Ready for another attempt? The stars await your next cosmic adventure!";

  const AnimationWrapper = styled.View`
    width: 100%;
    height: 40%;
    padding: ${(props) => props.theme.space[2]};
    margin: ${(props) => props.theme.space[2]};
  `;

  return (
    <View style={styles.container}>
      <Text variant='title'>{score} points</Text>
      <AnimationWrapper>
        <LottieView
          key='animation'
          autoPlay
          loop
          resizeMode='cover'
          source={resultBanner}
        />
      </AnimationWrapper>
      <Text>{resultText}</Text>
      <TouchableOpacity
        onPress={() => {
          setOkTyping(true);
          setShowOk(true);
          navigate('TriviaHome');
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Play Again</Text>
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
