import React from 'react';
import {
  Text,
  KeyboardTypeOptions,
  TextInput,
  View,
  TouchableOpacity,
<<<<<<< HEAD
  Image,
  ImageSourcePropType,
} from 'react-native';
import styles from './styles';
import colors from '../../utils/colors';
=======
} from 'react-native';
import styles from './styles';
import {Colors} from '../../utils/colors';
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625

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
<<<<<<< HEAD
  onRightImagePress?: () => void;
=======
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
  isPassword?: boolean;
  isPasswordVisible?: boolean;
  togglePasswordVisibility?: () => void;
  inputContainerStyle?: object;
  errorContainerStyle?: object;
  textInputStyle?: object;
  rightText?: string;
  rightTextStyle?: object;
<<<<<<< HEAD
  imageStyle?: object;
  image: ImageSourcePropType
=======
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
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
<<<<<<< HEAD
  onRightImagePress,
  image,
  imageStyle
=======
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
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
<<<<<<< HEAD
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

=======
          placeholderTextColor={Colors.tutorialDescription}
          onChangeText={onChangeText}
          selectionColor={Colors.tutorialDescription}
        />
        {rightText && (
          <TouchableOpacity activeOpacity={0.7} onPress={onRightTextPress}>
            <Text style={rightTextStyle}>{rightText}</Text>
          </TouchableOpacity>
        )}
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
      </View>
      {Error && <Text style={styles.errorText}>{errorText}</Text>}
    </>
  );
};

export default CustomInput;
