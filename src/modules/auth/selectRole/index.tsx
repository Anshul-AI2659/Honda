import {
  FlatList,
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackNavigationProp} from '@react-navigation/stack';

// Custom Components
import CustomHeader from '../../../components/customHeader';
import ContentHeader from '../../../components/customContentHeader';
import CustomStatusBar from '../../../components/statusBar';

// Utils
import {string} from '../../../utils/strings';
import {StackParamList} from '../../../utils/types';
import {ScreenNames} from '../../../utils/screenNames';

// Assets
import {roles} from '../../../assets/data';

// Styles
import styles from './styles';

interface SelectRoleProps {
  navigation: StackNavigationProp<StackParamList>;
}

interface Item {
  id: string;
  title: string;
  image: ImageSourcePropType;
}

// Main Component
const SelectRole = ({navigation}: SelectRoleProps) => {
  const renderItem = ({item}: {item: Item}) => (
    <TouchableOpacity
      style={styles.itemContainer}
      activeOpacity={0.5}
      onPress={() => {
        if (item.title === 'Dealer') {
          navigation.navigate(ScreenNames.Login);
        }
      }}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.itemImage} />
      </View>
      <Text style={styles.itemTitle}>{item.title}</Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomStatusBar />
      <CustomHeader />
      <View style={styles.subContainer}>
        <ContentHeader
          headerText={string.selectRoleTitle}
          detailText={string.selectRoleSubTitle}
        />
      </View>
      <FlatList
        data={roles}
        numColumns={2}
        scrollEnabled={false}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatListContainer}
      />
    </SafeAreaView>
  );
};

export default SelectRole;
