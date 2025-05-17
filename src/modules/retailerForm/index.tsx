import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard,
  TouchableOpacity,
  Modal,
  FlatList,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import CustomStatus from '../../components/CustomStatus';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './style';
import CustomButton from '../../components/CustomButton';
import colors from '../../utils/colors';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import InputField from "../../components/TextInput'";
import {vh, vw} from '../../styles';
import {Images} from '../../assets';
import CustomHeader from '../../components/customHeader';
import CustomStatusBar from '../../components/statusBar';

type RootStackParamList = {
  ProfileForm: undefined;
  Random: {details: object};
};

type ProfileFormNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'ProfileForm'
>;

const cities = [
  'Noida',
  'Gurugram',
  'Faridabad',
  'Ghaziabad',
  'Greater Noida',
  'Meerut',
  'Aligarh',
  'Haridwar',
  'Rohtak',
  'Sonipat',
];

const RetailerForm: React.FC<ProfileFormNavigationProp> = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(true);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showValidation, setShowValidation] = useState(false);

  const backPress = () => {
    navigation.goBack();
  };

  const handleCountrySelect = (country: string) => {
    setSelectedCity(country);
    setIsModalVisible(false);
  };

  const validateName = (text: string) => {
    if (/^[A-Za-z][A-Za-z\s]*$/.test(text) || text === '') {
      setName(text);
      if (showValidation && !text.trim()) {
        setNameError('Name is required');
      } else {
        setNameError('');
      }
    }
  };

  const validatePhoneNumber = (text: string) => {
    if (/^\d{0,10}$/.test(text)) {
      setPhoneNumber(text);
      if (showValidation && (!text || text.length !== 10)) {
        setPhoneError('Phone number must be exactly 10 digits');
      } else {
        setPhoneError('');
      }
    }
  };

  const isEmailValid = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateEmail = (text: string) => {
    setEmailAddress(text);
    if (showValidation && (!text || !isEmailValid(text))) {
      setEmailError('Enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = () => {
    setShowValidation(true);
    let hasError = false;

    if (!name.trim()) {
      setNameError('Name is required');
      hasError = true;
    }

    if (!phoneNumber || phoneNumber.length !== 10) {
      setPhoneError('Phone number must be exactly 10 digits');
      hasError = true;
    }

    if (!emailAddress || !isEmailValid(emailAddress)) {
      setEmailError('Enter a valid email address');
      hasError = true;
    }

    if (hasError) return;

    console.log('Form submitted successfully');
    navigation.navigate('Random', {
      details: {
        Name: name,
        EmailAddress: emailAddress,
        PhoneNumber: phoneNumber,
      },
    });
  };

  const renderItem = ({item}: {item: string}) => (
    <TouchableOpacity
      style={styles.cityItem}
      onPress={() => handleCountrySelect(item)}>
      <Text style={styles.cityText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps="handled">
          <View style={[styles.container, {paddingTop: insets.top}]}>
            <CustomStatusBar />
            <CustomHeader
              textHeading="Add Retailer"
              onleftPress={backPress}
              leftIcon={Images.backarrow}
              leftIconStyle={styles.leftIcon}
              leftButtonStyle={styles.imageWrapper}
              headerStyle={styles.header}
            />
            <View>
              <InputField
                placeholder="Name"
                style={[
                  styles.inputContainer1,
                  {
                    borderColor:
                      showValidation && nameError
                        ? colors.primary
                        : colors.borderSecond,
                  },
                ]}
                placeholderTextColor={colors.inActiveTab}
                value={name}
                onChangeText={validateName}
                onFocus={() => setFocusedInput('name')}
                onBlur={() => setFocusedInput(null)}
              />
              {showValidation && nameError ? (
                <Text
                  style={{color: colors.primary, marginLeft: 5, marginTop: 5}}>
                  {nameError}
                </Text>
              ) : null}

              <InputField
                placeholder="Email Address*"
                style={[
                  styles.inputContainer1,
                  {
                    borderColor:
                      showValidation && emailError
                        ? colors.primary
                        : colors.borderSecond,
                  },
                ]}
                placeholderTextColor={colors.inActiveTab}
                value={emailAddress}
                onChangeText={validateEmail}
                onFocus={() => setFocusedInput('email')}
                onBlur={() => setFocusedInput(null)}
              />
              {showValidation && emailError ? (
                <Text
                  style={{color: colors.primary, marginLeft: 5, marginTop: 5}}>
                  {emailError}
                </Text>
              ) : null}

              <View
                style={[
                  styles.inputContainer,
                  {
                    borderColor:
                      showValidation && phoneError
                        ? colors.primary
                        : colors.borderSecond,
                  },
                ]}>
                <Text style={styles.countryCode}>+ 91</Text>
                <View style={styles.separator} />
                <InputField
                  style={styles.inputContainerInside}
                  placeholder="Phone Number"
                  keyboardType="phone-pad"
                  value={phoneNumber}
                  onChangeText={validatePhoneNumber}
                  maxLength={10}
                  placeholderTextColor={colors.inActiveTab}
                  onFocus={() => setFocusedInput('phone')}
                  onBlur={() => setFocusedInput(null)}
                />
              </View>
              {showValidation && phoneError ? (
                <Text
                  style={{color: colors.primary, marginLeft: 5, marginTop: 5}}>
                  {phoneError}
                </Text>
              ) : null}

              <TouchableOpacity onPress={() => setIsModalVisible(true)}>
                <InputField
                  placeholder="Select Region"
                  placeholderTextColor={colors.inActiveTab}
                  style={styles.inputContainer1}
                  value={selectedCity}
                  rightIcon={Images.downArrow}
                  editable={false}
                  onRightIconPress={() => setIsModalVisible(true)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonView}>
              <CustomButton
                buttonText={'ADD'}
                onPress={handleSubmit}
                isButtonDisabled={!isButtonEnabled}
                style={styles.buttonContainer}
                textStyle={{color: colors.white}}
                disabledButtonStyle={{
                  backgroundColor: colors.backgroundCarousel,
                }}
                disabledButtonTextStyle={{color: colors.lightGreyBlue}}
              />
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="fade"
        onRequestClose={() => setIsModalVisible(false)}>
        <TouchableWithoutFeedback onPress={() => setIsModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.flatlistHeader}>Select City</Text>
              <FlatList
                data={cities}
                keyExtractor={item => item}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default RetailerForm;
