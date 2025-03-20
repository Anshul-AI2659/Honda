import React, {JSX, useRef} from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';

interface CarouselProps {
  data: any[];
  currentStep: number;
  renderItem: ({item, index}: {item: any; index: number}) => JSX.Element;
  handleScrollEnd: (event: any) => void;
  listContainerStyle?: object;
  paginationStyle?: object;
  dotStyle?: object;
  activeDotStyle?: object;
  inactiveDotStyle?: object;
}

const Carousel = ({
  data,
  currentStep,
  renderItem,
  handleScrollEnd,
  listContainerStyle,
  paginationStyle = {},
  dotStyle = {},
  activeDotStyle = {},
  inactiveDotStyle = {},
}: CarouselProps) => {
  const flatListRef = useRef<FlatList>(null);

  return (
    <View style={listContainerStyle}>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScrollEnd}
      />

      {/* Fixed Pagination Dots */}
      <View style={[styles.pagination, paginationStyle]}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              dotStyle,
              index === currentStep
                ? [styles.activeDot, activeDotStyle]
                : [styles.inactiveDot, inactiveDotStyle],
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;
