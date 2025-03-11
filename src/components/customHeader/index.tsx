import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import {Icons, Images} from '../../assets';
import {vh, vw} from '../../utils/dimension';

interface HeaderProps {
  headerStyle?: object;
  backButton?: boolean;
  backIcon?: ImageSourcePropType;
  onBackPress?: () => void;
  backButtonStyle?: object;
  backIconStyle?: object;
  headerImgStyle?: object;
  rightButton?: boolean;
  rightIcon?: ImageSourcePropType;
  onRightPress?: () => void;
  rightButtonStyle?: object;
  rightIconStyle?: object;
}

// const CustomHeader = ({
//   backButton = false,
//   backIcon,
//   onBackPress,
//   headerStyle,
//   backButtonStyle,
//   backIconStyle,
//   headerImgStyle,
// }: HeaderProps) => {
//   return (
//     <View style={[styles.header, headerStyle]}>
//       {backButton && (
//         <TouchableOpacity
//           style={[styles.backButton, backButtonStyle]}
//           onPress={onBackPress}>
//           {backIcon && (
//             <Image source={backIcon} style={[styles.backIcon, backIconStyle]} />
//           )}
//         </TouchableOpacity>
//       )}
//       <Image source={Images.logo} style={[styles.headerImg, headerImgStyle]} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     paddingTop: vh(16),
//     paddingBottom: vh(30),
//     paddingHorizontal: vw(12),
//     flexDirection: 'row',
//   },
//   headerImg: {
//     width: vw(131.86),
//     height: vh(16),
//     resizeMode: 'contain',
//     alignSelf: 'center',
//     flex: 1,
//   },
//   backButton: {
//     padding: vw(10),
//     borderRadius: 100,
//     backgroundColor: '#F4F7FF',
//   },
//   backIcon: {
//     width: vw(24), // Adjust size of the back icon
//     height: vw(24),
//     resizeMode: 'contain',
//   },
// });

// export default CustomHeader;

const CustomHeader = ({
  backButton = false,
  backIcon,
  onBackPress,
  headerStyle,
  backButtonStyle,
  backIconStyle,
  headerImgStyle,
  rightButton = false,
  rightIcon,
  onRightPress,
  rightButtonStyle,
  rightIconStyle,
}: HeaderProps) => {
  return (
    <View style={[styles.header, headerStyle]}>
      {/* Left Back Button */}
      {backButton && (
        <TouchableOpacity
          style={[styles.backButton, backButtonStyle]}
          onPress={onBackPress}>
          {backIcon && (
            <Image source={backIcon} style={[styles.backIcon, backIconStyle]} />
          )}
        </TouchableOpacity>
      )}

      {/* Logo */}
      <Image source={Images.logo} style={[styles.headerImg, headerImgStyle]} />

      {/* Right Button */}
      {rightButton && (
        <TouchableOpacity
          style={[styles.rightButton, rightButtonStyle]}
          onPress={onRightPress}>
          {rightIcon && (
            <Image
              source={Icons.notification}
              style={[styles.rightIcon, rightIconStyle]}
            />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: vh(16),
    paddingBottom: vh(30),
    paddingHorizontal: vw(12),
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerImg: {
    width: vw(131.86),
    height: vh(16),
    resizeMode: 'contain',
    alignSelf: 'center',
    flex: 1,
  },
  backButton: {
    padding: vw(10),
    borderRadius: 100,
    backgroundColor: '#F4F7FF',
  },
  backIcon: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
  },
  rightButton: {
    padding: vw(10),
    borderRadius: 100,
    backgroundColor: '#F4F7FF',
  },
  rightIcon: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
  },
});

export default CustomHeader;
