// Library Imports
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Animated, Image, ImageBackground} from 'react-native';
// Asset Imports
import { Images } from '../../../assets';
// Utility Imports
import styles from './styles';
import { ScreenNames } from '../../../utils/screenNames';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomStatusBar from '../../../components/statusBar';

// Style Imports

const Splash = () => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const navigation: any = useNavigation();

  const viewAnimate = () =>
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: false,
    }).start();

  // useEffect(() => {
  //   const checkLoginStatus = async () => {
  //     const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
  //     const hasSeenTutorial = await AsyncStorage.getItem('hasSeenTutorial');
  //     setTimeout(() => {
  //       navigation.replace(ScreenNames.Tutorial);
  //     }, 2000);
  //   };
  //   viewAnimate();
  //   checkLoginStatus();
  // }, []);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const accessToken = await AsyncStorage.getItem('accessToken');
      const hasSeenTutorial = await AsyncStorage.getItem('hasSeenTutorial');
      const isLoggedIn = await AsyncStorage.getItem('isLoggedIn')

      console.log('dmdkmdkmkdmdkmdkm',accessToken,hasSeenTutorial,isLoggedIn);
      
      setTimeout(() => {
        if (accessToken) {
          // User is logged in — go straight to home
          navigation.replace(ScreenNames.BottomTab);
        } else if (!hasSeenTutorial) {
          // First-time user — show tutorial
          navigation.replace(ScreenNames.Tutorial);
        } else {
          // Not logged in but has seen tutorial — go to role/signin
          navigation.replace(ScreenNames.Role);
        }
      }, 2000);
    };
    viewAnimate();
    checkLoginStatus();
  }, []);

  return (
    <>
    <Animated.View
      style={[styles.containers, {opacity: fadeAnim}]}
      testID="splash">
       <CustomStatusBar />
      <Image source={Images.hondaSplashLogo} style={styles.container}></Image>
    </Animated.View>
    </>
  );
};

export default Splash;
