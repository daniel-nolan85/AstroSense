import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import { TriviaTitle } from '../components/trivia-title.component';
import { SafeArea } from '../../../components/utils/safe-area.component';
import { images } from '../../../services/trivia/trivia.data.json';
import TypeWriter from 'react-native-typewriter';
import { MessageBubble } from '../../../components/message-bubble.component';

export const TriviaHomeScreen = ({ navigation }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [difficulty, setDifficulty] = useState('');
  const [duration, setDuration] = useState(0);
  const [okButton, setOkButton] = useState(false);
  const [difficultyButtons, setDifficultyButtons] = useState(false);
  const [durationButtons, setDurationButtons] = useState(false);
  const [readyButton, setReadyButton] = useState(false);

  const { navigate } = navigation;

  const handleTypingEndIntro = () => {
    setOkButton(true);
  };

  const handleOkClick = () => {
    setCurrentStep(currentStep + 1);
    setOkButton(false);
  };

  const handleTypingEndDifficulty = () => {
    setDifficultyButtons(true);
  };

  const handleDifficultyClick = (choice) => {
    setDifficulty(choice);
    setCurrentStep(currentStep + 1);
    setDifficultyButtons(false);
  };

  const handleTypingEndDuration = () => {
    setDurationButtons(true);
  };

  const handleDurationClick = (choice) => {
    setDuration(choice);
    setCurrentStep(currentStep + 1);
    setDurationButtons(false);
  };

  const handleTypingEndReady = () => {
    setReadyButton(true);
  };

  const handleReadyClick = () => {
    setCurrentStep(1);
    setDifficulty('');
    setDuration(0);
    setReadyButton(false);
    navigate('TriviaQuestion', { difficulty, duration });
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <TypeWriter typing={1} onTypingEnd={handleTypingEndIntro}>
            Greetings, Commander! A cosmic challenge awaits you as we navigate
            the vast reaches of space. Our interstellar journey has encountered
            some celestial hiccups, and your astute mind is needed to unravel
            the mysteries that lie ahead.
          </TypeWriter>
        );
      case 2:
        return (
          <TypeWriter typing={1} onTypingEnd={handleTypingEndDifficulty}>
            Before we embark on this mission, you have the power to tailor your
            cosmic adventure. Choose your difficulty level wisely, whether
            you're a budding stargazer or a seasoned astrophysicist.
          </TypeWriter>
        );
      case 3:
        return (
          <TypeWriter typing={1} onTypingEnd={handleTypingEndDuration}>
            Next, decide the length of your journey — a brief orbit or an
            extended voyage through the cosmos.
          </TypeWriter>
        );
      case 4:
        return (
          <TypeWriter typing={1} onTypingEnd={handleTypingEndReady}>
            Commander, with your cosmic wisdom, you've crafted a unique mission
            tailored to your expertise. As we prepare to delve into the wonders
            of the universe, your choices will guide us through the cosmos.
            Brace yourself for an astronomical adventure—you've shaped this
            cosmic journey, and the universe eagerly awaits your exploration!
          </TypeWriter>
        );
      default:
        return null;
    }
  };

  return (
    <SafeArea>
      <TriviaTitle titleText='Astromind' />
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: images[0] }} style={styles.image} />
        </View>
        <View style={styles.messageContainer}>
          <MessageBubble mine text={renderCurrentStep()} />
        </View>
      </View>
      {okButton && (
        <TouchableOpacity style={styles.next} onPress={handleOkClick}>
          <View>
            <Text>OK</Text>
          </View>
        </TouchableOpacity>
      )}
      {difficultyButtons && (
        <>
          <TouchableOpacity
            style={styles.next}
            onPress={() => handleDifficultyClick('easy')}
          >
            <View>
              <Text>Lunar Learner</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.next}
            onPress={() => handleDifficultyClick('medium')}
          >
            <View>
              <Text>Solar Seeker</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.next}
            onPress={() => handleDifficultyClick('hard')}
          >
            <View>
              <Text>Galactic Guardian</Text>
            </View>
          </TouchableOpacity>
        </>
      )}
      {durationButtons && (
        <>
          <TouchableOpacity
            style={styles.next}
            onPress={() => handleDurationClick(10)}
          >
            <View>
              <Text>Cosmic Quickstep (10 questions)</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.next}
            onPress={() => handleDurationClick(20)}
          >
            <View>
              <Text>Galaxy Quest (20 questions)</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.next}
            onPress={() => handleDurationClick(30)}
          >
            <View>
              <Text>Infinity Expedition (30 questions)</Text>
            </View>
          </TouchableOpacity>
        </>
      )}
      {readyButton && (
        <TouchableOpacity style={styles.next} onPress={handleReadyClick}>
          <View>
            <Text>Let's Go!</Text>
          </View>
        </TouchableOpacity>
      )}
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
  },
  imageContainer: {
    width: 100,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
  messageContainer: {
    flex: 1,
    marginLeft: 8,
    position: 'relative',
    top: 30,
  },
  next: {
    padding: 12,
    margin: 6,
    backgroundColor: '#009999',
    borderRadius: 12,
  },
});
