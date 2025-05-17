import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../utils/types';
import { ScreenNames } from '../../utils/screenNames';
import { Images } from '../../assets';
import colors from '../../utils/colors';
import CustomButton from '../../components/CustomButton';
import CustomStatusBar from '../../components/statusBar';
import CustomHeader from '../../components/customHeader';
import styles from './styles';
import { navigationRef } from '../../navigations/navigationServices';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { verifyEmailOTP, verifyEmailOTPWrapped } from '../../Redux/Actions/authAction';
import CustomSnackBar from '../../components/customSnackBar';
type VerifyOtpProp = NativeStackNavigationProp<
    RootStackParamList,
    ScreenNames.Signin,
    ScreenNames.ProfileScreen
    
>;
const VerifyEmail = ({route}) => {
    const { uType, token,profileData,customerProfileData } = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();
  const {role,data} = route?.params
  const navigation = useNavigation<VerifyOtpProp>();
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const [isValid, setIsValid] = useState<boolean[]>([
      true,
      true,
      true,
      true,
      true,
      true,
  ]);
  const inputRefs = useRef<(TextInput | null)[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [focusedIndex, setFocusedIndex] = useState<number>(0);

  const [attempts, setAttempts] = useState<number>(2);
  const [successModal, setSuccessModal] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(59);
  const [isTimerExpired, setIsTimerExpired] = useState<boolean>(false);
  const [otpExpiryTime, setOtpExpiryTime] = useState<number>(300); // 5 minutes
  const [isOtpExpired, setIsOtpExpired] = useState<boolean>(false);
  const insets = useSafeAreaInsets();
  useEffect(() => {
      console.log("this is state test ", navigationRef?.current?.getState());
  }, []);
  useEffect(() => {
      inputRefs.current[0]?.focus();
  }, []);

  // useEffect(() => {
  //     let interval: NodeJS.Timeout | null = null;
  //     if (timer > 0) {
  //         interval = setInterval(() => {
  //             setTimer(prev => prev - 1);
  //         }, 1000);
  //     } else {
  //         setIsTimerExpired(true);
  //         setErrorMessage('The OTP has expired. Please request a new one.');
  //         if (interval) clearInterval(interval);
  //     }
  //     return () => {
  //         if (interval) clearInterval(interval);
  //     };
  // }, [timer]);


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
      if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
        inputRefs.current[index - 1]?.focus();
        setFocusedIndex(index - 1);
      }
    };
    

  const onChangeEmail = () =>{   
      navigation?.navigate(ScreenNames?.ProfileScreen)
  }

  const handleSubmit = async () => {

      if (isOtpExpired) {
          setErrorMessage('The OTP has expired. Please request a new one');
          return;
        }
    
        const isOtpValid = otp.every(digit => digit.match(/^\d$/));
        if (!isOtpValid) {
          setErrorMessage('Invalid OTP. Please enter a valid 6-digit code.');
          return;
        }
    
      // try {
      //     const response = await dispatch(verifyEmailOTPWrapped(payload));
      //     console.log('verifyEmailOTP response: ', response);
      //   if (response?.statusCode === 200) {
      //     CustomSnackBar.show(response?.message || 'otp has been sent successfully','success', 400);
      //     setSuccessModal(true);
      //     setTimeout(() => {
      //       navigation.popTo(ScreenNames.ProfileScreen, { isEmailVerified: true });
      //     }, 1000);
      //   } else {
      //     // setErrorMessage('Entered OTP is wrong.');
      //     CustomSnackBar.show(
      //       response?.message ||
      //         'Invalid OTP. Please enter a valid 6-digit code.',
      //       'error',
      //       500,
      //     );
      //   }
      // } catch (error) {
      //   console.log('Email OTP verification error:', error);
      //   setAttempts(prev => prev - 1);
      //   setErrorMessage('Entered OTP is wrong.');
      // }

      const payload = {
        email: data?.email ?? '', // or wherever your email is stored
        otp: otp.join(''),
        uType:uType
      };
      try {
        const response = await dispatch(verifyEmailOTP(payload));
        console.log('verifyEmailOTP response: ', response);
        if (response?.payload?.statusCode === 200) {
          CustomSnackBar.show(response?.payload.message || 'OTP has been verifed successfully','success', 400);
          setSuccessModal(true);
          setTimeout(() => {
            navigation.popTo(ScreenNames.ProfileScreen, { isEmailVerified: true });
          }, 1000);
        } else {
          CustomSnackBar.show(
                  response?.payload?.message ||
                    'Invalid OTP. Please enter a valid 6-digit code.',
                  'error',
                  500,
                );
        }
      } catch (error) {
        console.log('Email OTP verification error:', error);
        setErrorMessage('something went wrong');
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

  const isOtpValid = otp.every(digit => digit.match(/^\d$/));

  const onBackPress = () =>{
    navigation?.navigate(ScreenNames.ProfileScreen,{isEmailVerified:profileData?.isEmailVerified})
  }

  return (
      <View style={[styles.container, { paddingTop: insets.top }]}>
          <CustomStatusBar />
          <CustomHeader
              headerStyle={styles.header}
              leftIcon={Images.backarrow}
              leftIconStyle={styles.backIcon}
              // onleftPress={navigation.goBack}
              onleftPress={onBackPress}
          />
          <View style={styles.textContainer}>
              <Text style={styles.title}>Verify Email Id</Text>
              <Text style={styles.subtitle}>
                  Enter the code sent to email {profileData?.email}
              </Text>
              <TouchableOpacity onPress={onChangeEmail}>
                  <Text style={styles.changeNumber}>Change Email?</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.otpContainer}>
              {otp.map((digit, index) => (
                  <TextInput
                      selectionColor={colors.primary}
                      key={index}
                      ref={ref => {
                          inputRefs.current[index] = ref;
                      }}
                      value={digit}
                      keyboardType="numeric"
                      maxLength={1}
                      onFocus={() => setFocusedIndex(index)}
                      onChangeText={text => handleChange(text, index)}
                      onKeyPress={e => handleKeyPress(e, index)}
                      style={[
                        styles.otpInput,
                        focusedIndex === index && !digit && styles.errorInput,
                      ]}
                      
                  />
              ))}
          </View>
          {errorMessage ? (
              <Text style={styles.errorMessage}>{errorMessage}</Text>
          ) : null}
          {isTimerExpired ? (
              <TouchableOpacity onPress={handleResendCode}>
                  <Text style={[styles.resendText, { color: colors.primary }]}>
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
                  isButtonDisabled={!isOtpValid}
                  buttonStyle={styles.button}
                  disabledButtonStyle={styles.disabledButton}
                  textStyle={styles.buttonText}
                  disabledButtonTextStyle={{ color: colors.descritptionText }}
              />
          </View>
      </View>
  );
};

export default VerifyEmail;
