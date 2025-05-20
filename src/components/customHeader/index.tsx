import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  Text,
} from 'react-native';
<<<<<<< HEAD
import styles from './styles';
import { Images } from '../../assets';



=======
import {Images} from '../../assets';
import styles from './styles';
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625

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
  rightTextStyle?: object;
  imageViewStyle?:object;
  rightText?: string;
  headerIcon?: ImageSourcePropType;
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
  rightText,
  rightTextStyle,
  onRightPress,
  rightButtonStyle,
  rightIconStyle,
  imageViewStyle,
  headerIcon,
}: HeaderProps) => {
  return (
    <View style={[styles.header, headerStyle]}>
      {/* Left Back Button */}
      <TouchableOpacity
        style={[styles.leftButton, leftButtonStyle]}
        onPress={onleftPress}>
        {leftIcon && (
          <Image source={leftIcon} style={[styles.leftIcon, leftIconStyle]} />
        )}
      </TouchableOpacity>
      {/* Logo */}
<<<<<<< HEAD
      <View style={[styles.imageView,imageViewStyle]}>
        <Image
          source={headerIcon ? headerIcon : Images.honda}
          style={[styles.headerImg, headerImgStyle]}
        />
        {textHeading && <Text style={styles.textHeading}>{textHeading}</Text>}
        
=======
      <View style={{alignItems: 'center'}}>
        <Image
          source={Images.logo}
          style={[styles.headerImg, headerImgStyle]}
        />
        {textHeading && <Text style={styles.textHeading}>{textHeading}</Text>}
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
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
<<<<<<< HEAD
        {rightText && (
          <Text style={[styles.rightText,rightTextStyle]}>{rightText}</Text>
        )}
=======
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;
