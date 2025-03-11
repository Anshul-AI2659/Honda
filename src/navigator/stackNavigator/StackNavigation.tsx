import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

// Utils
import {StackParamList} from '../../utils/types';

// Screens
import SplashScreen from '../../screens/splash';
import Login from '../../screens/login';
import VerifyOtp from '../../screens/verifyOtp';
import TutorialScreen from '../../screens/tutorialScreen';
import SelectRole from '../../screens/selectRole';
import BottomNavigation from '../bottomNavigation';
import CongratulationScreen from '../../screens/congratulation';

const Stack = createNativeStackNavigator<StackParamList>();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="TutorialScreen" component={TutorialScreen} />
        <Stack.Screen name="SelectRole" component={SelectRole} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="VerifyOtp" component={VerifyOtp} />
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
        <Stack.Screen name="Congratulation" component={CongratulationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigation;
