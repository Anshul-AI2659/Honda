<<<<<<< HEAD
/* eslint-disable react/no-unstable-nested-components */
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {ReactNode, useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ImageSourcePropType,
  ScrollView,
=======
// /* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {
  Image,
  ImageSourcePropType,
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
<<<<<<< HEAD
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
// Custom Components
import CustomHeader from '../../../components/customHeader';
import SectionHeader from '../../../components/SectionHeader';
import CustomStatusBar from '../../../components/statusBar';
// Utils
import {ScreenNames} from '../../../utils/screenNames';
import {RootStackParamList} from '../../../utils/types';
// Assets
import {Images} from '../../../assets';
// Styles
import {vh} from '../../../styles';
import styles from './styles';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {getTrainingProduct} from '../../../Redux/Actions/trainingAction';
import {getHomeProductType} from '../../../Redux/Actions/homeAction';
import ShimmerLoader from '../../../components/customShimmer';
import ProductCard from '../../../components/ProductCard';
import {useRoute} from '@react-navigation/native';
interface EquipmentTrainingProps {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}
interface Item {
  name: ReactNode;
=======
import CustomStatusBar from '../../../components/statusBar';
import CustomHeader from '../../../components/customHeader';
import {Icons} from '../../../assets';
import {ScreenNames} from '../../../utils/screenNames';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from '../../../utils/types';
import {HIPlus, Honda, trainingButtonData} from '../../../assets/data';
import CustomFlatList from '../../../components/customFlatlist';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';

interface TrainingProps {
  navigation: BottomTabNavigationProp<BottomTabParamList>;
}
interface Item {
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
  id: number;
  title: string;
  image: ImageSourcePropType;
  number: string;
  price: string;
}
interface SimpleItem {
  id: string;
  title: string;
  image: ImageSourcePropType;
}
<<<<<<< HEAD
const Training = ({navigation}: EquipmentTrainingProps) => {
  const insets = useSafeAreaInsets();
  const [trainingProductData, setTrainingProductdata] = useState();
  const {uType, token} = useAppSelector(state => state.authReducer);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const {roleName} = useRoute?.params ?? 'Dealer';

  useEffect(() => {
    fetchHomeTrendingProductList();
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    {id: '1', name: 'Battery operated', image: Images.battery},
    {id: '2', name: 'Generators', image: Images.tutorial1},
    {id: '3', name: 'Tillers', image: Images.tiller},
    {id: '4', name: 'Brush Cutters', image: Images.battery},
    {id: '5', name: 'Water Pumps', image: Images.tutorial1},
    {id: '6', name: 'Lawn Mowers', image: Images.tiller},
    {id: '5', name: 'Outboard Motors', image: Images.tutorial1},
    {id: '6', name: 'General Purp. Engines', image: Images.tiller},
  ];
  const category = [
    {id: '1', name: 'Agriculture Machinery', image: Images.agriculture},
    {id: '2', name: 'Light Construction', image: Images.machinery},
    {id: '3', name: 'Other Category', image: Images.other},
  ];

  const ImageHeaderRenderItem = ({item}: {item: Item}) => {
    const handlePress = () => {
      if (item.name === 'Generators') {
        navigation.navigate(ScreenNames.EquipmentTraining);
      }
    };
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        activeOpacity={0.5}
        onPress={handlePress}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.itemImage} />
        </View>
        <View
          style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
          <Text style={styles.itemTitle}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
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
          navigation.navigate(ScreenNames.EquipmentTraining, {
            screenName: item.name,
            productType: trainingProductData?.[1]?.name,
            productCategory: item?.name,
            
          });
          break;
        default:
          console.warn('No screen defined for this category');
          break;
      }
    },
    [trainingProductData],
  );

  //@onProductPress function------------------------------------//
  const onProductPress = useCallback(
    item => {
      console.log('item data on Hondaproduct press', item);
      console.log('checking', trainingProductData?.[0]?.name);
      switch (item.name) {
        case 'Generators':
          navigation.navigate(ScreenNames.EquipmentTraining, {
            screenName: item.name,
            productType: trainingProductData?.[0]?.name,
            productCategory: item?.name,
          });
          break;
        case 'Water Pumps':
          navigation.navigate(ScreenNames.EquipmentTraining, {
            screenName: item.name,
            productType: trainingProductData?.[0]?.name,
            productCategory: item?.name,
          });
          break;
        case 'Honda Marine':
          navigation.navigate(ScreenNames.EquipmentTraining, {
            screenName: item.name,
            productType: trainingProductData?.[0]?.name,
            productCategory: item?.name,
          });
          break;
        case 'Engines':
          navigation.navigate(ScreenNames.EquipmentTraining, {
            screenName: item.name,
            productType: trainingProductData?.[0]?.name,
            productCategory: item?.name,
          });
          break;
        case 'Battery Operated':
          navigation.navigate(ScreenNames.EquipmentTraining, {
            screenName: item.name,
            productType: trainingProductData?.[0]?.name,
            productCategory: item?.name,
          });
          break;
        case 'Agri & Garden':
          navigation.navigate(ScreenNames.EquipmentTraining, {
            screenName: item.name,
            productType: trainingProductData?.[0]?.name,
            productCategory: item?.name,
          });
          break;
        default:
          console.warn('No screen defined for this category');
          break;
      }
    },
    [trainingProductData, navigation, roleName],
  );

  
  const fetchHomeTrendingProductList = () => {
    const params = {
      data: {
        userType: uType,
        accessToken: token,
      },
      callback: response => {
        setTrainingProductdata(response?.data);
      },
    };
    dispatch(getHomeProductType(params));
  };

  return (
    <View style={[styles.mainContainer, {paddingTop: insets.top}]}>
      <CustomStatusBar />
      <CustomHeader
        headerStyle={styles.header}
        leftIcon={Images.hondaHqImage}
        leftIconStyle={styles.profileIcon}
        rightIcon={Images.notification}
=======
const GeneratorsRenderItem = ({item}: {item: SimpleItem}) => (
  <TouchableOpacity
    style={styles.ItemContainer}
    activeOpacity={0.5}
    onPress={() => {}}>
    <View style={styles.ImageContainer}>
      <Image source={item.image} style={styles.ItemImage} />
    </View>
    <Text style={styles.ItemTitle}>{item.title}</Text>
  </TouchableOpacity>
);
const Training = ({navigation}: TrainingProps) => {
  const [selected, setSelected] = useState(1);
  const [currentData, setCurrentData] = useState(Honda);

  const handleButtonPress = (categoryId: React.SetStateAction<number>) => {
    setSelected(categoryId);

    switch (categoryId) {
      case 1:
        setCurrentData(Honda);
        break;
      case 2:
        setCurrentData(HIPlus);
        break;
      case 3:
        setCurrentData(Honda);
        break;
      case 4:
        setCurrentData(HIPlus);
        break;
      default:
        setCurrentData(Honda);
    }
  };

  const renderItem = ({item}: {item: Item}) => (
    <View>
      <TouchableOpacity
        style={[
          styles.Button,
          selected === item.id ? styles.selectedButton : null,
        ]}
        onPress={() => handleButtonPress(item.id)}>
        <Text
          style={[
            styles.buttonText,
            selected === item.id ? styles.selectedButtonText : null,
          ]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomStatusBar />
      <CustomHeader
        headerStyle={styles.header}
        leftIcon={Icons.profile}
        leftIconStyle={styles.profileIcon}
        rightIcon={Icons.notification}
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
        rightButtonStyle={styles.notificationButton}
        onRightPress={() => {
          navigation.navigate(ScreenNames.Notification);
        }}
      />
<<<<<<< HEAD
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <SectionHeader
          image={{uri: trainingProductData?.[0]?.image}}
          imageStyle={styles.imageStyle}
        />
        <FlatList
          data={
            isLoading
              ? new Array(6).fill({})
              : trainingProductData?.[0]?.categoryData
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
          image={{uri: trainingProductData?.[1]?.image}}
          onPress={() => console.log('See More Categories')}
          imageStyle={styles.hiImage}
        />

        <FlatList
          data={
            isLoading
              ? new Array(3).fill({})
              : trainingProductData?.[1]?.categoryData
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
      </ScrollView>
    </View>
=======
      <View style={styles.choiceContainer}>
        <CustomFlatList
          data={trainingButtonData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal={true}
        />
      </View>
      <CustomFlatList
        data={currentData}
        renderItem={({item}) => <GeneratorsRenderItem item={item} />}
        keyExtractor={item => item.id}
        horizontal={false}
        numColumn={2}
        contentContainerStyle={styles.customFlatListStyle}
      />
    </SafeAreaView>
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
  );
};

export default Training;
