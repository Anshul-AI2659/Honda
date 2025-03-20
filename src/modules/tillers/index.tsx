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
import {NewArrivalsData} from '../../assets/data';
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

const Tillers = ({navigation}: generatorsProps) => {
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
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={styles.mainContainer}>
          <CustomHeader
            headerStyle={styles.header}
            leftIcon={Icons.back}
            textHeading="Tillers"
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
          <CustomFlatList
            data={NewArrivalsData}
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

export default Tillers;
