import { useEffect } from 'react';
import axios from 'axios';
import { NASA_API_KEY } from '@env';
import { Text } from '../../../components/typography/text.component';
import { PlanetCard, PlanetCardCover, Info } from './planet-info-card.styles';

export const PlanetInfoCard = ({ planet = {} }) => {
  const {
    name = 'Mercury',
    photo = require('../../../../assets/planets/mercury.jpg'),
    type = 'Terrestrial',
  } = planet;

  useEffect(() => {
    fetchApod();
  }, []);

  const fetchApod = async () => {
    await axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`)
      .then((res) => console.log(res.data));
  };

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
