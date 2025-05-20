<<<<<<< HEAD
/* eslint-disable react/no-unstable-nested-components */
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { FlatList, Image, ListRenderItemInfo, Modal, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// Assets
import { Images } from '../../../assets';
// Custom Components
import CustomCard from '../../../components/CustomCard';
import CustomHeader from '../../../components/customHeader';
import CustomLogout from '../../../components/CustomLogout';
import CustomSocialAccount from '../../../components/CustomSocialAccount';
import CustomStatusBar from '../../../components/statusBar';
//Utils
import colors from '../../../utils/colors';
import { ScreenNames } from '../../../utils/screenNames';
import styles from './styles';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getProfileData, logoutAction } from '../../../Redux/Actions/authAction';
import { changeBaseURL, clearAuthToken, setUtype } from '../../../services/ApiServices';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomSnackBar from '../../../components/customSnackBar';

interface MoreScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

type RootStackParamList = {
  MyProfile: undefined;
  ProfileScreen: {};
  Notification: undefined;
  Role: undefined;
  DownLoadContentScreen: undefined;
}

type DataItem = {
  id: number,
  title: string,
}

const moreOptionData: DataItem[] = [
  { id: 1, title: 'Retailers' },
  { id: 2, title: 'Locate Dealer', },
  { id: 3, title: 'Price List', },
  { id: 4, title: 'Dealer Slab' },
  { id: 5, title: 'Download Content' },
  { id: 6, title: 'Settings' },
  { id: 8, title: 'Your Products' },
  { id: 9, title: 'Favourites' },
  { id: 7, title: 'Logout' },
]


const More = ({ navigation,route }:MoreScreenProps) => {
  const dispatch = useAppDispatch();
  const {token,uType,customerProfileData,profileData} = useAppSelector(state => state.authReducer);
  const {roleName} = route?.params ?? 'Dealer'
  const insets = useSafeAreaInsets();
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [expandedItems, setExpandedItems] = useState<number | null>(null);



  console.log('roleName and cusromerdata',roleName,customerProfileData,profileData);
  
  const onRightPress = () => {
    navigation.navigate(ScreenNames.Notification)
  }
  const onleftPress = () => {
    // navigation.navigate(ScreenNames.ProfileScreen,{roleName:roleName,data:customerProfileData})
    navigation.navigate(ScreenNames.ProfileScreen,{roleName:roleName,data:profileData})
  }

  const onViewProfile = () => {
   // navigation.navigate(ScreenNames.ProfileScreen,{roleName:roleName,data:customerProfileData})
    navigation.navigate(ScreenNames.ProfileScreen,{roleName:roleName,data:profileData})
  }

  const renderItem = ({ item }: ListRenderItemInfo<DataItem>) => {
    const isExpanded = expandedItems === item.id;

    const screenMap: { [key: string]: string } = {
      "Retailers": ScreenNames.RetailerScreen,
      "Locate Dealer": ScreenNames.DealerSearch,
      "Price List": ScreenNames.commonDownloadScreen,
      "Dealer Slab": ScreenNames.commonDownloadScreen,
      "Download Content": ScreenNames.DownLoadContentScreen,
      "Your Products": ScreenNames.yourProductsScreen,
      "Logout": "Logout", // Optional, just for consistency
      "Favourites": ""
    };

    const handleNavigation = () => {
      if (item.title === "Logout") {
        setDeleteModalVisible(true);
        console.log("Logging out...");
        return;
      }
    
      if (item.title === "Settings") {
        navigation.navigate(ScreenNames.Settings, { roleName, customerProfileData });
        return;
      }

      if (item.title === 'Price List'){
          navigation.navigate(ScreenNames.commonDownloadScreen,{screenName:item?.title}); 
          return
      }
      if (item.title === 'Dealer Slab'){
        navigation.navigate(ScreenNames.commonDownloadScreen,{screenName:item?.title}); 
        return
      }
      if (item.title === 'Your Products'){
        navigation.navigate(ScreenNames.yourProductsScreen); 
        return
      }
      if (item.title === 'Favourites'){
        CustomSnackBar.show('Coming Soon!', 'success', 600);
        return
      }

      const targetScreen = screenMap[item.title];
      if (targetScreen) {
        console.log('target screen',targetScreen);
        
        navigation.navigate(targetScreen);
      }
    };

    return (
      <CustomCard
        description=""
        title={item.title}
        isExpanded={isExpanded}
        showAccordion={true}
        cardStyle={styles.firstContainer}
        unexpandImage={Images.rightArrow}
        iconColor={colors.primary}
        iconSize={20}
        onAccordionPress={handleNavigation} // Call the correct function
        titleStyle={styles.text}
      />
    );
  };


  const confirmLogout = async () => {
    setDeleteModalVisible(false);
    await AsyncStorage.removeItem('accessToken');
    await AsyncStorage.removeItem('isLoggedIn');
    //  setAuthorizationToken('')
    dispatch(logoutAction({}))
    clearAuthToken()
    changeBaseURL('https://hippdev-api.appskeeper.in')
   // changeBaseURL('https://hippdev-api.appskeeper.in/product-service')---microservices url
    setUtype('1')
    CustomSnackBar.show(
      'You have been logged out successfully',
      'success',
      500,
    );
        navigation.reset({
          index: 0,
          routes: [{ name: ScreenNames.Role }],
        });
  };


  const getFilteredOptions = () => {
    switch (uType) {
      case 1:
        return moreOptionData.filter(item =>
          ['Locate Dealer','Your Products','Favourites', 'Download Content', 'Settings', 'Logout'].includes(item.title)
        );
      case 2:
        return moreOptionData.filter(item =>
          ['Retailers','Locate Dealer', 'Download Content', 'Settings', 'Logout','Dealer Slab','Price List'].includes(item.title)
        );
      case 3:
        return moreOptionData.filter(item =>
          ['Locate Dealer', 'Download Content', 'Settings', 'Logout'].includes(item.title)
        );
      case 4:
        return moreOptionData.filter(item =>
          ['Locate Dealer', 'Price List', 'Dealer Slab', 'Download Content', 'Settings', 'Logout'].includes(item.title)
        );
      default:
        return moreOptionData;
    }
  };
  
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <CustomStatusBar />
      <CustomHeader
        headerStyle={styles.header}
        leftIcon={Images.hondaHqImage}
        leftButtonStyle={styles.leftButtonStyle}
        leftIconStyle={styles.leftIconStyle}
        rightIcon={Images.bellIcon}
        rightButtonStyle={styles.rightButtonStyle}
        rightIconStyle={styles.leftIconStyle}
        onRightPress={onRightPress}
        onleftPress={onleftPress}
      />

      <View style={styles.cardContainer}>
        <Image
          source={Images.hondaHqBig}
          style={styles.imageHii}
          resizeMode="contain"
        />
        <View style={styles.hiValueContainer}>
          {/* <Text style={styles.title1}>{(userProfileData && userProfileData?.name?.length) ? userProfileData?.name : customerProfileData?.name  }</Text> */}
          <Text style={styles.title1}>{profileData ? profileData?.name : customerProfileData?.name}</Text>
          <View style={styles.phoneContainer}>
            <Image
              source={Images.phoneicon}
              style={styles.phone}
              resizeMode="contain"
            />
            <Text style={styles.description1}>+91 {profileData?.mobileNumber ?? customerProfileData?.mobileNumber}</Text>
            {/* <Text style={styles.description1}>+91 {profileData ? profileData?.mobileNumber : customerProfileData?.mobileNumber}</Text> */}
          </View>
          <TouchableOpacity onPress={onViewProfile} style={styles.viewContainer}>
            <Text style={styles.viewText}>View Profile</Text>
            <Image
              source={Images.rightArrow}
              style={styles.arrow}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          removeClippedSubviews={false}
          data={getFilteredOptions()}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() => <CustomSocialAccount />}
        />
      </View>
      <Modal transparent visible={isDeleteModalVisible} animationType="slide">
        <CustomLogout
          title="Logout"
          description="Are you sure you want to logout from the platform ?"
          buttonText2="CANCEL"
          buttonText1="LOGOUT"
          onButtonPress2={() => setDeleteModalVisible(false)}
          onButtonPress1={confirmLogout}
          styleButtonContainer1={[styles.buttonContainer, { backgroundColor: colors.primary }]}
          textStyle1={{ color: colors.white }}
          styleButtonContainer2={styles.buttonContainer}
        />
      </Modal>

    </View>
  );
}

