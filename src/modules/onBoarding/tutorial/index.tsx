// import {
//   Dimensions,
//   FlatList,
//   Image,
//   Text,
//   View,
//   Animated,
//   NativeSyntheticEvent,
//   NativeScrollEvent,
// } from 'react-native';
// import React, {useRef, useState} from 'react';
// import {useNavigation} from '@react-navigation/native';
// import styles from './styles';
// const {width: screenWidth} = Dimensions.get('window');
// import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// import colors from '../../../utils/colors';
// import {ScreenNames} from '../../../utils/screenNames';
// import {RootStackParamList} from '../../../utils/types';
// // import config from '../../../../config';
// import CustomFlatList from '../../../components/CustomFlatList';
// import CustomStatusBar from '../../../components/statusBar';
// import CustomHeader from '../../../components/customHeader';
// import CustomButton from '../../../components/CustomButton';
// import { banners } from '../../../staticData';
// import { changeIcon, getIcon } from 'react-native-change-icon';

// type TutorialScreenNavigationProp = NativeStackNavigationProp<
//   RootStackParamList,
//   ScreenNames.Tutorial
// >;

// interface BannerItem {
//   img: any;
//   text: string;
//   head: string;
// }

// const Tutorial = () => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const flatListRef = useRef<FlatList<BannerItem>>(null);
//   const navigation = useNavigation<TutorialScreenNavigationProp>();

//   const scrollX = useRef(new Animated.Value(0)).current;
//   const buttonOpacity = useRef(new Animated.Value(0)).current;

//   const renderItem = ({item}: {item: BannerItem}) => (
//     <View style={styles.slideContainer}>
//       <View style={styles.contain}>
//         <Image
//           source={item.img}
//           style={styles.productImage}
//           resizeMode="contain"
//         />
//       </View>
//       <View style={styles.headView}>
//         <Text style={styles.head}>{item.head}</Text>
//         <Text style={styles.description}>{item.text}</Text>
//       </View>
//     </View>
//   );

//   const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
//     const index = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
//     setActiveSlide(index);

//     // Animate button opacity when reaching the last slide
//     if (index === banners.length - 1) {
//       Animated.timing(buttonOpacity, {
//         toValue: 1,
//         duration: 100,
//         useNativeDriver: true,
//       }).start();
//     } else {
//       Animated.timing(buttonOpacity, {
//         toValue: 0,
//         duration: 300,
//         useNativeDriver: true,
//       }).start();
//     }
//   };

//   const handleNext = async () => {
//     if (activeSlide < banners.length - 1) {
//       const nextIndex = activeSlide + 1;
//       setActiveSlide(nextIndex);
//       flatListRef.current?.scrollToIndex({index: nextIndex, animated: true});
//     } else {
//       navigation.reset({
//         index: 0,
//         routes: [{name: ScreenNames.Role}],
//       });
//     }
//    // changeIcon('ic_launcher_red.png');  
//   };

//   const handleSkip = async () => {
//    //changeIcon('ic_launcher.png');  
//     navigation.reset({
//       index: 0,
//       routes: [{name: ScreenNames.Role}],
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <CustomStatusBar />
//       <CustomHeader headerStyle={styles.header} />
//       <CustomFlatList
//         ref={flatListRef}
//         data={banners}
//         renderItem={renderItem}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         keyExtractor={(item, index) => index.toString()}
//         onScroll={Animated.event(
//           [{nativeEvent: {contentOffset: {x: scrollX}}}],
//           {
//             useNativeDriver: false,
//             listener: handleScroll,
//           },
//         )}
//       />

//       <View style={styles.pagination}>
//         {banners.map((_, index) => {
//           const widthAnimation = scrollX.interpolate({
//             inputRange: [
//               screenWidth * (index - 1),
//               screenWidth * index,
//               screenWidth * (index + 1),
//             ],
//             outputRange: [8, 22, 8],
//             extrapolate: 'clamp',
//           });

//           const colorAnimation = scrollX.interpolate({
//             inputRange: [
//               screenWidth * (index - 1),
//               screenWidth * index,
//               screenWidth * (index + 1),
//             ],
//             outputRange: ['#ccc', colors.primary, '#ccc'],
//             extrapolate: 'clamp',
//           });

//           return (
//             <Animated.View
//               key={index}
//               style={[
//                 styles.dot,
//                 {
//                   width: widthAnimation,
//                   backgroundColor: colorAnimation,
//                 },
//               ]}
//             />
//           );
//         })}
//       </View>

