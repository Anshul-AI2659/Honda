// /* eslint-disable react/no-unstable-nested-components */
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import React, { useEffect, useState } from 'react';
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
import { SafeAreaView } from 'react-native-safe-area-context';
import { Images } from '../../assets';
import CustomFlatList from '../../components/CustomFlatList';
import CustomHeader from '../../components/customHeader';
import CustomStatusBar from '../../components/statusBar';
import { HIPlus, Honda, trainingButtonData } from '../../staticData';
import { RootStackParamList } from '../../utils/types';
import styles from './styles';
import { downloadFilePlatform, extractYouTubeVideoId, requestPdfStoragePermission } from '../../utils/commonFunctions';
import { ScreenNames } from '../../utils/screenNames';
import CustomLogout from '../../components/CustomLogout';
import colors from '../../utils/colors';
import { useRoute } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getTrainingProduct } from '../../Redux/Actions/trainingAction';

interface TrainingProps {
  navigation: BottomTabNavigationProp<RootStackParamList>;
}
interface Item {
  id: number;
  title: string;
  image: ImageSourcePropType;
  number: string;
  price: string;
}
interface SimpleItem {
  id: string;
  title: string;
  image: ImageSourcePropType;
}

const EquipmentTraining = ({navigation}: TrainingProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [downloadedFilePath, setDownloadedFilePath] = useState<string | null>(null);
  const [selected, setSelected] = useState('Sales Talk');
  // const [trainingTypeData, setTrainingTypedata] = useState<any[]>([]);
  const [noAppModalVisible, setNoAppModalVisible] = useState(false);
  const [currentData, setCurrentData] = useState(Honda);
  const {uType, token} = useAppSelector(state => state.authReducer);
  const dispatch = useAppDispatch();
  const route = useRoute();
  const { screenName,productType,productCategory} = route.params || {};
  const {trainingData} = useAppSelector(state => state.trainingReducer);
   

  useEffect(() => {
    TrainingList()
  
  }, []);
  

  const filteredTrainingData = trainingData.filter(
    item => item.category === selected,
  );
  

  console.log('SELECT TYPE',selected)

  const TrainingList = () => {
    const params = {
      data: {
        userType: uType,
        accessToken: token,
        productType: productType,
        productCategory: productCategory,
        category: selected,
      },
      // callback: response => {
      //   setTrainingTypedata(response?.data);
      // },
    };
    dispatch(getTrainingProduct(params));
  };


  const GeneratorsRenderItem = React.memo(({ item }: { item: Item }) => {
  
      const handlePress = async () => {
        if (item?.type === 'link' && item?.link) {
          // Handle YouTube link\
          const videoId = extractYouTubeVideoId(item.link);
          if (videoId) {
            navigation.navigate(ScreenNames.YoutubeVideoScreen, { videoId });
          }
        } else if (item?.type === 'Pdf') {
          // Handle PDF file download
        
          downloadFilePlatform('https://pdfobject.com/pdf/sample.pdf', 'sample.pdf');
        }
      };
      return (
    <TouchableOpacity
      style={styles.textHeaderItemContainer}
      activeOpacity={0.5}
      onPress={handlePress}>
      <View style={styles.textHeaderImageContainer}>
        {/* <Image source={item.image} style={styles.textHeaderItemImage} /> */}
        {item?.type === "Pdf" && <Image source={Images.download} style={styles.download}/>}
        <Image source={item?.type === "Pdf" ? Images.dummyFile:Images.dummyYouTube} style={item?.type === "Pdf" ?  styles.textHeaderItemImage:styles.videoItem} />
      </View>
      <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
      <Text style={styles.textHeaderItemTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
      )
});


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

  const renderItem = ({item}: {item: Item}) => (
    <View>
      <TouchableOpacity
        style={[
          styles.Button,
          selected === item.title ? styles.selectedButton : null,
        ]}
        onPress={() =>  setSelected(item.title)}>
        <Text
          style={[
            styles.buttonText,
            selected === item.title ? styles.selectedButtonText : null,
          ]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    </View>
  );


  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomStatusBar />
      <CustomHeader
        headerStyle={styles.header}
        leftIcon={Images.backarrow}
        onleftPress={navigation.goBack}
        leftIconStyle={styles.profileIcon}
        textHeading={screenName?screenName:'Generators'}
      />
      <View style={styles.choiceContainer}>
        <CustomFlatList
          data={trainingButtonData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal={true}
        />
      </View>
      <CustomFlatList
        data={filteredTrainingData}
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

export default EquipmentTraining;

