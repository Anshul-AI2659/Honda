import React, {useRef, useState, useEffect, useCallback, useMemo} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  StyleSheet,
  Animated,
  ViewStyle,
} from 'react-native';
import colors from '../../utils/colors';
import {vh, vw} from '../../styles';
import { useAppSelector } from '../../hooks';

const {width: screenWidth} = Dimensions.get('window');

interface CarouselProps {
  headerStyle?: ViewStyle;
  flatData?: [];
}

const CARD_WIDTH = vw(320) - vh(16);

const Carousel = ({headerStyle, flatData}: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList>(null);
  const currentIndexRef = useRef(0);
  const { uType,} = useAppSelector((state) => state.authReducer);


  const data = flatData || [];  // default to empty array if flatData is undefined

  // console.log('card aaaa',data);
  
  useEffect(() => {
    if (data.length === 0) return;
  
    const interval = setInterval(() => {
      let nextIndex = (currentIndexRef.current + 1) % data.length;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
  
      // Manually animate scrollX value
      Animated.timing(scrollX, {
        toValue: nextIndex * screenWidth,
        duration: 300,
        useNativeDriver: false,
      }).start();
  
      currentIndexRef.current = nextIndex;
      setActiveIndex(nextIndex);
    }, 3000);
  
    return () => clearInterval(interval);
  }, [data]);
  

  const handleScroll = useCallback((event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / CARD_WIDTH);
    currentIndexRef.current = index;
  }, []);

  const renderItem = useCallback(({item}) => (
    
    <View style={[styles.slide, ]}>
      
      <Image source={{uri:item.image}} style={styles.image} />
    </View>
  ), []);

  const paginationDots = useMemo(() => {
    return data.map((_, index) => {
      const widthAnimation = scrollX.interpolate({
        inputRange: [CARD_WIDTH * (index - 1), CARD_WIDTH * index, CARD_WIDTH * (index + 1)],
        outputRange: [8, 22, 8],
        extrapolate: 'clamp',
      });
  
      const colorAnimation = scrollX.interpolate({
        inputRange: [CARD_WIDTH * (index - 1), CARD_WIDTH * index, CARD_WIDTH * (index + 1)],
        outputRange: [colors.borderSecond, colors.primary, colors.borderSecond],
        extrapolate: 'clamp',
      });
  
      return (
        <Animated.View
          key={index}
          style={[styles.dot, { width: widthAnimation, backgroundColor: colorAnimation }]}
        />
      );
    });
  }, [scrollX, data.length]);
  
  
  return (
    <View style={headerStyle}>
      <FlatList
        ref={flatListRef}
        data={data}
        horizontal
        snapToInterval={vw(320)-vw(16)}
        pagingEnabled
        removeClippedSubviews={false}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
            listener: handleScroll,
          }
        )}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <View style={styles.pagination}>
        {data?.map((_, index) => {
           const widthAnimation = scrollX.interpolate({
            inputRange: [
              CARD_WIDTH * (index - 1),
              CARD_WIDTH * index,
              CARD_WIDTH * (index + 1),
            ],
            outputRange: [8, 22, 8],
            extrapolate: 'clamp',
          });

          const colorAnimation = scrollX.interpolate({
            inputRange: [
              CARD_WIDTH * (index - 1),
              CARD_WIDTH * index,
              CARD_WIDTH * (index + 1),
            ],
            outputRange: [colors.borderSecond, colors.primary, colors.borderSecond],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={index}
              style={[
                styles.dot,
                {
                  width: widthAnimation,
                  backgroundColor: colorAnimation,
                },
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  slide: {
    height: vw(160),
    width: vw(320),
    alignItems: 'center',
    borderRadius: vw(16),
    marginVertical: vh(10),
    marginHorizontal: vh(16),
    // flexDirection: 'row',
    marginRight: vw(0),
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    fontSize: vh(12),
    color: 'white',
    marginTop: 5,
    fontWeight: '400',
  },
  image: {
    width: vh(320),
    height: vh(160),
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    height: vh(8),
    borderRadius: vw(4),
    backgroundColor: colors.borderSecond,
    marginHorizontal: vh(4),
  },
  activeDot: {
    backgroundColor: colors.primary,
  },
  contentView: {width: vh(169), marginStart: vh(10)},

});
