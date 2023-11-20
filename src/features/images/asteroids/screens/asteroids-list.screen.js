import { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import axios from 'axios';
import { NASA_API_KEY } from '@env';
import { SafeArea } from '../../../../components/utils/safe-area.component';
import { Spacer } from '../../../../components/spacer/spacer.component';
import { LoadingSpinner } from '../../../../../assets/loading-spinner';
import { AsteroidInfoCard } from '../components/asteroids-info-card.component';

const AsteroidList = styled.FlatList.attrs({
  contentContainerStyle: { padding: 16 },
})``;

export const AsteroidsListScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [asteroids, setAsteroids] = useState([]);

  useEffect(() => {
    fetchAsteroids();
  }, []);

  const fetchAsteroids = async () => {
    setIsLoading(true);
    await axios
      .get(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-11-10&end_date=2023-11-13&api_key=${NASA_API_KEY}`
      )
      .then((res) => {
        setIsLoading(false);
        setCount(res.data.element_count);
        const asteroidsArray = Object.entries(res.data.near_earth_objects);
        asteroidsArray.sort((a, b) => new Date(a[0]) - new Date(b[0]));
        setAsteroids(asteroidsArray);
      });
  };

  const { navigate } = navigation;

  return (
    <SafeArea>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {/* {!error ? ( */}
          <AsteroidList
            data={asteroids}
            renderItem={({ item }) => {
              const [date, asteroids] = item;
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigate('AsteroidsDetails', {
                      asteroids,
                    });
                  }}
                >
                  <Spacer position='bottom' size='large'>
                    <AsteroidInfoCard date={date} />
                  </Spacer>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.name}
            ListFooterComponent={<Spacer position='bottom' size='xxLarge' />}
          />
          {/* ) : (
            <Spacer position='left' size='xLarge'>
              <Text variant='error'>{error}</Text>
            </Spacer>
          )} */}
        </>
      )}
    </SafeArea>
  );
};