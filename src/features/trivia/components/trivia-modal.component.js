import { StyleSheet, Modal, View, TouchableOpacity } from 'react-native';
import { Text } from '../../../components/typography/text.component';
import { SafeArea } from '../../../components/utils/safe-area.component';

export const TriviaModal = ({
  visible,
  handleNext,
  handleFinish,
  correct,
  questionNum,
  questionsAmount,
}) => {
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
          {correct ? (
            <Text variant='title'>You got it right!</Text>
          ) : (
            <Text variant='title'>Bad luck!</Text>
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
    fw: '600',
    color: 'white',
  },
});
