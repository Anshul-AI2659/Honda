/* eslint-disable react/no-unstable-nested-components */
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
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
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
// Assets
import { Images } from '../../../assets';
// Custom Components
import CustomHeader from '../../../components/customHeader';
import CustomSearchBar from '../../../components/CustomSearchBar';
import ShimmerLoader from '../../../components/customShimmer';
import ProductCard from '../../../components/ProductCard';
import SectionHeader from '../../../components/SectionHeader';
import CustomStatusBar from '../../../components/statusBar';
import HiValueCard from '../../../components/valueCard';
import { categories, category, } from '../../../staticData';
// Styles
import styles from './styles';
// Utils
import { downloadAndOpenPDF } from '../../../utils/commonFunctions';
import { ScreenNames } from '../../../utils/screenNames';
import { RootStackParamList } from '../../../utils/types';
import { vw } from '../../../styles';
import { useAppDispatch } from '../../../hooks';
import { getProductListByType } from '../../../Redux/Actions/authAction';
import CustomSnackBar from '../../../components/customSnackBar';
import CustomSearch from '../../../components/CustomSearchBar';

interface HomeProps {
  navigation: BottomTabNavigationProp<RootStackParamList>;
}

interface Item {
  id: string;
  title: string;
  image: ImageSourcePropType;
  number: string;
  price: string;
}

const extractYouTubeVideoId = (url: string) => {
  const match = url.match(
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
  );
  return match ? match[1] : null;
};

const Category = ({ navigation,route }: HomeProps) => {
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const {roleName,data} = route?.params
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(true);

    // Simulate API call
     useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  useEffect(() => {
    fetchProductList();
  }, []);

  const fetchProductList = () => {
    const params = {
      data: {
        type: 1,
        userType: 1,
        accessToken:data?.accessToken
      },
      callback: (response) => {
        console.log('Product List Response:', response);
        // handle the response here, like set to local state or show toast
      },
    };
    dispatch(getProductListByType(params));
  };
  
  

  // Memoizing event handlers
  const handleSearchPress = useCallback(() => {}, []);

   const onLeftPress = () => {
      navigation.navigate(ScreenNames.ProfileScreen)
     };

       const onHiPlusPress = (item) => {
         switch (item.name) {
           case 'Agriculture Machinery':
             navigation.navigate(ScreenNames.hiPlusAgriMachinery,{screenName:'Agriculture Machinery'});
             break;
           case 'Light Construction':
             navigation.navigate(ScreenNames.hiPlusAgriMachinery,{screenName:'Light Construction'});
             break;
           case 'Other Categories':
             navigation.navigate(ScreenNames.hiPlusAgriMachinery,{screenName:'Other Categories'});
             break;
           default:
             console.warn('No screen defined for this category');
             break;
         }
       }; 
     
     
       const onProductPress = (item) => {
         switch (item.name) {
           case 'Generators':
             navigation.navigate(ScreenNames.GenratorProductListing,{screenName:'Genrators'});
             break;
           case 'Water Pump':
             navigation.navigate(ScreenNames.GenratorProductListing,{screenName:'Water Pumps'});
             break;
           case 'Honda Marine':
             navigation.navigate(ScreenNames.hondaMarineScreen,{screenName:'Honda Marine'});
             break;
           case 'Engines':
             navigation.navigate(ScreenNames.engineScreenName,{screenName:'Engines'});
             break;
           case 'Agri & Garden':
             navigation.navigate(ScreenNames.HondaCategory,{screenName:'Agri & Garden'});
             break;
           case 'Battery Operated':
             navigation.navigate(ScreenNames.engineScreenName,{screenName:'Battery Operated'});
             break;
           default:
             console.warn('No screen defined for this category');
             break;
         }
       };  
     
   
const ImageHeaderRenderItem = React.memo(({ item }: { item: Item }) => {
     const handlePress = async () => {
       if (item?.type === 'link' && item?.link) {
         // Handle YouTube link\
         const videoId = extractYouTubeVideoId(item.link);
         if (videoId) {
           navigation.navigate(ScreenNames.YoutubeVideoScreen, { videoId });
         }
       } else if (item?.type === 'file' && item?.link) {
         // Handle PDF file download
      
         await downloadAndOpenPDF(item.link, 'sample.pdf');
       }
     };
   
     return (
       <TouchableOpacity style={styles.itemContainer} activeOpacity={0.5} onPress={handlePress}>
         <View style={styles.imageContainer}>
           <Image source={item.image} style={styles.itemImage} />
         </View>
         <Text style={styles.itemTitle}>{item.title}</Text>
       </TouchableOpacity>
     );
});

  return (
    <View style={[styles.mainContainer,{paddingTop: insets.top}]}>
      <CustomStatusBar />
      <CustomHeader
        headerStyle={styles.header}
        leftIcon={Images.hondaHqImage}
        leftIconStyle={styles.profileIcon}
        rightIcon={Images.notification}
        rightButtonStyle={styles.notificationButton}
        onRightPress={() => navigation.navigate(ScreenNames.Notification)}
        onleftPress={onLeftPress}
      />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* <CustomSearchBar
          placeholder="Search Products"
          value={searchText}
          onChangeText={setSearchText}
          onTouchablePress={() => navigation.navigate(ScreenNames.Search)}
          onSearchPress={handleSearchPress}
          searchContainerStyle={styles.searchContainer}
        /> */}
         <CustomSearch
          placeholder={"Search Products"}
         // value={searchTerm}
          onTouchablePress={() => navigation.navigate(ScreenNames.Search)}
          searchContainerStyle={styles.searchContainer}
          isTextInput={false}
        />
      <View >
      <SectionHeader
        image={Images.honda}
        imageStyle={styles.imageStyle}
      />
      <FlatList
         removeClippedSubviews={false}
          data={isLoading ? new Array(6).fill({}) : categories}
          numColumns={3}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) =>
            isLoading ? (
              <ShimmerLoader style={styles.shimmerLoader} 
                  />
            ) : (
              <ProductCard extraCardStyle={styles.extraCardStyle} onPress={()=>onProductPress(item)} item={item} textAlign="center" textContainerStyle={{justifyContent:'center',alignItems:'center'}} />
            )
          }
          keyExtractor={(item, index) => item?.id || index.toString()}
          contentContainerStyle={styles.listContainer}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
        />
      {/* Categories Section */}
      <SectionHeader
        image={Images.hi}
        imageStyle={styles.hiImage}
      />
      <FlatList
        data={category}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <ProductCard extraCardStyle={styles.extraCardStyle} item={item} textAlign="center" onPress={()=>onHiPlusPress(item)} textContainerStyle={{justifyContent:'center',alignItems:'center'}}/>}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainerHiPlus}
        removeClippedSubviews={false}
      />
      <Image source={Images.hiValuePlusImage} style={styles.himage} />
      <HiValueCard onPress={() => CustomSnackBar.show('Coming Soon!', 'success', 600)} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Category;
