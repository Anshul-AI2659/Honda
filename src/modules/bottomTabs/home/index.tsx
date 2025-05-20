/* eslint-disable react/no-unstable-nested-components */
<<<<<<< HEAD
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  FlatList,
  Image,
  View,
  RefreshControl,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
// Assets------------------------------------
import {Images} from '../../../assets';
//Custom Components------------------------------------
import Carousel from '../../../components/Carousel';
import CustomHeader from '../../../components/customHeader';
import CustomSearch from '../../../components/CustomSearchBar';
import ShimmerLoader from '../../../components/customShimmer';
import ProductCard from '../../../components/ProductCard';
import SectionHeader from '../../../components/SectionHeader';
import CustomStatusBar from '../../../components/statusBar';
import HiValueCard from '../../../components/valueCard';
import CustomSnackBar from '../../../components/customSnackBar';
// Styles------------------------------------
import {vh, vw} from '../../../styles/dimensions';
import {FONTS} from '../../../styles';
import styles from './styles';
// Utils------------------------------------
import {slides} from '../../../utils/commonFunctions';
import {ScreenNames} from '../../../utils/screenNames';
import {RootStackParamList} from '../../../utils/types';
import {useAppDispatch, useAppSelector} from '../../../hooks';
//Actions------------------------------------
import {markAsFavorite} from '../../../Redux/Actions/authAction';
import {getProfileData} from '../../../Redux/Actions/moreAction';
import {
  getBannerList,
  getHomeProductType,
  getHomeTrendingProduct,
} from '../../../Redux/Actions/homeAction';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.Home
>;

type OptionType = 'option1' | 'option2' | 'option3';

