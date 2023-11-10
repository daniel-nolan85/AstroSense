import { useState } from 'react';
import { ScrollView, Modal } from 'react-native';
import { Text } from '../../../components/typography/text.component';
import {
  QuestionCard,
  QuestionCardCover,
  Question,
  Answers,
  Option,
  OptionText,
} from './trivia-question-card.styles';

export const TriviaQuestionCard = ({
  question,
  options,
  image,
  handleSelectedOption,
}) => {
  return (
    <QuestionCard elevation={5}>
      <QuestionCardCover key={question} source={{ uri: image }} />
      <Question>
        <Text variant='title'>{question}</Text>
      </Question>
      <ScrollView>
        <Answers>
          <Option onPress={() => handleSelectedOption(options[0])}>
            <OptionText>{options[0]}</OptionText>
          </Option>
          <Option onPress={() => handleSelectedOption(options[1])}>
            <OptionText>{options[1]}</OptionText>
          </Option>
          <Option onPress={() => handleSelectedOption(options[2])}>
            <OptionText>{options[2]}</OptionText>
          </Option>
          <Option onPress={() => handleSelectedOption(options[3])}>
            <OptionText>{options[3]}</OptionText>
          </Option>
        </Answers>
      </ScrollView>
    </QuestionCard>
  );
};
