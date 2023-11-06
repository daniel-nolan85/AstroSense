import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

const { Cover } = Card;

export const PlanetCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const PlanetCardCover = styled(Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
  flex-direction: row;
  justify-content: space-between;
`;
