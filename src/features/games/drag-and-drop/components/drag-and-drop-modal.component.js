import { Modal } from 'react-native';
import LottieView from 'lottie-react-native';
import { SafeArea } from '../../../../components/utils/safe-area.component';
import {
  ModalWrapper,
  ModalView,
  AnimationWrapper,
  Congratulations,
  Option,
  OptionText,
} from '../styles/drag-and-drop-modal.styles';
import { Text } from '../../../../components/typography/text.component';

export const DragAndDropModal = ({ handlePlayAgain, isGameWon }) => {
  return (
    <SafeArea>
      <Modal visible={isGameWon} transparent={true} animationType='slide'>
        <ModalWrapper>
          <ModalView>
            <AnimationWrapper>
              <LottieView
                key='animation'
                autoPlay
                loop
                resizeMode='cover'
                source={require('../../../../../assets/correct.json')}
              />
            </AnimationWrapper>
            <Congratulations variant='title'>You did it!</Congratulations>
            <Option onPress={handlePlayAgain}>
              <OptionText>Play Again</OptionText>
            </Option>
          </ModalView>
        </ModalWrapper>
      </Modal>
    </SafeArea>
  );
};
