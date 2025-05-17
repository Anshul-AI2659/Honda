/* eslint-disable react/no-unstable-nested-components */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { FlatList, Keyboard, Modal, Text, TouchableOpacity, TouchableWithoutFeedback, View,BackHandler, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// Styles
import styles from './style';
// Assets
import { Images } from '../../../assets';
// Custom Components
import CustomButton from '../../../components/CustomButton';
import CustomHeader from '../../../components/customHeader';
import InputField from '../../../components/TextInput\'';
import CustomStatusBar from '../../../components/statusBar';
// Utils
import colors from '../../../utils/colors';
import { ScreenNames } from '../../../utils/screenNames';
import { useAppDispatch } from '../../../hooks';
import CustomSnackBar from '../../../components/customSnackBar';
import { customerSignUpAction } from '../../../Redux/Actions/authAction';

type RootStackParamList = {
    ProfileForm: undefined;
    Random: { details: object };
    CongratulationScreen:{}
}
type ProfileFormNavigationProp = NativeStackScreenProps<RootStackParamList, 'ProfileForm'>;

const CommonForm = ({ navigation,route }:ProfileFormNavigationProp) => {
    const dispatch = useAppDispatch();
    const {roleName,phoneNumber} = route.params ??  'Dealer'
    const insets = useSafeAreaInsets();
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    const [focusedInput, setFocusedInput] = useState<string | null>(null);


    useEffect(() => {
      const backAction = () => {
        if (roleName === 'Customer') {
          navigation.navigate(ScreenNames.Signin, { roleName, phoneNumber });
          return true; // prevent default back action
        }
        return false; // allow default back for other roles
      };
    
      const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    
      return () => backHandler.remove();
    }, [navigation, roleName, phoneNumber]);


    useEffect(() => {
      if (name.trim() || emailAddress.trim() || city.trim() || selectedCity.trim()) {
        setIsButtonEnabled(true);
      } else {
        setIsButtonEnabled(false);
      }
    }, [name, emailAddress, city, selectedCity]);


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

      const backPress = () => {
        navigation.navigate(ScreenNames.Signin, {roleName, phoneNumber});
      };
    

    const validateName = (text: string) => {
        if (/^[A-Za-z][A-Za-z\s]*$/.test(text) || text === '') {
            setName(text);
        }
    };

    const validateCity = (text: string) => {
        if (/^[A-Za-z][A-Za-z\s]*$/.test(text) || text === '') {
            setCity(text);
        }
    };

    const isEmailValid = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validateEmail = (text: string) => {
        setEmailAddress(text?.toLowerCase());
    };
    

    const handleSubmit = async () => {
        const payload = {
          countryCode: '+91',
          name: name ?? '',
          email: emailAddress ?? '',
          mobileNumber: phoneNumber ?? '',
          city: city ?? '',
          state: selectedCity ?? '',
          deviceToken: '',
          deviceType: '1',
          successCallBack: (message: string) => {  
            if(message === 'Name is required'){
              CustomSnackBar.show(message || 'Name is required','error');
            }
            navigation.navigate(ScreenNames.CongratulationScreen, { roleName });
          },
          errorCallBack: (message: string) => {
            CustomSnackBar.show(message || 'Signup failed', 'error');
          }
        };
        dispatch(customerSignUpAction(payload));
      };


    return (
       <View style={[styles.container]}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={[styles.container, { paddingTop: insets.top }]}>
                        <CustomStatusBar />
                        <CustomHeader
                         textHeading='Complete Profile'
                         onleftPress={backPress}
                         leftIcon={Images.backarrow}
                         leftIconStyle={styles.leftIcon}
                         leftButtonStyle={styles.imageWrapper}
                         headerStyle={styles.header} />
                       <View style={styles.scroll}>
                            <InputField
                                placeholder='Name*'
                                style={[styles.inputContainer1, {borderColor: focusedInput === 'name' ? colors.primary : colors.borderSecond}]}
                                placeholderTextColor={colors.inActiveTab}
                                value={name}
                                onChangeText={validateName}
                                onFocus={() => setFocusedInput('name')}
                                onBlur={() => setFocusedInput(null)}
                            />
                            <InputField
                                placeholder='Email Address'
                                style={[styles.inputContainer1, { borderColor: focusedInput === 'email' ? colors.primary : colors.borderSecond }]}
                                placeholderTextColor={colors.inActiveTab}
                                value={emailAddress}
                                onChangeText={validateEmail}
                                onFocus={() => setFocusedInput('email')}
                                onBlur={() => setFocusedInput(null)}
                            />
                            <InputField
                                placeholder='State'
                                style={[styles.inputContainer1, { borderColor: focusedInput === 'city' ? colors.primary : colors.borderSecond }]}
                                placeholderTextColor={colors.inActiveTab}
                                value={city}
                                onChangeText={validateCity}
                                onFocus={() => setFocusedInput('city')}
                                onBlur={() => setFocusedInput(null)}
                            />
                            <InputField
                                placeholder='City/Village'
                                style={[styles.inputContainer1, { borderColor: focusedInput === 'cityVillage' ? colors.primary : colors.borderSecond }]}
                                placeholderTextColor={colors.inActiveTab}
                                value={selectedCity}
                                onChangeText={(text) => {
                                    if (/^[A-Za-z][A-Za-z\s]*$/.test(text) || text === '') {
                                        setSelectedCity(text);
                                    }
                                }}
                                onFocus={() => setFocusedInput('cityVillage')}
                                onBlur={() => setFocusedInput(null)}
                            />
                        </View>
                        <View style={styles.buttonView}>
                            <CustomButton
                                buttonText={'CONTINUE'}
                                onPress={handleSubmit}
                                // style={styles.buttonContainer}
                                style={[
                                  styles.buttonContainer,
                                  !isButtonEnabled && { backgroundColor: colors.backgroundCarousel },
                                ]}
                                textStyle={!isButtonEnabled ? { color: colors.lightGreyBlue } : { color: colors.white }}
                                disabledButtonStyle={{ backgroundColor: colors.backgroundCarousel }}
                                disabledButtonTextStyle={{ color: colors.lightGreyBlue }}
                                isButtonDisabled={!isButtonEnabled}
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
            </TouchableWithoutFeedback>
            </View>
    )
}

export default CommonForm;

