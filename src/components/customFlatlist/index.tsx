import React, {JSX} from 'react';
import {
  FlatList,
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import {Icons} from '../../assets';
import styles from './styles';

interface CustomFlatListProps {
  data: Array<any>;
  renderItem: ({item}: {item: any}) => JSX.Element;
  keyExtractor: (item: any) => string;
  horizontal?: boolean;
  header?: React.ReactNode;
  headerStyle?: object;
  headerImg?: ImageSourcePropType;
  headingText?: string;
  headerImgStyle?: object;
  numColumn?: number;
  onSeeMorePress?: () => void;
  scrollEnabled?: boolean;
  contentContainerStyle?: object;
  listHeaderComponent?:React.ComponentType<any> | React.ReactElement | null;
}

const CustomFlatList = ({
  data,
  renderItem,
  keyExtractor,
  horizontal = true,
  header,
  headerStyle,
  headerImg,
  headingText,
  headerImgStyle,
  numColumn,
  onSeeMorePress,
  scrollEnabled = true,
  contentContainerStyle,
  listHeaderComponent
}: CustomFlatListProps) => {
  return (
    <View style={styles.container}>
      {/* Render optional header */}
      {header && (
        <View style={[styles.header, headerStyle]}>
          {headerImg && (
            <Image
              source={headerImg}
              style={[styles.headerImg, headerImgStyle]}
            />
          )}
          {headingText && (
            <View>
              <Text style={styles.heading}>{headingText}</Text>
            </View>
          )}
          <TouchableOpacity
            style={styles.seeMoreContainer}
            onPress={onSeeMorePress}>
            <Text style={styles.seeMoreText}>{'See More'}</Text>
            <View style={styles.seeMoreImageButton}>
              <Image source={Icons.seeMore} style={styles.seeMoreImg} />
            </View>
          </TouchableOpacity>
        </View>
      )}

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal={horizontal}
        numColumns={numColumn}
        scrollEnabled={scrollEnabled}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[
          styles.flatListContainer,
          contentContainerStyle,
        ]}
        ListHeaderComponent={listHeaderComponent}
      />
    </View>
  );
};

export default CustomFlatList;
