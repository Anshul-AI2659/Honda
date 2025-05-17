/* eslint-disable react/no-unstable-nested-components */
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomHeader from '../../components/customHeader';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../utils/types';
// import CustomSearchBar from '../../components/customSearchBar';

import styles from './styles';
import {batteryOperatedData, engineData} from '../../staticData';
import {Images} from '../../assets';
import CustomFlatList from '../../components/CustomFlatList';
import CustomSearchBar from '../../components/CustomSearchBar';
import CustomStatusBar from '../../components/statusBar';
import {ScreenNames} from '../../utils/screenNames';
import { useRoute } from '@react-navigation/native';
import CustomSearch from '../../components/CustomSearchBar';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getProductListByCategory } from '../../Redux/Actions/authAction';

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

const Engines = ({navigation,route}: enginesProps) => {
  const dispatch = useAppDispatch();
  const {token, uType} = useAppSelector(state => state.authReducer);
  const {productType,productSubCategory,productCategory,screenName} = route?.params
  const [searchText, setSearchText] = useState('');
  const [pruductData, setProductData] = useState();

  useEffect(() => {
    fetchProducts()
  }, []);

  const fetchProducts = () => {
      const params = {
      data: {
          page: 1,
          limit: 10,
          search: '',
          productType,
          productCategory,
          productSubCategory,
          userType:uType,
          accessToken:token
          },
      callback: (response) => {
      setProductData(response?.data?.products);
      },
      };
      dispatch(getProductListByCategory(params));
    };
        
    console.log('product lisitng data at combine screen water pump,engine,battery operated',pruductData);
    

  const GeneratorsRenderItem = ({item}: {item: Item}) => (
    <TouchableOpacity
      style={styles.textHeaderItemContainer}
      activeOpacity={0.5}
      onPress={() => navigation.navigate(ScreenNames.ProductDetailPage,{item:item})}>
      <View style={styles.textHeaderImageContainer}>
        <Image source={item.image} style={styles.textHeaderItemImage} />
      </View>
      <View>
        <Text style={styles.textHeaderItemNumber}>{item.number}</Text>
        <Text style={styles.textHeaderItemTitle}>{item.title}</Text>
        <Text style={styles.textHeaderItemPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleSearchPress = () => {};
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomStatusBar />
      <CustomHeader
        headerStyle={styles.header}
        leftIcon={Images.backarrow}
        textHeading={screenName ?? 'Engines'}
        leftButtonStyle={styles.backButton}
        onleftPress={navigation.goBack}
        leftIconStyle={styles.backButton}
      />
      <CustomSearch
          placeholder={"Search Products"}
          onTouchablePress={() => navigation.navigate(ScreenNames.Search)}
          searchContainerStyle={styles.searchContainer}
          isTextInput={false}
        />
      <CustomFlatList
        //data={screenName === 'Engines' ? engineData : batteryOperatedData}
        data={pruductData}
        renderItem={GeneratorsRenderItem}
        keyExtractor={item => item.id}
        horizontal={false}
        numColumns={2}
        contentContainerStyle={styles.customFlatListStyle}
      />
    </SafeAreaView>
  );
};

export default Engines;
