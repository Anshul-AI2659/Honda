import {NavigatorScreenParams} from '@react-navigation/native';

// Bottom Tab Param List
export type BottomTabParamList = {
  Home: undefined;
  Category: undefined;
  Promotion: undefined;
  Training: undefined;
  More: undefined;
  StackNavigation: NavigatorScreenParams<StackParamList>;
};

//Stack Param List
export type StackParamList = {
  SplashScreen: undefined;
  TutorialScreen: undefined;
  SelectRole: undefined;
  Login: undefined;
  VerifyOtp: {phoneNumber:string};
  Congratulation:undefined;
  BottomNavigation: undefined;
  ProductDetailPage:undefined;
  Honda_Category:undefined;
  Generators:undefined;
};

export type AppNavigatorParamList = {
  BottomTabNavigator: NavigatorScreenParams<BottomTabParamList>;
  StackNavigator: NavigatorScreenParams<StackParamList>;
};
