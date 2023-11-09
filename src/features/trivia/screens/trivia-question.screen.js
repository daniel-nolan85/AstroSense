import { useState, useEffect } from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
  SafeAreaView,
  Modal,
} from 'react-native';
import data from '../../../services/trivia/trivia.data.json';
import { SafeArea } from '../../../components/utils/safe-area.component';

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

export const TriviaQuestionScreen = ({ navigation }) => {
  const [questions, setQuestions] = useState();
  const [questionNum, setQuestionNum] = useState(0);
  const [questionsAmount, setQuestionsAmount] = useState(10);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(new Animated.Value(0));

  useEffect(() => {
    getQuiz();
  }, []);

  const getQuiz = () => {
    const getRandomQuestions = () => {
      const qs = [...data.data];
      const randomQuestions = [];

      for (let i = 0; i < questionsAmount; i++) {
        const randomIndex = Math.floor(Math.random() * qs.length);
        randomQuestions.push(qs.splice(randomIndex, 1)[0]);
      }

      setQuestions(randomQuestions);
      setOptions(generateOptionsAndShuffle(randomQuestions[0]));
    };

    getRandomQuestions();
  };

  const generateOptionsAndShuffle = (_question) => {
    const options = [..._question.incorrectAnswers];
    options.push(_question.correctAnswer);
    shuffleArray(options);
    return options;
  };

  const progressAnim = progress.interpolate({
    inputRange: [0, questionsAmount],
    outputRange: ['10%', '100%'],
  });

  const progressBar = () => {
    return (
      <View
        style={{
          width: '90%',
          height: 20,
          borderRadius: 20,
          backgroundColor: '#00000020',
          marginHorizontal: 20,
        }}
      >
        <Animated.View
          style={[
            {
              height: 20,
              borderRadius: 20,
              backgroundColor: '#3498db',
            },
            {
              width: progressAnim,
            },
          ]}
        ></Animated.View>
      </View>
    );
  };

  const handleSelectedOption = (_option) => {
    if (_option === questions[questionNum].correctAnswer) {
      setScore(score + 10);
    }
  };

  const handleNext = () => {
    setQuestionNum(questionNum + 1);
    setOptions(generateOptionsAndShuffle(questions[questionNum + 1]));
    Animated.timing(progress, {
      toValue: questionNum + 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const handleFinish = () => {
    Animated.timing(progress, {
      toValue: questionNum + 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();

    setTimeout(() => {
      navigate('TriviaResult', { score });
    }, 1000);
  };

  const { navigate } = navigation;

  return (
    <SafeArea>
      {progressBar()}
      <View style={styles.container}>
        {questions && (
          <>
            <View style={styles.top}>
              <Text style={styles.question}>
                Q {questionNum + 1}. {questions[questionNum].question}
              </Text>
            </View>
            <View style={styles.options}>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => handleSelectedOption(options[0])}
              >
                <Text style={styles.option}>{options[0]}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => handleSelectedOption(options[1])}
              >
                <Text style={styles.option}>{options[1]}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => handleSelectedOption(options[2])}
              >
                <Text style={styles.option}>{options[2]}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => handleSelectedOption(options[3])}
              >
                <Text style={styles.option}>{options[3]}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bottom}>
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
          </>
        )}
      </View>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    height: '100%',
  },
  top: {
    marginVertical: 16,
  },
  question: {
    fontSize: 28,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  option: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
  optionButton: {
    padding: 12,
    marginVertical: 6,
    backgroundColor: '#34a0a4',
    borderRadius: 12,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
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
