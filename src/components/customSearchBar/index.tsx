import React from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Icons} from '../../assets';
import styles from './styles';
import {Colors} from '../../utils/colors';

interface CustomSearchBarProps extends TextInputProps {
  placeholder?: string;
  onSearchPress?: () => void;
  searchContainerStyle?: object;
}

const CustomSearchBar: React.FC<CustomSearchBarProps> = ({
  placeholder,
  onSearchPress,
  searchContainerStyle,
}) => {
  return (
    <View style={[styles.searchContainer, searchContainerStyle]}>
      <TouchableOpacity onPress={onSearchPress}>
        <Image source={Icons.search} style={styles.searchIcon} />
      </TouchableOpacity>
      <TextInput
        style={styles.searchInput}
        placeholder={placeholder}
        selectionColor={Colors.inActiveTab}
        placeholderTextColor={Colors.inActiveTab}
      />
    </View>
  );
};

export default CustomSearchBar;
