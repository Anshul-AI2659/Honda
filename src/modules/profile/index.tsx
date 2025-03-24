import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
// import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import {Icons} from '../../assets';
import {SafeAreaView} from 'react-native-safe-area-context';
import {normalize, vh, vw} from '../../utils/dimension';
import {Colors} from '../../utils/colors';
import CustomButton from '../../components/customButton';
import {
  requestCameraPermission,
  requestStoragePermission,
} from '../../components/customPermissions';
import CustomHeader from '../../components/customHeader';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../utils/types';
import CustomMobileInputBox from '../../components/CustomMobileInputBox';
import {string} from '../../utils/strings';
import CustomInput from '../../components/customInput';
import {ROBOTO_MEDIUM, ROBOTO_SEMIBOLD} from '../../utils/Fonts';
import {validateEmail, validateName} from '../../utils/validations';
import CustomStatusBar from '../../components/statusBar';
import CustomDateTimePicker from '../../components/customDateTimePicker';
import {RadioButton} from 'react-native-paper';
import {days} from '../../assets/data';

interface profileProps {
  navigation: StackNavigationProp<StackParamList>;
}

const Profile = ({navigation}: profileProps) => {
  const [imageUri, setImageUri] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [callingCode] = useState('+91');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneError, setPhoneError] = useState(false);
  const [name, setName] = useState('Mahesh Honda');
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState('maheshhonda@gmail.com');
  const [emailError, setEmailError] = useState(false);
  const [city, setCity] = useState('Noida');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  //   const [checked, setChecked] = useState('');
  const [selectedDay, setSelectedDay] = useState(null);

  const handleEmailChange = (text: string) => {
    setEmail(text);
    if (text === '') {
      setEmailError(false);
    } else if (validateEmail(text)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const handleNameChange = (text: string) => {
    setName(text);
    if (text === '') {
      setNameError(false);
    } else if (validateName(text)) {
      setNameError(false);
    } else {
      setNameError(true);
    }
  };
  const handleCityChange = (text: string) => {
    setCity(text);
  };

  // Function to Open Phone's Gallery.
  const openGallery = async (): Promise<void> => {
    const storagePermission = await requestStoragePermission();

    if (storagePermission) {
      ImagePicker.openPicker({
        mediaType: 'photo',
        cropping: true,
        compressImageQuality: 1,
      })
        .then(image => {
          setModalVisible(false);
          setImageUri(image.path);
        })
        .catch(error => {
          setModalVisible(false);
          console.log('Error selecting image from gallery:', error);
        });
    }
  };

  // Function to open the camera.
  const handleTakePhoto = async (): Promise<void> => {
    const cameraPermission = await requestCameraPermission();

    if (cameraPermission) {
      ImagePicker.openCamera({
        mediaType: 'photo',
        cropping: true,
        compressImageQuality: 1,
      })
        .then(image => {
          setImageUri(image.path);
          setModalVisible(false);
        })
        .catch(error => {
          console.log('Error taking photo:', error);
          setModalVisible(false);
        });
    }
  };

  const handleRemove = () => {
    setModalVisible(false);
    setImageUri('');
  };

  const handleMoreOption = () => {
    setModalVisible(true);
  };
  const handleStartTimeChange = (text: string) => {
    setStartTime(text);
  };
  const handleEndTimeChange = (text: string) => {
    setEndTime(text);
  };

  const renderItem = ({item, index}) => {
    const isSelected = selectedDay === index;

    return (
      <TouchableOpacity
        style={[styles.dayButton, isSelected && styles.selectedDayButton]}
        onPress={() => setSelectedDay(index)}>
        <Text style={[styles.dayText, isSelected && styles.selectedDayText]}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  const isButtonDisabled = !imageUri;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomStatusBar />
      <CustomHeader
        leftIcon={Icons.back}
        textHeading="Profile"
        leftButtonStyle={styles.backButton}
        onleftPress={navigation.goBack}
        headerStyle={styles.header}
      />
      <ScrollView
        style={styles.subContainer}
        showsVerticalScrollIndicator={false}
        // contentContainerStyle={styles.subContainer}
      >
        <View style={styles.profileSection}>
          <Image
            style={styles.profileImage}
            source={imageUri ? {uri: imageUri} : Icons.profile}
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={handleMoreOption}
            activeOpacity={1}>
            <Image source={Icons.changeProfilePhoto} style={styles.addImg} />
          </TouchableOpacity>
        </View>
        <CustomInput
          value={name}
          label="Name"
          Error={nameError}
          errorText={
            'Please use only alphabetical letters and minimum length is 3 characters.'
          }
          maxLength={20}
          keyboardType={'ascii-capable'}
          onChangeText={handleNameChange}
          inputContainerStyle={styles.inputContainer}
          textInputStyle={styles.textInput}
        />
        <CustomInput
          value={email}
          label="Email Id"
          Error={emailError}
          errorText={'Please enter valid email'}
          maxLength={30}
          keyboardType={'email-address'}
          onChangeText={handleEmailChange}
          inputContainerStyle={styles.inputContainer}
          textInputStyle={styles.textInput}
        />
        <CustomMobileInputBox
          label={'Phone Number'}
          callingCode={callingCode}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          error={phoneError}
          setError={setPhoneError}
          errorText={string.Login.phoneNumberError}
        />
        <CustomInput
          value={city}
          label="City"
          maxLength={20}
          keyboardType={'ascii-capable'}
          onChangeText={handleCityChange}
          inputContainerStyle={styles.inputContainer}
          textInputStyle={styles.textInput}
        />
        <View style={styles.serviceDaysContainer}>
          <Text style={styles.serviceDaysText}>{'Service Days'}</Text>
          <View style={styles.weekOptionsContainer}>
            <View />
            <View />
          </View>
          <FlatList
            data={days}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
            contentContainerStyle={{flex: 1,marginTop:vh(16)}}
          />
        </View>
        <View style={styles.serviceHoursContainer}>
          <Text style={styles.serviceHoursText}>{'Service Hours'}</Text>
          <View style={styles.timeContainer}>
            <CustomDateTimePicker
              label={'Select From'}
              onDateChange={handleStartTimeChange}
              mode={'time'}
              containerStyle={styles.singleTimeContainer}
            />
            <CustomDateTimePicker
              label="Select To"
              onDateChange={handleEndTimeChange}
              mode={'time'}
              containerStyle={styles.singleTimeContainer}
            />
          </View>
        </View>
      </ScrollView>
      <CustomButton
        buttonText={'UPDATE'}
        onPress={() => {}}
        buttonStyle={styles.updateButton}
        isButtonDisabled={isButtonDisabled}
        disabledButtonStyle={styles.disableUpdateButton}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalMainContainer}>
          <View style={styles.modalContentContainer}>
            <TouchableOpacity style={styles.container2} onPress={openGallery}>
              <Image source={Icons.gallery} style={styles.iconImageSize} />
              <Text style={styles.name}>{'Upload From Gallery'}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.container2}
              onPress={handleTakePhoto}>
              <Image source={Icons.camera} style={styles.iconImageSize} />
              <Text style={styles.name}>{'Open Camera'}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.container2} onPress={handleRemove}>
              <Image source={Icons.delete} style={styles.iconImageSize} />
              <Text style={styles.name}>{'Remove Icon'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  header: {
    paddingVertical: vh(12),
  },
  backButton: {
    backgroundColor: Colors.headerButton,
  },
  subContainer: {
    flex: 1,
    paddingVertical: vh(20),
    paddingBottom: vh(40),
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: vh(5),
  },
  profileImage: {
    width: vw(118),
    height: vw(118),
    borderRadius: 56.57,
  },
  addButton: {
    position: 'absolute',
    top: vw(80),
    right: vw(140),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.White,
    padding: vw(8),
    borderRadius: 40,
  },
  addImg: {
    width: vw(20),
    height: vw(20),
    resizeMode: 'contain',
    tintColor: Colors.primary,
  },
  inputContainer: {
    width: vw(380),
    height: vw(56),
    borderRadius: 16,
    borderColor: Colors.tutorialInactiveDot,
    paddingVertical: vh(2),
    marginHorizontal: vw(16),
    marginTop: vh(20),
    backgroundColor: Colors.White,
  },
  textInput: {
    width: '100%',
    height: vw(54),
    fontFamily: ROBOTO_MEDIUM,
    fontSize: normalize(16),
  },

  serviceDaysContainer: {
    marginTop: vh(28),
    paddingHorizontal: vw(10),
  },
  serviceDaysText: {
    fontSize: normalize(18),
    fontFamily: ROBOTO_MEDIUM,
    marginLeft: vw(6),
  },
  dayButton: {
    width: vw(44),
    height: vw(44),
    backgroundColor: Colors.White,
    borderRadius: 61.6,
    marginHorizontal: vw(6),
    borderWidth: 0.96,
    borderColor: '#D9DFE6', // New Color
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedDayButton: {
    width: vw(44),
    height: vw(44),
    backgroundColor: Colors.Black,
    borderRadius: 61.6,
    marginHorizontal: vw(6), // New Color
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayText: {
    fontSize: normalize(13.2),
    fontFamily: ROBOTO_SEMIBOLD,
    color: Colors.tutorialDescription,
  },
  selectedDayText: {
    fontSize: normalize(13.2),
    fontFamily: ROBOTO_SEMIBOLD,
    color: Colors.White,
  },
  weekOptionsContainer: {},
  serviceHoursContainer: {
    marginTop: vh(28),
    paddingHorizontal: vw(16),
  },
  serviceHoursText: {
    fontSize: normalize(18),
    fontFamily: ROBOTO_MEDIUM,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: vh(16),
  },
  singleTimeContainer: {
    flexDirection: 'row',
    width: vw(182),
    height: vw(56),
    paddingHorizontal: vw(16),
    borderWidth: 1,
    borderRadius: 16,
    borderColor: Colors.tutorialInactiveDot,
    justifyContent: 'center',
  },
  updateButton: {
    width: vw(380),
    alignSelf: 'center',
    paddingVertical: vh(18),
    marginVertical: vh(20),
    borderRadius: 16,
  },
  disableUpdateButton: {
    width: vw(380),
    alignSelf: 'center',
    paddingVertical: vh(18),
    marginVertical: vh(20),
    borderRadius: 16,
  },
  modalMainContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(51, 51, 51, 0.3)',
  },
  modalContentContainer: {
    height: '30%',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: vw(16),
    paddingHorizontal: vw(20),
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: vh(10),
    marginVertical: vh(10),
  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconImageSize: {
    height: vw(30),
    width: vw(30),
    resizeMode: 'contain',
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    marginLeft: vw(20),
  },
});

export default Profile;
