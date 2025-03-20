import {NavigatorScreenParams} from '@react-navigation/native';
import {ScreenNames} from './screenNames';

// Top Tab Param List
export type TopTabParamList = {
  All: undefined;
  Inverter: undefined;
  SilentSeries: undefined;
  HandySeries: undefined;
};

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
  [ScreenNames.Splash]: undefined;
  [ScreenNames.Tutorial]: undefined;
  [ScreenNames.RoleSelect]: undefined;
  [ScreenNames.Login]: undefined;
  [ScreenNames.VerifyOtp]: {phoneNumber: string};
  [ScreenNames.Congratulation]: undefined;
  [ScreenNames.Home]: undefined;
  [ScreenNames.ProductDetail]: undefined;
  [ScreenNames.honda_Category]: undefined;
  [ScreenNames.Generators]: undefined;
  [ScreenNames.NewArrivals]: undefined;
  [ScreenNames.All]: undefined;
  [ScreenNames.Notification]: undefined;
  [ScreenNames.NewHondaCategory]: undefined;
  [ScreenNames.NewGenerators]:undefined;
  [ScreenNames.Tillers]:undefined;
};

export type AppNavigatorParamList = {
  BottomTabNavigator: NavigatorScreenParams<BottomTabParamList>;
  StackNavigator: NavigatorScreenParams<StackParamList>;
};
