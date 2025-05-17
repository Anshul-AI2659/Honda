// components/CustomLoader.tsx
import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const CustomLoader = () => {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
});

export default CustomLoader;
