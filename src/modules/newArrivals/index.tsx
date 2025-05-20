/* eslint-disable react/no-unstable-nested-components */
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
<<<<<<< HEAD
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../utils/types';
import {Images} from '../../assets';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import CustomFlatList from '../../components/CustomFlatList';
import CustomButton from '../../components/CustomButton';
import FilterBottomSheet from '../../components/FilterBottomSheet';
import styles from './styles';
import {categoriesData, newArrivals, typesData} from '../../staticData';
import CustomSearch from '../../components/CustomSearchBar';
import {BlurView} from '@react-native-community/blur';
import SortBottomSheet from '../../components/sortBottomSheet';
import SingleExpandableList from '../../components/customAccordian';
import CheckBox from 'react-native-check-box';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {screenWidth, vw} from '../../styles';
import {useRoute} from '@react-navigation/native';
import CustomHeader from '../../components/customHeader';
import {ScreenNames} from '../../utils/screenNames';
import {TouchableWithoutFeedback} from 'react-native';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getMoreProductList } from '../../Redux/Actions/authAction';

interface NewArrivalsProps {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

=======
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
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
interface Item {
  id: string;
  title: string;
  image: ImageSourcePropType;
  number: string;
  price: string;
}

<<<<<<< HEAD
const NewArrivals = ({navigation,route}: NewArrivalsProps) => {
  const dispatch = useAppDispatch();
  const {token, uType} = useAppSelector(state => state.authReducer);
  const {subType} = route?.params
  const [searchText, setSearchText] = useState('');
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [isSortVisible, setSortVisible] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 265000]);
  // const [priceRange, setPriceRange] = useState([10000, 265000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [resetFilter, setResetFilter] = useState(true);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [categoriesExpanded, setCategoriesExpanded] = useState(false);
  const [sortOrder, setSortOrder] = useState<string>('');

  // Add new state variables for applied filters
  // const [appliedPriceRange, setAppliedPriceRange] = useState([10000, 265000]);
  const [appliedPriceRange, setAppliedPriceRange] = useState([0, 265000]);
  const [appliedCategories, setAppliedCategories] = useState<string[]>([]);
  const [appliedTypes, setAppliedTypes] = useState<string[]>([]);
  const [pruductData, setProductData] = useState([]);

  let routes = useRoute();
  const {screenName} = routes?.params;

  useEffect(() => {
    fetchMoreProducts()
    console.log('Received screenName:', screenName);
  }, [screenName]);

  //  const fetchMoreProducts = () => {
  //       const params = {
  //       data: {
  //           page: 1,
  //           limit: 10,
  //           search: '',
  //           // productType: appliedTypes.length > 0 ? appliedTypes : undefined,
  //           // minPrice: appliedPriceRange[0],
  //           // maxPrice: appliedPriceRange[1],
  //           // sortingBy: sortOrder || undefined,
  //           // productCategory: appliedCategories.length > 0 ? appliedCategories : undefined,
  //           userType:uType,
  //           accessToken:token,
  //           subType,
  //           },
  //       callback: (response) => {
  //       setProductData(response?.data);
  //       },
  //       };
  //       dispatch(getMoreProductList(params));
  //     };


  
  const fetchMoreProducts = () => {
    const data: any = {
      page: 1,
      limit: 10,
      search: searchText || '',
      userType: uType,
      accessToken: token,
      subType,
    };
  
    // Add filters only if they are applied
    if (appliedTypes.length > 0) {
      data.productType = appliedTypes;
    }

    const defaultPriceRange = [0, 265000]; // Replace with your actual default min/max
    if (
      appliedPriceRange[0] !== defaultPriceRange[0] ||
      appliedPriceRange[1] !== defaultPriceRange[1]
    ) {
      data.minPrice = appliedPriceRange[0];
      data.maxPrice = appliedPriceRange[1];
    }
    if (sortOrder) {
      data.sortingBy = sortOrder;
    }
    if (appliedCategories.length > 0) {
      data.productCategory = appliedCategories;
    }
  
    const params = {
      data,
      callback: (response) => {
        setProductData(response?.data || []);
      },
    };
  
    dispatch(getMoreProductList(params));
  };
  
  console.log('data on NewArrival screen------->',pruductData);

  const toggleFilter = () => {
    setFilterVisible(!isFilterVisible);
  };

  const toggleSort = () => {
    setSortVisible(!isSortVisible);
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category],
    );
  };

  const toggleType = (type: string) => {
    setSelectedTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type],
    );
  };

  const filteredData = pruductData?.filter(item => {
    const rawPrice = item.price != null ? String(item.price) : '0';
    const price = parseFloat(rawPrice.replace(/[₹,]/g, '').trim());
  
    const isInPriceRange =
      price >= appliedPriceRange[0] && price <= appliedPriceRange[1];
  
    const isInSelectedCategories =
      appliedCategories.length === 0 || appliedCategories.includes(item.productCategory);
  
    const isInSelectedTypes =
      appliedTypes.length === 0 || appliedTypes.includes(item.productType);
  
    return isInPriceRange && isInSelectedCategories && isInSelectedTypes;
  });
  

  const dataToShow = resetFilter ? pruductData : filteredData;

  const getParsedPrice = (price: any): number => {
    if (!price) return 0;
    const cleaned = String(price).replace(/[₹,]/g, '').trim();
    const parsed = parseFloat(cleaned);
    return isNaN(parsed) ? 0 : parsed;
  };
  

  const formatPrice = (value: number) => {
    return value.toLocaleString('en-IN');
  };
