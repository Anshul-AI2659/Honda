/* eslint-disable react/no-unstable-nested-components */
import {
  Image,
  ImageSourcePropType,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
<<<<<<< HEAD
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
=======
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomStatusBar from '../../components/statusBar';
import CustomHeader from '../../components/customHeader';
import CustomFlatList from '../../components/customFlatlist';
import {BestSellingProducts, NewArrivalsData} from '../../assets/data';
import {Icons} from '../../assets';
import styles from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../utils/types';
import {ScreenNames} from '../../utils/screenNames';

interface honda_CategoryProps {
  navigation: StackNavigationProp<StackParamList>;
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
}

interface Item {
  id: string;
  title: string;
  image: ImageSourcePropType;
  number: string;
  price: string;
}

<<<<<<< HEAD
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
=======
const Honda_Category = ({navigation}: honda_CategoryProps) => {
  const GeneratorsRenderItem = ({item}: {item: Item}) => (
    <TouchableOpacity
      style={styles.textHeaderItemContainer}
      activeOpacity={0.5}
      onPress={() => {}}>
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
  const TillersRenderItem = ({item}: {item: Item}) => (
    <TouchableOpacity
      style={styles.textHeaderItemContainer}
      activeOpacity={0.5}
      onPress={() => {}}>
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
  const BrushCuttersRenderItem = ({item}: {item: Item}) => (
    <TouchableOpacity
      style={styles.textHeaderItemContainer}
      activeOpacity={0.5}
      onPress={() => {}}>
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
  const WaterPumpsRenderItem = ({item}: {item: Item}) => (
    <TouchableOpacity
      style={styles.textHeaderItemContainer}
      activeOpacity={0.5}
      onPress={() => {}}>
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

  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomStatusBar />
      <CustomHeader
        headerStyle={styles.header}
        leftIcon={Icons.back}
        leftIconStyle={styles.backIcon}
        leftButtonStyle={styles.backButton}
        onleftPress={navigation.goBack}
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
      />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
<<<<<<< HEAD
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
=======
        <CustomFlatList
          data={NewArrivalsData}
          renderItem={GeneratorsRenderItem}
          keyExtractor={item => item.id}
          horizontal={true}
          header
          headingText="Generators"
          onSeeMorePress={() => navigation.navigate(ScreenNames.Generators)}
          contentContainerStyle={styles.customFlatListStyle}
        />
        <CustomFlatList
          data={BestSellingProducts}
          renderItem={TillersRenderItem}
          keyExtractor={item => item.id}
          horizontal={true}
          header
          headingText="Tillers"
          contentContainerStyle={styles.customFlatListStyle}
        />
        <CustomFlatList
          data={NewArrivalsData}
          renderItem={BrushCuttersRenderItem}
          keyExtractor={item => item.id}
          horizontal={true}
          header
          headingText="Brush Cutters"
          contentContainerStyle={styles.customFlatListStyle}
        />
        <CustomFlatList
          data={BestSellingProducts}
          renderItem={WaterPumpsRenderItem}
          keyExtractor={item => item.id}
          horizontal={true}
          header
          headingText="Water pumps"
          contentContainerStyle={styles.customFlatListStyle}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Honda_Category;
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
