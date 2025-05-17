/* eslint-disable react/no-unstable-nested-components */
import {
  Image,
  ImageSourcePropType,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomStatusBar from '../../components/statusBar';
import CustomHeader from '../../components/customHeader';
import CustomFlatList from '../../components/customFlatlist';
import {BestSellingProducts, NewArrivalsData} from '../../assets/data';
import {Icons} from '../../assets';
import styles from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../utils/types';
import {ScreenNames} from '../../utils/screenNames';

interface honda_CategoryProps {
  navigation: StackNavigationProp<StackParamList>;
}

interface Item {
  id: string;
  title: string;
  image: ImageSourcePropType;
  number: string;
  price: string;
}

const Honda_Category = ({navigation}: honda_CategoryProps) => {
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
  const TillersRenderItem = ({item}: {item: Item}) => (
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
  const BrushCuttersRenderItem = ({item}: {item: Item}) => (
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
  const WaterPumpsRenderItem = ({item}: {item: Item}) => (
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

  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomStatusBar />
      <CustomHeader
        headerStyle={styles.header}
        leftIcon={Icons.back}
        leftIconStyle={styles.backIcon}
        leftButtonStyle={styles.backButton}
        onleftPress={navigation.goBack}
      />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <CustomFlatList
          data={NewArrivalsData}
          renderItem={GeneratorsRenderItem}
          keyExtractor={item => item.id}
          horizontal={true}
          header
          headingText="Generators"
          onSeeMorePress={() => navigation.navigate(ScreenNames.Generators)}
          contentContainerStyle={styles.customFlatListStyle}
        />
        <CustomFlatList
          data={BestSellingProducts}
          renderItem={TillersRenderItem}
          keyExtractor={item => item.id}
          horizontal={true}
          header
          headingText="Tillers"
          contentContainerStyle={styles.customFlatListStyle}
        />
        <CustomFlatList
          data={NewArrivalsData}
          renderItem={BrushCuttersRenderItem}
          keyExtractor={item => item.id}
          horizontal={true}
          header
          headingText="Brush Cutters"
          contentContainerStyle={styles.customFlatListStyle}
        />
        <CustomFlatList
          data={BestSellingProducts}
          renderItem={WaterPumpsRenderItem}
          keyExtractor={item => item.id}
          horizontal={true}
          header
          headingText="Water pumps"
          contentContainerStyle={styles.customFlatListStyle}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Honda_Category;
