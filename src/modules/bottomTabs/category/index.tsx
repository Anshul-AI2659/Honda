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
import {Icons, Images} from '../../../assets';
import {HIPlus, Honda} from '../../../assets/data';

//Custom Components
import ContentHeader from '../../../components/customContentHeader';
import CustomFlatList from '../../../components/customFlatlist';
import CustomHeader from '../../../components/customHeader';
import CustomStatusBar from '../../../components/statusBar';

// Styles
import styles from './styles';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from '../../../utils/types';
import {ScreenNames} from '../../../utils/screenNames';
import {vw} from '../../../utils/dimension';
import CustomSearchBar from '../../../components/customSearchBar';

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
const Category = ({navigation}: HomeProps) => {
  const [searchText, setSearchText] = useState('');

  const ImageHeaderRenderItem = ({item}: {item: Item}) => (
    <TouchableOpacity style={styles.itemContainer} activeOpacity={0.5}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.itemImage} />
      </View>
      <Text style={styles.itemTitle}>{item.title}</Text>
    </TouchableOpacity>
  );
  const handleSearchPress = () => {};
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomStatusBar />
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

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <CustomSearchBar
          placeholder="Search products"
          value={searchText}
          onChangeText={text => setSearchText(text)}
          onSearchPress={handleSearchPress} // Search button action
          searchContainerStyle={styles.searchContainer}
        />
        <View style={{paddingHorizontal: vw(8)}}>
          <CustomFlatList
            data={Honda}
            renderItem={ImageHeaderRenderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            header
            headerImg={Images.logo}
            onSeeMorePress={() => {
              navigation.navigate(ScreenNames.NewHondaCategory);
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Category;
