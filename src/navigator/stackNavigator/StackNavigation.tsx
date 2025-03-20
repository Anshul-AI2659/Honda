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
import NewArrivals from '../../modules/newArrivals';
import BottomNavigation from '../bottomNavigation';
import {ScreenNames} from '../../utils/screenNames';
import Notification from '../../modules/Notification';
import newHondaCategory from '../../modules/hondaCategoryNew';
import NewGenerators from '../../modules/newGenerator';
import Tillers from '../../modules/tillers';
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
        <Stack.Screen name={ScreenNames.Home} component={BottomNavigation} />
        <Stack.Screen name={ScreenNames.NewArrivals} component={NewArrivals} />
        <Stack.Screen
          name={ScreenNames.Notification}
          component={Notification}
        />
        <Stack.Screen
          name={ScreenNames.Congratulation}
          component={CongratulationScreen}
        />
        <Stack.Screen
          name={ScreenNames.ProductDetail}
          component={ProductDetailPage}
        />
        <Stack.Screen
          name={ScreenNames.honda_Category}
          component={Honda_Category}
        />
        <Stack.Screen name={ScreenNames.Generators} component={Generators} />
        <Stack.Screen
          name={ScreenNames.NewHondaCategory}
          component={newHondaCategory}
        />
         <Stack.Screen
          name={ScreenNames.NewGenerators}
          component={NewGenerators}
        />
        <Stack.Screen
          name={ScreenNames.Tillers}
          component={Tillers}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigation;
