/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  ScrollView,
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

// Styles
import styles from './styles';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from '../../../../utils/types';
import {ScreenNames} from '../../../../utils/screenNames';

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

  const corouselRenderItem = ({item}: {item: Item}) => (
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

  const newArrivalsRenderItem = ({item}: {item: Item}) => (
    <TouchableOpacity
      style={styles.textHeaderItemContainer}
      activeOpacity={0.5}
      onPress={() => {
        navigation.navigate(ScreenNames.ProductDetail);
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
    <SafeAreaView style={styles.mainContainer}>
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
        />
        <CustomSearchBar
          placeholder="Search products"
          value={searchText}
          onChangeText={text => setSearchText(text)}
          onSearchPress={handleSearchPress} // Search button action
        />
        <Carousel
          data={steps}
          currentStep={currentStep}
          renderItem={corouselRenderItem}
          handleScrollEnd={handleScrollEnd}
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
          renderItem={newArrivalsRenderItem}
          keyExtractor={item => item.id}
          horizontal={true}
          header
          headerText
          heading="New Arrivals"
          contentContainerStyle={styles.customFlatListStyle}
        />
        <CustomFlatList
          data={BestSellingProducts}
          renderItem={bestSellingProductRenderItem}
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
