import { Text } from '../../../../components/typography/text.component';
import {
  RoverCard,
  RoverCardCover,
  Info,
} from '../styles/mars-rover-card.styles';

export const MarsRoverCard = ({ rover }) => {
  const { name, image } = rover;

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <RoverCard elevation={5}>
      <RoverCardCover key={name} source={{ uri: image }} />
      <Info>
        <Text variant='title'>{capitalizeFirstLetter(name)}</Text>
      </Info>
    </RoverCard>
  );
};
