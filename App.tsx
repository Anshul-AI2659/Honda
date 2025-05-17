// import React from 'react';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import {
//   LogBox,
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';
// import NativeStack from './src/navigation/stackNavigation';
// import { Provider } from 'react-redux';
// import { store, persistor } from './src/redux/store';

// function App(): React.JSX.Element {
//   LogBox.ignoreAllLogs();
//   return (
//     <Provider store={store}>
//       <GestureHandlerRootView style={{ flex: 1 }}>
//         <SafeAreaView style={styles.container}>
//           <NativeStack />
//         </SafeAreaView>
//       </GestureHandlerRootView>
//     </Provider>
//   );
// }

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   }
// })
//

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import ErrorBoundary from './src/components/errorBoundary';
import Splash from './src/modules/onBoarding/splashScreen';
import MainNavigation from './src/navigations';
import { useEffect, useState } from 'react';
import { store } from './src/store';

const App = () => {
  const [isSplash, setIsSplash] = useState(true);

  useEffect(() => {
    SplashScreen.hide();
    const splashTimeOut = setTimeout(() => {
      setIsSplash(false);
    }, 3000);
    return () => clearTimeout(splashTimeOut);
  }, []);

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <SafeAreaProvider>
          {/* {isSplash ? <Splash /> : <MainNavigation />} */}
          <MainNavigation/>
        </SafeAreaProvider>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