=======
const NewArrivals = ({navigation}: NewArrivalsProps) => {
  const [searchText, setSearchText] = useState('');
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625

  const GeneratorsRenderItem = ({item}: {item: Item}) => (
    <TouchableOpacity
      style={styles.textHeaderItemContainer}
      activeOpacity={0.5}
<<<<<<< HEAD
      onPress={() =>
        navigation.navigate(ScreenNames.ProductDetailPage, {item: item})
      }>
      <View style={styles.textHeaderImageContainer}>
        {/* <Image source={item.image} style={styles.textHeaderItemImage} /> */}
        <Image  source={{ uri: item.images?.[0] ?? '' }} style={styles.textHeaderItemImage} />
      </View>
      <View>
        <Text style={styles.textHeaderItemNumber}>{item.modelNumber}</Text>
        <Text style={styles.textHeaderItemTitle}>{item.productCategory}</Text>
        <Text style={styles.textHeaderItemPrice}>₹  ₹ {formatPrice(getParsedPrice(item.price))}</Text>
      </View>
    </TouchableOpacity>
  );

  const priceDifference = priceRange[1] - priceRange[0];
  console.log("priceRange[0]", priceRange[1])
  console.log("priceRange[1]", priceRange[0])
  console.log("pricediff", priceDifference)

  // const handleApplySort = (order: string) => {
  //   setSortOrder(order);
  //   const sortedData = dataToShow.sort((a, b) => {
  //     const priceA = parseFloat(a.price.replace(/[₹,]/g, '').trim());
  //     const priceB = parseFloat(b.price.replace(/[₹,]/g, '').trim());
  //     if (order === 'high') {
  //       return priceB - priceA;
  //     } else {
  //       return priceA - priceB;
  //     }
  //   });
  // };

  const handleApplySort = (order: string) => {
    setSortOrder(order);
    const sortedData = [...pruductData].sort((a, b) => {
      const priceA = getParsedPrice(a.price);
      const priceB = getParsedPrice(b.price);
      return order === 'high' ? priceB - priceA : priceA - priceB;
    });
    setProductData(sortedData);
  };

  return (
    <SafeAreaView style={[styles.mainContainer]}>
      <CustomHeader
        headerStyle={styles.header}
        leftIcon={Images.backarrow}
        textHeading={screenName === 'Honda Marine' ? '' : screenName}
        onleftPress={navigation.goBack}
        leftIconStyle={styles.backButton}
        headerIcon={
          screenName === 'Honda Marine' ? Images.hondaMarineLogo : Images.honda
        }
      />

      {(isFilterVisible || isSortVisible) && (
        <View style={styles.absolute}>
          <BlurView
            style={StyleSheet.absoluteFill}
            blurType="light"
            blurAmount={5}
            reducedTransparencyFallbackColor="white"
          />

          <View
            style={[
              StyleSheet.absoluteFill,
              {backgroundColor: 'rgba(51, 51, 51, 0.2)'},
            ]}
          />

          <TouchableWithoutFeedback
            onPress={() => {
              setFilterVisible(false);
              setSortVisible(false);
            }}>
            <View style={StyleSheet.absoluteFill} />
          </TouchableWithoutFeedback>
        </View>
      )}

      <CustomSearch
        placeholder="Search Products"
        value={searchText}
        onChangeText={searchText}
        searchContainerStyle={styles.searchContainer}
      />
      
      <CustomFlatList
         data={dataToShow}
        // data={pruductData}
        renderItem={GeneratorsRenderItem}
        keyExtractor={item => item._id}
        horizontal={false}
        numColumns={2}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No Data Available</Text>
        </View>
        }
        contentContainerStyle={[styles.customFlatListStyle,{flexGrow:1}]}
        listHeaderComponent={
          <>
            {appliedTypes.length > 0 && (
              <View style={styles.selectedTypesContainer}>
                {appliedTypes.map((type, index) => (
                  <View key={index} style={styles.selectedTypeTag}>
                    <Text style={styles.selectedTypeTextTag}>{type}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        setAppliedTypes(prev => prev.filter(t => t !== type));
                        setSelectedTypes(prev => prev.filter(t => t !== type));
                      }}>
                      <Image source={Images.cross} style={styles.cross} />
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            )}
=======
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
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
          </>
        }
      />
      <View style={styles.footer}>
<<<<<<< HEAD
        {!isFilterVisible && !isSortVisible && (
          <View style={styles.footerContentContainer}>
            <View style={{position: 'relative'}}>
              <CustomButton
                buttonText={'Sort By'}
                iconSource={Images.sort}
                iconStyle={styles.sortByIcon}
                onPress={toggleSort}
                buttonStyle={styles.sortByButton}
                textStyle={styles.sortByButtonText}
              />
              {sortOrder !== '' && <View style={styles.dot} />}
            </View>

            <View style={{position: 'relative'}}>
              <CustomButton
                buttonText={'Filter'}
                iconSource={Images.filter}
                iconStyle={styles.filterIcon}
                onPress={toggleFilter}
                buttonStyle={styles.filterButton}
                textStyle={styles.filterButtonText}
              />
              {!resetFilter && <View style={styles.filterdot} />}
            </View>
          </View>
        )}
      </View>

      <FilterBottomSheet
        visible={isFilterVisible}
        onClose={toggleFilter}
        priceRange={priceRange}
        selectedCategories={selectedCategories}
        selectedTypes={selectedTypes}
        selectedStatus={[]}
        selectedDate={{from: null, to: null}}
        initialPriceRange={appliedPriceRange}
        initialSelectedCategories={appliedCategories}
        initialSelectedTypes={appliedTypes}
        hasSelectedFilters={!resetFilter}
        applyFilter={() => {
          setAppliedPriceRange(priceRange);
          setAppliedCategories(selectedCategories);
          setAppliedTypes(selectedTypes);
          setFilterVisible(false);
          setResetFilter(false);
        }}
        onClearAll={() => {
          setResetFilter(true);
          setFilterVisible(false);
          setSelectedTypes([]);
          setSelectedCategories([]);
          // setPriceRange([10000, 265000]);
          setPriceRange([0, 265000]);
          setAppliedTypes([]);
          setAppliedCategories([]);
          // setAppliedPriceRange([10000, 265000]);
          setAppliedPriceRange([0, 265000]);
        }}>
        <Text style={styles.sectionTitle}>Price Range</Text>

        <View style={styles.priceDisplay}>
          <Text style={styles.priceText}>₹ {formatPrice(priceDifference)}</Text>
        </View>
        
        <View style={{marginStart:vw(13)}}>
          <MultiSlider
            values={priceRange}
            sliderLength={screenWidth-vw(60)}
            min={0}
            max={265000}
            step={1000}
            allowOverlap={false}
            snapped
            markerStyle={styles.sliderMarker}
            selectedStyle={styles.sliderSelected}
            trackStyle={styles.sliderTrack}
            onValuesChange={values => {
              setPriceRange(values);
            }}
          />
         </View>

        <View style={styles.priceLabels}>
          <Text style={styles.textRange}>₹ {formatPrice(priceRange[0])}</Text>
          <Text style={styles.textRange}>₹ {formatPrice(priceRange[1])}</Text>
        </View>

        <View style={styles.divider}/>

        <Text style={styles.sectionTitle}>Type</Text>
        <CustomFlatList
          data={typesData}
          keyExtractor={item => item.id}
          horizontal
          contentContainerStyle={styles.typeFlat}
          renderItem={({item}) => (
            <TouchableOpacity
              style={[
                styles.typeButton,
                selectedTypes.includes(item.label) && styles.selectedType,
              ]}
              onPress={() => toggleType(item.label)}>
              <Text
                style={[
                  styles.typeText,
                  selectedTypes.includes(item.label) && styles.selectedTypeText,
                ]}>
                {item.label}
              </Text>
            </TouchableOpacity>
          )}
        />
       
       <View style={styles.divider}/>
       
        <SingleExpandableList
          title="Categories"
          isExpanded={categoriesExpanded}
          onAccordionPress={() => setCategoriesExpanded(!categoriesExpanded)}
          expandImage={Images.expand}
          unexpandImage={Images.unexpand}
          iconColor="#050507">
          <CustomFlatList
            data={categoriesData}
            keyExtractor={item => item.id}
            scrollEnabled={false}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.categoryItem}
                onPress={() => toggleCategory(item.label)}>
                <CheckBox
                  isChecked={selectedCategories.includes(item.label)}
                  onClick={() => toggleCategory(item.label)}
                  checkedImage={
                    <View style={[styles.checkboxBox, styles.checkedBox]}>
                      <Image source={Images.tickIcon}  tintColor={'#ffffff'}/>
                    </View>
                  }
                  unCheckedImage={
                    <View style={[styles.checkboxBox, styles.uncheckedBox]} />
                  }
                  // checkBoxColor="#8CA2B4"
                />
                <Text style={styles.categoryText}>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        </SingleExpandableList>
      </FilterBottomSheet>

      <SortBottomSheet
        visible={isSortVisible}
        onClose={toggleSort}
        onApplySort={handleApplySort}
      />
=======
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
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
    </SafeAreaView>
  );
};

export default NewArrivals;
<<<<<<< HEAD
=======

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
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
