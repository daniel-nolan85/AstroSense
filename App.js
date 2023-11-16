import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import {
  useFonts as useAudiowide,
  Audiowide_400Regular,
} from '@expo-google-fonts/audiowide';
import {
  useFonts as useQuestrial,
  Questrial_400Regular,
} from '@expo-google-fonts/questrial';
import { theme } from './src/infrastructure/theme';
import { PlanetsContextProvider } from './src/services/planets/planets.context';
import { ImagesContextProvider } from './src/services/images/images.context';
import { Navigation } from './src/infrastructure/navigation';

export default function App() {
  const [audiowideLoaded] = useAudiowide({ Audiowide_400Regular });
  const [questrialLoaded] = useQuestrial({ Questrial_400Regular });
  if (!audiowideLoaded || !questrialLoaded) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <PlanetsContextProvider>
          <ImagesContextProvider>
            <Navigation />
          </ImagesContextProvider>
        </PlanetsContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );
}
