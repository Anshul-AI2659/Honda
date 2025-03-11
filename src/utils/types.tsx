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
  Congratulation:undefined;
  SelectRole: undefined;
  SignUp: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  VerifyOtp: {phoneNumber:string};
  BottomNavigation: undefined;
};

export type AppNavigatorParamList = {
  BottomTabNavigator: NavigatorScreenParams<BottomTabParamList>;
  StackNavigator: NavigatorScreenParams<StackParamList>;
};
