/* eslint-disable react/no-unstable-nested-components */
import {
  Image,
  ImageSourcePropType,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CustomStatusBar from '../../components/statusBar';
import CustomHeader from '../../components/customHeader';

import styles from './styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../utils/types';
import {ScreenNames} from '../../utils/screenNames';
import { Images } from '../../assets';
import CustomFlatList from '../../components/CustomFlatList';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getProductListByCategory } from '../../Redux/Actions/authAction';

interface honda_CategoryProps {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

interface Item {
  id: string;
  title: string;
  image: ImageSourcePropType;
  number: string;
  price: string;
}

const HondaCategory = ({navigation,route}: honda_CategoryProps) => {
  const dispatch = useAppDispatch();
  const {token, uType} = useAppSelector(state => state.authReducer);
  const {productType,productSubCategory  ,screenName,subName} = route?.params
  const [pruductData, setProductData] = useState([]);
  const insets = useSafeAreaInsets();
  
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
            productCategory: subName,
            productSubCategory,
            userType:uType,
            accessToken:token,
          },
        callback: (response) => {
        setProductData(response?.data);
        },
        };
        dispatch(getProductListByCategory(params));
};

console.log('product lisitng data at Agri and garden',pruductData);

  const renderProductItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.textHeaderItemContainer}
        activeOpacity={0.5}
        onPress={() => navigation.navigate(ScreenNames.ProductDetailPage, { item })}>
        <View style={styles.textHeaderImageContainer}>
          <Image source={{ uri: item?.images?.[0] }} style={styles.textHeaderItemImage} />
        </View>
        <View>
          <Text style={styles.textHeaderItemNumber}>{item?.modelNumber}</Text>
          <Text style={styles.textHeaderItemTitle}>{item?.productCategory}</Text>
          <Text style={styles.textHeaderItemPrice}>
            {item?.price ? `₹ ${item.price}` : 0}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const onSeeMorePress = () =>{
    navigation.navigate(ScreenNames.EquipmentTraining, {
          category: categoryItem.category
        })
  }
  
  return (
    <View style={[styles.mainContainer,{ paddingTop: insets.top }]}>
      <CustomStatusBar />
      <CustomHeader
        headerStyle={styles.header}
        leftIcon={Images.backarrow}
        leftIconStyle={styles.backIcon}
        leftButtonStyle={styles.backButton}
        onleftPress={navigation.goBack}
        textHeading={screenName ?? 'Genrators'}
      />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
          {pruductData?.map((categoryItem, index) => {
            const showSeeMore = categoryItem.products.length > 4;

            return (
              <CustomFlatList
                key={index}
                data={categoryItem.products}
                renderItem={renderProductItem}
                keyExtractor={item => item._id}
                horizontal={true}
                header
                headingText={categoryItem.category}
                onSeeMorePress={showSeeMore ? onSeeMorePress : null}
                contentContainerStyle={styles.customFlatListStyle}
              />
            );
          })}
      </ScrollView>
    </View>
  );
};

export default HondaCategory;
