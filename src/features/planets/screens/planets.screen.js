import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { PlanetInfoCard } from '../components/planet-info-card.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utils/safe-area.component';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const PlanetList = styled.FlatList.attrs({
  contentContainerStyle: { padding: 16 },
})``;

export const PlanetsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <PlanetList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
          { name: 10 },
        ]}
        renderItem={() => (
          <Spacer position='bottom' size='large'>
            <PlanetInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
        ListFooterComponent={<Spacer position='bottom' size='xxLarge' />}
      />
    </SafeArea>
  );
};
