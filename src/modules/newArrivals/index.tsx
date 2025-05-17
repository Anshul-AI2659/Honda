/* eslint-disable react/no-unstable-nested-components */
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../../utils/colors';
import CustomHeader from '../../components/customHeader';
import {Icons} from '../../assets';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../utils/types';
import {normalize, vh, vw} from '../../utils/dimension';
import CustomSearchBar from '../../components/customSearchBar';
import CustomFlatList from '../../components/customFlatlist';
import {NewArrivalsData} from '../../assets/data';
import {
  ROBOTO_BOLD,
  ROBOTO_MEDIUM,
  ROBOTO_REGULAR,
  ROBOTO_SEMIBOLD,
} from '../../utils/Fonts';
import CustomButton from '../../components/customButton';

interface NewArrivalsProps {
  navigation: StackNavigationProp<StackParamList>;
}
interface Item {
  id: string;
  title: string;
  image: ImageSourcePropType;
  number: string;
  price: string;
}

const NewArrivals = ({navigation}: NewArrivalsProps) => {
  const [searchText, setSearchText] = useState('');

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
  const handleSearchPress = () => {};
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomHeader
        headerStyle={styles.header}
        leftIcon={Icons.back}
        textHeading="New Arrivals"
        leftButtonStyle={styles.backButton}
        onleftPress={navigation.goBack}
      />
      <CustomFlatList
        data={NewArrivalsData}
        renderItem={GeneratorsRenderItem}
        keyExtractor={item => item.id}
        horizontal={false}
        numColumn={2}
        contentContainerStyle={styles.customFlatListStyle}
        listHeaderComponent={
          <>
            <CustomSearchBar
              placeholder="Search Product"
              searchContainerStyle={styles.searchContainer}
              value={searchText}
              onChangeText={text => setSearchText(text)}
              onSearchPress={handleSearchPress}
            />
          </>
        }
      />
      <View style={styles.footer}>
        <View style={styles.footerContentContainer}>
          <CustomButton
            buttonText={'Sort By'}
            iconSource={Icons.sort}
            iconStyle={styles.sortByIcon}
            onPress={() => {}}
            buttonStyle={styles.sortByButton}
            textStyle={styles.sortByButtonText}
          />
          <CustomButton
            buttonText={'Filter'}
            iconSource={Icons.filter}
            iconStyle={styles.filterIcon}
            onPress={() => {}}
            buttonStyle={styles.filterButton}
            textStyle={styles.filterButtonText}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NewArrivals;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  header: {
    paddingVertical: vh(14),
    borderBottomWidth: 1,
    borderBottomColor: '#00000012',
    shadowColor: '#00000012',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.9,
    shadowRadius: 14,
    elevation: 3,
  },
  backButton: {
    backgroundColor: Colors.headerButton,
  },
  searchContainer: {
    marginHorizontal: vw(8),
    marginBottom: vh(4),
  },
  customFlatListStyle: {
    paddingHorizontal: vw(8),
    paddingBottom: vh(10),
  },
  textHeaderItemContainer: {
    width: vw(182),
    height: vw(215),
    backgroundColor: Colors.White,
    borderRadius: 12,
    marginHorizontal: vw(8),
    marginVertical: vh(12),
  },
  textHeaderImageContainer: {
    width: vw(182),
    height: vw(136),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: Colors.lightGrey,
  },
  textHeaderItemImage: {
    width: vw(100),
    height: vw(100),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  textHeaderItemNumber: {
    fontSize: normalize(16),
    fontFamily: ROBOTO_BOLD,
    fontWeight: '700',
    marginTop: vh(10),
  },
  textHeaderItemTitle: {
    fontSize: normalize(14),
    fontFamily: ROBOTO_REGULAR,
    fontWeight: '400',
    marginTop: vh(8),
    color: Colors.description,
  },
  textHeaderItemPrice: {
    fontSize: normalize(14),
    fontFamily: ROBOTO_SEMIBOLD,
    fontWeight: '600',
    marginTop: vh(8),
    color: Colors.blackText,
  },
  footer: {
    width: '100%',
    backgroundColor: Colors.White,
    shadowColor: '#DCE3ED99',
    shadowOffset: {width: 0, height: -4},
    shadowOpacity: 0.9,
    shadowRadius: 40,
    elevation: 10,
    borderTopWidth: 1,
    borderTopColor: Colors.tutorialInactiveDot,
  },
  footerContentContainer: {
    backgroundColor: Colors.White,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: vh(14),
  },
  sortByButton: {
    flexDirection: 'row',
    width: vw(206),
    height: vw(36),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.White,
    borderRightWidth: 0.5,
    borderRightColor: Colors.tutorialInactiveDot,
  },
  sortByIcon: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
  },
  sortByButtonText: {
    fontSize: normalize(18),
    fontFamily: ROBOTO_MEDIUM,
    fontWeight: '500',
    marginLeft: vw(12),
    color: Colors.blackText,
  },
  filterButton: {
    flexDirection: 'row',
    width: vw(206),
    height: vw(36),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.White,
    borderLeftWidth: 0.5,
    borderLeftColor: Colors.tutorialInactiveDot,
  },
  filterIcon: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
  },
  filterButtonText: {
    fontSize: normalize(16),
    fontFamily: ROBOTO_MEDIUM,
    fontWeight: '500',
    marginLeft: vw(12),
    color: Colors.blackText,
  },
});
