import {
  Animated,
  Image,
  ImageSourcePropType,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  UIManager,
  View,
  ViewStyle,
} from 'react-native';
import React, {JSX, useEffect, useRef} from 'react';
import {Colors} from '../../utils/colors';
import {vh} from '../../utils/dimension';
import {specifications} from '../../assets/data';

type Props = {
  title: any;
  icon: ImageSourcePropType;
  containerStyle: ViewStyle;
  isExpanded: boolean;
  onPress: ()=> void;
  hiddenView?: () => JSX.Element | undefined;
};

export const SingleExpandableList = (props: Props) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const {containerStyle = {},  isExpanded, onPress } = props;

  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  const toggleAnimation = () => {
    Animated.timing(animatedValue, {
      toValue: isExpanded ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    toggleAnimation();
  }, [isExpanded]);

  return (
    <View style={[containerStyle,{overflow:'hidden'}
    ]}>
      <Pressable style={styles.mainContainer} onPress={onPress}>
        <Text style={styles.titleText}>{props.title}</Text>
        {props.icon && (
          <Animated.View
            style={[
              styles.imgContainer,
              {
                transform: [
                  {
                    rotate: animatedValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '-180deg'],
                    }),
                  },
                ],
              },
            ]}>
            <Image
              resizeMode="contain"
              source={props.icon}
              style={styles.img}
            />
          </Animated.View>
        )}
      </Pressable>
      {isExpanded && (
        <View style={styles.listContainer}>
          {specifications.map(item => (
            <View key={item.id} style={styles.itemContainer}>
              <Text style={styles.itemFeature}>{item.feature}</Text>
              <Text style={styles.itemValue}>{item.value}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.White,
    paddingVertical: vh(16),
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 1,
    color: Colors.blackText,
  },
  img: {
    height: vh(24),
    width: vh(24),
    tintColor: Colors.Black,
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer:{
    marginBottom:vh(8),
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: vh(8),
  },
  itemFeature: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.blackText,
  },
  itemValue: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.blackText,
  },
});
