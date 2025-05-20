import {Image, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomStatusBar from '../../components/statusBar';
<<<<<<< HEAD
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
=======
import {Icons} from '../../assets';
import styles from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../utils/types';
import {ScreenNames} from '../../utils/screenNames';

type CongratulationScreenProps = {
  navigation: StackNavigationProp<StackParamList>;
};

const CongratulationScreen = ({navigation}: CongratulationScreenProps) => {
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.reset({
        index: 0,
<<<<<<< HEAD
        routes: [{name: ScreenNames.BottomTab,
        params: {roleName:roleName,data:data}

        }],
      });
    }, 2000);
=======
        routes: [{name: ScreenNames.Home}],
      });
    }, 1500);
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
<<<<<<< HEAD
    <View style={styles.mainContainer}>
      <CustomStatusBar />
      <LottieAnimation
        source={Images.animation}
        style={styles.lottie}
        loop={true}
        onAnimationFinish={() => console.log('Animation finished!')}
      />
=======
    <SafeAreaView style={styles.mainContainer}>
      <CustomStatusBar />
      <Image source={Icons.congratulation} style={styles.img} />
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
      <View style={styles.textContainer}>
        <Text style={styles.title}>{'Congratulations!'}</Text>
        <Text style={styles.subTitle}>
          {'You have been signed in successfully'}
        </Text>
      </View>
<<<<<<< HEAD
    </View>
=======
    </SafeAreaView>
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
  );
};

export default CongratulationScreen;

