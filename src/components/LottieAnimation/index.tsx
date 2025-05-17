import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import LottieView from 'lottie-react-native';

interface LottieAnimationProps {
  source: object | string;
  autoPlay?: boolean;
  loop?: boolean;
  speed?: number;
  style?: StyleProp<ViewStyle>;
  onAnimationFinish?: () => void;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  source,
  autoPlay = true,
  loop = true,
  speed = 1,
  style,
  onAnimationFinish,
}) => {
  return (
    <LottieView
      source={typeof source === 'string' ? { uri: source } : source}
      autoPlay={autoPlay}
      loop={loop}
      speed={speed}
      style={style}
      onAnimationFinish={onAnimationFinish}
    />
  );
};

export default LottieAnimation;
