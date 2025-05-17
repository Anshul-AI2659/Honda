import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

// Utils
import {StackParamList} from '../../utils/types';

// Screens

import SplashScreen from '../../modules/splash';
import Login from '../../modules/auth/login';
import VerifyOtp from '../../modules/auth/verifyOtp';
import CongratulationScreen from '../../modules/congratulation';
import TutorialScreen from '../../modules/tutorialScreen';
import SelectRole from '../../modules/auth/selectRole';
import { ScreenNames } from '../../utils/screenNames';
import BottomNavigation from '../bottomNavigation/bottomNavigation';



const Stack = createNativeStackNavigator<StackParamList>();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ScreenNames.Splash}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={ScreenNames.Splash} component={SplashScreen} />
        <Stack.Screen name={ScreenNames.Tutorial} component={TutorialScreen} />
        <Stack.Screen name={ScreenNames.RoleSelect} component={SelectRole} />
        <Stack.Screen name={ScreenNames.Login} component={Login} />
        <Stack.Screen name={ScreenNames.VerifyOtp} component={VerifyOtp} />
        <Stack.Screen name={ScreenNames.BottomNavigation} component={BottomNavigation} />
        <Stack.Screen name={ScreenNames.Congratulation} component={CongratulationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigation;