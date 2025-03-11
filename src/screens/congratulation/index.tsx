import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomStatusBar from '../../components/statusBar';
import {Icons} from '../../assets';
import {vh, vw} from '../../utils/dimension';
import {Colors} from '../../utils/colors';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../utils/types';
import {ScreenNames} from '../../utils/screenNames';

type CongratulationScreenProps = {
  navigation: StackNavigationProp<StackParamList>;
};

const CongratulationScreen = ({navigation}: CongratulationScreenProps) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: ScreenNames.Home}],
      });
    }, 1500);
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomStatusBar />
      <Image source={Icons.congratulation} style={styles.img} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{'Congratulations!'}</Text>
        <Text style={styles.subTitle}>
          {'You have been signed in successfully'}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default CongratulationScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.White,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: vw(120),
    height: vw(120),
    resizeMode: 'contain',
  },
  textContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: vh(10),
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#656565',
    marginTop: vh(10),
  },
});
