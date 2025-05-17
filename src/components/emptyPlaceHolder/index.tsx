import React from 'react';
import { Image, StyleSheet, Text, TextInputProps, View, ViewStyle } from 'react-native';
import { useColors } from '../../hooks';
import colors from '../../utils/colors';
import { FONTS, normalize, vh, vw } from '../../styles';
import CustomButton from '../CustomButton';


interface Props {
  title?: string;
  source?: string;
  onPress?: Function;
  buttonTitle?: string;
  containerStyle?: ViewStyle;
  titleStyle?: TextInputProps;
  placeholderDescription?: string;
  placeholderStyle?: TextInputProps;
  styleImg?:any
}
const EmptyPlaceholder = (props: Props) => {
  const Colors = useColors();
  return (
    <View style={[styles.container, props.containerStyle]}>
      {props?.source ? (
        <Image
          source={props.source}
          resizeMode={'contain'}
          style={[styles.image,props.styleImg]}
        />
      ) : null}
      {props?.title ? (
        <Text
          style={[
            styles.title,
            {color: colors.black, ...props?.titleStyle},
          ]}>
          {props?.title}
        </Text>
      ) : null}
      <Text
        style={[
          styles.placeHolderText,
          {
            color: colors.red,
            ...props?.placeholderStyle,
          },
        ]}>
        {props.placeholderDescription}
      </Text>
      {props?.buttonTitle && props?.onPress ? (
        // <CustomButton
        //   title={props.buttonTitle}
        //   // onPress={props?.onPress}
        //   style={{width: '75%', marginTop: vw(40)}}
        // />
        <CustomButton
        buttonText={'Try Again'}
        onPress={props?.onPress}
        buttonStyle={{backgroundColor:'red',width:vw(225),height:vw(45),borderRadius:vw(16),marginTop:vh(25)}}
        textStyle={{fontSize:16,fontFamily:FONTS?.ROBOTO_MEDIUM}}
    />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    //height: vw(200), commented is because the empty image is conflicting with searchbox input
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: vw(200),
    width: vw(200),
    alignSelf: 'center',
  },
  title: {
    fontWeight: '600',
    fontSize: normalize(18),
    lineHeight: vw(28),
    textAlign: 'center',
    color:colors.black
  },
  placeHolderText: {
    textAlign: 'center',
    fontSize: normalize(16),
    marginHorizontal: vw(35),
    marginTop: vw(8),
  },
});
export default EmptyPlaceholder;
