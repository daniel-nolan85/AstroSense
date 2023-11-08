import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

export const TriviaQuestionScreen = ({ navigation }) => {
  const [questions, setQuestions] = useState();
  const [questionNum, setQuestionNum] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    getQuiz();
  }, []);

  const getQuiz = async () => {
    const url =
      'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setQuestions(data.results);
    setOptions(generateOptionsAndShuffle(data.results[0]));
  };

  const generateOptionsAndShuffle = (_question) => {
    const options = [..._question.incorrect_answers];
    options.push(_question.correct_answer);
    shuffleArray(options);
    return options;
  };

  const handleSelectedOption = (_option) => {
    if (_option === questions[questionNum].correct_answer) {
      setScore(score + 10);
    }
  };

  const handleNext = () => {
    setQuestionNum(questionNum + 1);
    setOptions(generateOptionsAndShuffle(questions[questionNum + 1]));
  };

  const { navigate } = navigation;

  return (
    <View style={styles.container}>
      {questions && (
        <>
          <View style={styles.top}>
            <Text style={styles.question}>
              Q {questionNum + 1}.{' '}
              {decodeURIComponent(questions[questionNum].question)}
            </Text>
          </View>
          <View style={styles.options}>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleSelectedOption(options[0])}
            >
              <Text style={styles.option}>
                {decodeURIComponent(options[0])}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleSelectedOption(options[1])}
            >
              <Text style={styles.option}>
                {decodeURIComponent(options[1])}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleSelectedOption(options[2])}
            >
              <Text style={styles.option}>
                {decodeURIComponent(options[2])}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleSelectedOption(options[3])}
            >
              <Text style={styles.option}>
                {decodeURIComponent(options[3])}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottom}>
            {/* <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>PREV</Text>
            </TouchableOpacity> */}
            {questionNum < 9 && (
              <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>NEXT</Text>
              </TouchableOpacity>
            )}
            {questionNum === 9 && (
              <TouchableOpacity
                onPress={() => navigate('TriviaResult', { score })}
                style={styles.button}
              >
                <Text style={styles.buttonText}>SHOW RESULTS</Text>
              </TouchableOpacity>
            )}
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
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
