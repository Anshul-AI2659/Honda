/* eslint-disable react/no-unstable-nested-components */
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { ReactNode, useEffect, useState } from 'react';
import {
  Alert,
  FlatList,
  Image,
  ImageSourcePropType,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// Custom Components
import SectionHeader from '../../components/SectionHeader';
import CustomStatusBar from '../../components/statusBar';
import CustomHeader from '../../components/customHeader';
// Utils
import { ScreenNames } from '../../utils/screenNames';
import { RootStackParamList } from '../../utils/types';
// Styles
import { Images } from '../../assets';
import { vh } from '../../styles';
import styles from './style';

import { getDownloadContentType } from '../../Redux/Actions/authAction';
import { useAppDispatch, useAppSelector } from '../../hooks';


interface EquipmentTrainingProps {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}
interface Item {
  name: ReactNode;
  id: number;
  title: string;
  image: ImageSourcePropType;
  number: string;
  price: string;
}
interface SimpleItem {
  id: string;
  title: string;
  image: ImageSourcePropType;
}
const DownLoadContent = ({navigation}: EquipmentTrainingProps) => {


const insets = useSafeAreaInsets();

  const categories = [
    {id: '1', name: 'Battery Operated', image: Images.battery},
    {id: '2', name: 'Generators', image: Images.tutorial1},
    {id: '3', name: 'Tillers', image: Images.tiller},
    {id: '4', name: 'Brush Cutters', image: Images.battery},
    {id: '5', name: 'Water Pumps', image: Images.tutorial1},
    {id: '6', name: 'Lawn Mowers', image: Images.tiller},
    {id: '5', name: 'Outboard Motors', image: Images.tutorial1},
    {id: '6', name: 'General Purp. Engines', image: Images.tiller},
  ];
  const category = [
    {id: '1', name: 'Agriculture Machinery', image: Images.agriculture},
    {id: '2', name: 'Light Construction', image: Images.machinery},
    {id: '3', name: 'Other Category', image: Images.other},
  ];
  const [downloadContentData, setDownloadContentdata] = useState();
  const {token } = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();



  useEffect(() => {
   fetchDownloadContentList()
  }, []);

  const fetchDownloadContentList = () => {
    const params = {
      data: {
        productType:'Honda',
        productCategory:'Generators',
        accessToken: token,
      },
      callback: (response) => {
        setDownloadContentdata(response?.data);
      },
    };
    dispatch(getDownloadContentType(params));
  };

 

  const ImageHeaderRenderItem = ({ item }: { item: Item }) => {
    
    const handlePress = () => {
      // console.log('itmemememememee',item?.name);
      if (item.name === 'Generators') {
        navigation.navigate(ScreenNames.commonDownloadScreen,{screenName:item?.name}); 
      }
      else if(item.name === 'Battery Operated'){
        navigation.navigate(ScreenNames.commonDownloadScreen,{screenName:item?.name}); 
      }
      else if(item.name === 'Tillers'){
        navigation.navigate(ScreenNames.commonDownloadScreen,{screenName:item?.name}); 
      }
      else if(item.name === 'Brush Cutters'){
        navigation.navigate(ScreenNames.commonDownloadScreen,{screenName:item?.name}); 
      }
      else if(item.name === 'Water Pumps'){
        navigation.navigate(ScreenNames.commonDownloadScreen,{screenName:item?.name}); 
      }
      else if(item.name === 'Lawn Mowers'){
        navigation.navigate(ScreenNames.commonDownloadScreen,{screenName:item?.name}); 
      }
      else if(item.name === 'Outboard Motors'){
        navigation.navigate(ScreenNames.commonDownloadScreen,{screenName:item?.name}); 
      }
      else if(item.name === 'General Purp. Engines'){
        navigation.navigate(ScreenNames.commonDownloadScreen,{screenName:item?.name}); 
      }
      
    };
    return (
      <TouchableOpacity style={styles.itemContainer} activeOpacity={0.5} onPress={handlePress}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.itemImage} />
        </View>
        <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
        <Text style={styles.itemTitle}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };


  const hiPlusRenderItem = ({ item }: { item: Item }) => {
    const handleItemPress = () => {
      if (item.name === 'Agriculture Machinery') {
        navigation.navigate(ScreenNames.commonDownloadScreen,{screenName:item?.name}); 
      }
      else if(item.name === 'Light Construction'){
        navigation.navigate(ScreenNames.commonDownloadScreen,{screenName:item?.name}); 
      }
      else if(item.name === 'Other Category'){
        navigation.navigate(ScreenNames.commonDownloadScreen,{screenName:item?.name}); 
      }
      
    };
    return (
      <TouchableOpacity style={styles.itemContainer} activeOpacity={0.5} onPress={handleItemPress}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.itemImage} />
        </View>
        <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
        <Text style={styles.itemTitle}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.mainContainer, {paddingTop: insets.top}]}>
      <CustomStatusBar />
      <CustomHeader
        headerStyle={styles.header}
        leftIcon={Images.backarrow}
        leftIconStyle={styles.profileIcon}
        onleftPress={navigation?.goBack}
      />
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View style={styles.scrollViewInside}>
          <SectionHeader
            image={Images.honda}
            imageStyle={styles.imageStyle}
          />
          <FlatList
            removeClippedSubviews={false}
            data={categories}
            numColumns={3}
            renderItem={ImageHeaderRenderItem}
            keyExtractor={item => item.id}
            scrollEnabled={false}
            contentContainerStyle={{marginBottom:vh(10)}}
          />
          <SectionHeader
            image={Images.hi}
            imageStyle={styles.hiPlusImageStyle}
          />
          <FlatList
            removeClippedSubviews={false}
            data={category}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={hiPlusRenderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default DownLoadContent;
