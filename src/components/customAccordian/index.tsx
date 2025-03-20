import {
  Animated,
  FlatList,
  Image,
  ImageSourcePropType,
  Platform,
  Pressable,
  Text,
  UIManager,
  View,
  ViewStyle,
} from 'react-native';
import React, {JSX, useEffect, useRef} from 'react';
import {specifications} from '../../assets/data';
import styles from './styles';

type Props = {
  title: any;
  icon: ImageSourcePropType;
  containerStyle: ViewStyle;
  isExpanded: boolean;
  onPress: () => void;
  hiddenView?: () => JSX.Element | undefined;
};

export const SingleExpandableList = (props: Props) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const {containerStyle = {}, isExpanded, onPress} = props;

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
    <View style={[containerStyle, {overflow: 'hidden'}]}>
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
        // <View style={styles.listContainer}>
        //   {specifications.map(item => (
        //     <View key={item.id} style={styles.itemContainer}>
        //       <Text style={styles.itemFeature}>{item.feature}</Text>
        //       <Text style={styles.itemValue}>{item.value}</Text>
        //     </View>
        //   ))}
        // </View>
        <View style={styles.listContainer}>
          <FlatList
            data={specifications}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.itemContainer}>
                <Text style={styles.itemFeature}>{item.feature}</Text>
                <Text style={styles.itemValue}>{item.value}</Text>
              </View>
            )}
            horizontal={false}
          />
        </View>
      )}
    </View>
  );
};
