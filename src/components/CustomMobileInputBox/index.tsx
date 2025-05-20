<<<<<<< HEAD
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {
  Modal,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import colors from '../../utils/colors';

=======
import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../utils/colors';
import {validatePhoneNumber} from '../../utils/validations';
import {styles} from './styles';
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625

interface CustomMobileInputBoxProps {
  countryCode?: String;
  callingCode?: string;
  label: string;
  phoneNumber: string;
  setPhoneNumber: (text: string) => void;
  error: boolean;
  setError: (hasError: boolean) => void;
  errorText?: string;
<<<<<<< HEAD
  autoFocus?:boolean;
=======
  inputContainerStyle?: object;
  errorContainerStyle?: object;
  textInputStyle?: object;
  errorTextStyles?: object;
  autoFocus?: boolean;
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
}

const CustomMobileInputBox = ({
  label,
  callingCode,
  phoneNumber,
  setPhoneNumber,
  error,
  setError,
  errorText,
<<<<<<< HEAD
  autoFocus = false,
}: CustomMobileInputBoxProps) => {
  const [showModal, setShowModal] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');

  

=======
  inputContainerStyle,
  errorContainerStyle,
  textInputStyle,
  errorTextStyles,
  autoFocus = false,
}: CustomMobileInputBoxProps) => {
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
  const handlePhoneNumberChange = (text: string) => {
    setPhoneNumber(text);
    if (text === '') {
      setError(false);
<<<<<<< HEAD
    // } else if (validatePhoneNumber(text)) {
    //   setError(false);
    // } else {
    //   setError(true);
    // }
=======
    } else if (validatePhoneNumber(text)) {
      setError(false);
    } else {
      setError(true);
    }
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
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
<<<<<<< HEAD
          placeholderTextColor={colors.descritptionText}
          maxLength={13}
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
          autoFocus={autoFocus}
          // selectionColor={colors.primary}
          underlineColorAndroid="transparent"
        />
      </View>

      {error && <Text style={styles.errorText}>{errorText}</Text>}

      <Modal visible={showModal} animationType="slide">
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalText}>Select Country</Text>
          </View>
          <TextInput
            //  selectionColor={colors.primary}
            style={styles.searchInput}
            placeholder="Search country..."
            value={searchQuery}
            onChangeText={text => {
              setSearchQuery(text);
            }}
          />
          {/* <FlatList
            keyExtractor={item => item.name}
            renderItem={({item}: {item: any}) => (
              <TouchableOpacity
                style={styles.countryButton}
                >
                <Text style={styles.countryText}>{item.flag}</Text>
                <Text style={styles.countryName}>
                  {item.name} ({item.calling_code})
                </Text>
              </TouchableOpacity>
            )}
          /> */}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setShowModal(false)}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
=======
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
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
    </>
  );
};
}

export default CustomMobileInputBox;