const Home = ({route}) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const insets = useSafeAreaInsets();
  const {uType, token} = useAppSelector(state => state.authReducer);
  const dispatch = useAppDispatch();
  const {roleName} = route?.params ?? 'Dealer';
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [homeProductData, setHomeProductdata] = useState();
  const [bestSellingData, setBestSellingData] = useState();
  const [bannerListData, setBannerListData] = useState([]);
  const [favourites, setFavourites] = useState<Record<string, boolean>>({});
  const [isExpanded, setIsExpanded] = useState(false);
  const [profileData, setProfileData] = useState();

  const newArrivalData = useMemo(
    () => bestSellingData?.newArrivalProducts,
    [bestSellingData],
  );
  const mostSellingData = useMemo(
    () => bestSellingData?.mostSellingProducts,
    [bestSellingData],
  );
  const trendingProductData = useMemo(
    () => bestSellingData?.trendingProduts,
    [bestSellingData],
  );
  const youMayLikeProductData = useMemo(
    () => bestSellingData?.youMayLikeProducts,
    [bestSellingData],
  );

  useEffect(() => {
    fetchAllData();
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  //@fetchAllData function------------------------------------//
  const fetchAllData = () => {
    fetchProfileData();
    fetchHomeTrendingProductList();
    fetchBestSellingProducts();
    fetchBannerData();
  };

  //@handleRefresh function------------------------------------//
  const handleRefresh = async () => {
    setRefreshing(true);
    await Promise.all([
      fetchHomeTrendingProductList(),
      fetchBestSellingProducts(),
    ]);
    setRefreshing(false);
  };

  console.log('newArrivalData', homeProductData, homeProductData?.[0]);
  console.log('BANNER DATA SHOW', bannerListData);

  //@fetchBestSellingProducts function------------------------------------//
  const fetchHomeTrendingProductList = () => {
    const params = {
      data: {
        userType: uType,
        accessToken: token,
      },
      callback: response => {
        setHomeProductdata(response?.data);
      },
    };
    dispatch(getHomeProductType(params));
  };

  //@fetchBestSellingProducts function------------------------------------//
  const fetchBestSellingProducts = () => {
    const params = {
      data: {
        userType: uType,
        accessToken: token,
      },
      callback: response => {
        setBestSellingData(response?.data);
        const initialFavourites = response?.data?.newArrivalProducts.reduce(
          (acc, item) => {
            acc[item._id] = item.isFavorite || false;
            return acc;
          },
          {},
        );
        setFavourites(initialFavourites);
      },
    };
    dispatch(getHomeTrendingProduct(params));
  };

  //@fetchBannerData function------------------------------------//
  const fetchBannerData = () => {
    const params = {
      data: {
        userType: uType,
        accessToken: token,
      },
      callback: response => {
        console.log('banner', response?.data);
        setBannerListData(response?.data);
      },
    };
    dispatch(getBannerList(params));
  };

  //@onLeftPress function------------------------------------//
  const onLeftPress = () => {
    navigation.navigate(ScreenNames.ProfileScreen);
  };

  const filteredData = useMemo(() => {
    if (!bannerListData) return [];

    return bannerListData.filter(
      item =>
        Array.isArray(item.userType) &&
        item.userType.includes(uType) &&
        Array.isArray(item.screen) &&
        item.screen.includes(1), // 1 indicates Home screen
    );
  }, [bannerListData, uType]);

  const datatoShow = filteredData;

  //@fetchProfileData function------------------------------------//
  const fetchProfileData = () => {
    const params = {
      data: {
        userType: uType,
        accessToken: token,
      },
      callback: response => {
        setProfileData(response?.data);
      },
    };
    dispatch(getProfileData(params));
  };
  console.log('newArrivalData', homeProductData, bestSellingData, profileData);
  const onRightPress = () => {
    navigation.navigate(ScreenNames.Notification);
  };

  //@onHiPlusPress function------------------------------------//
  const onHiPlusPress = useCallback(
    item => {
      console.log('item data on HI+product press', item);
      switch (item.name) {
        case 'Agriculture Machinery':
        case 'Light Construction':
        case 'Other Categories':
          // navigation.navigate(ScreenNames.hiPlusAgriMachinery, {
          //   screenName: item.name,
          //   roleName: roleName,
          // });
          navigation.navigate(ScreenNames.GenratorProductListing, {
            screenName: item.name,
            productType: homeProductData?.[1]?.name,
            productCategory: item?.name,
            productSubCategory: item?.subCategories,
          });
          break;
        default:
          console.warn('No screen defined for this category');
          break;
      }
    },
    [homeProductData],
  );

  //@onProductPress function------------------------------------//
  const onProductPress = useCallback(
    item => {
      console.log('item data on Hondaproduct press', item);

      switch (item.name) {
        case 'Generators':
          navigation.navigate(ScreenNames.GenratorProductListing, {
            screenName: item.name,
            productType: homeProductData?.[0]?.name,
            productCategory: item?.name,
            productSubCategory: item?.subCategories,
          });
          break;
        case 'Water Pumps':
          navigation.navigate(ScreenNames.GenratorProductListing, {
            screenName: item.name,
            productType: homeProductData?.[0]?.name,
            productCategory: item?.name,
            productSubCategory: item?.subCategories,
          });
          break;
        case 'Honda Marine':
          navigation.navigate(ScreenNames.GenratorProductListing, {
            screenName: item.name,
            productType: homeProductData?.[0]?.name,
            productCategory: item?.name,
            productSubCategory: item?.subCategories,
          });
          break;
        case 'Engines':
          navigation.navigate(ScreenNames.GenratorProductListing, {
            screenName: item.name,
            productType: homeProductData?.[0]?.name,
            productCategory: item?.name,
            productSubCategory: item?.subCategories,
          });
          break;
        case 'Battery Operated':
          navigation.navigate(ScreenNames.engineScreenName, {
            screenName: item.name,
            productType: homeProductData?.[0]?.name,
            productCategory: item?.name,
            productSubCategory: item?.subCategories,
          });
          break;
        case 'Agri & Garden':
          navigation.navigate(ScreenNames.HondaCategory, {
            screenName: item.name,
            roleName: roleName,
            productType: homeProductData?.[0]?.name,
            productCategory: item?.name,
            productSubCategory: item?.subCategories,
            subName: item?.subNames,
          });
          break;
        default:
          console.warn('No screen defined for this category');
          break;
      }
    },
    [homeProductData, navigation, roleName],
  );

  //@onSeeMorePress function------------------------------------//
  const onSeeMorePress = useCallback(
    item => {
      console.log('item data on seeMore press', item);
      let subType = '';
      switch (item?.title) {
        case 'New Arrivals':
          subType = 'isNewArrival';
          break;
        case 'Best Selling Products':
          subType = 'isMostSelling';
          break;
        case 'Trending Products':
          subType = 'isTrending';
          break;
        case 'You May Like Products':
          subType = 'productMayLike';
          break;
      }
      navigation.navigate(ScreenNames.newArrivals, {
        screenName: item?.title,
        minPrice: '',
        maxPrice: '',
        sortingBy: '',
        subType: subType,
      });
    },
    [homeProductData, navigation, roleName],
  );

  //@onNewArrivalsCardPress function------------------------------------//
  const onNewArrivalsCardPress = useCallback(item => {
    navigation.navigate(ScreenNames.ProductDetailPage, {
      screenName: '',
      item: item,
    });
  }, []);

  //@handleOptionPress function------------------------------------//
  const handleOptionPress = (option: OptionType) => {
    setIsExpanded(false);

    if (option === 'option1') {
      navigation.navigate(ScreenNames.ContactUs);
    } else if (option === 'option2') {
      const phoneNumber = '1800 11 2323';
      Linking.openURL(`tel:${phoneNumber}`).catch(() =>
        CustomSnackBar.show('could not open dialer', 'error', 500),
      );
    } else if (option === 'option3') {
      console.log('Closed menu');
    }
  };

  //@toggleFvrt function------------------------------------//
  const toggleFavourite = useCallback(
    (itemId: string) => {
      const isCurrentlyFavourite = favourites[itemId];
      const params = {
        productId: itemId,
        successCallBack: () => {
          if (isCurrentlyFavourite) {
            CustomSnackBar.show(
              'Product removed from your favourites',
              'success',
              600,
            );
          } else {
            CustomSnackBar.show(
              'Successfully added to your favourites.',
              'success',
              600,
            );
          }
          setFavourites(prev => ({
            ...prev,
            [itemId]: !prev[itemId],
          }));
        },
        errorCallBack: (errorMessage: string) => {
          CustomSnackBar.show(errorMessage, 'error', 400);
        },
      };
      dispatch(markAsFavorite(params));
    },
    [favourites],
  );

  //----------------------------JSX-----------------------------------------//
  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <CustomStatusBar />
      <CustomHeader
        headerStyle={styles.header}
        leftIcon={Images.hondaHqImage}
        leftButtonStyle={styles.leftButtonStyle}
        leftIconStyle={styles.leftIconStyle}
        rightIcon={Images.bellIcon}
        rightButtonStyle={styles.rightButtonStyle}
        rightIconStyle={styles.leftIconStyle}
        onRightPress={onRightPress}
        onleftPress={onLeftPress}
      />

      <FlatList
        data={[]} // No vertical list items needed
        keyExtractor={(_, index) => index.toString()}
        ListHeaderComponent={
          <>
            <CustomSearch
              placeholder={'Search Products'}
              value={searchTerm}
              onTouchablePress={() => navigation.navigate(ScreenNames.Search)}
              searchContainerStyle={styles.searchContainer}
              isTextInput={false}
            />

            <Carousel headerStyle={{marginTop: vh(5)}} flatData={datatoShow} />
            <SectionHeader
              image={{uri: homeProductData?.[0]?.image}}
              imageStyle={styles.imageStyle}
            />
            <FlatList
              data={
                isLoading
                  ? new Array(6).fill({})
                  : homeProductData?.[0]?.categoryData
              }
              numColumns={3}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) =>
                isLoading ? (
                  <ShimmerLoader style={styles.shimmerStyle} />
                ) : (
                  <ProductCard
                    extraCardStyle={styles.extraCardStyle}
                    onPress={() => onProductPress(item)}
                    item={item}
                    textAlign="center"
                    textContainerStyle={{
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  />
                )
              }
              columnWrapperStyle={{
                justifyContent: 'space-evenly',
              }}
              keyExtractor={(item, index) => item?._id || index.toString()}
              contentContainerStyle={styles.listContainer}
              scrollEnabled={false}
            />

            <SectionHeader
              image={{uri: homeProductData?.[1]?.image}}
              onPress={() => console.log('See More Categories')}
              imageStyle={styles.hiImage}
            />

            <FlatList
              data={
                isLoading
                  ? new Array(3).fill({})
                  : homeProductData?.[1]?.categoryData
              }
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <ProductCard
                  extraCardStyle={styles.extraCardStyle}
                  item={item}
                  textAlign="center"
                  onPress={() => onHiPlusPress(item)}
                  textContainerStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
              )}
              keyExtractor={(item, index) => item?._id || index.toString()}
              contentContainerStyle={styles.listContainerHiPlus}
              scrollEnabled={false}
            />

            <Image source={Images.hiValuePlusImage} style={styles.himage} />
            <HiValueCard
              onPress={() =>
                CustomSnackBar.show('Coming Soon!', 'success', 600)
              }
            />

            {[
              {title: 'New Arrivals', data: newArrivalData},
              {title: 'Best Selling Products', data: mostSellingData},
              {title: 'Trending Products', data: trendingProductData},
              {title: 'You May Like Products', data: youMayLikeProductData},
            ].map((section, idx) =>
              section.data?.length ? (
                <>
                  <SectionHeader
                    seeMoreStyle={{marginTop: vh(10)}}
                    title={section.title}
                    onPress={() => onSeeMorePress(section)}
                    image={undefined}
                    seeMore={section.data.length > 4}
                  />
                  <FlatList
                    data={section.data}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => (
                      <ProductCard
                        extraCardStyle={{borderWidth: vw(0)}}
                        item={item}
                        textContainerStyle={{width: vw(94), flex: 1}}
                        nameTextStyle={{
                          fontFamily: FONTS.ROBOTO_BOLD,
                          width: vh(60),
                        }}
                        priceTextStyle={{fontFamily: FONTS.ROBOTO_BOLD}}
                        showHeartIcon={uType === 1}
                        isFavourite={favourites[item._id]}
                        onHeartPress={() => toggleFavourite(item._id)}
                      />
                    )}
                    keyExtractor={item => item._id}
                    contentContainerStyle={styles.listContainer}
                    scrollEnabled={true}
                  />
                </>
              ) : null,
            )}
          </>
        }
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        showsVerticalScrollIndicator={false}
      />

      {uType === 1 && (
        <View style={styles.fabContainer}>
          {isExpanded ? (
            <>
              <TouchableOpacity
                style={styles.fabOption}
                onPress={() => handleOptionPress('option1')}>
                <Image source={Images.text} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.fabOption}
                onPress={() => handleOptionPress('option2')}>
                <Image source={Images.callHome} />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.fab]}
                onPress={() => handleOptionPress('option3')}>
                <Image source={Images.crossHome} />
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity
              style={styles.fab}
              onPress={() => setIsExpanded(!isExpanded)}>
              <Image source={Images.headPhone} />
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};
=======
import React, {useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  Keyboard,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// Assets
import {Icons, Images} from '../../../assets';
import {
  BestSellingProducts,
  HIPlus,
  Honda,
  NewArrivalsData,
  steps,
} from '../../../assets/data';

//Custom Components
import ContentHeader from '../../../components/customContentHeader';
import Carousel from '../../../components/carousel';
import CustomFlatList from '../../../components/customFlatlist';
import CustomHeader from '../../../components/customHeader';
import CustomSearchBar from '../../../components/customSearchBar';
import CustomStatusBar from '../../../components/statusBar';

// Styles
import styles from './styles';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from '../../../utils/types';
import {ScreenNames} from '../../../utils/screenNames';
import {vh, vw} from '../../../utils/dimension';

interface HomeProps {
  navigation: BottomTabNavigationProp<BottomTabParamList>;
}
interface Item {
  id: string;
  title: string;
  image: ImageSourcePropType;
  number: string;
  price: string;
}

// Main Component
const Home = ({navigation}: HomeProps) => {
  // const [currentStep, setCurrentStep] = useState(0);
  const [searchText, setSearchText] = useState('');

  // const handleScrollEnd = (event: {
  //   nativeEvent: {contentOffset: {x: number}};
  // }) => {
  //   const newIndex = Math.round(
  //     event.nativeEvent.contentOffset.x / styles.slide.width,
  //   );
  //   setCurrentStep(newIndex);
  // };

  // const corouselRenderItem = ({item}: {item: Item}) => (
  //   <View style={styles.slide}>
  //     <View style={styles.corouselItemContainer}>
  //       <View style={styles.itemTextContainer}>
  //         <ContentHeader
  //           headerText="Lorem Ispum"
  //           detailText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
  //           headerTextStyle={styles.itemHeaderText}
  //           detailTextStyle={styles.itemDetailsText}
  //         />
  //       </View>
  //       <Image source={item.image} style={styles.image} />
  //     </View>
  //   </View>
  // );

  const ImageHeaderRenderItem = ({item}: {item: Item}) => (
    <TouchableOpacity style={styles.itemContainer} activeOpacity={0.5}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.itemImage} />
      </View>
      <Text style={styles.itemTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  const newArrivalsRenderItem = ({item}: {item: Item}) => (
    <TouchableOpacity
      style={styles.textHeaderItemContainer}
      activeOpacity={0.5}
      onPress={() => {
        navigation.navigate({
          name: 'ProductDetail',
          params: undefined
        });
      }}>
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
  const bestSellingProductRenderItem = ({item}: {item: Item}) => (
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

  const handleSearchPress = () => {};

  return (
    <>
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.mainContainer}>
      <CustomStatusBar />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <CustomHeader
          headerStyle={styles.header}
          leftIcon={Icons.profile}
          leftIconStyle={styles.profileIcon}
          rightIcon={Icons.notification}
          rightButtonStyle={styles.notificationButton}
          onRightPress={() => {
            navigation.navigate(ScreenNames.Notification);
          }}
        />
        <CustomSearchBar
          placeholder="Search products"
          value={searchText}
          onChangeText={text => setSearchText(text)}
          onSearchPress={handleSearchPress} // Search button action
          searchContainerStyle={styles.searchContainer}
        />
        <Carousel/>
        {/* <Carousel
          data={steps}
          currentStep={currentStep}
          renderItem={corouselRenderItem}
          handleScrollEnd={handleScrollEnd}
          paginationStyle={styles.pagination}
          listContainerStyle={styles.corouselList}
        /> */}
        <View style={{paddingHorizontal: vw(8),marginTop:vh(30)}}>
          <CustomFlatList
            data={Honda}
            renderItem={ImageHeaderRenderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            header
            headerImg={Images.logo}
            onSeeMorePress={() => {
              navigation.navigate(ScreenNames.honda_Category);
            }}
            contentContainerStyle={styles.customFlatListStyle}
          />

          <CustomFlatList
            data={HIPlus}
            renderItem={ImageHeaderRenderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            header
            headerStyle={styles.HIPlusHeaderStyle}
            headerImg={Images.HIPlus}
            headerImgStyle={styles.HIPlusImgStyle}
            contentContainerStyle={styles.customFlatListStyle}
          />
        </View>
        <View style={styles.banner}>
          <View style={styles.bannerHeader}>
            <Image source={Images.HIValuePlus} style={styles.hiValuePlusImg} />
          </View>
          <View style={styles.bannerContainer}>
            <Image source={Images.bannerImage} style={styles.bannerImg} />
            <View style={styles.bannerTextContainer}>
              <ContentHeader
                headerText="HI Value +"
                detailText="Certified Refurbished Generators, Engines & Machinery"
                headerTextStyle={styles.bannerTitle}
                detailTextStyle={styles.bannerSubTitle}
              />
              <TouchableOpacity style={styles.checkNowButton}>
                <Text style={styles.checkNowText}>{'CHECK NOW'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{paddingHorizontal: vw(8)}}>
          <CustomFlatList
            data={NewArrivalsData}
            renderItem={newArrivalsRenderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            header
            onSeeMorePress={() => {
              navigation.navigate(ScreenNames.NewArrivals);
            }}
            headingText="New Arrivals"
            contentContainerStyle={styles.customFlatListStyle}
          />
          <CustomFlatList
            data={BestSellingProducts}
            renderItem={bestSellingProductRenderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            header
            headingText="Best Selling Products"
            contentContainerStyle={styles.customFlatListStyle}
          />
        </View>
      </ScrollView>
    </View>
    </TouchableWithoutFeedback>
    </>
  );
};

>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
export default Home;