//       {activeSlide === banners.length - 1 ? (
//         <Animated.View
//           style={[styles.getStartedButtonContainer, {opacity: buttonOpacity}]}>
//           <CustomButton
//             buttonText="GET STARTED"
//             onPress={handleNext}
//             buttonStyle={styles.getStartedButton}
//             textStyle={styles.getStartedButtonText}
//           />
//         </Animated.View>
//       ) : (
//         <View style={styles.buttonContainer}>
//           <CustomButton
//             buttonText={"SKIP"}
//             onPress={handleSkip}
//             buttonStyle={styles.skipButton}
//             textStyle={styles.skipButtonText}
//           />
//           <CustomButton
//             buttonText={"NEXT"}
//             onPress={handleNext}
//             buttonStyle={styles.nextButton}
//             textStyle={styles.nextButtonText}
//           />
//         </View>
//       )}
//       {/* </View> */}
//     </View>
//   );
// };

// export default Tutorial;

import {
  Dimensions,
  FlatList,
  Image,
  Text,
  View,
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
const {width: screenWidth} = Dimensions.get('window');
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import colors from '../../../utils/colors';
import {ScreenNames} from '../../../utils/screenNames';
import {RootStackParamList} from '../../../utils/types';
// import config from '../../../../config';
import CustomFlatList from '../../../components/CustomFlatList';
import CustomStatusBar from '../../../components/statusBar';
import CustomHeader from '../../../components/customHeader';
import CustomButton from '../../../components/CustomButton';
import {banners} from '../../../staticData';

type TutorialScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.Tutorial
>;

interface BannerItem {
  img: any;
  text: string;
  head: string;
}

const Tutorial = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const flatListRef = useRef<FlatList<BannerItem>>(null);
  const navigation = useNavigation<TutorialScreenNavigationProp>();

  const scrollX = useRef(new Animated.Value(0)).current;
  const buttonOpacity = useRef(new Animated.Value(0)).current;

  const renderItem = ({item}: {item: BannerItem}) => (
    <View style={styles.slideContainer}>
      <View style={styles.contain}>
        <Image
          source={item.img}
          style={styles.productImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.headView}>
        <Text style={styles.head}>{item.head}</Text>
        <Text style={styles.description}>{item.text}</Text>
      </View>
    </View>
  );

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
    setActiveSlide(index);

    
   
  };

  const handleNext = async () => {
    if (activeSlide < banners.length - 1) {
      const nextIndex = activeSlide + 1;
      setActiveSlide(nextIndex);
      flatListRef.current?.scrollToIndex({index: nextIndex, animated: true});
    } else {
      navigation.reset({
        index: 0,
        routes: [{name: ScreenNames.Role}],
      });
    }
   
  };

  const handleSkip = async () => {
    //changeIcon('ic_launcher.png');
    navigation.reset({
      index: 0,
      routes: [{name: ScreenNames.Role}],
    });
  };

  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <CustomHeader headerStyle={styles.header} />
      <CustomFlatList
        ref={flatListRef}
        data={banners}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
            
          },
        )}
        onMomentumScrollEnd={e => {
          const index = Math.round(e.nativeEvent.contentOffset.x / screenWidth);
          setActiveSlide(index);
        }}
      />

      <View style={styles.pagination}>
        {banners.map((_, index) => {
          const widthAnimation = scrollX.interpolate({
            inputRange: [
              screenWidth * (index - 1),
              screenWidth * index,
              screenWidth * (index + 1),
            ],
            outputRange: [8, 22, 8],
            extrapolate: 'clamp',
          });

          const colorAnimation = scrollX.interpolate({
            inputRange: [
              screenWidth * (index - 1),
              screenWidth * index,
              screenWidth * (index + 1),
            ],
            outputRange: ['#ccc', colors.primary, '#ccc'],
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

      {activeSlide === banners.length - 1 ? (
        <View style={styles.getStartedButtonContainer}>
          <CustomButton
            buttonText="GET STARTED"
            onPress={handleNext}
            buttonStyle={styles.getStartedButton}
            textStyle={styles.getStartedButtonText}
          />
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <CustomButton
            buttonText="SKIP"
            onPress={handleSkip}
            buttonStyle={styles.skipButton}
            textStyle={styles.skipButtonText}
          />
          <CustomButton
            buttonText="NEXT"
            onPress={handleNext}
            buttonStyle={styles.nextButton}
            textStyle={styles.nextButtonText}
          />
        </View>
      )}
    </View>
  );
};

export default Tutorial;