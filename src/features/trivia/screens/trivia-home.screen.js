import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { SafeArea } from '../../../components/utils/safe-area.component';
import { Text } from '../../../components/typography/text.component';
import { images } from '../../../services/trivia/trivia.data.json';
import TypeWriter from 'react-native-typewriter';
import { MessageBubble } from '../../../components/message-bubble.component';
import { MaterialIcons } from '@expo/vector-icons';

export const TriviaHomeScreen = ({ navigation }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [difficulty, setDifficulty] = useState('');
  const [duration, setDuration] = useState(0);
  const [okButton, setOkButton] = useState(false);
  const [difficultyButtons, setDifficultyButtons] = useState(false);
  const [durationButtons, setDurationButtons] = useState(false);
  const [readyButton, setReadyButton] = useState(false);
  const [okTyping, setOkTyping] = useState(true);
  const [difficultyTyping, setDifficultyTyping] = useState(false);
  const [durationTyping, setDurationTyping] = useState(false);
  const [readyTyping, setReadyTyping] = useState(false);
  const [showOk, setShowOk] = useState(true);
  const [showDifficulty, setShowDifficulty] = useState(false);
  const [showDuration, setShowDuration] = useState(false);
  const [showReady, setShowReady] = useState(false);

  const { navigate } = navigation;

  const skipOkText = () => {
    setShowOk(false);
    setOkTyping(false);
    setOkButton(true);
  };

  const skipDifficultyText = () => {
    setShowDifficulty(false);
    setDifficultyTyping(false);
    setDifficultyButtons(true);
  };

  const skipDurationText = () => {
    setShowDuration(false);
    setDurationTyping(false);
    setDurationButtons(true);
  };

  const skipReadyText = () => {
    setShowReady(false);
    setReadyTyping(false);
    setReadyButton(true);
  };

  const handleTypingEndIntro = () => {
    setShowOk(false);
    setOkButton(true);
    setOkTyping(true);
    setDifficultyTyping(true);
  };

  const handleTypingEndDifficulty = () => {
    setShowDifficulty(false);
    setDifficultyButtons(true);
    setDurationTyping(true);
  };

  const handleTypingEndDuration = () => {
    setShowDuration(false);
    setDurationButtons(true);
    setReadyTyping(true);
  };

  const handleTypingEndReady = () => {
    setShowReady(false);
    setReadyButton(true);
  };

  const handleOkClick = () => {
    setShowDifficulty(true);
    setShowOk(false);
    setCurrentStep(currentStep + 1);
    setOkButton(false);
    setDifficultyTyping(true);
  };

  const handleDifficultyClick = (choice) => {
    setShowDuration(true);
    setShowDifficulty(false);
    setDifficulty(choice);
    setCurrentStep(currentStep + 1);
    setDifficultyButtons(false);
    setDurationTyping(true);
  };

  const handleDurationClick = (choice) => {
    setShowReady(true);
    setShowDuration(false);
    setDuration(choice);
    setCurrentStep(currentStep + 1);
    setDurationButtons(false);
    setReadyTyping(true);
  };

  const handleReadyClick = () => {
    setShowReady(false);
    setCurrentStep(1);
    setDifficulty('');
    setDuration(0);
    setOkButton(false);
    setDifficultyButtons(false);
    setDurationButtons(false);
    setReadyButton(false);
    navigate('TriviaQuestion', {
      difficulty,
      duration,
      setOkTyping,
      setShowOk,
    });
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return !okTyping ? (
          <Text variant='speech'>
            Greetings, Commander! A cosmic challenge awaits you as we navigate
            the vast reaches of space. Our interstellar journey has encountered
            some celestial hiccups, and your astute mind is needed to unravel
            the mysteries that lie ahead.
          </Text>
        ) : (
          <TypeWriter
            typing={okTyping ? 1 : 0}
            maxDelay={50}
            onTypingEnd={handleTypingEndIntro}
            style={{ fontFamily: 'Audiowide_400Regular' }}
          >
            Greetings, Commander! A cosmic challenge awaits you as we navigate
            the vast reaches of space. Our interstellar journey has encountered
            some celestial hiccups, and your astute mind is needed to unravel
            the mysteries that lie ahead.
          </TypeWriter>
        );
      case 2:
        return !difficultyTyping ? (
          <Text variant='speech'>
            Before we embark on this mission, you have the power to tailor your
            cosmic adventure. Choose your difficulty level wisely, whether
            you're a budding stargazer or a seasoned astrophysicist.
          </Text>
        ) : (
          <TypeWriter
            typing={difficultyTyping ? 1 : 0}
            onTypingEnd={handleTypingEndDifficulty}
            style={{ fontFamily: 'Audiowide_400Regular' }}
          >
            Before we embark on this mission, you have the power to tailor your
            cosmic adventure. Choose your difficulty level wisely, whether
            you're a budding stargazer or a seasoned astrophysicist.
          </TypeWriter>
        );
      case 3:
        return !durationTyping ? (
          <Text variant='speech'>
            Next, decide the length of your journey — a brief orbit or an
            extended voyage through the cosmos.
          </Text>
        ) : (
          <TypeWriter
            typing={durationTyping ? 1 : 0}
            onTypingEnd={handleTypingEndDuration}
            style={{ fontFamily: 'Audiowide_400Regular' }}
          >
            Next, decide the length of your journey — a brief orbit or an
            extended voyage through the cosmos.
          </TypeWriter>
        );
      case 4:
        return !readyTyping ? (
          <Text variant='speech'>
            Commander, with your cosmic wisdom, you've crafted a unique mission
            tailored to your expertise. As we prepare to delve into the wonders
            of the universe, your choices will guide us through the cosmos.
            Brace yourself for an astronomical adventure—you've shaped this
            cosmic journey, and the universe eagerly awaits your exploration!
          </Text>
        ) : (
          <TypeWriter
            typing={readyTyping ? 1 : 0}
            onTypingEnd={handleTypingEndReady}
            style={{ fontFamily: 'Audiowide_400Regular' }}
          >
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
    <SafeArea style={styles.questionContainer}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: images[0] }} style={styles.image} />
        </View>
        <View style={styles.messageContainer}>
          <MessageBubble mine text={renderCurrentStep()} />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        {okButton && (
          <TouchableOpacity style={styles.next} onPress={handleOkClick}>
            <View>
              <Text variant='body' style={styles.buttonText}>
                OK
              </Text>
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
                <Text variant='body' style={styles.buttonText}>
                  Lunar Learner
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.next}
              onPress={() => handleDifficultyClick('medium')}
            >
              <View>
                <Text variant='body' style={styles.buttonText}>
                  Solar Seeker
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.next}
              onPress={() => handleDifficultyClick('hard')}
            >
              <View>
                <Text variant='body' style={styles.buttonText}>
                  Galactic Guardian
                </Text>
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
                <Text variant='body' style={styles.buttonText}>
                  Cosmic Quickstep (10 questions)
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.next}
              onPress={() => handleDurationClick(20)}
            >
              <View>
                <Text variant='body' style={styles.buttonText}>
                  Galaxy Quest (20 questions)
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.next}
              onPress={() => handleDurationClick(30)}
            >
              <View>
                <Text variant='body' style={styles.buttonText}>
                  Infinity Expedition (30 questions)
                </Text>
              </View>
            </TouchableOpacity>
          </>
        )}
        {readyButton && (
          <TouchableOpacity style={styles.next} onPress={handleReadyClick}>
            <View>
              <Text variant='body' style={styles.buttonText}>
                Let's Go!
              </Text>
            </View>
          </TouchableOpacity>
        )}
        {showOk && okTyping && (
          <TouchableOpacity style={styles.next} onPress={skipOkText}>
            <View>
              <MaterialIcons name='double-arrow' size={24} color='#fff' />
            </View>
          </TouchableOpacity>
        )}
        {showDifficulty && difficultyTyping && (
          <TouchableOpacity style={styles.next} onPress={skipDifficultyText}>
            <View>
              <MaterialIcons name='double-arrow' size={24} color='#fff' />
            </View>
          </TouchableOpacity>
        )}
        {showDuration && durationTyping && (
          <TouchableOpacity style={styles.next} onPress={skipDurationText}>
            <View>
              <MaterialIcons name='double-arrow' size={24} color='#fff' />
            </View>
          </TouchableOpacity>
        )}
        {showReady && readyTyping && (
          <TouchableOpacity style={styles.next} onPress={skipReadyText}>
            <View>
              <MaterialIcons name='double-arrow' size={24} color='#fff' />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  questionContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
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
  buttonContainer: {
    position: 'relative',
    bottom: 0,
  },
  next: {
    padding: 12,
    margin: 6,
    backgroundColor: '#009999',
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },
});
