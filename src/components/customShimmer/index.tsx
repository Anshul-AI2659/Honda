import React, { useState, useEffect, FC } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
// import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

interface ShimmerLoaderProps {
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  style?: ViewStyle;
  isLoaded?: boolean;
}

const ShimmerLoader: FC<ShimmerLoaderProps> = ({
  width = '100%',
  height = 20,
  borderRadius = 8,
  style = {},
  isLoaded = false,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(isLoaded), 1000);
    return () => clearTimeout(timer);
  }, [isLoaded]);

  return (
    <ShimmerPlaceholder
      visible={visible}
      shimmerColors={['#E1E9EE', '#F2F8FC', '#E1E9EE']}
    //   LinearGradient={LinearGradient}
      style={[styles.shimmer, { width, height, borderRadius }, style]}
    />
  );
};

export default ShimmerLoader;
