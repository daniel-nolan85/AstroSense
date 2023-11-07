import { Text } from '../../../components/typography/text.component';
import { PlanetCard, PlanetCardCover, Info } from './planet-info-card.styles';

export const PlanetInfoCard = ({ planet }) => {
  const { name, photo, type } = planet;

  return (
    <PlanetCard elevation={5}>
      <PlanetCardCover key={name} source={{ uri: photo }} />
      <Info>
        <Text variant='title'>{name}</Text>
        <Text variant='body'>{type}</Text>
      </Info>
    </PlanetCard>
  );
};
