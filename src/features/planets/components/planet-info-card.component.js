import { useEffect } from 'react';
import axios from 'axios';
import { NASA_API_KEY } from '@env';
import { Text } from '../../../components/typography/text.component';
import { PlanetCard, PlanetCardCover, Info } from './planet-info-card.styles';

export const PlanetInfoCard = ({ planet }) => {
  const { name, photo, type } = planet;

  useEffect(() => {
    fetchApod();
  }, []);

  const fetchApod = async () => {
    await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`
    );
  };

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <PlanetCard elevation={5}>
      <PlanetCardCover key={name} source={{ uri: photo }} />
      <Info>
        <Text variant='title'>{capitalizeFirstLetter(name)}</Text>
        <Text variant='body'>{capitalizeFirstLetter(type)}</Text>
      </Info>
    </PlanetCard>
  );
};
