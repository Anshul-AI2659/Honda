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
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../../components/customHeader';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../utils/types';

import styles from './styles';
import { batteryOpDownloadData, engineData, GenratorDownloadData, productCatelog, tillersDownloadData } from '../../staticData';
import { Images } from '../../assets';
import CustomFlatList from '../../components/CustomFlatList';
import CustomStatusBar from '../../components/statusBar';
import { ScreenNames } from '../../utils/screenNames';
import { downloadAndOpenPDF, extractYouTubeVideoId, requestPdfStoragePermission } from '../../utils/commonFunctions';
import CustomLogout from '../../components/CustomLogout';
import colors from '../../utils/colors';
import { getSlabList } from '../../Redux/Actions/authAction';
import { useAppDispatch, useAppSelector } from '../../hooks';

interface enginesProps {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}
interface Item {
  _id: string;
  title: string;
  media: string;
  type: number;
  status: string;
}

const PromotionSeeMore = ({ navigation, route }: enginesProps) => {
  const { screenName } = route?.params
  const { uType, token } = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [noAppModalVisible, setNoAppModalVisible] = useState(false);
  const [downloadedFilePath, setDownloadedFilePath] = useState<string | null>(null);
  const [slabList, setSlabListdata] = useState([]);

  useEffect(() => {
    console.log('Received screenName:', screenName);
  }, [screenName]);

  // useEffect(() => {
  //   console.log('Received screenName:', screenName);
  //   switch (screenName) {
  //     case 'Battery operated':
  //       setListData(batteryOpDownloadData);
  //       break;
  //     case 'Generators':
  //       setListData(GenratorDownloadData);
  //       break;
  //     case 'Tillers':
  //       setListData(tillersDownloadData);
  //       break;
  //     case 'Brush Cutters':
  //       setListData(batteryOpDownloadData);
  //       break;
  //     case 'Water Pumps':
  //       setListData(tillersDownloadData);
  //       break;
  //     case 'Lawn Mowers':
  //       setListData(GenratorDownloadData);
  //       break;
  //     case 'Outboard Motors':
  //       setListData(GenratorDownloadData);
  //       break;
  //     case 'Outboard Motors':
  //       setListData(tillersDownloadData);
  //       break;
  //     case 'Agriculture Machinery':
  //       setListData(tillersDownloadData);
  //       break;
  //     case 'Light Construction':
  //       setListData(tillersDownloadData);
  //       break;
  //     case 'Other Category':
  //       setListData(tillersDownloadData);
  //       break;
  //     // You can add more cases here
  //     default:
  //       setListData(tillersDownloadData);
  //       break;
  //   }
  // }, [screenName]);
  useEffect(() => {
    console.log('Received screenName:', screenName);
    setSlabListdata(slabList);
  }, [screenName, slabList]);

  useEffect(() => {
    fetchSlabList()
  }, []);

  console.log('slab data at', slabList);
  
  const fetchSlabList = () => {
    const params = {
      data: {
        userType: uType,
        accessToken: token,
      },
      callback: (response) => {
        setSlabListdata(response?.data);
      },
    };
    dispatch(getSlabList(params));
  };


  //--------------open pdf login------------------------------------//
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
      // Alert.alert('No App Found', 'Please install a PDF viewer to open this file.');
    }

  };

  const downloadAndOpenPDF = async (pdfUrl: string, fileName: string) => {
    try {
      // Ensure storage permission is granted
      const hasPermission = await requestPdfStoragePermission();
      if (!hasPermission) {
        Alert.alert('Permission Denied', 'Storage permission is required to download files.');
        return;
      }

      const filePath = `${RNFS.DocumentDirectoryPath}/${fileName}`;

      // Download the file
      const response = await RNFetchBlob.config({
        fileCache: true,
        path: filePath,
      }).fetch('GET', pdfUrl);

      console.log('File downloaded to:', response.path());
      setDownloadedFilePath(response.path());
      setModalVisible(true)

    } catch (error) {
      console.error('Error downloading file:', error);
      Alert.alert('Error', 'Failed to download the file.');
    }
  };
  //--------------open pdf logic ends------------------------------------//
  const GeneratorsRenderItem = React.memo(({ item }: { item: Item }) => {
    const handlePress = async () => {
      if (item?.type === 1) {
        // Assume type 1 is YouTube link (adapt based on real logic)
        const videoId = extractYouTubeVideoId(item.media);
        if (videoId) {
          navigation.navigate(ScreenNames.YoutubeVideoScreen, { videoId });
        }
      } else if (item?.type === 2) {
        // Type 2 = PDF
        await downloadAndOpenPDF(item.media, `${item.title}.pdf`);
      }
    };
  
    return (
      <TouchableOpacity
        style={styles.textHeaderItemContainer}
        activeOpacity={0.5}
        onPress={handlePress}>
        <View style={styles.textHeaderImageContainer}>
          <Image
            source={Images.download} // Or use a default icon
            style={styles.download}
          />
        </View>
        <View style={styles.seeMoreRight}>
          <Text style={styles.textHeaderItemTitle}>{item.title}</Text>
          <Text style={styles.textHeaderItemPrice}>{item.status}</Text>
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
        textHeading={screenName ?? 'Battery operated'}
        leftButtonStyle={styles.backButton}
        onleftPress={navigation.goBack}
        leftIconStyle={styles.backButton}
      />
      <CustomFlatList
        data={slabList}
        renderItem={({ item }) => <GeneratorsRenderItem item={item} />}
        keyExtractor={item => item._id}
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
          onButtonPress1={openPdf}
          styleButtonContainer2={[styles.buttonContainer, { backgroundColor: colors.primary }]}
          textStyle2={{ color: colors.white }}
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
          styleButtonContainer2={[styles.buttonContainer, { backgroundColor: colors.primary }]}
          textStyle2={{ color: colors.white }}
          styleButtonContainer1={styles.buttonContainer}
        />
      </Modal>
    </SafeAreaView>
  );
};

export default PromotionSeeMore;
