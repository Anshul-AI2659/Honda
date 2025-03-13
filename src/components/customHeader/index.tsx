import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
  Text,
} from 'react-native';
import {Images} from '../../assets';
import {vh, vw} from '../../utils/dimension';
import {Colors} from '../../utils/colors';

interface HeaderProps {
  headerStyle?: object;
  leftIcon?: ImageSourcePropType;
  onleftPress?: () => void;
  leftButtonStyle?: object;
  leftIconStyle?: object;
  headerImgStyle?: object;
  headerText?: boolean;
  textHeading?: string;
  rightIcon?: ImageSourcePropType;
  onRightPress?: () => void;
  rightButtonStyle?: object;
  rightIconStyle?: object;
}

const CustomHeader = ({
  headerStyle,
  leftIcon,
  onleftPress,
  leftButtonStyle,
  leftIconStyle,
  headerImgStyle,
  headerText = false,
  textHeading,
  rightIcon,
  onRightPress,
  rightButtonStyle,
  rightIconStyle,
}: HeaderProps) => {
  return (
    <View style={[styles.header, headerStyle]}>
      {/* Left Back Button */}
        <TouchableOpacity
          style={[styles.backButton, leftButtonStyle]}
          onPress={onleftPress}>
          {leftIcon && (
            <Image source={leftIcon} style={[styles.backIcon, leftIconStyle]} />
          )}
        </TouchableOpacity>
      {/* Logo */}
      <View style={{alignItems: 'center'}}>
        <Image
          source={Images.logo}
          style={[styles.headerImg, headerImgStyle]}
        />
        {headerText && <Text style={styles.textHeading}>{textHeading}</Text>}
      </View>

      {/* Right Button */}
        <TouchableOpacity
          style={[styles.rightButton, rightButtonStyle]}
          onPress={onRightPress}>
          {rightIcon && (
            <Image
              source={rightIcon}
              style={[styles.rightIcon, rightIconStyle]}
            />
          )}
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: vh(12),
    paddingHorizontal: vw(16),
    backgroundColor:Colors.White,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    width: vw(40),
    height: vw(40),
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: Colors.White,
  },
  backIcon: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
  },
  headerImg: {
    width: vw(131.86),
    height: vw(16),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  textHeading: {
    fontSize:18,
    fontWeight:'500',
    color:Colors.blackText,
    marginTop:vh(8),
  },
  rightButton: {
    width: vw(40),
    height: vw(40),
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: Colors.White,
  },
  rightIcon: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
  },
});

export default CustomHeader;
