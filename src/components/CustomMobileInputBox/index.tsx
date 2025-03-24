/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {
  FlatList,
  Modal,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import {countries} from '../../assets/countries';
import {Colors} from '../../utils/colors';
import {validatePhoneNumber} from '../../utils/validations';

interface Country {
  flag: string;
  code: string;
  name: string;
  calling_code: string;
}

interface CustomMobileInputBoxProps {
  countryCode?: String;
  callingCode?: string;
  label: string;
  phoneNumber: string;
  setPhoneNumber: (text: string) => void;
  error: boolean;
  setError: (hasError: boolean) => void;
  errorText?: string;
  autoFocus?:boolean;
}

const CustomMobileInputBox = ({
  label,
  phoneNumber,
  setPhoneNumber,
  error,
  setError,
  errorText,
  autoFocus = false,
}: CustomMobileInputBoxProps) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(
    countries.countries[0],
  );

  const [searchQuery, setSearchQuery] = useState('');

  const filterCountries = countries.countries.filter(country =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

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

  const handleSelectCountry = (country: Country) => {
    setSelectedCountry(country);
    setShowModal(false);
  };

  return (
    <>
      <View
        style={[styles.inputContainer, error ? styles.errorContainer : null]}>
        <TouchableOpacity
          style={styles.countryCodeButton}
          activeOpacity={1}
          onPress={() => {}}>
          <Text style={styles.countryCodeText}>
            {'+ 91'}
          </Text>
        </TouchableOpacity>

        <TextInput
          style={styles.phoneInputMobile}
          placeholder={label}
          keyboardType="phone-pad"
          placeholderTextColor={Colors.tutorialDescription}
          maxLength={13}
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
          autoFocus={autoFocus}
          selectionColor={Colors.primary}
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
            style={styles.searchInput}
            placeholder="Search country..."
            value={searchQuery}
            onChangeText={text => {
              setSearchQuery(text);
              filterCountries;
            }}
          />
          <FlatList
            data={filterCountries}
            keyExtractor={item => item.name}
            renderItem={({item}: {item: any}) => (
              <TouchableOpacity
                style={styles.countryButton}
                onPress={() => handleSelectCountry(item)}>
                <Text style={styles.countryText}>{item.flag}</Text>
                <Text style={styles.countryName}>
                  {item.name} ({item.calling_code})
                </Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setShowModal(false)}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
    </>
  );
};

export default CustomMobileInputBox;
