/* eslint-disable react/no-unstable-nested-components */
import {
  Alert,
  Image,
  ImageSourcePropType,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RNFetchBlob from 'react-native-blob-util';
import FileViewer from 'react-native-file-viewer';
import RNFS from 'react-native-fs';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomHeader from '../../components/customHeader';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../utils/types';

import styles from './styles';
import {engineData, productCatelog} from '../../staticData';
import {Images} from '../../assets';
import CustomFlatList from '../../components/CustomFlatList';
import CustomStatusBar from '../../components/statusBar';
import {ScreenNames} from '../../utils/screenNames';
import {
  downloadFilePlatform,
  extractYouTubeVideoId,
  requestPdfStoragePermission,
} from '../../utils/commonFunctions';
import CustomLogout from '../../components/CustomLogout';
import colors from '../../utils/colors';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {dispatch} from '../../navigations/navigationServices';
import {getPromotionProduct, getseemorePromotionProduct} from '../../Redux/Actions/promotionAction';

interface enginesProps {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}
interface Item {
  id: number;
  title: string;
  image: ImageSourcePropType;
  number: string;
  price: string;
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

const PromotionSeeMore = ({navigation, route}: enginesProps) => {
  const {screenName} = route?.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [downloadedFilePath, setDownloadedFilePath] = useState<string | null>(
    null,
  );
  const [media, setMedia] = useState<string>('');
  const [noAppModalVisible, setNoAppModalVisible] = useState(false);
  const {promotionSeeMoreData} = useAppSelector(state => state.promotionReducer) as {
    promotionSeeMoreData: PromotionCategory[];
  };
  const dispatch = useAppDispatch();
  const {uType, token} = useAppSelector(state => state.authReducer);

  useEffect(() => {
    PromotionList();
    console.log('PromotionSeeMoreData', promotionSeeMoreData);
  }, []);

  useEffect(() => {
    console.log('Received screenName:', screenName);
  }, [screenName]);

  const openPdf = async () => {
    setModalVisible(false);
    if (!downloadedFilePath) {
      Alert.alert('File Missing', 'No file found to open.');
      return;
    }
    try {
      await FileViewer.open(downloadedFilePath, {
        showOpenWithDialog: true,
        mimeType: 'application/pdf',
      });
    } catch (err) {
      console.log('Error opening file:', err);
      setNoAppModalVisible(true);
    }
  };

  const PromotionList = () => {
    const params = {
      data: {
        userType: uType,
        accessToken: token,
        promotionCategory:screenName,
        page:1,
        limit:10
      },
    };
    dispatch(getseemorePromotionProduct(params));
  };

  const GeneratorsRenderItem = React.memo(({item}: {item: Item}) => {
    const handlePress = async () => {
      if (item?.promotionType === 'Pdf') {
        setModalVisible(true);
        setMedia(item.media);
        
      } else {
        const videoId = extractYouTubeVideoId(item.media);
        if (videoId) {
          navigation.navigate(ScreenNames.YoutubeVideoScreen, {videoId});
        }
      }
    };

   
    return (
      <TouchableOpacity
        style={styles.textHeaderItemContainer}
        activeOpacity={0.5}
        onPress={handlePress}>
        <View style={styles.textHeaderImageContainer}>
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
                ?  styles.textHeaderItemImage:styles.videoItem
                
            }
          />
        </View>
        <View style={styles.seeMoreRight}>
          {/* <Text style={styles.textHeaderItemNumber}>{item.number}</Text> */}
          <Text style={styles.textHeaderItemTitle}>{item.title}</Text>
          {/* <Text style={styles.textHeaderItemPrice}>{item.price}</Text> */}
        </View>
      </TouchableOpacity>
    );
  });

  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomStatusBar />
      <CustomHeader
        headerStyle={styles.header}
        leftIcon={Images.backarrow}
        textHeading={screenName ?? 'Product Catalogs'}
        leftButtonStyle={styles.backButton}
        onleftPress={navigation.goBack}
        leftIconStyle={styles.backButton}
      />
      <CustomFlatList
        data={promotionSeeMoreData}
        renderItem={({item}) => <GeneratorsRenderItem item={item} />}
        keyExtractor={item => item.id}
        horizontal={false}
        numColumns={2}
        contentContainerStyle={styles.customFlatListStyle}
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
    </SafeAreaView>
  );
};

export default PromotionSeeMore;