export default More
=======
import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {normalize, vh, vw} from '../../../utils/dimension';
import {size} from '../../../utils/size';
import {Colors} from '../../../utils/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ScreenNames} from '../../../utils/screenNames';
import {RootStackParamList} from '../../../utils/types';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import { ROBOTO_SEMIBOLD} from '../../../utils/Fonts';

interface MoreProps {
  navigation: BottomTabNavigationProp<RootStackParamList>;
}
const More = ({navigation}: MoreProps) => {
  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: async () => {
            try {
              await AsyncStorage.removeItem('userToken');
              navigation.reset({
                index: 0,
                routes: [{name: ScreenNames.RoleSelect}],
              });
            } catch (error) {
              console.error('Error removing token', error);
            }
          },
          style: 'destructive',
        },
      ],
      {cancelable: true},
    );
  };

  const handleViewProfile = ()=>{
    navigation.navigate(ScreenNames.Profile);
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Text style={styles.bodyText}> In Progress......</Text>
      </View>
      <TouchableOpacity
        style={styles.logoutButton}
        activeOpacity={0.7}
        onPress={handleViewProfile}>
        <Text style={styles.viewProfileText}>{'View Profile'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.logoutButton}
        activeOpacity={0.7}
        onPress={handleLogout}>
        <Text style={styles.logoutText}>{'Log out'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default More;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: '14%',
    alignItems: 'flex-end',
    paddingHorizontal: vw(15),
    paddingBottom: vh(20),
    backgroundColor: Colors.primary,
  },
  headerText: {
    fontSize: size.headerTitle,
    fontWeight: '600',
    color: Colors.White,
  },
  settingsImg: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
  },
  subContainer: {
    width: '100%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyText: {
    fontSize: 24,
  },
  logoutButton: {
    paddingVertical: vh(10),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '400',
    color: 'red',
  },
  viewProfileText: {
    fontFamily:ROBOTO_SEMIBOLD,
    color:Colors.blackText,
    fontSize:normalize(16),
  },
});
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
