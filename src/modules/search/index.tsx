import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomStatusBar from '../../components/statusBar';
import CustomHeader from '../../components/customHeader';
import styles from './styles';
import {Images} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CustomSearch from '../../components/CustomSearchBar';
import CustomFlatList from '../../components/CustomFlatList';
import {NewArrivalsData} from '../../staticData';
import {ScreenNames} from '../../utils/screenNames';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../utils/types';

interface SearchProps {
    goBack: (() => void) | undefined;
    navigate(GenratorProductListing: ScreenNames): unknown;
    navigation: NativeStackNavigationProp<RootStackParamList>;
  }
  
const Search = () => {
  const navigation = useNavigation<SearchProps>();
  const insets = useSafeAreaInsets();
  const [searchTerm, setSearchTerm] = useState('');

  const [recentSearches, setRecentSearches] = useState<typeof NewArrivalsData>(
    [],
  );

  const filteredResults = NewArrivalsData.filter(
    item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.number.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleSearchSelect = selectedItem => {
    setSearchTerm(selectedItem.number);
    
    // Avoid duplicate entries based on ID
    if (!recentSearches.some(item => item.id === selectedItem.id)) {
      setRecentSearches(prev => [selectedItem, ...prev]);
    }
    // navigation.navigate(ScreenNames.GenratorProductListing);
  };

  const handleClearSearches = () => setRecentSearches([]);

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <CustomStatusBar />
      {/*-------CustomHeader------*/}
      <CustomHeader
        headerStyle={styles.header}
        leftIcon={Images.backarrow}
        textHeading="Search"
        onleftPress={navigation.goBack}
        leftIconStyle={styles.backButton}
        imageViewStyle={styles.imageView}
      />

      <CustomSearch
        placeholder="Search Products"
        value={searchTerm}
        onChangeText={setSearchTerm}
        searchContainerStyle={styles.searchContainer}
      />

      {!searchTerm && recentSearches.length > 0 && (
        <View style={styles.recentContainer}>
          <View style={styles.recentHeader}>
            <Text style={styles.recentTitle}>Recent Searches</Text>
            <TouchableOpacity onPress={handleClearSearches}>
              <Text style={styles.clearText}>Clear all</Text>
            </TouchableOpacity>
          </View>
          {recentSearches.map((item, index) => (
            <View style={styles.recentSearch}>
              <TouchableOpacity
                key={index}
                onPress={() => setSearchTerm(item.number)}
                style={styles.recentItem}>
                {/* Show image and title */}
                <View style={styles.itemImg}>
                  <Image source={item.image} style={styles.recentIcon} />
                </View>
                <View>
                  <Text style={styles.recentText}>{item.number}</Text>
                  <Text style={styles.recentSubtitle}>{item.title}</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  setRecentSearches(prev =>
                    prev.filter(search => search.id !== item.id),
                  )
                }>
                <Image source={Images.cross} style={styles.cross} />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}

      {/* Search Results */}
      {searchTerm.length > 0 && (
        <CustomFlatList
          data={filteredResults}
          keyExtractor={item => item?.id}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => handleSearchSelect(item)}
              style={styles.resultItem}>
                 <View style={styles.itemImg}>
              <Image source={item.image} style={styles.resultImage} />
              </View>
              <View>
                <Text style={styles.resultTitle}>{item.number}</Text>
                <Text style={styles.resultSubtitle}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default Search;
