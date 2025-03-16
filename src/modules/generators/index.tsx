/* eslint-disable react/no-unstable-nested-components */
import {
  Image,
  ImageSourcePropType,
  ScrollView,
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
import {NewArrivals} from '../../assets/data';
import {ROBOTO_BOLD, ROBOTO_MEDIUM, ROBOTO_REGULAR, ROBOTO_SEMIBOLD} from '../../utils/Fonts';

interface generatorsProps {
  navigation: StackNavigationProp<StackParamList>;
}
interface Item {
  id: string;
  title: string;
  image: ImageSourcePropType;
  number: string;
  price: string;
}

const Generators = ({navigation}: generatorsProps) => {
  const [searchText, setSearchText] = useState('');
  const [selected, setSelected] = useState(0);

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
        textHeading="Generators"
        leftButtonStyle={styles.backButton}
        onleftPress={navigation.goBack}
      />
      <CustomFlatList
        data={NewArrivals}
        renderItem={GeneratorsRenderItem}
        keyExtractor={item => item.id}
        horizontal={false}
        numColumn={2}
        contentContainerStyle={styles.customFlatListStyle}
        listHeaderComponent={
            <>
          <CustomSearchBar
            placeholder="Search"
            searchContainerStyle={styles.searchContainer}
            value={searchText}
            onChangeText={text => setSearchText(text)}
            onSearchPress={handleSearchPress}
          />
          <ScrollView style={styles.choiceContainer} horizontal showsHorizontalScrollIndicator={false}>
                <TouchableOpacity
                  style={[
                    styles.Button,
                    selected === 1 ? styles.selectedButton : null,
                  ]}
                  onPress={() => setSelected(1)}>
                  <Text
                    style={[
                      styles.buttonText,
                      selected === 1 ? styles.selectedButtonText : null,
                    ]}>
                    {'All'}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.Button,
                    selected === 2 ? styles.selectedButton : null,
                  ]}
                  onPress={() => setSelected(2)}>
                  <Text
                    style={[
                      styles.buttonText,
                      selected === 2 ? styles.selectedButtonText : null,
                    ]}>
                    {'Inverter'}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.Button,
                    selected === 3 ? styles.selectedButton : null,
                  ]}
                  onPress={() => setSelected(3)}>
                  <Text
                    style={[
                      styles.buttonText,
                      selected === 3 ? styles.selectedButtonText : null,
                    ]}>
                    {'Silent Series'}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.Button,
                    selected === 4 ? styles.selectedButton : null,
                  ]}
                  onPress={() => setSelected(4)}>
                  <Text
                    style={[
                      styles.buttonText,
                      selected === 4 ? styles.selectedButtonText : null,
                    ]}>
                    {'Handy Series'}
                  </Text>
                </TouchableOpacity>
              </ScrollView>
              </>
        }
      />
    </SafeAreaView>
  );
};

export default Generators;

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
  searchContainer:{
    marginHorizontal:vw(8),
  },
  choiceContainer: {
    width: '100%',
    marginTop: vh(16),
    marginBottom:vh(4),
    paddingHorizontal:vw(4),
    flexDirection: 'row',
  },
  Button: {
    paddingVertical: vh(10),
    paddingHorizontal:vw(16),
    marginHorizontal:vw(4),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.tutorialInactiveDot,
    borderRadius: 16,
    backgroundColor: '#fff',
  },
  selectedButton: {
    paddingVertical: vh(8),
    borderWidth: 1,
    borderColor: Colors.primary,
    backgroundColor: 'rgba(228, 29, 45, 0.1)',
    borderRadius: 16,
  },
  buttonText: {
    fontSize: normalize(14),
    fontFamily:ROBOTO_MEDIUM,
    color: Colors.description,
    fontWeight:'500',
  },
  selectedButtonText: {
    fontSize: normalize(14),
    fontFamily:ROBOTO_MEDIUM,
    fontWeight:'500',
    color: Colors.primary,
  },
  customFlatListStyle: {
    paddingHorizontal: vw(8),
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
});
