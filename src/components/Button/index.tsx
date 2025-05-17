import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import colors from '../../utils/colors';
import { vh, vw } from '../../styles';

interface ButtonProps {
  onPress: () => void;
  text: string;
  style?: ViewStyle;
  disabled?: boolean;
  textStyle?: TextStyle;
  fullWidth?: boolean;  // New prop for full-width styling
}

const Button: React.FC<ButtonProps> = ({ onPress, text, style, disabled = false, textStyle, fullWidth }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        fullWidth && styles.fullWidth,  // Apply full width style if needed
        disabled && styles.disabledButton, // Apply disabled style
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.main,
    paddingVertical: vh(16),
    paddingHorizontal: vw(20),
    borderRadius: vh(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullWidth: {
    width: '90%',  
    alignSelf: 'center',
  },
  disabledButton: {
    backgroundColor: colors.grey, 
    opacity: 0.5,
  },
  buttonText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: vw(16),
    fontWeight: '600',
  },
});

export default Button;
