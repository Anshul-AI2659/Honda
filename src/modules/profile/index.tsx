import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Image,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
// import ImagePicker from 'react-native-image-crop-picker';
import {Icons} from '../../assets';
import {SafeAreaView} from 'react-native-safe-area-context';
import {vh} from '../../utils/dimension';
import styles from './styles';
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
import {validateEmail, validateName} from '../../utils/validations';
import CustomStatusBar from '../../components/statusBar';
import CustomDateTimePicker from '../../components/customDateTimePicker';
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
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [selectedDay, setSelectedDay] = useState(null);
  const [isAllWeekSelected, setIsAllWeekSelected] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Mahesh Honda',
    email: 'maheshhonda@gmail.com',
    city: 'Noida',
  });
  const [errors, setErrors] = useState({
    nameError: false,
    emailError: false,
    cityError: false,
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({...prev, [field]: value}));

    switch (field) {
      case 'name':
        setErrors(prev => ({
          ...prev,
          nameError: value === '' ? false : !validateName(value),
        }));
        break;
      case 'email':
        setErrors(prev => ({
          ...prev,
          emailError: value === '' ? false : !validateEmail(value),
        }));
        break;

      case 'city':
        setErrors(prev => ({
          ...prev,
          cityError: value === '' ? false : !validateName(value),
        }));
        break;
      default:
        break;
    }
  };

  // // Function to Open Phone's Gallery.
  // const openGallery = async (): Promise<void> => {
  //   const storagePermission = await requestStoragePermission();

  //   if (storagePermission) {
  //     ImagePicker.openPicker({
  //       mediaType: 'photo',
  //       cropping: true,
  //       compressImageQuality: 1,
  //     })
  //       .then(image => {
  //         setModalVisible(false);
  //         setImageUri(image.path);
  //       })
  //       .catch(error => {
  //         setModalVisible(false);
  //         console.log('Error selecting image from gallery:', error);
  //       });
  //   }
  // };

  // // Function to open the camera.
  // const handleTakePhoto = async (): Promise<void> => {
  //   const cameraPermission = await requestCameraPermission();

  //   if (cameraPermission) {
  //     ImagePicker.openCamera({
  //       mediaType: 'photo',
  //       cropping: true,
  //       compressImageQuality: 1,
  //     })
  //       .then(image => {
  //         setImageUri(image.path);
  //         setModalVisible(false);
  //       })
  //       .catch(error => {
  //         console.log('Error taking photo:', error);
  //         setModalVisible(false);
  //       });
  //   }
  // };

  const openGallery = async (): Promise<void> => {
    const storagePermission = await requestStoragePermission();

    if (storagePermission) {
      launchImageLibrary(
        {
          mediaType: 'photo',
          includeBase64: false,
          quality: 1,
        },
        response => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.errorMessage) {
            console.log('ImagePicker Error: ', response.errorMessage);
          } else {
            const imageUri = response.assets?.[0]?.uri;
            if (imageUri) {
              setModalVisible(false);
              setImageUri(imageUri);
            }
          }
        },
      );
    }
  };

  // Function to open the camera
  const handleTakePhoto = async (): Promise<void> => {
    const cameraPermission = await requestCameraPermission();

    if (cameraPermission) {
      launchCamera(
        {
          mediaType: 'photo',
          includeBase64: false,
          quality: 1,
        },
        response => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.errorMessage) {
            console.log('Camera Error: ', response.errorMessage);
          } else {
            const imageUri = response.assets?.[0]?.uri;
            if (imageUri) {
              setModalVisible(false);
              setImageUri(imageUri);
            }
          }
        },
      );
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

  const handleAllWeekSelection = () => {
    setIsAllWeekSelected(true);
    setSelectedDay(null);
  };

  const handleCustomWeekSelection = () => {
    setIsAllWeekSelected(false);
  };

  const renderItem = ({item, index}) => {
    const isSelected = isAllWeekSelected;

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
        showsVerticalScrollIndicator={false}>
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
          value={formData.name}
          label="Name"
          Error={errors.nameError}
          errorText={
            'Please use only alphabetical letters and minimum length is 3 characters.'
          }
          maxLength={20}
          keyboardType={'ascii-capable'}
          onChangeText={text => handleInputChange('name', text)}
          inputContainerStyle={styles.inputContainer}
          textInputStyle={styles.textInput}
        />
        <CustomInput
          value={formData.email}
          label="Email Id"
          Error={errors.emailError}
          errorText={'Please enter valid email'}
          maxLength={30}
          keyboardType={'email-address'}
          onChangeText={text => handleInputChange('email', text)}
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
          value={formData.city}
          label="City"
          Error={errors.cityError}
          errorText={
            'Please use only alphabetical letters and minimum length is 3 characters.'
          }
          maxLength={20}
          keyboardType={'ascii-capable'}
          onChangeText={text => handleInputChange('city', text)}
          inputContainerStyle={styles.inputContainer}
          textInputStyle={styles.textInput}
        />
        <View style={styles.serviceDaysContainer}>
          <Text style={styles.serviceDaysText}>{'Service Days'}</Text>
          <View style={styles.weekOptionsContainer}>
            <TouchableOpacity
              style={styles.singleWeekContainer}
              activeOpacity={0.5}
              onPress={handleAllWeekSelection}>
              <Image
                source={
                  isAllWeekSelected
                    ? Icons.radioSelected
                    : Icons.radioUnselected
                }
                style={
                  isAllWeekSelected
                    ? styles.radioSelected
                    : styles.radioUnselected
                }
              />
              <Text style={styles.singleWeekOptionText}>{'All Week days'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.singleWeekContainer}
              activeOpacity={0.5}
              onPress={handleCustomWeekSelection}>
              <Image
                source={
                  !isAllWeekSelected
                    ? Icons.radioSelected
                    : Icons.radioUnselected
                }
                style={
                  !isAllWeekSelected
                    ? styles.radioSelected
                    : styles.radioUnselected
                }
              />
              <Text style={styles.singleWeekOptionText}>
                {'Customise Week days'}
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={days}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
            contentContainerStyle={{flex: 1, marginTop: vh(16)}}
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
              rightIcon={Icons.clock}
            />
            <CustomDateTimePicker
              label="Select To"
              onDateChange={handleEndTimeChange}
              mode={'time'}
              containerStyle={styles.singleTimeContainer}
              rightIcon={Icons.clock}
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
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <View style={styles.modalTopContainer} />
          </TouchableWithoutFeedback>
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

export default Profile;
