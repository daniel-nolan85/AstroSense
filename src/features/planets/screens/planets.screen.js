import { useContext } from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { PlanetInfoCard } from '../components/planet-info-card.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utils/safe-area.component';
import { PlanetsContext } from '../../../services/planets/planets.context';
import { Text } from '../../../components/typography/text.component';
import { LoadingSpinner } from '../../../../assets/loading-spinner';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const PlanetList = styled.FlatList.attrs({
  contentContainerStyle: { padding: 16 },
})``;

export const PlanetsScreen = () => {
  const { planets, isLoading, error } = useContext(PlanetsContext);
  return (
    <SafeArea>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <SearchContainer>
            <Searchbar />
          </SearchContainer>
          {!error ? (
            <PlanetList
              data={planets}
              renderItem={({ item }) => {
                return (
                  <Spacer position='bottom' size='large'>
                    <PlanetInfoCard planet={item} />
                  </Spacer>
                );
              }}
              keyExtractor={(item) => item.name}
              ListFooterComponent={<Spacer position='bottom' size='xxLarge' />}
            />
          ) : (
            <Text variant='error'>{error}</Text>
          )}
        </>
      )}
    </SafeArea>
  );
};
