import React, {JSX, useRef} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import CustomButton from '../customButton';
import {Colors} from '../../utils/colors';
import {SCREEN_WIDTH, vh, vw} from '../../utils/dimension';
import {size} from '../../utils/size';

interface CarouselProps {
  steps: any[];
  currentStep: number;
  renderItem: ({item, index}: {item: any; index: number}) => JSX.Element;
  onNext?: any;
  onSkip?: any;
  handleScrollEnd: (event: any) => void;
  showButtons?: boolean;
  buttonTextNext?: string;
  buttonTextSkip?: string;
  buttonTextGetStarted?: string;
  paginationStyle?: object;
  dotStyle?: object;
  activeDotStyle?: object;
  inactiveDotStyle?: object;
  buttonContainerStyle?: object;
  getStartedButtonContainerStyle?: object;
  getStartedButtonStyle?: object;
  getStartedButtonTextStyle?: object;
  skipButtonStyle?: object;
  skipButtonTextStyle?: object;
  nextButtonStyle?: object;
  nextButtonTextStyle?: object;
}

const Carousel: React.FC<CarouselProps> = ({
  steps,
  currentStep,
  renderItem,
  onNext,
  onSkip,
  handleScrollEnd,
  showButtons = true,
  buttonTextNext = 'Next',
  buttonTextSkip = 'Skip',
  buttonTextGetStarted = 'Get Started',
  paginationStyle = {},
  dotStyle = {},
  activeDotStyle = {},
  inactiveDotStyle = {},
  buttonContainerStyle = {},
  getStartedButtonContainerStyle = {},
  getStartedButtonStyle = {},
  getStartedButtonTextStyle = {},
  skipButtonStyle = {},
  skipButtonTextStyle = {},
  nextButtonStyle = {},
  nextButtonTextStyle = {},
}) => {
  const flatListRef = useRef<FlatList>(null);

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={steps}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScrollEnd}
      />

      {/* Fixed Pagination Dots */}
      <View style={[styles.pagination, paginationStyle]}>
        {steps.map((_, index) => (
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

      {/* Conditionally render buttons if showButtons is true */}
      {showButtons && (
        <>
          {currentStep === steps.length - 1 ? (
            <View
              style={[
                styles.getStartedButtonContainer,
                getStartedButtonContainerStyle,
              ]}>
              <CustomButton
                buttonText={buttonTextGetStarted}
                onPress={onNext}
                buttonStyle={[styles.getStartedButton, getStartedButtonStyle]}
                textStyle={getStartedButtonTextStyle}
              />
            </View>
          ) : (
            <View style={[styles.buttonContainer, buttonContainerStyle]}>
              <CustomButton
                buttonText={buttonTextSkip}
                onPress={onSkip}
                buttonStyle={[styles.skipButton, skipButtonStyle]}
                textStyle={skipButtonTextStyle}
              />
              <CustomButton
                buttonText={buttonTextNext}
                onPress={onNext}
                buttonStyle={[styles.nextButton, nextButtonStyle]}
                textStyle={nextButtonTextStyle}
              />
            </View>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
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
    backgroundColor: Colors.White,
  },
  title: {
    fontSize: size.headerTitle,
    fontWeight: '700',
    color: Colors.Black,
    marginTop: vh(10),
    textAlign: 'center',
  },
  description: {
    fontSize: size.description,
    color: Colors.tutorialDescription,
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
    marginTop: vh(30),
    marginBottom: vh(20),
  },
  dot: {
    width: vw(8),
    height: vw(8),
    borderRadius: 5,
    marginHorizontal: vw(3),
  },
  activeDot: {
    backgroundColor: Colors.primary,
    width: vw(24),
    height: vw(8),
  },
  inactiveDot: {
    backgroundColor: Colors.tutorialInactiveDot,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: vw(20),
    // marginTop: vh(20),
  },
  nextButton: {
    backgroundColor: Colors.primary,
    paddingVertical: vw(14),
    paddingHorizontal: vw(27),
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonText: {
    color: Colors.White,
    fontSize: size.button,
    fontWeight: '800',
    textAlign: 'center',
  },
  skipButton: {
    paddingVertical: vw(14),
    paddingHorizontal: vw(16),
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  skipButtonText: {
    color: Colors.primary,
    fontSize: size.button,
    fontWeight: '700',
  },
  getStartedButtonContainer: {
    paddingHorizontal: vw(24),
  },
  getStartedButton: {
    backgroundColor: Colors.primary,
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
    color: Colors.White,
    fontSize: size.button,
    fontWeight: '800',
    textAlign: 'center',
  },
  scrollContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    width: SCREEN_WIDTH,
  },
});

export default Carousel;
