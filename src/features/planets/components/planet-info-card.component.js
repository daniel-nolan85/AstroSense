import { useEffect } from 'react';
import { Text } from '../../../components/typography/text.component';
import { PlanetCard, PlanetCardCover, Info } from './planet-info-card.styles';

export const PlanetInfoCard = ({ planet = {} }) => {
  const {
    name = 'Mercury',
    photo = require('../../../../assets/planets/mercury.jpg'),
    type = 'Terrestrial',
  } = planet;

  return (
    <PlanetCard elevation={5}>
      <PlanetCardCover key={name} source={photo} />
      <Info>
        <Text variant='title'>{name}</Text>
        <Text variant='body'>{type}</Text>
      </Info>
    </PlanetCard>
  );
};
