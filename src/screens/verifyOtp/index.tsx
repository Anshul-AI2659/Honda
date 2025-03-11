/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-catch-shadow */
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Keyboard,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView} from 'react-native-safe-area-context';

// Assets
import {Icons} from '../../assets';

// Custom Components
import CustomButton from '../../components/customButton';
import OTPInput from '../../components/customOtp';
import CustomStatusBar from '../../components/statusBar';
import CustomHeader from '../../components/customHeader';
import ContentHeader from '../../components/customContentHeader';

// Utils
import {StackParamList} from '../../utils/types';
import {ScreenNames} from '../../utils/screenNames';
import {string} from '../../utils/strings';

// Styles
import {styles} from './styles';
import {RouteProp} from '@react-navigation/native';

interface VerifyOtpProps {
  navigation: StackNavigationProp<StackParamList>;
  route: RouteProp<StackParamList, 'VerifyOtp'>;
}

// Main Component
const VerifyOtp = ({navigation, route}: VerifyOtpProps) => {
  const {phoneNumber} = route.params;
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      if (userToken) {
        setIsLoggedIn(true);
        navigation.reset({
          index: 0,
          routes: [{name: ScreenNames.Home}],
        });
      }
    };
    checkLoginStatus();
  }, [navigation]);

  useEffect(() => {
    if (timer > 0) {
      const intervalId = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [timer]);

  const handleOTPChange = (otp: string) => {
    setOtp(otp);
    setError('');
  };

  const handleVerifyOTP = async () => {
    if (attempts >= 5) {
      setError(
        'You have reached the maximum attempts. Please retry in 5 minutes.',
      );
      return;
    }

    if (otp.length !== 6) {
      setError('Please enter a 6-digit code.');
      return;
    }

    if (otp === '123456') {
      try {
        await AsyncStorage.setItem('userToken', 'your_auth_token');
        setIsLoggedIn(true);

        navigation.reset({
          index: 0,
          routes: [{name: ScreenNames.Congratulation}],
        });
      } catch (error) {
        console.log('Error setting user token:', error);
      }
    } else {
      setAttempts(prev => prev + 1);
      setError('Wrong OTP entered');
    }
  };
  const handleResend = () => {
    if (timer > 0) {
      return;
    }
    setTimer(30);
    Alert.alert(
      'Code Resent',
      'A new code has been sent to your phone number.',
    );
  };
  const isButtonDisabled = otp.length !== 6;

  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={styles.container}>
          <CustomStatusBar />
          <CustomHeader
            backButton
            headerStyle={styles.header}
            backIcon={Icons.back}
            onBackPress={navigation.goBack}
            headerImgStyle={styles.headerImg}
          />
          <View style={styles.subContainer}>
            <View>
              <ContentHeader
                headerText={string.VerifyOtp.title}
                detailText={`${string.VerifyOtp.subTitle} ${phoneNumber}` + '.'}
              />
              <OTPInput
                otpLength={6}
                onChange={handleOTPChange}
                error={error}
                autoFocus={true}
                secureTextEntry={false}
              />

              {error ? <Text style={styles.error}>{error}</Text> : null}

              <View style={styles.resendContainer}>
                <TouchableOpacity onPress={handleResend} disabled={timer > 0}>
                  {timer === 0 ? (
                    <Text style={[styles.resendLink]}>Send code again</Text>
                  ) : null}
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <CustomButton
                buttonText={string.VerifyOtp.buttonText}
                onPress={handleVerifyOTP}
                buttonStyle={styles.verifyButton}
                isButtonDisabled={isButtonDisabled}
              />
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
};

export default VerifyOtp;
