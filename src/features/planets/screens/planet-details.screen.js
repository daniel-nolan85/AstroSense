import { useState } from 'react';
import { List } from 'react-native-paper';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { PlanetInfoCard } from '../components/planet-info-card.component';
import { SafeArea } from '../../../components/utils/safe-area.component';

const { Accordion, Icon } = List;

const Description = styled.Text`
  padding: 16px;
  background-color: white;
`;

const StatsWrapper = styled.View`
  padding: 16px 16px 0 16px;
  height: 850px;
`;

const StatsContainer = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding-bottom: 16px;
`;

const StatsTitle = styled.Text`
  width: 40%;
`;

const StatsItem = styled.Text`
  width: 40%;
`;

export const PlanetDetailsScreen = ({ route }) => {
  const [descExpanded, setDescExpanded] = useState(false);
  const [statsExpanded, setStatsExpanded] = useState(false);
  const [badgesExpanded, setBadgesExpanded] = useState(false);

  const { planet } = route.params;
  const {
    description,
    avgDistFromSun,
    diameter,
    dayDuration,
    yearDuration,
    gravity,
    avgTemp,
    atmosphere,
    yearDiscovered,
    numMoons,
  } = planet;

  return (
    <SafeArea>
      <PlanetInfoCard planet={planet} />
      <ScrollView>
        <Accordion
          title='Description'
          left={(props) => <Icon {...props} icon='book-open-variant' />}
          expanded={descExpanded}
          onPress={() => setDescExpanded(!descExpanded)}
        >
          <Description>{description}</Description>
        </Accordion>
        <Accordion
          title='Stats'
          left={(props) => <Icon {...props} icon='information' />}
          expanded={statsExpanded}
          onPress={() => setStatsExpanded(!statsExpanded)}
        >
          <StatsWrapper>
            {avgDistFromSun && (
              <StatsContainer>
                <StatsTitle>Average distance from the sun:</StatsTitle>
                <StatsItem>{avgDistFromSun[0]}</StatsItem>
              </StatsContainer>
            )}
            {diameter && (
              <StatsContainer>
                <StatsTitle>Diameter:</StatsTitle>
                <StatsItem>{diameter[0]}</StatsItem>
              </StatsContainer>
            )}
            {dayDuration && (
              <StatsContainer>
                <StatsTitle>Time to rotate on axis (a day):</StatsTitle>
                <StatsItem>{dayDuration}</StatsItem>
              </StatsContainer>
            )}
            {yearDuration && (
              <StatsContainer>
                <StatsTitle>Time to orbit the sun (a year):</StatsTitle>
                <StatsItem>{yearDuration}</StatsItem>
              </StatsContainer>
            )}
            {gravity && (
              <StatsContainer>
                <StatsTitle>Gravity:</StatsTitle>
                <StatsItem>{gravity}</StatsItem>
              </StatsContainer>
            )}
            {avgTemp && (
              <StatsContainer>
                <StatsTitle>Average temperature:</StatsTitle>
                <StatsItem>{avgTemp[0]}</StatsItem>
              </StatsContainer>
            )}
            {atmosphere && (
              <StatsContainer>
                <StatsTitle>Contents of atmosphere:</StatsTitle>
                <StatsItem>{atmosphere}</StatsItem>
              </StatsContainer>
            )}
            {yearDiscovered && (
              <StatsContainer>
                <StatsTitle>Year of discovery:</StatsTitle>
                <StatsItem>{yearDiscovered}</StatsItem>
              </StatsContainer>
            )}
            {numMoons && (
              <StatsContainer>
                <StatsTitle>Number of known moons:</StatsTitle>
                <StatsItem>{numMoons}</StatsItem>
              </StatsContainer>
            )}
          </StatsWrapper>
        </Accordion>
      </ScrollView>
    </SafeArea>
  );
};
