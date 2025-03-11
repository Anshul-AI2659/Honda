import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Icons} from '../../assets';
import {vh, vw} from '../../utils/dimension';

interface CustomSearchBarProps extends TextInputProps {
  placeholder?: string; // Custom placeholder text
  onSearchPress?: () => void; // Function to execute on search button press
}

const CustomSearchBar: React.FC<CustomSearchBarProps> = ({
  placeholder,
  onSearchPress,
}) => {
  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity onPress={onSearchPress}>
        <Image source={Icons.search} style={styles.searchIcon} />
      </TouchableOpacity>
      <TextInput
        style={styles.searchInput}
        placeholder={placeholder}
        selectionColor={'#9DA7C4'}
        placeholderTextColor={'#9DA7C4'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D4DAEA',
    borderRadius: 16,
    paddingHorizontal: 10,
    marginHorizontal: vw(20),
    marginBottom: vh(16),
    backgroundColor: '#F3F6FA',
  },
  searchIcon: {
    width: vw(20),
    height: vw(20),
    resizeMode: 'contain',
  },
  searchInput: {
    flex: 1,
    height: vh(56),
    borderRadius: 16,
    paddingLeft: vw(10),
    fontSize: 16,
    color: '#000',
  },
});

export default CustomSearchBar;
