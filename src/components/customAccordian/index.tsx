<<<<<<< HEAD
interface CustomCardProps {
  title: string;

  isExpanded?: boolean;
  onAccordionPress?: () => void;

  expandImage?: any;
  unexpandImage?: any;
  iconSize?: number;
  iconColor?: string;
  children?:ReactNode
  style?:ViewStyle
}

import React, { ReactNode } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ViewStyle } from 'react-native';
import { FontsStyles, normalize, vh } from '../../styles';
import { ROBOTO_MEDIUM } from '../../styles/Fonts';
import colors from '../../utils/colors';

const SingleExpandableList = ({ title, isExpanded, onAccordionPress, children ,expandImage, unexpandImage,
 iconSize,
    iconColor,style}:CustomCardProps) => {
  return (
    <View style={[styles.container,style]}>
      <View  style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={onAccordionPress}>
        <Image
                source={isExpanded ? expandImage : unexpandImage}
                style={[
                  styles.iconImage,
                  {
                    width: iconSize || 24,
                    height: iconSize || 24,
                    tintColor: iconColor || '#666',
                  },
                ]}
              />
      </TouchableOpacity>
      </View>
      {isExpanded && <View style={styles.content}>{children}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: vh(24) ,borderWidth:1,borderRadius:vh(12),borderColor:colors.inactiveDot,justifyContent:'center'},
  header: { flexDirection: 'row', justifyContent: 'space-between', padding:vh(16),alignItems:'center'},
  title: { fontSize: normalize(16),fontFamily:ROBOTO_MEDIUM,letterSpacing:0.1 },
  content: { flex:1},
  iconImage: {
    resizeMode: 'contain',
  },
});

export default SingleExpandableList;
=======
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
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
