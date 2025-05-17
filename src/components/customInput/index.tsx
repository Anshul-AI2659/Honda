import React from 'react';
import {
  Text,
  KeyboardTypeOptions,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';
import styles from './styles';
import colors from '../../utils/colors';

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
  onRightImagePress?: () => void;
  isPassword?: boolean;
  isPasswordVisible?: boolean;
  togglePasswordVisibility?: () => void;
  inputContainerStyle?: object;
  errorContainerStyle?: object;
  textInputStyle?: object;
  rightText?: string;
  rightTextStyle?: object;
  imageStyle?: object;
  image: ImageSourcePropType
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
  onRightImagePress,
  image,
  imageStyle
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
          placeholderTextColor={colors.descritptionText}
          onChangeText={onChangeText}
           selectionColor={colors.primary}
        />
        {rightText ? (
          <TouchableOpacity activeOpacity={0.7} onPress={onRightTextPress}>
            <Text style={rightTextStyle}>{rightText}</Text>
          </TouchableOpacity>
        ) : image ? (
          <TouchableOpacity activeOpacity={0.7} onPress={onRightImagePress}>
            <Image source={image} style={imageStyle} resizeMode="contain" />
          </TouchableOpacity>
        ) : null}

      </View>
      {Error && <Text style={styles.errorText}>{errorText}</Text>}
    </>
  );
};

export default CustomInput;
