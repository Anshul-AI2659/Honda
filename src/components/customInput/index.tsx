import React from 'react';
import {
  Text,
  KeyboardTypeOptions,
  TextInput,
  View,
  TouchableOpacity,
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
  onRightTextPress?: () => void;
  isPassword?: boolean;
  isPasswordVisible?: boolean;
  togglePasswordVisibility?: () => void;
  inputContainerStyle?: object;
  errorContainerStyle?: object;
  textInputStyle?: object;
  rightText?: string;
  rightTextStyle?: object;
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
  rightText,
  rightTextStyle,
  onRightTextPress,
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
        {rightText && (
          <TouchableOpacity activeOpacity={0.7} onPress={onRightTextPress}>
            <Text style={rightTextStyle}>{rightText}</Text>
          </TouchableOpacity>
        )}
      </View>
      {Error && <Text style={styles.errorText}>{errorText}</Text>}
    </>
  );
};

export default CustomInput;
