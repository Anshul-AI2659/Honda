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
import { Colors } from '../../utils/colors';

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
        selectionColor={Colors.inActiveTab}
        placeholderTextColor={Colors.inActiveTab}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.tutorialInactiveDot,
    borderRadius: 16,
    paddingHorizontal: 10,
    marginHorizontal: vw(20),
    marginBottom: vh(16),
    backgroundColor: Colors.lightGrey,
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
    color: Colors.Black,
  },
});

export default CustomSearchBar;
