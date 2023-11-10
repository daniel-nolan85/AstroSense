import { View, Animated } from 'react-native';

export const ProgressBar = ({ progress, questionsAmount }) => {
  const progressAnim = progress.interpolate({
    inputRange: [0, questionsAmount],
    outputRange: ['10%', '100%'],
  });

  return (
    <View
      style={{
        width: '90%',
        height: 20,
        borderRadius: 20,
        backgroundColor: '#00000020',
        marginHorizontal: 20,
      }}
    >
      <Animated.View
        style={[
          {
            height: 20,
            borderRadius: 20,
            backgroundColor: '#009999',
          },
          {
            width: progressAnim,
          },
        ]}
      ></Animated.View>
    </View>
  );
};
