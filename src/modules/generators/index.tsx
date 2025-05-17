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
import { Images } from '../../assets';
import CustomFlatList from '../../components/CustomFlatList';
import CustomStatusBar from '../../components/statusBar';
import { ScreenNames } from '../../utils/screenNames';
import {vw } from '../../styles';
import { useRoute } from '@react-navigation/native';
import CustomSearch from '../../components/CustomSearchBar';
import CustomSnackBar from '../../components/customSnackBar';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getProductListByCategory } from '../../Redux/Actions/authAction';

interface generatorsProps {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}
interface Item {
  _id: string;
  title: string;
  image: ImageSourcePropType;
  number: string;
  price: string;
}

const Generators = ({navigation,route}: generatorsProps) => {
  const {token, uType} = useAppSelector(state => state.authReducer);
  const dispatch = useAppDispatch();
  const {productType,productSubCategory,productCategory,screenName} = route?.params
  const [selectedTab, setSelectedTab] = useState(0); // index-based tab selection
  const [favourites, setFavourites] = useState<Record<string, boolean>>({});
  const [searchText, setSearchText] = useState('');
  const [tabProductData, setTabProductData] = useState<Record<string, Item[]>>({});
  const allTabsData = [{ name: 'All', subCategoryId: 'all-tab' }, ...productSubCategory];

  useEffect(() => {
    if (productSubCategory?.length) {
      // default to first tab
      setSelectedTab(0); // default first tab
      console.log('data for productSubCategory',productSubCategory);
      
      fetchProductsBySubCategory(productSubCategory[0]?.name);
    }
  }, [productSubCategory]);

  console.log('params on productListByCategroy(generator screen) -------->',productType, productCategory,);

  const fetchProductsBySubCategory = (subCategoryName: string) => {
    if (!subCategoryName) return;
    const params = {
      data: {
        page: 1,
        limit: 10,
        search: '',
        productType,
        productCategory,
        productSubCategory: subCategoryName,
        userType: uType,
        accessToken: token,
      },
      callback: (response) => {
        const products = response?.data?.products || [];
        setTabProductData(prev => {
          const updated = {
            ...prev,
            [subCategoryName]: products,
          };
  
          const allProducts = Object.entries(updated)
            .filter(([key]) => key !== 'All')
            .flatMap(([, value]) => value);
  
          return {
            ...updated,
            All: allProducts,
          };
        });
      },
    };
  
    dispatch(getProductListByCategory(params));
  };

  useEffect(() => {
    if (productSubCategory?.length) {
      setSelectedTab(0); // Default to "All"
      if (selectedTab === 0) {
        const fetchAllSubCategoryData = async () => {
          const results: Record<string, Item[]> = {};

          for (const sub of productSubCategory) {
            const subCategoryName = sub.name;
            await new Promise<void>((resolve) => {
              const params = {
                data: {
                  page: 1,
                  limit: 10,
                  search: '',
                  productType,
                  productCategory,
                  productSubCategory: subCategoryName,
                  userType: uType,
                  accessToken: token,
                },
                callback: (response) => {
                  const products = response?.data?.products || [];
                  results[subCategoryName] = products;
                  resolve();
                },
              };
              dispatch(getProductListByCategory(params));
            });
          }
          const allProducts = Object.values(results).flat();
          setTabProductData({
            ...results,
            All: allProducts,
          });
        };
  
        fetchAllSubCategoryData();
      } else {
        fetchProductsBySubCategory(productSubCategory[0]?.name);
      }
    }
  }, [productSubCategory]);
  
  console.log('data for listing in every tab ',tabProductData,allTabsData);

  const onCalculatorPress = () =>{
    navigation.navigate(ScreenNames.modelCalculator)
  }
  const toggleFavourite = (itemId: string) => {
    setFavourites(prev => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
    CustomSnackBar.show('Coming Soon!', 'success', 600);
  };

  const productCategoryItem = ({ item, index }: { item: any, index: number }) => (
    <TouchableOpacity
      style={[
        styles.Button,
        selectedTab === index && styles.selectedButton,
      ]}
      onPress={() => {
        setSelectedTab(index);
        if (item.name !== 'All') fetchProductsBySubCategory(item.name);
      }}
    >
      <Text
        style={[
          styles.buttonText,
          selectedTab === index && styles.selectedButtonText,
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

 
  const GeneratorsRenderItem = ({item}: {item: Item}) => {
    const isFavourited = favourites[item._id];
    return (
      <TouchableOpacity
        style={styles.textHeaderItemContainer}
        activeOpacity={0.5}
        onPress={() =>
          navigation.navigate(ScreenNames.ProductDetailPage, {item: item})
        }>
        <View style={styles.textHeaderImageContainer}>
          <Image  source={{ uri: item.images?.[0] ?? '' }} style={styles.textHeaderItemImage} />
          {uType === 1 && (
            <TouchableOpacity
              style={styles.favouriteContainer}
              onPress={() => toggleFavourite(item._id)}>
              <Image
                source={
                  isFavourited
                    ? Images.favouriteSelected
                    : Images.favouriteUnselected
                }
                style={styles.favouriteImg}
              />
            </TouchableOpacity>
          )}
        </View>
        <View>
          <Text style={styles.textHeaderItemNumber}>{item?.modelNumber}</Text>
          <Text style={styles.textHeaderItemTitle}>{item.productSubCategory}</Text>
          <Text style={styles.textHeaderItemPrice}>₹ {item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomStatusBar />
      <CustomHeader
        headerStyle={styles.header}
        leftIcon={Images.backarrow}
        textHeading={screenName === 'Honda Marine' ? '' : screenName}
        leftButtonStyle={styles.backButton}
        onleftPress={navigation.goBack}
        leftIconStyle={styles.backButton}
        headerIcon={screenName === 'Honda Marine' ? Images.hondaMarineLogo : Images.honda}
        headerImgStyle={screenName === 'Honda Marine' ? { width: vw(162),
          height: vw(34),
          resizeMode: 'contain',
          alignSelf: 'center',} : {}}
      />
      <CustomSearch
          placeholder={"Search Products"}
          value={searchText}
          //onTouchablePress={() => navigation.navigate(ScreenNames.Search)}
          searchContainerStyle={styles.searchContainer}
          isTextInput={false}
        />
      <View style={styles.choiceContainer}>
        <CustomFlatList
          data={allTabsData}
          renderItem={({ item, index }) => productCategoryItem({ item, index })}
          horizontal
          keyExtractor={(item) => item.subCategoryId || item.name}

        />
      </View>
      <CustomFlatList
        data={tabProductData[allTabsData[selectedTab]?.name] || []}
        renderItem={GeneratorsRenderItem}
        keyExtractor={(item) => item._id}
        numColumns={2}
        contentContainerStyle={styles.customFlatListStyle}
      />
      <View style={styles.calculatorContainer}>
        <TouchableOpacity onPress={onCalculatorPress}>
          <Image
            source={Images.modalCalulatorIcon} 
            style={styles.calculatorImage}
            resizeMode={"contain"}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Generators;
