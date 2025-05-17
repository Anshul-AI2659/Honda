import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import StackNavigation from './src/navigator/stackNavigator/stackNavigation';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Colors } from './src/utils/colors';
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.mainContainer}>
        <StackNavigation />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
export default App;
