import React, {JSX, useRef} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import { normalize, screenWidth, vh, vw } from '../../styles';

interface CarouselProps {
  data: any[];
  currentStep: number;
  renderItem: ({item, index}: {item: any; index: number}) => JSX.Element;
  handleScrollEnd: (event: any) => void;
  paginationStyle?: object;
  dotStyle?: object;
  activeDotStyle?: object;
  inactiveDotStyle?: object;
}

const Carousel: React.FC<CarouselProps> = ({
  data,
  currentStep,
  renderItem,
  handleScrollEnd,
  paginationStyle = {},
  dotStyle = {},
  activeDotStyle = {},
  inactiveDotStyle = {},
}) => {
  const flatListRef = useRef<FlatList>(null);

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScrollEnd}
        removeClippedSubviews={false}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  image: {
    width: vw(340),
    height: vw(340),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  contentContainer: {
    width: '100%',
    paddingHorizontal: vw(35),
    marginTop: vh(30),
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  title: {
    // fontSize: si.headerTitle,
    fontWeight: '700',
    color: colors.black,
    marginTop: vh(10),
    textAlign: 'center',
  },
  description: {
    // fontSize: size.description,
    // color: colors.tutorialDescription,
    fontWeight: '400',
    marginTop: vh(10),
    paddingHorizontal: vw(20),
    lineHeight: vh(20),
    textAlign: 'center',
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: vh(30),
    // marginBottom: vh(20),
  },
  dot: {
    width: vw(8),
    height: vw(8),
    borderRadius: 5,
    marginHorizontal: vw(3),
  },
  activeDot: {
    backgroundColor: colors.primary,
    width: vw(24),
    height: vw(8),
  },
  inactiveDot: {
    backgroundColor: colors.inactiveDot,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: vw(20),
    // marginTop: vh(20),
  },
  nextButton: {
    backgroundColor: colors.primary,
    paddingVertical: vw(14),
    paddingHorizontal: vw(27),
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonText: {
    color: colors.white,
    fontSize: normalize(16),
    fontWeight: '800',
    textAlign: 'center',
  },
  skipButton: {
    paddingVertical: vw(14),
    paddingHorizontal: vw(16),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  skipButtonText: {
    color: colors.primary,
    // fontSize: size.button,
    fontWeight: '700',
  },
  getStartedButtonContainer: {
    paddingHorizontal: vw(24),
  },
  getStartedButton: {
    backgroundColor: colors.primary,
    marginHorizontal: vw(24),
    width: '100%',
    marginTop: vh(40),
    paddingVertical: vw(14),
    paddingHorizontal: vw(27),
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  getStartedButtonText: {
    color: colors.white,
    // fontSize: .button,
    fontWeight: '800',
    textAlign: 'center',
  },
  scrollContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    width: screenWidth,
  },
});

export default Carousel;
