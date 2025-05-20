<<<<<<< HEAD
import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  Keyboard,
  Text,
  TextInput,
=======
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-catch-shadow */
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
<<<<<<< HEAD
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useAppDispatch} from '../../../hooks';
import {verifyOtpAction} from '../../../Redux/Actions/authAction';
import CustomButton from '../../../components/CustomButton';
import CustomHeader from '../../../components/customHeader';
import CustomStatusBar from '../../../components/statusBar';
import {ScreenNames} from '../../../utils/screenNames';
import {RootStackParamList} from '../../../utils/types';
import colors from '../../../utils/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {authAction} from '../../../Redux/Slices/authslice';
import CustomSnackBar from '../../../components/customSnackBar';
import {Images} from '../../../assets';
import styles from './styles';

type VerifyOtpProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.Signin
>;

const VerifyOtp = ({route}) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<VerifyOtpProp>();
  const {phoneNumber} = route.params || {phoneNumber: ''};
  const {roleName} = route?.params ?? 'Dealer';
  const [loading, setLoading] = useState<boolean>(false);
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const [isOtpInvalid, setIsOtpInvalid] = useState<boolean>(false);
  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  const inputRefs = useRef<(TextInput | null)[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [attempts, setAttempts] = useState<number>(2);
  const [timer, setTimer] = useState<number>(59);
  const [isTimerExpired, setIsTimerExpired] = useState<boolean>(false);
  const [otpExpiryTime, setOtpExpiryTime] = useState<number>(300); // 5 minutes
  const [isOtpExpired, setIsOtpExpired] = useState<boolean>(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const insets = useSafeAreaInsets();

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    // Resend OTP Timer
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    } else {
      setIsTimerExpired(true);
      // setErrorMessage('The OTP has expired. Please request a new one.');
      if (interval) clearInterval(interval);
    }

    // OTP Expiry Timer (5 minutes)
    const otpInterval = setInterval(() => {
      if (otpExpiryTime > 0) {
        setOtpExpiryTime(prev => prev - 1);
      } else {
        setIsOtpExpired(true);
        setErrorMessage('The OTP has expired. Please request a new one.');
      }
    }, 1000);

    return () => {
      if (interval) clearInterval(interval);
      if (otpInterval) clearInterval(otpInterval);
    };
  }, [timer, otpExpiryTime]);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text.replace(/[^0-9]/g, '');
    setOtp(newOtp);
    setIsOtpInvalid(false);

    if (text) {
      if (index < 5) {
        inputRefs.current[index + 1]?.focus();
        setFocusedIndex(index + 1);
      }
    } else {
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
        setFocusedIndex(index - 1);
      }
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    const key = e.nativeEvent.key;

    if (key === 'Backspace' || key === 'ArrowLeft') {
      if (otp[index] === '' && index > 0) {
        inputRefs.current[index - 1]?.focus();
        setFocusedIndex(index - 1);
      } else if (otp[index] !== '') {
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
        setIsOtpInvalid(true);
      }
    }

    if (
      (key === 'Enter' || key === 'Return' || key === 'ArrowRight') &&
      otp[index] !== ''
    ) {
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1]?.focus();
        setFocusedIndex(index + 1);
      } else {
        inputRefs.current[index]?.blur();
        handleSubmit();
      }
    }
  };


