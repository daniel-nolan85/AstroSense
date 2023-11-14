import { ScrollView } from 'react-native';
import { Text } from '../../../components/typography/text.component';
import { ApodCard, ApodCardCover, Info } from './apod-card.styles';

export const ApodInfoCard = ({ image, title, explanation }) => {
  console.log(image);
  return (
    <ApodCard elevation={5}>
      <ApodCardCover key={title} source={{ uri: image }} />
      <ScrollView>
        <Info>
          <Text variant='title'>{title}</Text>
          <Text variant='body'>{explanation}</Text>
        </Info>
      </ScrollView>
    </ApodCard>
  );
};
