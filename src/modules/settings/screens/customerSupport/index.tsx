import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  ImageSourcePropType,
  Linking
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styles from './styles';
import { RootStackParamList } from '../../../../utils/types';
import { Images } from '../../../../assets';
import CustomHeader from '../../../../components/customHeader';

const roles = [
  {id: '1', title: 'Call Us', value: '1800 11 2323', image: Images.customerCallIcon},
  {
    id: '2',
    title: 'Email Us',
    value: 'ho.service@hspp.com',
    image: Images.coloredEmailBox,
  },
  {id: '3', title: 'Email Us', value: 'ho.mktg@hspp.com', image: Images.coloredEmailBox},
];
interface CustomerSupportProps {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}
interface Item {
  id: string | number; // Allow both string and number
  data?: []; // Make data optional
  title: string;
  value: string;
  image: ImageSourcePropType;
}

const CustomerSupport = ({navigation}: CustomerSupportProps) => {
  // const renderItem = ({item}: {item: Item}) => (
  //   <TouchableOpacity
  //     style={styles.itemContainer}
  //     activeOpacity={0.5}
  //     onPress={() => {}}>
  //     <View style={styles.imageContainer}>
  //       <Image source={item.image} style={styles.itemImage} />
  //     </View>
  //     <Text style={styles.itemTitle}>{item.title}</Text>
  //     <Text style={styles.itemValue}>{item.value}</Text>
  //   </TouchableOpacity>
  // );
  const renderItem = ({item}: {item: Item}) => (
    <TouchableOpacity
      style={styles.itemContainer}
      activeOpacity={0.5}
      onPress={() => {
        if (item.title === 'Call Us') {
          const phoneNumber = `tel:${item.value.replace(/\s/g, '')}`;
          Linking.openURL(phoneNumber).catch(err =>
            console.warn('Failed to open dialer:', err),
          );
        } else if (item.title === 'Email Us') {
          const email = `mailto:${item.value}`;
          Linking.openURL(email).catch(err =>
            console.warn('Failed to open email client:', err),
          );
        }
      }}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.itemImage} />
      </View>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemValue}>{item.value}</Text>
    </TouchableOpacity>
  );
  
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomHeader
        headerStyle={styles.header}
        leftIcon={Images.backarrow}
        textHeading="Customer Support"
        leftButtonStyle={styles.backButton}
        onleftPress={navigation.goBack}
        leftIconStyle={styles.backButton}
      />
      <ScrollView style={styles.subContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.mainImgContainer}>
          <Image source={Images.customerSupport} style={styles.mainImg} />
        </View>
        <View style={styles.supportTextContainer}>
          <Text style={styles.supportText}>
            {
              'We are always here to help! Reach out to us, and we’ll make sure you get the support you need.'
            }
          </Text>
        </View>
        <View>
          <FlatList 
            removeClippedSubviews={false}
            data={roles}
            numColumns={2}
            scrollEnabled={false}
            renderItem={renderItem}
            keyExtractor={item => String(item.id)}
            contentContainerStyle={styles.flatListContainer}
            columnWrapperStyle={styles.listColumnWrapper}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CustomerSupport;


