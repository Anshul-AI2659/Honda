/* eslint-disable react/no-unstable-nested-components */
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {
  Alert,
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomHeader from '../../components/customHeader';
import {RootStackParamList} from '../../utils/types';
// import CustomSearchBar from '../../components/customSearchBar';

import {useRoute} from '@react-navigation/native';
import {Images} from '../../assets';
import CustomFlatList from '../../components/CustomFlatList';
import CustomStatusBar from '../../components/statusBar';
import {engineData} from '../../staticData';
import styles from './syles';
import {IMAGES, vh, vw} from '../../styles';
import CustomButton from '../../components/CustomButton';
import CustomSnackBar from '../../components/customSnackBar';

interface enginesProps {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}
interface Item {
  id: number;
  title: string;
  image: ImageSourcePropType;
  number: string;
  price: string;
}

const onBookService = () =>{
  CustomSnackBar.show('Coming Soon!', 'success', 600);
}

const onAddProduct = () =>{
  CustomSnackBar.show('Coming Soon!', 'success', 600);
}

const YourProducts = ({navigation}: enginesProps) => {
  let routes = useRoute();
  const GeneratorsRenderItem = ({item}: {item: Item}) => (
    <TouchableOpacity style={styles.itemContainer} activeOpacity={0.5}>
      <View style={styles.imageContainer}>
        <Image
          source={item.image}
          style={
            item?.type === 'link'
              ? styles.downloadContentImage
              : styles.itemImage
          }
        />
      </View>
      <View style={{width: vw(380), height: vw(89)}}>
        <View style={styles.lowerContainer}>
          <View style={styles.lowerLeft}>
            <Text style={styles.itemNumber}>{item.number}</Text>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <View style={styles.warrantyContainer}>
              <Image source={Images.infoIcon} style={styles.infoIcon} />
              <Text style={styles.warrantyText}>
                {'Warranty expiring on 25th mar 2025'}
              </Text>
            </View>
          </View>
          <View style={styles.lowerRight}>
            <Text style={styles.priceText}>{item.price}</Text>
            <CustomButton
              buttonText={'BOOK SERVICE'}
              buttonStyle={styles.buttonStyle}
              textStyle={styles.buttonText}
              onPress={onBookService}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomStatusBar />
      <CustomHeader
        headerStyle={styles.header}
        leftIcon={Images.backarrow}
        textHeading={'Your Products'}
        leftButtonStyle={styles.backButton}
        onleftPress={navigation.goBack}
        leftIconStyle={styles.backButton}
      />
      <CustomFlatList
        data={engineData}
        renderItem={GeneratorsRenderItem}
        keyExtractor={item => item.id}
        horizontal={false}
        //numColumns={2}
        contentContainerStyle={styles.customFlatListStyle}
      />
      <View style={styles.footer}>
        <CustomButton
          buttonText={'ADD PRODUCT'}
          buttonStyle={{width: vw(380), height: vw(56),borderRadius: vw(16),marginTop:vh(10)}}
          textStyle={{fontSize: vw(16), fontFamily: 'Roboto-Bold',fontWeight:'800'}}
          onPress={onAddProduct}
        />
      </View>
    </SafeAreaView>
  );
};

export default YourProducts;
