import React from 'react';
import {
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  Image,
} from 'react-native';

import {styles} from './styles';

interface CustomButtonProps {
  onPress: () => void;
  buttonText: string;
  iconSource?: ImageSourcePropType;
  buttonStyle?: StyleProp<ViewStyle>;
  disabledButtonStyle?: StyleProp<ViewStyle>;
  disabledButtonTextStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  textStyle?: StyleProp<TextStyle>;
  isButtonDisabled?: boolean;
}

const CustomButton = ({
  buttonText,
  buttonStyle,
  textStyle,
  disabledButtonStyle,
  disabledButtonTextStyle,
  iconSource,
  iconStyle,
  onPress,
  isButtonDisabled = false,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.submitButton,
        buttonStyle,
        isButtonDisabled && [styles.disabledButton, disabledButtonStyle],
      ]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={isButtonDisabled}>
      {iconSource && (
        <Image source={iconSource} style={[styles.icon, iconStyle]} />
      )}
      <Text
        style={[
          styles.submitButtonText,
          textStyle,
          isButtonDisabled && [
            styles.disabledButtonText,
            disabledButtonTextStyle,
          ],
        ]}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
