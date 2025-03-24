import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  StyleSheet,
  Animated,
} from 'react-native';
import { vh } from '../../utils/dimension';
import { Colors } from '../../utils/colors';

const {width: screenWidth} = Dimensions.get('window');

interface Slide {
  id: string;
  title: string;
  description: string;
  image: any;
  bgColor: string;
  textColor: string;
}

const slides: Slide[] = [
  {
    id: '1',
    title: 'Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
    image: require('../../assets/images/tutorial1.png'),
    bgColor: '#E41D2D',
    textColor: Colors.White,
  },
  {
    id: '2',
    title: 'Special Offer',
    description: 'Get exclusive discounts on selected products.',
    image: require('../../assets/images/tutorial2.png'),
    bgColor: '#FFD6DA',
    textColor: Colors.Black,
  },
  {
    id: '3',
    title: 'Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
    image: require('../../assets/images/tutorial3.png'),
    bgColor: '#E41D2D',
    textColor: Colors.White,
  },
];

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList<Slide>>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % slides.length;
        flatListRef.current?.scrollToIndex({index: nextIndex, animated: true});
        return nextIndex;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
    setActiveIndex(index);
  };

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        removeClippedSubviews={false}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false, listener: handleScroll},
        )}
        renderItem={({item}) => (
          <View style={[styles.slide, {backgroundColor: item.bgColor}]}>
            <View style={{width: vh(169), marginStart: vh(10)}}>
              <Text style={[styles.title, {color: item.textColor}]}>
                {item.title}
              </Text>
              <Text style={[styles.description, {color: item.textColor}]}>
                {item.description}
              </Text>
            </View>
            <Image source={item.image} style={styles.image} />
          </View>
        )}
        keyExtractor={item => item.id}
      />
      {/* <View style={styles.pagination}>
        {slides.map((_, index) => (
          <View key={index} style={[styles.dot, activeIndex === index && styles.activeDot]} />
        ))}
      </View> */}
      <View style={styles.pagination}>
        {slides.map((_, index) => {
          const widthAnimation = scrollX.interpolate({
            inputRange: [
              screenWidth * (index - 1),
              screenWidth * index,
              screenWidth * (index + 1),
            ],
            outputRange: [8, 16, 8],
            extrapolate: 'clamp',
          });

          const colorAnimation = scrollX.interpolate({
            inputRange: [
              screenWidth * (index - 1),
              screenWidth * index,
              screenWidth * (index + 1),
            ],
            outputRange: ['#ccc', Colors.primary, '#ccc'],
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
    height: vh(160),
    width: vh(320),
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: vh(8),
    flexDirection: 'row',
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
    width: vh(140),
    height: vh(140),
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ddd',
    marginHorizontal: vh(4),
  },
  activeDot: {
    backgroundColor: '#E74C3C',
  },
});
