import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import StackNavigation from './src/navigator/stackNavigator/StackNavigation';

const App = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StackNavigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default App;
