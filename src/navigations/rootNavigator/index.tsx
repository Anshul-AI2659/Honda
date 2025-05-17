import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenNames } from '../../utils/screenNames';
import Tutorial from '../../modules/onBoarding/tutorial';
import Role from '../../modules/auth/role';
import SignIn from '../../modules/auth/signin';
import BottomTabNavigator from '../bottomtab';
import DealerSearch from '../../modules/dealerSearch';
import Splash from '../../modules/onBoarding/splashScreen';
import ProductDetailPage from '../../modules/productDetail';
import Generators from '../../modules/generators';
import NewArrivals from '../../modules/newArrivals';
import Notification from '../../modules/notification';
import Setting from '../../modules/settings';
import Notifications from '../../modules/settings/screens/Notifications';
import FAQs from '../../modules/settings/screens/FAQs';
import Profile from '../../modules/profile';
import RetailerForm from '../../modules/retailerForm';
import YouTubePlayerScreen from '../../modules/videoView';
import ContactUs from '../../modules/settings/screens/contactUs';
import Retailer from '../../modules/retailer';
import VerifyOtp from '../../modules/auth/verifyOtp';
import EquipmentTraining from '../../modules/equipmentTraining';
import DownLoadContent from '../../modules/DownloadContent';
import CongratulationScreen from '../../modules/congratulation';
import CustomerSupport from '../../modules/settings/screens/customerSupport';
import WebView from '../../modules/WebView';
import Engines from '../../modules/engines';
import Search from '../../modules/search';
import HondaMarine from '../../modules/hondaMarine';
import CommonForm from '../../modules/auth/commonForm';
import AgriAndMachinary from '../../modules/agriAndMachinary';
import VerifyEmail from '../../modules/verifyEmail';
import ModelCalculator from '../../modules/modelCalculator';
import PromotionSeeMore from '../../modules/promotionSeeMore';
import CommonDownloadScreen from '../../modules/commonDownloadScreen';
import HondaCategory from '../../modules/honda_Category';
import YourProducts from '../../modules/yourProducts';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
      }}>
      <Stack.Screen
        component={Splash}
        name={ScreenNames.Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Tutorial}
        name={ScreenNames.Tutorial}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Role}
        name={ScreenNames.Role}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={SignIn}
        name={ScreenNames.Signin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={VerifyOtp}
        name={ScreenNames.Otp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={BottomTabNavigator}
        name={ScreenNames.BottomTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={DealerSearch}
        name={ScreenNames.DealerSearch}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={ProductDetailPage}
        name={ScreenNames.ProductDetailPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={HondaCategory}
        name={ScreenNames.HondaCategory}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        component={Generators}
        name={ScreenNames.GenratorProductListing}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        component={NewArrivals}
        name={ScreenNames.newArrivals}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        component={Notification}
        name={ScreenNames.Notification}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        component={Setting}
        name={ScreenNames.Settings}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        component={Notifications}
        name={ScreenNames.ToggleNotifications}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        component={FAQs}
        name={ScreenNames.FaqScreen}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        component={WebView}
        name={ScreenNames.WebViewScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        component={Profile}
        name={ScreenNames.ProfileScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        component={Retailer}
        name={ScreenNames.RetailerScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={RetailerForm}
        name={ScreenNames.RetailerFormScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        component={YouTubePlayerScreen}
        name={ScreenNames.YoutubeVideoScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        component={ContactUs}
        name={ScreenNames.ContactUs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={EquipmentTraining}
        name={ScreenNames.EquipmentTraining}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        component={DownLoadContent}
        name={ScreenNames.DownLoadContentScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        component={CongratulationScreen}
        name={ScreenNames.CongratulationScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        component={CustomerSupport}
        name={ScreenNames.CustomerSupportScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        component={ModelCalculator}
        name={ScreenNames.modelCalculator}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        component={Engines}
        name={ScreenNames.engineScreenName}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        component={Search}
        name={ScreenNames.Search}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={HondaMarine}
        name={ScreenNames.hondaMarineScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={CommonForm}
        name={ScreenNames.commonFormScreen}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        component={AgriAndMachinary}
        name={ScreenNames.hiPlusAgriMachinery}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        component={VerifyEmail}
        name={ScreenNames.VerifyEmail}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        component={PromotionSeeMore}
        name={ScreenNames.promotionSeeMore}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        component={CommonDownloadScreen}
        name={ScreenNames.commonDownloadScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        component={YourProducts}
        name={ScreenNames.yourProductsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
