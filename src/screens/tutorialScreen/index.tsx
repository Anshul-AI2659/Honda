import React, {useRef, useState} from 'react';
import {View, Text, Image, ListRenderItem, FlatList} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView} from 'react-native-safe-area-context';

// Custom Components
import CustomHeader from '../../components/customHeader';
import CustomStatusBar from '../../components/statusBar';

// Utils
import {StackParamList} from '../../utils/types';
import {ScreenNames} from '../../utils/screenNames';

// Assets
import {steps} from '../../assets/data';

// Styles
import {styles} from './styles';
import CustomButton from '../../components/customButton';

type TutorialScreenProps = {
  navigation: StackNavigationProp<StackParamList>;
};

type TutorialItem = {
  key: string;
  image: any;
  title: string;
  description: string;
};

// Main Component
const TutorialScreen = ({navigation}: TutorialScreenProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const flatListRef = useRef<FlatList<TutorialItem>>(null);

  const saveTutorialSeen = async () => {
    try {
      await AsyncStorage.setItem('hasSeenTutorial', 'true');
    } catch (error) {
      console.error('Error saving tutorial completion flag:', error);
    }
  };

  const handleNext = async () => {
    if (currentStep < steps.length - 1) {
      const nextIndex = currentStep + 1;
      setCurrentStep(nextIndex);
      flatListRef.current?.scrollToIndex({index: nextIndex, animated: true});
    } else {
      await saveTutorialSeen();
      navigation.reset({
        index: 0,
        routes: [{name: ScreenNames.RoleSelect}],
      });
    }
  };

  const handleSkip = async () => {
    await saveTutorialSeen();
    navigation.reset({
      index: 0,
      routes: [{name: ScreenNames.RoleSelect}],
    });
  };

  const renderItem: ListRenderItem<TutorialItem> = ({item}) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  const handleScrollEnd = (event: {
    nativeEvent: {contentOffset: {x: number}};
  }) => {
    const newIndex = Math.round(
      event.nativeEvent.contentOffset.x / styles.slide.width,
    );
    setCurrentStep(newIndex);
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomStatusBar />
      <CustomHeader />
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
      </View>

      {/* Fixed Pagination Dots */}
      <View style={styles.pagination}>
        {steps.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === currentStep ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>

      {/* Fixed Buttons */}
      {currentStep === steps.length - 1 ? (
        <View style={styles.getStartedButtonContainer}>
          <CustomButton
            buttonText="Get Started"
            onPress={handleNext}
            buttonStyle={styles.getStartedButton}
            textStyle={styles.getStartedButtonText}
          />
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <CustomButton
            buttonText="Skip"
            onPress={handleSkip}
            buttonStyle={styles.skipButton}
            textStyle={styles.skipButtonText}
          />
          <CustomButton
            buttonText="Next"
            onPress={handleNext}
            buttonStyle={styles.nextButton}
            textStyle={styles.nextButtonText}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default TutorialScreen;
