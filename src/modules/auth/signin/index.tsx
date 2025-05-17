import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback, useEffect, useState } from 'react';
import {
  BackHandler,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// Styles
import styles from './styles';
// Utils
import colors from '../../../utils/colors';
import { ScreenNames } from '../../../utils/screenNames';
import { RootStackParamList } from '../../../utils/types';
// Assets
import { Images } from '../../../assets';
// Custom Components
import CustomButton from '../../../components/CustomButton';
import CustomHeader from '../../../components/customHeader';
import CustomStatusBar from '../../../components/statusBar';
// Redux
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { loginAction } from '../../../Redux/Actions/authAction';
import CustomSnackBar  from '../../../components/customSnackBar';
import InputField from '../../../components/TextInput\'';

type SignNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.Signin
>;

const SignIn = ({route}) => {
  const dispatch = useAppDispatch();
  const loginLoading = useAppSelector(state => state.authReducer.loginLoading);
  const {roleName = 'Dealer', phoneNumber: routePhoneNumber = ''} =
    route?.params || {};
  const [phoneNumber, setPhoneNumber] = useState(routePhoneNumber || '');
  const [isValid, setIsValid] = useState(
    routePhoneNumber ? /^\d{10}$/.test(routePhoneNumber) : false,
  );
  const navigation = useNavigation<SignNavigationProp>();
  const insets = useSafeAreaInsets();
  console.log('login loading', loginLoading);

  useEffect(() => {
    const backAction = () => {
      if (roleName === 'Customer') {
        navigation.navigate(ScreenNames.Role);
        return true; // prevent default back action
      }
      return false; // allow default back for other roles
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [navigation, roleName, phoneNumber]);

  // Debounced validation function
  const validatePhoneNumber = useCallback((text: string) => {
    const isValidNumber = /^\d{10}$/.test(text);
    return {isValidNumber};
  }, []);

  const handlePhoneChange = useCallback(
    (text: string) => {
      // Only allow numeric input and max 10 digits
      const numericText = text.replace(/[^0-9]/g, '').slice(0, 10);
      setPhoneNumber(numericText);

      if (numericText.length === 10) {
        const {isValidNumber} = validatePhoneNumber(numericText);
        setIsValid(isValidNumber);
      } else {
        setIsValid(false);
      }
    },
    [validatePhoneNumber],
  );

  const onPressPrivacyPolicey = () => {
    navigation.navigate(ScreenNames.WebViewScreen, {
      url: 'https://www.hondacarindia.com/privacy-policy',
    });
  };

  const onPressTermPolicey = () => {
    navigation.navigate(ScreenNames.WebViewScreen, {
      url: 'https://www.hondacarindia.com/terms-and-conditions',
    });
  };

  const onGoBackPress = () => {
    if (roleName === 'Customer') {
      navigation.navigate(ScreenNames.Role);
    } else {
      navigation.goBack();
    }
  };

  // 9876543212 — dealer
  // 9758024940 —customer
  // 6789876567 —retailer
  // 9758024940 —employees
  /**
   * Handles the "GET OTP" button press event.
   *
   * - Constructs the login payload using the user's mobile number and selected role.
   * - Dispatches the loginAction to initiate the role-based login API call.
   * - Navigates to the OTP screen, passing the phone number and role as parameters.
   *
   * This function ensures that the correct role-specific endpoint is hit by passing roleName
   * to the loginAction, which internally determines the correct URL to call.
   */
  const _onGetOtpPress = useCallback(async () => {
    const params = {
      data: {
        countryCode: '+91',
        mobileNumber: phoneNumber,
        roleName: roleName,
      },
      successCallBack: message => {
        CustomSnackBar.show(
          message || 'OTP has been sent successfully',
          'success',
          400,
        );
        // navigation.navigate(ScreenNames.Otp, {phoneNumber, roleName});
        setTimeout(() => {
          navigation.navigate(ScreenNames.Otp, {phoneNumber, roleName});
        }, 600);
      },
      errorCallBack: message => {
        CustomSnackBar.show(message || 'Account not found', 'error');
      },
    };
    dispatch(loginAction(params));
  }, [phoneNumber, roleName]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container, {paddingTop: insets.top}]}>
        <View style={styles.innerContainer}>
          <CustomStatusBar />
          <CustomHeader
            headerStyle={styles.header}
            leftIcon={Images.backarrow}
            leftIconStyle={styles.backIcon}
            onleftPress={onGoBackPress}
          />
          <View style={styles.HeadingContainer}>
            <Text style={styles.title}>{roleName} Sign In</Text>
            <Text style={styles.subtitle}>Please enter your phone number</Text>
          </View>
          <View
            style={[
              styles.inputContainer,
              {
                borderColor: !isValid ? colors.primary : colors.borderSecond,
              },
            ]}>
            <Text style={styles.countryCode}>+ 91</Text>
            <View
              style={[
                styles.separator,
                !isValid && {backgroundColor: colors.primary},
              ]}
            />
            <InputField
              style={styles.inputContainerInside}
              placeholder="Phone Number"
              keyBoardType={'number-pad'}
              value={phoneNumber}
              onChangeText={handlePhoneChange}
              maxLength={10}
              placeholderTextColor={colors.inActiveTab}
              onKeyPress={({nativeEvent}) => {
                if (!/^\d$/.test(nativeEvent.key)) {
                  return;
                }
              }}
            />
          </View>
          {!isValid && phoneNumber.length === 10 && (
            <Text style={styles.errorText}>
              Invalid Phone number, Phone number should be of 10 digits
            </Text>
          )}

          <View style={styles.bottomView}>
            <CustomButton
              buttonText="GET OTP"
              onPress={_onGetOtpPress}
              isButtonDisabled={!isValid}
              buttonStyle={styles.button}
              disabledButtonStyle={styles.disabledButton}
              textStyle={styles.buttonText}
              disabledButtonTextStyle={{color: colors.descritptionText}}
            />
            <Text style={styles.footerText}>
              By signing in I agree to{' '}
              <Text onPress={onPressPrivacyPolicey} style={styles.link}>
                Privacy Policy
              </Text>{' '}
              &{' '}
              <Text onPress={onPressTermPolicey} style={styles.link}>
                Terms & Conditions
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default SignIn;