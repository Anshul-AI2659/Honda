import React, {JSX} from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import {Icons} from '../../assets';
import {vw} from '../../utils/dimension';
import {Colors} from '../../utils/colors';

interface CustomFlatListProps {
  data: Array<any>;
  renderItem: ({item}: {item: any}) => JSX.Element;
  keyExtractor: (item: any) => string;
  horizontal?: boolean; // Scroll direction
  header?: React.ReactNode; // Optional header
  headerStyle?: object;
  headerImg?: ImageSourcePropType;
  headerImage?: boolean;
  headerText?: boolean;
  heading?: string;
  headerImgStyle?: object;
  numColumns?: number; // Number of columns for grid layout
  scrollEnabled?: boolean; // Whether the list is scrollable
  contentContainerStyle?: object; // Additional styling for FlatList
}

const CustomFlatList: React.FC<CustomFlatListProps> = ({
  data,
  renderItem,
  keyExtractor,
  horizontal = true,
  header,
  headerStyle,
  headerImg,
  headerImage = false,
  headerText = false,
  heading,
  headerImgStyle,
  numColumns = 1,
  scrollEnabled = true,
  contentContainerStyle,
}) => {
  return (
    <View style={styles.container}>
      {/* Render optional header */}
      {header && (
        <View style={[styles.header, headerStyle]}>
          {header}
          {headerImage && (
            <Image
              source={headerImg}
              style={[styles.headerImg, headerImgStyle]}
            />
          )}
          {headerText && (
            <View>
              <Text style={styles.heading}>{heading}</Text>
            </View>
          )}
          <TouchableOpacity style={styles.seeMoreContainer}>
            <Text style={styles.seeMoreText}>See More</Text>
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
        numColumns={numColumns}
        scrollEnabled={scrollEnabled}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[
          styles.flatListContainer,
          contentContainerStyle,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: vw(20),
  },
  headerImg: {
    width: vw(99),
    height: vw(12),
    resizeMode: 'contain',
  },
  heading: {
    fontSize: 18,
    fontWeight: '800',
  },
  seeMoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeMoreText: {
    fontSize: 14,
    marginRight: vw(8),
    fontWeight: '600',
  },
  seeMoreImageButton: {
    padding: vw(5),
    borderRadius: 100,
    backgroundColor: Colors.primary,
  },
  seeMoreImg: {
    width: vw(10),
    height: vw(10),
    resizeMode: 'contain',
  },
  flatListContainer: {
    paddingVertical: 10,
  },
});

export default CustomFlatList;
