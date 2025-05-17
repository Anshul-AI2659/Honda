/* eslint-disable react/no-unstable-nested-components */
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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

interface Item {
  id: string;
  title: string;
  image: ImageSourcePropType;
  number: string;
  price: string;
}

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

  const GeneratorsRenderItem = ({item}: {item: Item}) => (
    <TouchableOpacity
      style={styles.textHeaderItemContainer}
      activeOpacity={0.5}
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
          </>
        }
      />
      <View style={styles.footer}>
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
    </SafeAreaView>
  );
};

export default NewArrivals;
