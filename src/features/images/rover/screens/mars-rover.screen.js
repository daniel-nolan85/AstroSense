import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { Spacer } from '../../../../components/spacer/spacer.component';
import { SafeArea } from '../../../../components/utils/safe-area.component';
import { rovers } from '../../../../services/images/rover/rover.data.json';
import { MarsRoverCard } from '../components/mars-rover-card.components';

const RoverList = styled.FlatList.attrs({
  contentContainerStyle: { paddingHorizontal: 16 },
})``;

export const MarsRoverScreen = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <SafeArea>
      <RoverList
        data={rovers}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigate('MarsRoverImages', {
                  rover: item,
                });
              }}
            >
              <Spacer position='bottom' size='large'>
                <MarsRoverCard rover={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
