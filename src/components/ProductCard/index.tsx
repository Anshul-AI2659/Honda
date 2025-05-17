import React, {useMemo} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageProps,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {FONTS, vh, vw} from '../../styles';
import colors from '../../utils/colors';
import { CustomImage } from '../CustomFastImage';
import { Images } from '../../assets';

const {width: screenWidth} = Dimensions.get('window');

interface ProductProps {
  item: {
    id: string;
    name: string;
    price?: string;
    categoryName?: string;
    image: ImageProps;
  };
  textAlign?: 'left' | 'center' | 'right';
  onPress?: () => void;
  extraCardStyle?: ViewStyle;
  textContainerStyle?: ViewStyle;
  nameTextStyle?: TextStyle;
  categoryTextStyle?: TextStyle;
  priceTextStyle?: TextStyle;
  showHeartIcon?: boolean;
  isFavourite?: boolean;
  onHeartPress?: (itemId: string) => void;
}

const ProductCard = React.memo(
  ({
    item,
    textAlign = 'left',
    onPress,
    extraCardStyle,
    textContainerStyle,
    nameTextStyle,
    categoryTextStyle,
    priceTextStyle,
    showHeartIcon,
    isFavourite,
    onHeartPress,
  }: ProductProps) => {
    const cardHeight = useMemo(
      () => (item.categoryName ? vh(183) : vh(168)),
      [item.categoryName],
    );

    const renderImage = () => {
      let imageSource;

      if (item?.image) {
        imageSource =
          typeof item.image === 'string' ? {uri: item.image} : item.image;
      } else if (Array.isArray(item?.images) && item.images.length > 0) {
        imageSource = {uri: item.images[0]};
      }

      if (!imageSource) return null;

      return <CustomImage source={imageSource} style={styles.image} />;
    };
    
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.card, extraCardStyle, {height: cardHeight}]}>
        <View style={styles.greyView}>{renderImage()}
           {/* HEART ICON */}
           {showHeartIcon && (
            <TouchableOpacity
              onPress={() => onHeartPress?.(item.id)}
              style={styles.heartIconContainer}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Image
                source={
                  isFavourite
                    ? Images.favouriteSelected // your filled heart icon
                    : Images.favouriteUnselected// your empty heart icon
                }
                style={styles.heartIcon}
              />
            </TouchableOpacity>
          )}
        </View>

        

        <View style={[styles.textContainer, textContainerStyle]}>
          <Text
            style={[styles.name, {textAlign}, nameTextStyle]}
            numberOfLines={1}
            ellipsizeMode="tail">
            {item?.modelNumber ?? item.name}
          </Text>
          {(item.categoryName || item?.productCategory) && (
            <Text
              style={[styles.category, {textAlign}, categoryTextStyle]}
              numberOfLines={1}
              ellipsizeMode="tail">
              {item?.productCategory ?? item.categoryName}
            </Text>
          )}
          {item.price && (
            <Text
              style={[styles.price, {textAlign}, priceTextStyle]}
              numberOfLines={1}
              ellipsizeMode="tail">
              {item.price}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    );
  },
);

export default ProductCard;

const styles = StyleSheet.create({
  greyView: {
    backgroundColor: '#F3F6FA',
    alignItems: 'center',
    justifyContent: 'center',
    height: vh(94),
    borderRadius: vh(8),
  },
  card: {
    width: screenWidth / 3 + vh(3),
    backgroundColor: colors.white,
    borderRadius: vh(8),
    borderWidth: vw(2),
    borderColor: colors.backButtonBackground,
  },
  image: {
    width: vw(100),
    height: vw(90),
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: vh(5),
  },
  name: {
    fontSize: vh(14),
    fontFamily: FONTS.ROBOTO_MEDIUM,
    marginTop: vh(5),
    width: '100%',
  },
  category: {
    fontSize: vh(13),
    fontFamily: FONTS.ROBOTO_MEDIUM,
    color: 'gray',
    marginTop: vh(2),
    width: '100%',
  },
  price: {
    fontSize: vh(13),
    color: colors.black,
    fontWeight: '600',
    marginTop: vh(5),
    width: '100%',
  },
  heartIconContainer: {
    position: 'absolute',
    top: vh(5),
    right: vw(5),
    zIndex: 10,
    width: vw(22),
    height: vw(22),
    borderRadius: vw(14),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heartIcon: {
    width: vw(16),
    height: vw(15.44),
    resizeMode: 'contain',
  },
});