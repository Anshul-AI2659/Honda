// import React from 'react';
// import {
//   View,
//   TextInput,
//   TextInputProps,
//   TouchableOpacity,
//   Image,
//   Text,
// } from 'react-native';

// import {StyleSheet} from 'react-native';

// import { Images } from '../../assets';
// import { FONTS, normalize, vh, vw } from '../../styles';
// import colors from '../../utils/colors';


// interface CustomSearchBarProps extends TextInputProps {
//   placeholder?: string;
//   onSearchPress?: () => void;
//   onTouchablePress?: () => void;
//   searchContainerStyle?: object;
//   value?: string;
//   onChangeText?: (text: string) => void;
//   placeHolderText?: string
// }

// const CustomSearch: React.FC<CustomSearchBarProps> = ({
//   placeholder,
//   onTouchablePress,
//   searchContainerStyle,
//   value,
//   onChangeText,
//   placeHolderText
// }) => {
//   return (
//     <View>
//       <TouchableOpacity
//         style={[styles.searchContainer, searchContainerStyle]}
//          onPress={onTouchablePress} activeOpacity={onTouchablePress?.5:1}>
//         <Image source={Images.search} style={styles.searchIcon} />
//         <TextInput
//           style={styles.searchInput}
//           placeholder={placeholder}
//           selectionColor={colors.inActiveTab}
//           placeholderTextColor={colors.inActiveTab}
//           value={value} // <-- Make input controlled
//           onChangeText={onChangeText} // <-- Handle input change
//         />
//         {/* <View style={styles.searchInput}>
//          <Text style={styles.inActiveTab}>{placeHolderText ? placeHolderText : 'Search Product'}</Text>
//         </View> */}
//       </TouchableOpacity>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: colors.inactiveDot,
//     borderRadius: 16,
//     paddingHorizontal: vw(16),
//     marginHorizontal: vw(16),
//     marginTop: vh(20),
//     backgroundColor: '#F3F6FA',
//   },
//   searchIcon: {
//     width: vw(20),
//     height: vw(20),
//     resizeMode: 'contain',
//   },
//   searchInput: {
//     flex: 1,
//     height: vh(56),
//     borderRadius: 16,
//     paddingLeft: vw(10),
//     fontSize: normalize(16),
//     color: colors.black,
//     justifyContent:'center'
//   },
//   inActiveTab:{
//     fontSize:normalize(16),
//     fontFamily:FONTS.ROBOTO_REGULAR,
//     color:colors.inActiveTab
//   }
// });
// export default CustomSearch;


import React from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
<<<<<<< HEAD
import {StyleSheet} from 'react-native';
import { Images } from '../../assets';
import { FONTS, normalize, vh, vw } from '../../styles';
import colors from '../../utils/colors';
interface CustomSearchBarProps extends TextInputProps {
  placeholder?: string;
  onSearchPress?: () => void;
  onTouchablePress?: () => void;
  searchContainerStyle?: object;
  value?: string;
  onChangeText?: (text: string) => void;
  placeHolderText?: string
  isTextInput?:boolean
=======
import {Icons} from '../../assets';
import styles from './styles';
import {Colors} from '../../utils/colors';

interface CustomSearchBarProps extends TextInputProps {
  placeholder?: string;
  onSearchPress?: () => void;
  searchContainerStyle?: object;
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
}

const CustomSearch: React.FC<CustomSearchBarProps> = ({
  placeholder,
<<<<<<< HEAD
  onTouchablePress,
  searchContainerStyle,
  value,
  onChangeText,
  placeHolderText,
  isTextInput='True'
}) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.searchContainer, searchContainerStyle]}
         onPress={onTouchablePress} activeOpacity={onTouchablePress?.5:1}>
        <Image source={Images.search} style={styles.searchIcon} />
        {isTextInput &&
           <TextInput
           style={styles.searchInput}
           placeholder={placeholder}
           selectionColor={colors.inActiveTab}
           placeholderTextColor={colors.inActiveTab}
           value={value} // <-- Make input controlled
           onChangeText={onChangeText} // <-- Handle input change
         />
        }

       
        {!isTextInput&& <View style={styles.searchInput}>
         <Text style={styles.inActiveTab}>{placeHolderText ? placeHolderText : 'Search Product'}</Text>
        </View>}
=======
  onSearchPress,
  searchContainerStyle,
}) => {
  return (
    <View style={[styles.searchContainer, searchContainerStyle]}>
      <TouchableOpacity onPress={onSearchPress}>
        <Image source={Icons.search} style={styles.searchIcon} />
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
      </TouchableOpacity>
    </View>
  );
};

<<<<<<< HEAD




const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.inactiveDot,
    borderRadius: vw(16),
    paddingHorizontal: vw(16),
    marginHorizontal: vw(16),
    marginTop: vh(20),
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
    borderRadius: vw(16),
    paddingLeft: vw(10),
    fontSize: normalize(16),
    color: colors.black,
    justifyContent:'center'
  },
  inActiveTab:{
    fontSize:normalize(16),
    fontFamily:FONTS.ROBOTO_REGULAR,
    color:colors.inActiveTab
  }
});
export default CustomSearch;
=======
export default CustomSearchBar;
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
