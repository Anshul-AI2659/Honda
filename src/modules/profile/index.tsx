import React, {useEffect, useMemo, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomHeader from '../../components/customHeader';
import CustomInput from '../../components/customInput';
import CustomStatusBar from '../../components/statusBar';
import {
  specialNameRegex,
  validateEmail,
} from '../../utils/commonFunctions';

import styles from './styles';
import {requestCameraPermission} from '../../components/customPermissions';
import {RootStackParamList} from '../../utils/types';
import {Images} from '../../assets';
import CustomDateTimePicker from '../../components/customDateTimePicker';
import CustomButton from '../../components/CustomButton';
import {ScreenNames} from '../../utils/screenNames';
import colors from '../../utils/colors';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {

  sendEmailOtp,

} from '../../Redux/Actions/authAction';

import CustomSnackBar from '../../components/customSnackBar';
import moment from 'moment';
import { CameraOptions, launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { getProfileData, updateProfileAction } from '../../Redux/Actions/moreAction';

interface profileProps {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

const Profile = ({navigation, route}: profileProps) => {
  const dispatch = useAppDispatch();
  const {customerProfileData, token, uType} =
    useAppSelector(state => state.authReducer);
    const {profileData} =
    useAppSelector(state => state.moreReducer);
  const {isEmailVerified, roleName} = route.params || {};
  const [imageUri, setImageUri] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [selectedDays, setSelectedDays] = useState([]);
  const [isAllWeekSelected, setIsAllWeekSelected] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [timeError, setTimeError] = useState<boolean>(false);
  const [getUserProfile, setUserProfile] = useState();
  const [formData, setFormData] = useState({
    name: profileData?.name ?? customerProfileData?.name,
    mobileNumber:
      profileData?.mobileNumber ?? customerProfileData?.mobileNumber,
    email: profileData?.email ?? customerProfileData?.email,
    state: profileData?.state ?? customerProfileData?.state,
    city: profileData?.city ?? customerProfileData?.city,
    serviceDays: profileData?.serviceDays?.length
      ? profileData?.serviceDays
      : [],
  });

  console.log('isemailverifed ture-------->',isEmailVerified);
  
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  useEffect(() => {
    if (profileData && Object.keys(profileData)?.length) {
      const name = profileData?.name ?? customerProfileData?.name;
      const mobileNumber = profileData?.mobileNumber ?? customerProfileData?.mobileNumber;
      const email = profileData?.email ?? customerProfileData?.email;
      const state = profileData?.state ? profileData?.state : profileData?.region;
      const city = profileData?.city ? profileData?.city : profileData?.areaOffice;
      const serviceDays = profileData?.serviceDays?.length
        ? profileData?.serviceDays
        : [];
  
      const selectedIndexes = serviceDays
        .map(day => days.indexOf(day))
        .filter(index => index !== -1);
      const isAllSelected = selectedIndexes.length === 7;
  
      const serviceHours = profileData?.serviceHours || {};
  
      setFormData({ name, mobileNumber, email, state, city, serviceDays });
      setSelectedDays(selectedIndexes);
      setIsAllWeekSelected(isAllSelected);
      setStartTime(serviceHours.from ?? '');
      setEndTime(serviceHours.to ?? '');
  
      // Set initial values after all states are set
      initialStateRef.current = {
        imageUri: '',
        phoneNumber: '',
        startTime: serviceHours.from ?? '',
        endTime: serviceHours.to ?? '',
        selectedDays: selectedIndexes,
        isAllWeekSelected: isAllSelected,
        formData: { name, email, city, state },
      };
    }
  }, [profileData]);
  

  useEffect(() => {
    fetchProfileData();
  }, []);

  useEffect(() => {
    if (profileData?.serviceDays?.length) {
      const selectedIndexes = profileData.serviceDays
        .map(day => days.indexOf(day))
        .filter(index => index !== -1);
      setSelectedDays(selectedIndexes);

      if (selectedIndexes.length === 7) {
        setIsAllWeekSelected(true);
      } else {
        setIsAllWeekSelected(false);
      }
    }
  }, [profileData?.serviceDays]);

  useEffect(() => {
    if (profileData?.serviceHours) {
      setStartTime(profileData.serviceHours.from ?? '');
      setEndTime(profileData.serviceHours.to ?? '');
    }
  }, [profileData]);

  const fetchProfileData = () => {
    const params = {
      data: {
        userType: uType,
        accessToken: token,
      },
      callback: response => {
        setUserProfile(response?.data);
      },
    };
    dispatch(getProfileData(params));
  };

  const [errors, setErrors] = useState({
    nameError: false,
    emailError: false,
  });
  const initialStateRef = useRef({
    imageUri: '',
    phoneNumber: '',
    startTime: '',
    endTime: '',
    selectedDays: [],
    isAllWeekSelected: false,
    formData,
  });

  console.log(
    'role name and data at profile screen',
    roleName,
    customerProfileData,
    profileData,
  );

  
const isButtonDisabled = useMemo(() => {
  const initial = initialStateRef.current;

  const formChanged =
    formData.name !== initial.formData.name ||
    formData.email !== initial.formData.email ||
    formData.city !== initial.formData.city ||
    formData.state !== initial.formData.state ||
    phoneNumber !== initial.phoneNumber ||
    imageUri !== initial.imageUri ||
    isAllWeekSelected !== initial.isAllWeekSelected ||
    selectedDays.sort().toString() !== initial.selectedDays.sort().toString() ||
    startTime !== initial.startTime ||
    endTime !== initial.endTime;

  const timeFieldsValid =
    startTime !== '' &&
    endTime !== '' &&
    !timeError &&
    startTime < endTime;

  // Only check time fields if user type requires them (e.g., Carrier)
  if (uType === 2) {
    return !(formChanged && timeFieldsValid);
  }

  // For other uTypes, ignore time fields
  return !formChanged;
}, [
  formData,
  phoneNumber,
  startTime,
  endTime,
  imageUri,
  isAllWeekSelected,
  selectedDays,
  timeError,
  uType,
]);
  
  /**
   * Handles changes to form input fields and updates the corresponding form data.
   * Also performs field-specific validation (for name, email, and city) and updates error states.
   *
   * @param field - The name of the form field being updated.
   * @param value - The new value entered by the user.
   */
  const handleInputChange = (field: string, value: string) => {
    if (field === 'email') {
      const hasUppercase = /[A-Z]/.test(value);
      setFormData(prev => ({ ...prev, [field]: value }));
      setErrors(prev => ({
        ...prev,
        emailError: hasUppercase || (value !== '' && !validateEmail(value)),
      }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
      switch (field) {
        case 'name':
          setErrors(prev => ({
            ...prev,
            nameError: value === '' ? false : !specialNameRegex(value),
          }));
          break;
        default:
          break;
      }
    }
  };
  /**
   * Opens the device's image gallery using ImagePicker.
   * Allows the user to select and crop an image to 300x300 dimensions.
   * On success, sets the selected image's URI and closes the modal.
   * On error (e.g., if the user cancels the picker), logs the error and closes the modal.
   */
  
  const openCamera = () => {
    const options: CameraOptions = {
      mediaType: 'photo',
      cameraType: 'back',
      includeBase64: false,
      saveToPhotos: true,
    };
  
    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.errorCode) {
        console.error('Camera error: ', response.errorMessage);
        CustomSnackBar.show('Camera error: ' + response.errorMessage, 'error', 2000);
      } else if (response.assets && response.assets.length > 0) {
        const photo = response.assets[0];
        console.log('Camera image:', photo);
        if (photo.fileSize && photo.fileSize > 5242880) {
          CustomSnackBar.show('Maximum image upload size is 5 MB', 'error', 2000);
          return;
        }
        if (photo.type === 'image/gif') {
          CustomSnackBar.show('Allowed formats: JPG, JPEG, PNG only.', 'error', 2000);
          return;
        }
        setImageUri(photo.uri || '');
      }
      setModalVisible(false);
    });
  };
  

  const openGallery = async () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 800,
      maxHeight: 800,
      quality: 0.8,
      includeBase64: false,
    };


    
  
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const selected = response.assets[0];
        const isGif = selected.type === 'image/gif';
        const isTooLarge = selected.fileSize && selected.fileSize > 5242880; // 5MB
  
        if (isGif) {
          CustomSnackBar.show('Allowed image formats: JPG, JPEG, PNG only.', 'error', 2000);
          return;
        }
  
        if (isTooLarge) {
          CustomSnackBar.show('Maximum image upload size is limited to 5 MB', 'error', 2000);
          return;
        }
  
        setImageUri(selected.uri || '');
        console.log('Image selected:', selected.uri);
      }
    });
  
    setModalVisible(false);
  };
  /**
   * Handles taking a photo using the device's camera.
   * First requests camera permissions via `requestCameraPermission`.
   * If permission is granted, opens the camera with cropping enabled (300x300).
   * On success, sets the captured image's URI and closes the modal.
   * On error (e.g., user cancels the camera), logs the error and closes the modal.
   * If permission is denied, logs a message indicating denial.
   */


  /**
   * Handles removal of the selected image.
   * Closes the modal and clears the current image URI.
   */
  const handleRemove = () => {
    setModalVisible(false);
    setImageUri('');
  };

  /**
   * Opens the modal to show more options (e.g., select image, take photo).
   */
  const handleMoreOption = () => {
    setModalVisible(true);
  };

  /**
   * Updates the start time based on user input.
   * @param text - The input string representing the selected start time.
   */
  
  const handleStartTimeChange = (text: string) => {
    setStartTime(text);
  
    if (!text || !endTime) {
      setTimeError(true);
      return;
    }
    const start = moment(text, 'h:mm A');
    const end = moment(endTime, 'h:mm A');
    if (!start.isValid() || !end.isValid() || !start.isBefore(end)) {
      setTimeError(true);
      CustomSnackBar.show('Start time must be less than end time', 'error');
    } else {
      setTimeError(false);
    }
  };

  /**
   * Updates the end time based on user input.
   * @param text - The input string representing the selected end time.
   */
  const handleEndTimeChange = (text: string) => {
    setEndTime(text);
  
    if (!text || !startTime) {
      setTimeError(true);
      return;
    }
    const start = moment(startTime, 'h:mm A');
    const end = moment(text, 'h:mm A');
  
    if (!start.isValid() || !end.isValid() || !end.isAfter(start)) {
      setTimeError(true);
      CustomSnackBar.show('End time must be greater than start time', 'error');
    } else {
      setTimeError(false);
    }
  };
  
  
  console.log('start time and end time', endTime, startTime);

  /**
   * Handles the selection of "All Week" option.
   * Sets the all-week flag to true and clears any custom selected days.
   */
  const handleAllWeekSelection = () => {
    setIsAllWeekSelected(true);
    setSelectedDays([]);
  };

  /**
   * Handles the selection of "Custom Week" option.
   * Sets the all-week flag to false to allow custom day selection.
   */
  const handleCustomWeekSelection = () => {
    setIsAllWeekSelected(false);
  };

  const toggleDaySelection = (index: number): void => {
    // If already selected, remove it; if not, add it
    if (selectedDays.includes(index)) {
      setSelectedDays(
        selectedDays.filter((dayIndex: number) => dayIndex !== index),
      );
    } else {
      setSelectedDays([...selectedDays, index]);
    }
  };

  console.log(
    'data for selectedDays and isAllWeekSelected',
    selectedDays,
    isAllWeekSelected,
    profileData,
  );

  const onVerifyNowPress = async () => {
    const payload = {
      email: customerProfileData?.email ?? '',
      uType:uType
    };
    try {
      const response = await dispatch(sendEmailOtp(payload));
      console.log('verifyEmailOTP response: ', response);
      if (response?.payload?.statusCode === 200) {
        CustomSnackBar.show(
          response?.payload?.message || 'OTP verified successfully',
          'success',
          400,
        );
        if (!isEmailVerified) {
          navigation.popTo(ScreenNames.VerifyEmail, {
            data: profileData,
            role: roleName,
          });
        }
      } else {
        setErrorMessage('something went wrong');
      }
    } catch (error) {
      console.log('Email OTP verification error:', error);
      setErrorMessage('something went wrong');
    }
  };

  const onUpdatePress = async () => {
    if (!token) {
      console.log('No token available');
      return;
    }
    const selectedServiceDays = isAllWeekSelected
      ? days
      : selectedDays.map(index => days[index]);
    const payload = {
      name: formData.name,
      email: formData.email,
      state: formData.state,
      city: formData.city,
      profileImage: imageUri,
      isEmailVerified: isEmailVerified ?? false,
    };
    const dealerPayload = {
      name: formData.name,
      email: formData.email,
      city: formData.city,
      profileImage: imageUri,
      isEmailVerified: isEmailVerified ?? false,
      serviceHours: {
        from: startTime ?? '09:00 AM',
        to: endTime ?? '06:00 PM',
      },
      serviceDays: selectedServiceDays ?? [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
      ],
    };
    const retailerPayload = {
      name: formData.name,
      email: formData.email,
      profileImage: imageUri,
      region: formData.state,
      areaOffice: formData.city,
      dealerId: customerProfileData?._id ?? '67e67516249f100f6bcc9b8f',
      isEmailVerified: isEmailVerified ?? false,
    };
    const employeePayload = {
      name: formData.name,
      email: formData.email,
      state: formData.state,
      areaOffice: formData.city,
      profileImage: imageUri,
      isEmailVerified: isEmailVerified ?? false,
    };

    let selectedPayload;
    switch (uType) {
      case 2:
        selectedPayload = dealerPayload;
        break;
      case 3:
        selectedPayload = retailerPayload;
        break;
      case 4:
        selectedPayload = employeePayload;
        break;
      default:
        selectedPayload = payload;
    }

    dispatch(
      updateProfileAction({
        param: selectedPayload,
        token: token,
        uType,
        callback: (res: any) => {
          if (res?.statusCode === 200) {
            CustomSnackBar.show(
              res?.message || 'Profile updated successfully.',
              'success',
              400,
            );
            console.log('✅ Profile updated successfully:', res);
           // navigation?.goBack();
           navigation.replace(ScreenNames.BottomTab,{screen:ScreenNames.More})
            //navigation?.navigate(ScreenNames.More,{res})
          } else {
            CustomSnackBar.show(
              res?.message || 'Name is required.',
              'error',
              500,
            );
            console.log('❌ Profile update failed:', res);
            setErrorMessage('Failed to update profile');
          }
        },
      }),
    );
  };


  const renderItem = ({item, index}: {item: string; index: number}) => {
    const isSelected = isAllWeekSelected || selectedDays.includes(index);
    return (
      <TouchableOpacity
        style={[styles.dayButton, isSelected && styles.selectedDayButton]}
        onPress={() => {
          if (!isAllWeekSelected) {
            toggleDaySelection(index); // Toggle selection only if custom week is selected
          }
        }}>
        <Text style={[styles.dayText, isSelected && styles.selectedDayText]}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomStatusBar />
      <CustomHeader
        leftIcon={Images.backarrow}
        textHeading="Profile"
        leftIconStyle={styles.backIcon}
        onleftPress={()=>navigation.replace(ScreenNames.BottomTab,{screen:ScreenNames.More})}
        headerStyle={styles.header}
      />
      <ScrollView
        style={styles.subContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.profileSection}>
          <Image
            style={styles.profileImage}
            source={imageUri ? {uri: imageUri} : Images.hondaHqImage}
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={handleMoreOption}
            activeOpacity={1}>
            <Image source={Images.pencilIcon} style={styles.addImg} />
          </TouchableOpacity>
        </View>
        <CustomInput
          // value={data ? data?.name : formData.name}
          value={formData.name}
          label={"Name"}
          Error={errors.nameError}
          errorText={
            'Please enter a valid name'
          }
          maxLength={99}
          keyboardType={'ascii-capable'}
          onChangeText={text => handleInputChange('name', text)}
          inputContainerStyle={styles.inputContainer}
          textInputStyle={styles.textInput}
        />
        <CustomInput
          value={formData.email}
          label="Email Id"
          Error={errors.emailError}
         // errorText={'Please enter valid email'}
          maxLength={30}
          keyboardType={'email-address'}
          onChangeText={text => handleInputChange('email', text.toLowerCase())}
          inputContainerStyle={styles.inputContainer}
          textInputStyle={styles.emailTextInput}
          image={profileData?.isEmailVerified ? Images.checkmark : undefined}
          // image={isEmailVerified ? Images.checkmark : undefined}
          // rightText={!isEmailVerified ? 'Verify Now' : undefined}
          rightText={!profileData?.isEmailVerified ? 'Verify Now' : undefined}
          rightTextStyle={styles.verifyNowText}
          imageStyle={styles.rightIcon}
          onRightTextPress={onVerifyNowPress}
        />
        <View
          style={[
            styles.phoneNumberInputContainer,
            // !isValid && phoneNumber.length > 0 && styles.errorBorder,
          ]}>
          <Text style={styles.countryCode}>+ 91</Text>
          <Image
            tintColor={colors?.primary}
            style={styles.partition}
            source={Images.verticalLine}
          />
          <TextInput
            editable={false}
            selectionColor={colors.primary}
            style={styles.input}
            keyboardType="numeric"
            maxLength={10}
            placeholder={'Phone Number'}
            placeholderTextColor={colors.inActiveTab}
            value={formData?.mobileNumber}
            onChangeText={text => handleInputChange('mobileNumber', text)}
            onKeyPress={({nativeEvent}) => {
              if (!/^\d$/.test(nativeEvent.key)) {
                return;
              }
            }}
          />
        </View>
        {uType != '2' ? (
          <CustomInput
            value={formData?.state}
            label="State"
            maxLength={20}
            keyboardType={'ascii-capable'}
            onChangeText={text => handleInputChange('state', text)}
            inputContainerStyle={styles.inputContainer}
            textInputStyle={styles.textInput}
          />
        ) : (
          <></>
        )}
        <CustomInput
          value={formData?.city}
          label={'City/Village'}
          maxLength={20}
          keyboardType={'ascii-capable'}
          onChangeText={text => handleInputChange('city', text)}
          inputContainerStyle={styles.inputContainer}
          textInputStyle={styles.textInput}
        />
        {uType == '2' ? (
          <View style={styles.serviceDaysContainer}>
            <Text style={styles.serviceDaysText}>{'Service Days'}</Text>
            <View style={styles.weekOptionsContainer}>
              <TouchableOpacity
                style={styles.singleWeekContainer}
                activeOpacity={0.5}
                onPress={handleAllWeekSelection}>
                <Image
                  source={
                    !isAllWeekSelected
                      ? Images.unselectRadio
                      : Images.selectRadio
                  }
                  style={
                    isAllWeekSelected
                      ? styles.radioSelected
                      : styles.radioUnselected
                  }
                />
                <Text style={styles.singleWeekOptionText}>
                  {'All Week days'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.singleWeekContainer}
                activeOpacity={0.5}
                onPress={handleCustomWeekSelection}>
                <Image
                  source={
                    !isAllWeekSelected ? Images.selectRadio : Images.selectRadio
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
              removeClippedSubviews={false}
              data={days}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              scrollEnabled={false}
              contentContainerStyle={styles.contentContainer}
            />
          </View>
        ) : (
          <></>
        )}
        {uType && uType == '2' ? (
          <View style={styles.serviceHoursContainer}>
            <Text style={styles.serviceHoursText}>{'Service Hours'}</Text>
            <View style={styles.timeContainer}>
              <CustomDateTimePicker
                //
                label={startTime || 'Select From'}
                onDateChange={handleStartTimeChange}
                mode={'time'}
                containerStyle={[
                  styles.singleTimeContainer,
                  timeError && styles.errorBorder,
                ]}
                rightIcon={Images.clockIcon}
                clearIcon={Images.crossIcon}
              />
              <CustomDateTimePicker
                // label="Select To"
                label={endTime || 'Select To'}
                onDateChange={handleEndTimeChange}
                mode={'time'}
                containerStyle={[
                  styles.singleTimeContainer,
                  timeError && styles.errorBorder,
                ]}
                rightIcon={Images.clockIcon}
                clearIcon={Images.crossIcon} 
              />
            </View>
          </View>
        ) : (
          <></>
        )}
      </ScrollView>
      <CustomButton
        buttonText={'UPDATE'}
        onPress={onUpdatePress}
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
            <View style={styles.modalTopContainer}></View>
          </TouchableWithoutFeedback>
          <View style={styles.modalContentContainer}>
            <TouchableOpacity style={styles.container2} onPress={openGallery}>
              <Image source={Images.galleryIcon} style={styles.iconImageSize} />
              <Text style={styles.name}>{'Upload From Gallery'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.container2}
              onPress={openCamera}>
              <Image source={Images.cameraIcon} style={styles.iconImageSize} />
              <Text style={styles.name}>{'Open Camera'}</Text>
            </TouchableOpacity>
            {imageUri && (
              <TouchableOpacity
                style={styles.container2}
                onPress={handleRemove}>
                <Image
                  source={Images.deleteIcon}
                  style={styles.iconImageSize}
                />
                <Text style={styles.name}>{'Remove Image'}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Profile;
