// library imports
import React from 'react';
// import FastImage, { ImageStyle, Source } from 'react-native-fast-image';
import { Image, StyleProp } from 'react-native';
import styles from './styles';

// types
interface CustomImageProps {
  source: any;
  style?: any;
  resizeMode?: 'contain' | 'cover' | 'stretch' | 'center';
  onLoad?: () => void;
  onError?: () => void;
}

export const CustomImage: React.FC<CustomImageProps> = ({
  source,
  style,
  resizeMode = 'cover',
  onLoad,
  onError,
}) => {
  return (
    <Image
      source={source}
      style={[styles.defaultStyle, style]}
      resizeMode={resizeMode}
      onLoad={onLoad}
      onError={onError}
    />
  );
};
