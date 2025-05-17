/* eslint-disable react/no-unstable-nested-components */
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  Platform,
  PermissionsAndroid,
  ToastAndroid,
  Linking,
} from 'react-native';

import React, {useEffect, useMemo, useState} from 'react';
import {
  Alert,
  Image,
  ImageSourcePropType,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RNFetchBlob from 'react-native-blob-util';
import * as Progress from 'react-native-progress';

import FileViewer from 'react-native-file-viewer';
import RNFS from 'react-native-fs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
//Assets
import {Images} from '../../../assets';
// Custom Components
import Carousel from '../../../components/Carousel';
import CustomFlatList from '../../../components/CustomFlatList';
import CustomHeader from '../../../components/customHeader';
import CustomStatusBar from '../../../components/statusBar';

// Utils
import {
  downloadFilePlatform,
  extractYouTubeVideoId,
  requestPdfStoragePermission,
  slides,
} from '../../../utils/commonFunctions';
import {ScreenNames} from '../../../utils/screenNames';
import {RootStackParamList} from '../../../utils/types';
// Styles
import {Honda, productCatelog} from '../../../staticData';
import styles from './styles';
import {vh} from '../../../styles';
import CustomLogout from '../../../components/CustomLogout';
import colors from '../../../utils/colors';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {getBannerList} from '../../../Redux/Actions/homeAction';
import {ProgressBar} from 'react-native-paper';
import {getPromotionProduct} from '../../../Redux/Actions/promotionAction';
import HondaMarine from '../../hondaMarine';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.Home
>;

interface Item {
  id: string;
  title: string;
  image: ImageSourcePropType;
  number: string;
  price: string;
}

interface BannerItem {
  userType: string[];
  screen: number[];
}

interface PromotionItem {
  _id: string;
  title: string;
  media: string;
  promotionType: 'Pdf' | 'Youtube';
  link?: string;
  userType: string[];
  status: string;
  createdAt: string;
  updatedAt: string;
}
interface PromotionItem {
  _id: string;
  title: string;
  media: string;
  promotionType: 'Pdf' | 'Youtube';
  link?: string;
  userType: string[];
  status: string;
  createdAt: string;
  updatedAt: string;
}

interface PromotionCategory {
  category: string;
  promotionCategory: string;
  promotions: PromotionItem[];
}

const Promotion: React.FC = () => {
  const insets = useSafeAreaInsets();
  const [modalVisible, setModalVisible] = useState(false);
  const [media, setMedia] = useState<string>('');
  const dispatch = useAppDispatch();
  const [bannerListData, setBannerListData] = useState<BannerItem[]>([]);
  const [noAppModalVisible, setNoAppModalVisible] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);

  const {promotionData} = useAppSelector(state => state.promotionReducer) as {
    promotionData: PromotionCategory[];
  };

  const {uType, token} = useAppSelector(state => state.authReducer);

  useEffect(() => {
    fetchBannerData();
    PromotionList();
    console.log('PromotionData Check', promotionData);
    // const timer = setTimeout(() => setIsLoading(false), 500);
    // return () => clearTimeout(timer);
  }, []);

  const fetchBannerData = () => {
    const params = {
      data: {
        userType: uType,
        accessToken: token,
      },
      callback: response => {
        console.log('banner', response?.data);
        setBannerListData(response?.data);
      },
    };
    dispatch(getBannerList(params));
  };

  const PromotionList = () => {
    const params = {
      data: {
        userType: uType,
        accessToken: token,
      },
    };
    dispatch(getPromotionProduct(params));
  };

  const filteredData = useMemo(() => {
    if (!bannerListData) return [];

    return bannerListData.filter(
      item =>
        Array.isArray(item.userType) &&
        item.userType.includes(uType) &&
        Array.isArray(item.screen) &&
        item.screen.includes(2),
    );
  }, [bannerListData, uType]);

  const datatoShow = filteredData;

  // Navigating back on Back Press
  const onRightPress = () => {
    navigation.navigate(ScreenNames.Notification);
  };
  const onLeftPress = () => {
    navigation.navigate(ScreenNames.ProfileScreen);
  };
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const ImageHeaderRenderItem = React.memo(({item}: {item: PromotionItem}) => {
    const handlePress = async () => {
      if (item?.promotionType === 'Pdf') {
        setModalVisible(true);
        setMedia(item.media);
        // downloadFilePlatform(item.media, 'sample.pdf');
        // Handle YouTube link\
      } else {
        const videoId = extractYouTubeVideoId(item.media);
        if (videoId) {
          navigation.navigate(ScreenNames.YoutubeVideoScreen, {videoId});
        }
      }
    };

    return (
      <TouchableOpacity
        style={styles.itemContainer}
        activeOpacity={0.5}
        onPress={handlePress}>
        <View style={styles.imageContainer}>
          {item?.promotionType === 'Pdf' && (
            <Image source={Images.download} style={styles.download} />
          )}
          <Image
            source={
              item?.promotionType === 'Pdf'
                ? Images.dummyFile
                : Images.dummyYouTube
            }
            style={
              item?.promotionType === 'Pdf'
                ? styles.itemImage
                : styles.downloadContentImage
            }
          />
        </View>
        <View
          style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
          <Text style={styles.itemTitle}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  });

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <CustomStatusBar />
      <CustomHeader
        headerStyle={styles.header}
        leftIcon={Images.hondaHqImage}
        leftButtonStyle={styles.leftButtonStyle}
        onleftPress={onLeftPress}
        leftIconStyle={styles.leftIconStyle}
        rightIcon={Images.bellIcon}
        rightButtonStyle={styles.rightButtonStyle}
        rightIconStyle={styles.leftIconStyle}
        onRightPress={onRightPress}
      />
      {/*-------Carousel------*/}
      {/* <Carousel headerStyle={{marginTop:vh(5)}} flatData={slides}/> */}

      {Platform.OS === 'android' &&
        downloadProgress > 0 &&
        downloadProgress < 1 && (
          <Progress.Bar
            progress={downloadProgress}
            width={null}
            color={colors.primary}
          />
        )}

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <Carousel
            headerStyle={{marginTop: vh(0), marginBottom: vh(24)}}
            flatData={datatoShow}
          />
           <CustomFlatList
            data={promotionData[0].promotions}
            renderItem={({item}) => <ImageHeaderRenderItem item={item} />}
            keyExtractor={item => item.id}
            horizontal={true}
            header
            headingText={
              promotionData[0].promotions.length > 0
                ? promotionData[0].category
                : undefined
            }
            onSeeMorePress={() => {
              navigation.navigate(ScreenNames.promotionSeeMore, {
                screenName: 'Product Catalogs',
              });
            }}
            contentContainerStyle={
              promotionData[0].promotions.length > 0
                ? styles.customFlatListStyle
                : null
            }
          /> 

           <CustomFlatList
            data={promotionData[1].promotions}
            renderItem={({item}) => <ImageHeaderRenderItem item={item} />}
            keyExtractor={item => item.id}
            horizontal={true}
            header
            headingText={
              promotionData[1].promotions.length > 0
                ? promotionData[1].category
                : undefined
            }
            // headerImg={Images.honda}
            onSeeMorePress={() => {
              navigation.navigate(ScreenNames.promotionSeeMore, {
                screenName: 'News',
              });
            }}
            contentContainerStyle={
              promotionData[0].promotions.length > 0
                ? styles.customFlatListStyle
                : null
            }
          />

          <CustomFlatList
            data={promotionData[2].promotions}
            renderItem={({item}) => <ImageHeaderRenderItem item={item} />}
            keyExtractor={item => item.id}
            horizontal={true}
            header
            headingText={
              promotionData[2].promotions.length > 0
                ? promotionData[2].category
                : undefined
            }
            // headerImg={Images.honda}
            onSeeMorePress={() => {
              navigation.navigate(ScreenNames.promotionSeeMore, {
                screenName: 'Warranty',
              });
            }}
            contentContainerStyle={
              promotionData[0].promotions.length > 0
                ? styles.customFlatListStyle
                : null
            }
          />

          <Modal transparent visible={modalVisible} animationType="slide">
            <CustomLogout
              title="Download Complete"
              description="File Saved Successfully!"
              buttonText2="OK"
              buttonText1="OPEN"
              onButtonPress2={() => setModalVisible(false)}
              onButtonPress1={() => {
                setModalVisible(false);
                downloadFilePlatform(media, 'sample.pdf');
              }}
              styleButtonContainer2={[
                styles.buttonContainer,
                {backgroundColor: colors.primary},
              ]}
              textStyle2={{color: colors.white}}
              styleButtonContainer1={styles.buttonContainer}
            />
          </Modal>
          <Modal transparent visible={noAppModalVisible} animationType="slide">
            <CustomLogout
              title="No App Found"
              description="Please install a PDF viewer to open this file."
              buttonText2="Cancel"
              buttonText1="OK"
              onButtonPress1={() => setNoAppModalVisible(false)}
              onButtonPress2={() => setNoAppModalVisible(false)}
              styleButtonContainer2={[
                styles.buttonContainer,
                {backgroundColor: colors.primary},
              ]}
              textStyle2={{color: colors.white}}
              styleButtonContainer1={styles.buttonContainer}
            />
          </Modal>
        </View>
      </ScrollView>
    </View>
  );
};

export default Promotion;
