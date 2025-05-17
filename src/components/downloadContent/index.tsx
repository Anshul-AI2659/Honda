// Library Imports
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    ImageProps,
  } from 'react-native';
  import React from 'react';
import { Images } from '../../assets';
import { FONTS, normalize, vh, vw } from '../../styles';
import colors from '../../utils/colors';
import { downloadAndOpenPDF } from '../../utils/commonFunctions';
  
  type Props = {
    data: object[];
    screenName?:string
  };



  
  
  export const DocumentView = (props: Props) => {
    console.log('data-----------',props?.data);

    // @renderItem function for document section
    const renderItems = (item: any, index: number) => (
      <View
        style={[
          styles.imgContainer,
          {marginTop: index == 0 || index == 0 ? vh(0) : vh(15)},
        ]}
        key={index.toString()}>
        <Text style={styles.text}>{item?.title}</Text>
  
        <TouchableOpacity
          style={styles.downloadBtnStyle}
          onPress={() => downloadAndOpenPDF(item.link, `${item.title.replace(/\s+/g, '_')}.pdf`)}>
          <Image tintColor={props?.screenName === 'Honda Marine' ? colors.hondaMarnieColor : colors?.primary} resizeMode="contain" source={Images.downloadIcon} style={styles.img} />
        </TouchableOpacity>
      </View>
    );

    return (
      <View style={styles.mainContainer}>
        {props?.data?.map((item, index) => renderItems(item, index))}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    Main: {
      paddingVertical: vh(12),
      flex:1,
    },
    mainContainer: {
      backgroundColor: colors.white,
      width:'100%',
    },
    imgContainer: {
       flexDirection: 'row',
       flex: 1,
      alignItems: 'center',
      justifyContent:'space-between'
    },
    img: {
      height: vh(24),
      width: vh(24),
      left:vw(4)
    },
    text: {
      fontSize: normalize(14),
      flex: 1,
      fontFamily: FONTS.ROBOTO_REGULAR,
      marginLeft: vw(10),
      color: colors.black,
      right:vw(4)
    },
    downloadBtnStyle: {
      padding: vh(5),
      borderRadius: vh(20),
    },
  });
  