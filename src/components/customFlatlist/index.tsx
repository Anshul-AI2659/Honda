import React, {forwardRef} from 'react';
import {
  ViewStyle,
  TextStyle,
  ListRenderItem,
  StyleProp,
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageSourcePropType,
  StyleSheet,
  ImageStyle,
} from 'react-native';
import styles from './style';
import {Images} from '../../assets';
import {FlatList, GestureHandlerRootView} from 'react-native-gesture-handler';
// import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';

interface CustomFlatListProps<T> {
  data: T[]; 
  renderItem: ListRenderItem<T>;
  keyExtractor?: (item: T, index: number) => string;
  horizontal?: boolean;
  pagingEnabled?: boolean;
  showsHorizontalScrollIndicator?: boolean;
  showsVerticalScrollIndicator?: boolean;
  contentContainerStyle?: StyleProp<ViewStyle>;
  onScroll?: (event: any) => void;
  onMomentumScrollEnd?: (event: any) => void;
  style?: StyleProp<ViewStyle>;
  ListFooterComponent?: React.ComponentType | null;
  ListEmptyComponent?: React.ComponentType | null;
  header?: React.ReactNode;
  headerStyle?: StyleProp<ViewStyle>;
  headerImg?: ImageSourcePropType;
  headingText?: string;
  headerImgStyle?: StyleProp<ImageStyle>;
  numColumns?: number;
  onSeeMorePress?: () => void;
  scrollEnabled?: boolean;
  listHeaderComponent?: React.ComponentType<any> | React.ReactElement | null;
  columnWrapperStyle?: ViewStyle;
}

const CustomFlatList = forwardRef<FlatList, CustomFlatListProps<any>>(
  (
    {
      data,
      renderItem,
      keyExtractor = (item, index) => index.toString(),
      horizontal = false,
      pagingEnabled = false,
      showsHorizontalScrollIndicator = false,
      showsVerticalScrollIndicator = false,
      contentContainerStyle,
      onScroll,
      onMomentumScrollEnd,
      style,
      ListFooterComponent,
      ListEmptyComponent,
      header,
      headerStyle,
      headerImg,
      headingText,
      headerImgStyle,
      numColumns,
      onSeeMorePress,
      scrollEnabled = true,
      listHeaderComponent,
      columnWrapperStyle,
    },
    ref,
  ) => {
    return (
      <GestureHandlerRootView style={styles.container}>
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
            {data.length>4 && onSeeMorePress && (
              <TouchableOpacity
                style={styles.seeMoreContainer}
                onPress={onSeeMorePress}>
                <Text style={styles.seeMoreText}>{'See More'}</Text>

                <Image
                  source={Images.seeMoreRigthArrow}
                  style={styles.seeMoreImg}
                />
              </TouchableOpacity>
            )}
          </View>
        )}

        <FlatList
          removeClippedSubviews={false}
          ref={ref}
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          horizontal={horizontal}
          numColumns={numColumns}
          pagingEnabled={pagingEnabled}
          scrollEnabled={scrollEnabled}
          showsVerticalScrollIndicator={showsVerticalScrollIndicator}
          showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
          contentContainerStyle={[
            styles.flatListContainer,
            contentContainerStyle,
          ]}
          ListFooterComponent={ListFooterComponent || undefined}
          ListEmptyComponent={ListEmptyComponent || undefined}
          onScroll={onScroll}
          onMomentumScrollEnd={onMomentumScrollEnd}
          ListHeaderComponent={listHeaderComponent}
          columnWrapperStyle={columnWrapperStyle}
        />
      </GestureHandlerRootView>
    );
  },
);

export default CustomFlatList;
