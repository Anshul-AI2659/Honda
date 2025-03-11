/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// Assets
import {Icons, Images} from '../../../../assets';
import {
  BestSellingProducts,
  HIPlus,
  Honda,
  NewArrivals,
  steps,
} from '../../../../assets/data';

//Custom Components
import ContentHeader from '../../../../components/customContentHeader';
import Carousel from '../../../../components/customCorousel';
import CustomFlatList from '../../../../components/customFlatlist';
import CustomHeader from '../../../../components/customHeader';
import CustomSearchBar from '../../../../components/customSearchBar';
import CustomStatusBar from '../../../../components/statusBar';

// Utils
import {Colors} from '../../../../utils/colors';
import {SCREEN_WIDTH, vh, vw} from '../../../../utils/dimension';

// Main Component
const Home = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [searchText, setSearchText] = useState('');

  const handleScrollEnd = (event: {
    nativeEvent: {contentOffset: {x: number}};
  }) => {
    const newIndex = Math.round(
      event.nativeEvent.contentOffset.x / styles.slide.width,
    );
    setCurrentStep(newIndex);
  };

  const corouselRenderItem = ({item}) => (
    <View style={styles.slide}>
      <View style={styles.corouselItemContainer}>
        <View style={styles.itemTextContainer}>
          <ContentHeader
            headerText="Lorem Ispum"
            detailText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
            headerTextStyle={styles.itemHeaderText}
            detailTextStyle={styles.itemDetailsText}
          />
        </View>
        <Image source={item.image} style={styles.image} />
      </View>
    </View>
  );

  const ImageHeaderRenderItem = ({item}: {item: Item}) => (
    <TouchableOpacity style={styles.itemContainer} activeOpacity={0.5}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.itemImage} />
      </View>
      <Text style={styles.itemTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  const textHeaderRenderItem = ({item}: {item: Item}) => (
    <TouchableOpacity
      style={styles.textHeaderItemContainer}
      activeOpacity={0.5}>
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
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <CustomHeader
          rightButton
          rightIcon={Icons.back}
          headerStyle={styles.header}
          headerImgStyle={styles.headerImg}
        />
        <CustomSearchBar
          placeholder="Search products"
          value={searchText}
          onChangeText={text => setSearchText(text)}
          onSearchPress={handleSearchPress} // Search button action
        />
        <Carousel
          steps={steps}
          currentStep={currentStep}
          renderItem={corouselRenderItem}
          handleScrollEnd={handleScrollEnd}
          showButtons={false}
          paginationStyle={styles.pagination}
        />
        <CustomFlatList
          data={Honda}
          renderItem={ImageHeaderRenderItem}
          keyExtractor={item => item.id}
          horizontal={true}
          header
          headerImage
          headerImg={Images.logo}
          contentContainerStyle={styles.customFlatListStyle}
        />

        <CustomFlatList
          data={HIPlus}
          renderItem={ImageHeaderRenderItem}
          keyExtractor={item => item.id}
          horizontal={true}
          header
          headerStyle={styles.HIPlusHeaderStyle}
          headerImage
          headerImg={Images.HIPlus}
          headerImgStyle={styles.HIPlusImgStyle}
          contentContainerStyle={styles.customFlatListStyle}
        />
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

        <CustomFlatList
          data={NewArrivals}
          renderItem={textHeaderRenderItem}
          keyExtractor={item => item.id}
          horizontal={true}
          header
          headerText
          heading="New Arrivals"
          contentContainerStyle={styles.customFlatListStyle}
        />
        <CustomFlatList
          data={BestSellingProducts}
          renderItem={textHeaderRenderItem}
          keyExtractor={item => item.id}
          horizontal={true}
          header
          headerText
          heading="Best Selling Products"
          contentContainerStyle={styles.customFlatListStyle}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  scrollView: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  header: {
    paddingTop: vh(10),
    paddingBottom: vh(20),
  },
  HIPlusHeaderStyle: {
    alignItems: 'flex-end',
  },
  headerImg: {
    marginLeft: vw(30),
  },
  corouselItemContainer: {
    flexDirection: 'row',
    backgroundColor: 'red',
    marginHorizontal: vw(10),
    paddingVertical: vh(15),
    borderRadius: 16,
  },
  itemTextContainer: {
    paddingHorizontal: vw(16),
  },
  itemHeaderText: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.White,
  },
  itemDetailsText: {
    width:vw(167),
    fontSize: 12,
    color: Colors.White,
  },
  image: {
    width: vw(100),
    height: vw(100),
    resizeMode: 'contain',
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: vh(16),
    marginBottom: vh(20),
  },
  slide: {
    width: SCREEN_WIDTH ,
  },
  customFlatListStyle: {
    paddingHorizontal: vw(10),
  },
  HIPlusImgStyle: {
    width: vw(44),
    height: vw(35),
    resizeMode: 'contain',
  },
  itemContainer: {
    width: vw(140),
    height: vw(168),
    backgroundColor: Colors.White,
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: vw(8),
    marginBottom: vh(20),
    borderWidth: 2,
    borderColor: '#F3F6FA',
  },
  imageContainer: {
    width: vw(140),
    height: vw(104),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: '#F3F6FA',
  },
  itemImage: {
    width: vw(100),
    height: vw(100),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: '500',
    width: vw(118),
    height: vw(40),
    marginTop: vh(20),
    textAlign: 'center',
    color: Colors.Black,
  },
  hiValuePlusImg: {
    width: vh(44),
    height: vh(35),
    resizeMode: 'contain',
  },
  banner: {
    marginBottom: vh(30),
  },
  bannerHeader: {
    paddingHorizontal: vw(18),
  },
  bannerContainer: {
    height: vh(141),
    flexDirection: 'row',
    backgroundColor: '#2C2C2C',
    marginHorizontal: vw(18),
    paddingVertical: vh(15),
    paddingHorizontal: vw(14),
    borderRadius: 16,
  },
  bannerImg: {
    width: vw(120),
    height: vw(120),
    resizeMode: 'contain',
  },
  bannerTextContainer: {
    marginLeft: vw(8),
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.White,
  },
  bannerSubTitle: {
    width: vw(210),
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '400',
    color: Colors.White,
  },
  checkNowButton: {
    width: vw(96),
    height: vw(28),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: Colors.White,
  },
  checkNowText: {
    fontSize: vh(8.6),
    fontWeight: '800',
  },
  textHeaderItemContainer: {
    width: vw(140),
    height: vw(183),
    backgroundColor: Colors.White,
    borderRadius: 12,
    marginHorizontal: vw(8),
    marginBottom: vh(20),
  },
  textHeaderImageContainer: {
    width: vw(140),
    height: vw(104),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: '#F3F6FA',
  },
  textHeaderItemImage: {
    width: vw(100),
    height: vw(100),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  textHeaderItemNumber: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: vh(10),
  },
  textHeaderItemTitle: {
    fontSize: 14,
    fontWeight: '400',
    marginTop: vh(8),
    color: '#7C8585',
  },
  textHeaderItemPrice: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: vh(8),
    color: '#050507',
  },
});
