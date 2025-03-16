import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

// Utils
import {StackParamList} from '../../utils/types';

// Screens
import SplashScreen from '../../modules/splash';
import TutorialScreen from '../../modules/tutorialScreen';
import SelectRole from '../../modules/auth/selectRole';
import Login from '../../modules/auth/login';
import VerifyOtp from '../../modules/auth/verifyOtp';
import CongratulationScreen from '../../modules/congratulation';
import ProductDetailPage from '../../modules/productDetailPage';
import Honda_Category from '../../modules/honda_Category';
import Generators from '../../modules/generators';
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
        <Stack.Screen name="Honda_Category" component={Honda_Category} />
        <Stack.Screen name="Generators" component={Generators} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigation;
