import React from 'react';
import {
  Text,
  KeyboardTypeOptions,
  TextInput,
  View,
} from 'react-native';
import styles from './styles';
import {Colors} from '../../utils/colors';

interface CustomInputProps {
  value: string;
  label: string;
  Error?: boolean;
  errorText?: string;
  maxLength?: number;
  keyboardType: KeyboardTypeOptions;
  onChangeText: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  isPassword?: boolean;
  isPasswordVisible?: boolean;
  togglePasswordVisibility?: () => void;
  inputContainerStyle?: object;
  errorContainerStyle?: object;
  textInputStyle?: object;
}

const CustomInput = ({
  value,
  label,
  Error,
  errorText,
  maxLength,
  keyboardType,
  onChangeText,
  isPassword = false,
  isPasswordVisible = false,
  inputContainerStyle,
  errorContainerStyle,
  textInputStyle,
}: CustomInputProps) => {
  return (
    <>
    <View
      style={[
        styles.inputContainer,
        inputContainerStyle,
        Error ? [styles.errorContainer, errorContainerStyle] : null,
      ]}>
      <TextInput
        style={[styles.textInput, textInputStyle]}
        placeholder={label}
        keyboardType={keyboardType}
        value={value}
        maxLength={maxLength}
        secureTextEntry={isPassword && !isPasswordVisible}
        placeholderTextColor={Colors.tutorialDescription}
        onChangeText={onChangeText}
        selectionColor={Colors.tutorialDescription}
      />
    </View>
      {Error && <Text style={styles.errorText}>{errorText}</Text>}
</>
  );
};

export default CustomInput;
