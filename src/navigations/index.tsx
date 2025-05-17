import * as React from 'react';
import { navigationRef } from './navigationServices';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../modules/onBoarding/splashScreen';
import RootNavigator from './rootNavigator';

const MainNavigation = () => {
  return (
    <NavigationContainer
      onReady={() => SplashScreen.hide()}
      fallback={<Splash />}
      ref={navigationRef}>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default MainNavigation; 
