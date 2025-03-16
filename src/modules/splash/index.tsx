import React, {useEffect} from 'react';
import {Image} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Custom Components
import CustomStatusBar from '../../components/statusBar';

// Utils
import {ScreenNames} from '../../utils/screenNames';
import {StackParamList} from '../../utils/types';

// Assets
import {Images} from '../../assets';

// Styles
import {styles} from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

type SplashScreenProps = {
  navigation: StackNavigationProp<StackParamList>;
};


// Main Component
const SplashScreen = ({navigation}: SplashScreenProps) => {
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const hasSeenTutorial = await AsyncStorage.getItem('hasSeenTutorial');
        const userToken = await AsyncStorage.getItem('userToken');
        if (!hasSeenTutorial) {
          navigation.reset({
            index: 0,
            routes: [{name: ScreenNames.Tutorial}],
          });
        } else if (userToken) {
          navigation.reset({
            index: 0,
            routes: [{name:ScreenNames.Home}],
          });
        } else {
          navigation.reset({
            index: 0,
            routes: [{name: ScreenNames.RoleSelect}],
          });
        }
      } catch (error) {
        console.error('Error checking login status:', error);
      }
    };

    const timeout = setTimeout(() => {
      checkLoginStatus();
    }, 1000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <CustomStatusBar />
      <Image source={Images.splash} style={styles.splashlogo} />
    </SafeAreaView>
  );
};
export default SplashScreen;
