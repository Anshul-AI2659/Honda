import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

// Utils
import {StackParamList} from '../../utils/types';

// Screens
import SplashScreen from '../../screens/splash';
import TutorialScreen from '../../screens/tutorialScreen';
import SelectRole from '../../screens/selectRole';
import Login from '../../screens/login';
import VerifyOtp from '../../screens/verifyOtp';
import CongratulationScreen from '../../screens/congratulation';
import ProductDetailPage from '../../screens/productDetailPage';
import BottomNavigation from '../bottomNavigation';

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
        <Stack.Screen name="ProductDetailPage" component={ProductDetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigation;