const isSubmittingRef = useRef(false);
const handleSubmit = async () => {
  if (isSubmittingRef.current) return;

  isSubmittingRef.current = true; // immediate lock

  if (isOtpExpired) {
    setErrorMessage('The OTP has expired. Please request a new one');
    isSubmittingRef.current = false;
    return;
  }

  const isOtpValid = otp.every(digit => digit.match(/^\d$/));
  if (!isOtpValid) {
    setErrorMessage('Invalid OTP. Please enter a valid 6-digit code.');
    isSubmittingRef.current = false;
    return;
  }

  try {
    setIsVerifying(true); // for UI feedback

    const payload = {
      countryCode: '+91',
      mobileNumber: phoneNumber,
      otp: Number(otp.join('')),
      deviceToken: 'hgjkljhgfdsghjkljhgfdghjkl;',
      deviceType: '1',
      roleName,
    };

    const response = await dispatch(verifyOtpAction(payload)).unwrap();
    console.log('OTP Verification Success:', response);

    if (response?.statusCode === 200) {
      const accessToken = response?.data?.accessToken;
      if (accessToken) {
        dispatch(authAction?.setToken(accessToken));
        await AsyncStorage.setItem('accessToken', accessToken);
        await AsyncStorage.setItem('isLoggedIn', 'true');
        await AsyncStorage.setItem('hasSeenTutorial', 'true');
      }

      if (roleName === 'Customer' && !response?.data?.isAlreadyRegistered) {
        CustomSnackBar.show(response?.message || 'OTP verified', 'success', 600);
        setTimeout(() => {
          navigation.navigate(ScreenNames.commonFormScreen, { roleName, phoneNumber });
        }, 600);
      } else {
        setTimeout(() => {
          CustomSnackBar.show(response?.message || 'OTP verified', 'success', 400);
          navigation.navigate(ScreenNames.CongratulationScreen, {
            roleName,
            data: response?.data,
          });
        }, 600);
      }
    } else {
      CustomSnackBar.show(response?.message || 'Invalid OTP', 'error', 500);
      setIsOtpInvalid(true);
    }
  } catch (err) {
    console.log('OTP Verification Failed:', err);
    setAttempts(prev => prev - 1);
    setErrorMessage('Invalid OTP. Please enter a valid 6-digit code.');
    setIsOtpInvalid(true);
  } finally {
    setIsVerifying(false);
    setTimeout(() => {
      isSubmittingRef.current = false; // unlock after slight delay
    }, 1500); // safety window
  }
};

  const handleResendCode = () => {
    setTimer(59);
    setIsTimerExpired(false);
    setOtp(['', '', '', '', '', '']);
    setOtpExpiryTime(300); // Reset OTP expiry time to 5 minutes
    setErrorMessage('OTP has been resent successfully');
    inputRefs.current[0]?.focus();
    setTimeout(() => {
      setErrorMessage('');
    }, 4000);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container, {paddingTop: insets.top}]}>
        <CustomStatusBar />
        <CustomHeader
          headerStyle={styles.header}
          leftIcon={Images.backarrow}
          leftIconStyle={styles.backIcon}
          onleftPress={navigation.goBack}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Verify Phone Number</Text>
          <Text style={styles.subtitle}>
            Enter the code sent to number {phoneNumber}
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.changeNumber}>Change Number?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.otpContainer}>
          {otp?.map((digit, index) => (
            <TextInput
              selectionColor={colors.primary}
              key={index}
              ref={ref => {
                inputRefs.current[index] = ref;
              }}
              value={digit}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={text => handleChange(text, index)}
              onKeyPress={e => handleKeyPress(e, index)}
              onFocus={() => setFocusedIndex(index)}
              style={[
                styles.otpInput,
                isOtpInvalid && styles.errorInput,
                focusedIndex === index && !digit && styles.focusedInput,
              ]}
            />
          ))}
        </View>
        {errorMessage ? (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        ) : null}
        {isTimerExpired ? (
          <TouchableOpacity onPress={handleResendCode}>
            <Text style={[styles.resendText, {color: colors.primary}]}>
              Send code again
            </Text>
          </TouchableOpacity>
        ) : 
        (
          <View style={styles.timeView}>
            <Text style={styles.resendCode}>Resend Code in </Text>
            <Image source={Images.timer} style={styles.timerImg} />
            <Text style={styles.timer}>
              {timer > 0 
                ? `00:${timer < 10 ? `0${timer}` : timer}s`
                : '00:00s'
              }
            </Text>
          </View>
        )}
        <View style={styles.bottomView}>
          <CustomButton
            buttonText="VERIFY"
            onPress={handleSubmit}
            // isButtonDisabled={!otp.every(digit => digit.match(/^\d$/))}
            isButtonDisabled={
              !otp.every(digit => digit.match(/^\d$/)) || isVerifying
            }
            buttonStyle={styles.button}
            disabledButtonStyle={styles.disabledButton}
            textStyle={styles.buttonText}
            disabledButtonTextStyle={{color: colors.descritptionText}}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default VerifyOtp;
=======
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView} from 'react-native-safe-area-context';

// Assets
import {Icons} from '../../../assets';

// Custom Components
import CustomButton from '../../../components/customButton';
import OTPInput from '../../../components/customOtp';
import CustomStatusBar from '../../../components/statusBar';
import CustomHeader from '../../../components/customHeader';
import ContentHeader from '../../../components/customContentHeader';

// Utils
import {StackParamList} from '../../../utils/types';
import {ScreenNames} from '../../../utils/screenNames';
import {string} from '../../../utils/strings';

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
  const [timer, setTimer] = useState(59);

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
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
      style={{flex: 1}}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={styles.container}>
          <CustomStatusBar />
          <CustomHeader
            leftIcon={Icons.back}
            onleftPress={navigation.goBack}
            leftButtonStyle={styles.backButton}
          />
          <View style={styles.subContainer}>
            <View>
              <ContentHeader
                headerText={string.VerifyOtp.title}
                detailText={`${string.VerifyOtp.subTitle} ${phoneNumber}` + '.'}
                changeText={'Change Number?'}
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
                  ) : (
                    <View style={styles.timerContainer}>
                      <Text style={styles.timerText}>
                        <Text style={styles.resendText}>Resend Code in </Text>
                        00:{timer < 10 ? `0${timer}` : timer}s
                      </Text>
                    </View>
                  )}
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <CustomButton
                buttonText={string.VerifyOtp.buttonText}
                onPress={handleVerifyOTP}
                buttonStyle={styles.verifyButton}
                isButtonDisabled={isButtonDisabled}
                disabledButtonStyle={styles.disableVerifyButton}
              />
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default VerifyOtp;
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
