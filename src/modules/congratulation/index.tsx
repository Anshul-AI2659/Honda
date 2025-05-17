import {Image, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomStatusBar from '../../components/statusBar';
import styles from './styles';
import {ScreenNames} from '../../utils/screenNames';
import { Images } from '../../assets';
import { RootStackParamList } from '../../utils/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LottieAnimation from '../../components/LottieAnimation';

type CongratulationScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const CongratulationScreen = ({navigation,route}: CongratulationScreenProps) => {
  const {roleName,data} = route.params ?? 'Dealer'
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: ScreenNames.BottomTab,
        params: {roleName:roleName,data:data}

        }],
      });
    }, 2000);
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.mainContainer}>
      <CustomStatusBar />
      <LottieAnimation
        source={Images.animation}
        style={styles.lottie}
        loop={true}
        onAnimationFinish={() => console.log('Animation finished!')}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{'Congratulations!'}</Text>
        <Text style={styles.subTitle}>
          {'You have been signed in successfully'}
        </Text>
      </View>
    </View>
  );
};

export default CongratulationScreen;

