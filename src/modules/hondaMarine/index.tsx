/* eslint-disable react/no-unstable-nested-components */
import {
    Image,
    ImageSourcePropType,
    Pressable,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
  import {SafeAreaView} from 'react-native-safe-area-context';
  import CustomHeader from '../../components/customHeader';
  import {NativeStackNavigationProp} from '@react-navigation/native-stack';
  import {RootStackParamList} from '../../utils/types';
  import { allGenrator, allMarine, buttonData, HandySeries, Inverter, marinePortable, NewArrivalsData, silentSeris, tabDataHondaMarine } from '../../staticData';
  import { Images } from '../../assets';
  import CustomFlatList from '../../components/CustomFlatList';
  import CustomStatusBar from '../../components/statusBar';
  import { ScreenNames } from '../../utils/screenNames';
  import { vh, vw } from '../../styles';
  import { useRoute } from '@react-navigation/native';
  import CustomSearch from '../../components/CustomSearchBar';
  import styles from './styles';
  
  interface hondaMarineProps {
    navigation: NativeStackNavigationProp<RootStackParamList>;
  }
  interface Item {
    id: number;
    title: string;
    image: ImageSourcePropType;
    number: string;
    price: string;
  }
  
  const HondaMarine = ({navigation}: hondaMarineProps) => {
    const [searchText, setSearchText] = useState('');
    const [selected, setSelected] = useState(1);
    const [currentData, setCurrentData] = useState(NewArrivalsData);
    let routes = useRoute();
    const {screenName} = routes?.params
  
    useEffect(() => {
      console.log('Received screenName:', screenName);
    }, [screenName]);
  
    const handleButtonPress = (categoryId: React.SetStateAction<number>) => {
      setSelected(categoryId);
  
      switch (categoryId) {
        case 1:
          setCurrentData(allMarine);
          break;
        case 2:
          setCurrentData(marinePortable);
          break;
        case 3:
          setCurrentData(marinePortable);
          break;
        case 4:
          setCurrentData(allMarine);
          break;
        default:
          setCurrentData(allMarine);
      }
    };
  
    const onCalculatorPress = () =>{
      navigation.navigate(ScreenNames.modelCalculator)
    }
  
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
  
    const GeneratorsRenderItem = ({item}: {item: Item}) => (
      <TouchableOpacity
        style={styles.textHeaderItemContainer}
        activeOpacity={0.5}
        onPress={() => navigation.navigate(ScreenNames.ProductDetailPage,{item:item,screenName:'Honda Marine'})}>
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
          onTouchablePress={() => navigation.navigate(ScreenNames.Search)}
          searchContainerStyle={styles.searchContainer}
          isTextInput={false}
        />
        <View style={styles.choiceContainer}>
          <CustomFlatList
            data={tabDataHondaMarine}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
             contentContainerStyle={styles.choiceContainer}
          />
        </View>
        <CustomFlatList
          data={currentData}
          renderItem={GeneratorsRenderItem}
          keyExtractor={item => item.id}
          horizontal={false}
          numColumns={2}
          contentContainerStyle={styles.customFlatListStyle}
        />
      </SafeAreaView>
    );
  };
  
  export default HondaMarine;
  