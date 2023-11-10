import { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import data from '../../../services/trivia/trivia.data.json';
import { SafeArea } from '../../../components/utils/safe-area.component';
import { TriviaQuestionCard } from '../components/trivia-question-card.component';
import { ProgressBar } from '../components/trivia-progress-bar.component';
import { TriviaModal } from '../components/trivia-modal.component';

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
  const [progress] = useState(new Animated.Value(0));
  const [visible, setVisible] = useState(false);
  const [correct, setCorrect] = useState(false);

  const easy = data.data.filter((item) => item.difficulty === 'hard');
  console.log(easy.length);

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

  const handleSelectedOption = (_option) => {
    setVisible(true);
    if (_option === questions[questionNum].correctAnswer) {
      setScore(score + 10);
      setCorrect(true);
    }
  };

  const handleNext = () => {
    setVisible(false);
    setCorrect(false);
    setQuestionNum(questionNum + 1);
    setOptions(generateOptionsAndShuffle(questions[questionNum + 1]));
    Animated.timing(progress, {
      toValue: questionNum + 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const handleFinish = () => {
    setVisible(false);
    setCorrect(false);
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
      <ProgressBar progress={progress} questionsAmount={questionsAmount} />
      {questions && (
        <>
          <TriviaQuestionCard
            question={questions[questionNum].question}
            options={options}
            image={questions[questionNum].image}
            handleSelectedOption={handleSelectedOption}
          />
          <TriviaModal
            visible={visible}
            setVisible={setVisible}
            handleNext={handleNext}
            handleFinish={handleFinish}
            correct={correct}
            questionNum={questionNum}
            questionsAmount={questionsAmount}
          />
        </>
      )}
    </SafeArea>
  );
};
