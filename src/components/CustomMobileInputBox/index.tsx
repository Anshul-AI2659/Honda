import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../utils/colors';
import {validatePhoneNumber} from '../../utils/validations';
import {styles} from './styles';

interface CustomMobileInputBoxProps {
  countryCode?: String;
  callingCode?: string;
  label: string;
  phoneNumber: string;
  setPhoneNumber: (text: string) => void;
  error: boolean;
  setError: (hasError: boolean) => void;
  errorText?: string;
  inputContainerStyle?: object;
  errorContainerStyle?: object;
  textInputStyle?: object;
  errorTextStyles?: object;
  autoFocus?: boolean;
}

const CustomMobileInputBox = ({
  label,
  callingCode,
  phoneNumber,
  setPhoneNumber,
  error,
  setError,
  errorText,
  inputContainerStyle,
  errorContainerStyle,
  textInputStyle,
  errorTextStyles,
  autoFocus = false,
}: CustomMobileInputBoxProps) => {
  const handlePhoneNumberChange = (text: string) => {
    setPhoneNumber(text);
    if (text === '') {
      setError(false);
    } else if (validatePhoneNumber(text)) {
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <View
        style={[
          styles.inputContainer,
          inputContainerStyle,
          error ? [styles.errorContainer, errorContainerStyle] : null,
        ]}>
        <TouchableOpacity
          style={styles.countryCodeButton}
          activeOpacity={1}
          onPress={() => {}}>
          <Text style={styles.countryCodeText}>{callingCode}</Text>
        </TouchableOpacity>

        <TextInput
          style={[styles.phoneInputMobile, textInputStyle]}
          placeholder={label}
          keyboardType="phone-pad"
          placeholderTextColor={Colors.tutorialDescription}
          maxLength={10}
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
          autoFocus={autoFocus}
          selectionColor={Colors.primary}
        />
      </View>

      {error && (
        <Text style={[styles.errorText, errorTextStyles]}>{errorText}</Text>
      )}
    </>
  );
};

export default CustomMobileInputBox;
