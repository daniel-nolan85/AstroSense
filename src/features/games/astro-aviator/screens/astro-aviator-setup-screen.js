import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import TypeWriter from 'react-native-typewriter';
import { DrawerActions } from '@react-navigation/native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { Text } from '../../../../components/typography/text.component';
import { images } from '../../../../services/trivia/trivia.data.json';
import { MessageBubble } from '../../../../components/message-bubble.component';
import {
  SetupSafeArea,
  SetupContainer,
  SpeechContainer,
  ImageContainer,
  Astronaut,
  SpeechBubble,
  OptionContainer,
  Option,
  OptionText,
} from '../styles/astro-aviator-setup.styles';
import { IconsWrapper } from '../styles/astro-aviator.styles';

export const AstroAviatorSetupScreen = ({ navigation }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [okButton, setOkButton] = useState(false);
  const [readyButton, setReadyButton] = useState(false);
  const [typing, setTyping] = useState(true);
  const [showOk, setShowOk] = useState(true);
  const [text1] = useState(
    `Attention, Brave Space Explorer! Prepare for a daring journey as we navigate through a treacherous meteor shower. Only the most skilled and fearless Astro Aviators can successfully navigate through the celestial obstacles that lie ahead.`
  );
  const [text2] = useState(
    `Tap the screen to propel your spaceship upwards, defying gravity and guiding your spaceship through the meteor storm. Your bravery will be tested as you soar through the stars, avoiding collisions with looming asteroids and the unforgiving cosmic floor.`
  );
  const [text3] = useState(
    `Each successful passage through this perilous journey earns you points, bringing you one step closer to becoming the ultimate Astro Aviator. But be vigilant! A single collision could spell the end of your cosmic adventure.`
  );
  const [text4] = useState(
    `Prepare for lift-off, Commander, and may your reflexes be as swift as the speed of light. The universe awaits your daring exploits in this thrilling space odyssey!`
  );

  const { navigate, dispatch } = navigation;

  const skipText = () => {
    setShowOk(false);
    setTyping(false);
    if (currentStep < 4) {
      setOkButton(true);
    } else {
      setReadyButton(true);
    }
  };

  const handleTypingEnd = () => {
    setShowOk(false);
    setTyping(true);
    if (currentStep < 4) {
      setOkButton(true);
    } else {
      setReadyButton(true);
    }
  };

  const handleOkClick = () => {
    setShowOk(true);
    setCurrentStep(currentStep + 1);
    setOkButton(false);
    setTyping(true);
  };

  const handleReadyClick = () => {
    setCurrentStep(1);
    setOkButton(false);
    navigate('AstroAviatorGame');
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return !typing ? (
          <Text variant='speech'>{text1}</Text>
        ) : (
          <TypeWriter
            typing={typing ? 1 : 0}
            maxDelay={50}
            onTypingEnd={handleTypingEnd}
            style={{ fontFamily: 'Audiowide_400Regular' }}
          >
            {text1}
          </TypeWriter>
        );
      case 2:
        return !typing ? (
          <Text variant='speech'>{text2}</Text>
        ) : (
          <TypeWriter
            typing={typing ? 1 : 0}
            maxDelay={50}
            onTypingEnd={handleTypingEnd}
            style={{ fontFamily: 'Audiowide_400Regular' }}
          >
            {text2}
          </TypeWriter>
        );
      case 3:
        return !typing ? (
          <Text variant='speech'>{text3}</Text>
        ) : (
          <TypeWriter
            typing={typing ? 1 : 0}
            maxDelay={50}
            onTypingEnd={handleTypingEnd}
            style={{ fontFamily: 'Audiowide_400Regular' }}
          >
            {text3}
          </TypeWriter>
        );
      case 4:
        return !typing ? (
          <Text variant='speech'>{text4}</Text>
        ) : (
          <TypeWriter
            typing={typing ? 1 : 0}
            maxDelay={50}
            onTypingEnd={handleTypingEnd}
            style={{ fontFamily: 'Audiowide_400Regular' }}
          >
            {text4}
          </TypeWriter>
        );
      default:
        return null;
    }
  };

  return (
    <SetupSafeArea>
      <IconsWrapper>
        <TouchableOpacity
          onPress={() => {
            dispatch(DrawerActions.openDrawer());
          }}
        >
          <Ionicons name='md-menu' size={30} color='#009999' />
        </TouchableOpacity>
      </IconsWrapper>
      <SetupContainer>
        <SpeechContainer>
          <ImageContainer>
            <Astronaut source={{ uri: images[0] }} />
          </ImageContainer>
          <SpeechBubble>
            <MessageBubble mine text={renderCurrentStep()} />
          </SpeechBubble>
        </SpeechContainer>
        <OptionContainer>
          {okButton && (
            <Option onPress={handleOkClick}>
              <OptionText variant='body'>OK</OptionText>
            </Option>
          )}
          {readyButton && (
            <Option onPress={handleReadyClick}>
              <OptionText variant='body'>Let's Go!</OptionText>
            </Option>
          )}
          {showOk && typing && (
            <Option onPress={skipText}>
              <MaterialIcons name='double-arrow' size={20} color='#fff' />
            </Option>
          )}
        </OptionContainer>
      </SetupContainer>
    </SetupSafeArea>
  );
};
