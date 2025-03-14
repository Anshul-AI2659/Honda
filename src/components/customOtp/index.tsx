/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {TextInput, TextStyle, View} from 'react-native';
import {styles} from './styles';
import {Colors} from '../../utils/colors';

interface OTPInputProps {
  otpLength: number;
  onChange: (otp: string) => void;
  error?: string;
  autoFocus?: boolean;
  inputStyle?: TextStyle;
  secureTextEntry?: boolean;
}

const OTPInput = ({
  otpLength,
  onChange,
  error,
  autoFocus = true,
  inputStyle,
  secureTextEntry = false,
}: OTPInputProps) => {
  const [code, setCode] = useState(Array(otpLength).fill(''));
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const inputRefs = useRef<Array<TextInput | null>>([]);

  useEffect(() => {
    if (autoFocus && inputRefs.current[0]) {
      setTimeout(() => {
        inputRefs.current[0]?.focus();
      }, 100);
    }
  }, [autoFocus]);


  const handleInputChange = (text: string, index: number) => {
    if (/^[0-9]$/.test(text) || text === '') {
      const newCode = [...code];
      newCode[index] = text;
      setCode(newCode);

      const otp = newCode.join('');
      onChange(otp);

      if (text !== '' && index < otpLength - 1) {
        inputRefs.current[index + 1]?.focus();
      }

      if (text === '' && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleFocus = (index: number) => {
    setFocusedIndex(index);
  };

  return (
    <View style={styles.container}>
      {code.map((digit, index) => (
        <TextInput
          key={index}
          ref={ref => (inputRefs.current[index] = ref)}
          onFocus={() => handleFocus(index)}
          cursorColor={Colors.Black}
          placeholderTextColor={'gray'}
          value={digit}
          onChangeText={text => handleInputChange(text, index)}
          keyboardType="numeric"
          maxLength={1}
          selectionColor={Colors.primary}
          secureTextEntry={secureTextEntry}
          style={[
            styles.input,
            inputStyle,
            {
              borderColor: error
                ? Colors.red
                : focusedIndex === index
                ? Colors.primary
                : Colors.tutorialInactiveDot,
            },
          ]}
          textAlign="center"
        />
      ))}
    </View>
  );
};

export default OTPInput;
