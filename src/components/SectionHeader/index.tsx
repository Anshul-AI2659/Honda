import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, ImageStyle, ViewStyle} from 'react-native';
import { Images } from '../../assets';
import { vh, vw } from '../../styles';
import colors from '../../utils/colors';

interface SectionHeaderProps {
  title?: string;
  onPress?: () => void;
  image?: any;
  imageStyle?: ImageStyle;
  seeMore?:boolean;
  titleStyle?:ViewStyle;
  seeMoreStyle?:ViewStyle;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({title, onPress, image, imageStyle, seeMore,titleStyle,seeMoreStyle}) => {
  return (
    <View style={styles.container}>
      {image ? (
        <Image source={image} style={[styles.image, imageStyle]} />
      ) : (
        title && <Text style={[styles.title,titleStyle]}>{title}</Text>
      )}
      
     {seeMore && <TouchableOpacity onPress={onPress}>
        <View style={[styles.seeMoreView,seeMoreStyle]}>
          <Text style={styles.seeMore}>See More</Text>
          <Image source={Images.right} />
        </View>
      </TouchableOpacity>}
    </View>
  );
};

export default SectionHeader;

const styles = StyleSheet.create({
  seeMoreView: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: vw(16),
    marginBottom: vh(12),
    width:'100%',
  },
  title: {
    fontSize: vh(16),
    fontWeight: 'bold',
  },
  seeMore: {
    fontSize: 14,
    color: colors.black,
    fontWeight: '800',
    marginRight: vh(2),
  },
  image: {
    height: vh(40),
    width: vh(60),
    resizeMode: 'contain',
  },
});