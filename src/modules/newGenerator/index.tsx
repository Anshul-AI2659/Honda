/* eslint-disable react/no-unstable-nested-components */
import {
  Image,
  ImageSourcePropType,
  Keyboard,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomHeader from '../../components/customHeader';
import {Icons} from '../../assets';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../utils/types';
import CustomSearchBar from '../../components/customSearchBar';
import CustomFlatList from '../../components/customFlatlist';
import {
  BestSellingProducts,
  NewArrivalsData,
  buttonData,
} from '../../assets/data';
import styles from './styles';

interface generatorsProps {
  navigation: StackNavigationProp<StackParamList>;
}
interface Item {
  id: number;
  title: string;
  image: ImageSourcePropType;
  number: string;
  price: string;
}

const NewGenerators = ({navigation}: generatorsProps) => {
  const [searchText, setSearchText] = useState('');
  const [selected, setSelected] = useState(1);
  const [currentData, setCurrentData] = useState(NewArrivalsData);

  const handleButtonPress = (categoryId: React.SetStateAction<number>) => {
    setSelected(categoryId);

    switch (categoryId) {
      case 1:
        setCurrentData(NewArrivalsData);
        break;
      case 2:
        setCurrentData(BestSellingProducts);
        break;
      case 3:
        setCurrentData(NewArrivalsData);
        break;
      case 4:
        setCurrentData(BestSellingProducts);
        break;
      default:
        setCurrentData(NewArrivalsData);
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
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={styles.mainContainer}>
          <CustomHeader
            headerStyle={styles.header}
            leftIcon={Icons.back}
            textHeading="Generators"
            leftButtonStyle={styles.backButton}
            onleftPress={navigation.goBack}
          />
          <CustomSearchBar
            placeholder="Search"
            searchContainerStyle={styles.searchContainer}
            value={searchText}
            onChangeText={text => setSearchText(text)}
            onSearchPress={handleSearchPress}
          />
          <View style={styles.choiceContainer}>
            <CustomFlatList
              data={buttonData}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              horizontal={true}
              // contentContainerStyle={styles.choiceContainer}
            />
          </View>
          <CustomFlatList
            data={currentData}
            renderItem={GeneratorsRenderItem}
            keyExtractor={item => item.id}
            horizontal={false}
            numColumn={2}
            contentContainerStyle={styles.customFlatListStyle}
          />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
};

export default NewGenerators;
