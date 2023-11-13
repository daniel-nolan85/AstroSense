import {
  StyleSheet,
  Modal,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import { Text } from '../../../components/typography/text.component';
import { SafeArea } from '../../../components/utils/safe-area.component';

export const TriviaModal = ({
  visible,
  handleNext,
  handleFinish,
  correct,
  questionNum,
  questionsAmount,
  score,
  correctExplanation,
  incorrectExplanation,
}) => {
  const AnimationWrapper = styled.View`
    width: 100%;
    height: 40%;
    padding: ${(props) => props.theme.space[2]};
    margin: ${(props) => props.theme.space[2]};
  `;

  return (
    <SafeArea>
      <Modal visible={visible}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}
        >
          <AnimationWrapper>
            <LottieView
              key='animation'
              autoPlay
              loop
              resizeMode='cover'
              source={
                correct
                  ? require('../../../../assets/correct.json')
                  : require('../../../../assets/incorrect.json')
              }
            />
          </AnimationWrapper>
          <Text variant='title'>{score} points</Text>
          <ScrollView>
            {correct ? (
              <Text variant='title'>{correctExplanation}</Text>
            ) : (
              <Text variant='title'>{incorrectExplanation}</Text>
            )}
            {questionNum < questionsAmount - 1 && (
              <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>NEXT</Text>
              </TouchableOpacity>
            )}
            {questionNum === questionsAmount - 1 && (
              <TouchableOpacity onPress={handleFinish} style={styles.button}>
                <Text style={styles.buttonText}>SHOW RESULTS</Text>
              </TouchableOpacity>
            )}
          </ScrollView>
        </View>
      </Modal>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1a759f',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
});
