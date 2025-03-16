import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  Text,
} from 'react-native';
import {Images} from '../../assets';
import styles from './styles';

interface HeaderProps {
  headerStyle?: object;
  leftIcon?: ImageSourcePropType;
  onleftPress?: () => void;
  leftButtonStyle?: object;
  leftIconStyle?: object;
  headerImgStyle?: object;
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
        {textHeading && <Text style={styles.textHeading}>{textHeading}</Text>}
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

export default CustomHeader;
