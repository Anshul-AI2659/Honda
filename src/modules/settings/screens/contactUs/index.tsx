import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  Keyboard,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Images} from '../../../../assets';
import CustomButton from '../../../../components/CustomButton';
import CustomFlatList from '../../../../components/CustomFlatList';
import CustomHeader from '../../../../components/customHeader';
import InputField from "../../../../components/TextInput'";
import colors from '../../../../utils/colors';
import styles from './style';
import CustomStatusBar from '../../../../components/statusBar';
import CustomSnackBar from '../../../../components/customSnackBar';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { contactUsAction } from '../../../../Redux/Actions/moreAction';
import { ScreenNames } from '../../../../utils/screenNames';

type chooseModalItems = {
  id: number;
  name: string;
  image: ImageSourcePropType;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
};

const categories: string[] = [
  'Battery Operated ',
  'Generators',
  'Tillers',
  'Brush Cutters',
  'Water pumps',
  'Lawn Mowers',
  'Outboard Motors',
  'General Purp. Engines',
];

const Inquiry: string[] = ['Sales', 'Service'];

type RootStackParamList = {
  ContactUs: undefined;
};

type ContactUsNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ContactUs'
>;

interface ContactUsProps {
  navigation: ContactUsNavigationProp;
}

const ContactUs = ({navigation}: ContactUsProps) => {
  const {token, uType} = useAppSelector(state => state.authReducer);
  const {profileData} = useAppSelector(state => state.moreReducer);
  const dispatch = useAppDispatch();
  const insets = useSafeAreaInsets();
  const [name, setName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [description, setDescription] = useState('');
  const [selectedInquiry, setSelectedInquiry] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [isCategoryModalVisible, setIsCategoryModalVisible] = useState(false);
  const [isInquiryModalVisible, setIsInquiryModalVisible] = useState(false);
  const [image, setImage] = useState<string[]>([]);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const {height} = Dimensions.get('screen');
  const isSmallDevice = height <= 667;

  useEffect(() => {
    if (profileData) {
      setName(profileData.name || '');
      setEmailAddress(profileData.email || '');
      setPhoneNumber(profileData.mobileNumber || '');
    }
  }, [profileData]);

  useEffect(() => {
    // _onSubmitPress()
    setIsButtonEnabled(
      name.trim() !== '' &&
        emailAddress.trim() !== '' &&
        phoneNumber.trim() !== '' &&
        description.trim() !== '' &&
        selectedInquiry.trim() !== '' &&
        selectedCategory.trim() !== '',
    );
  }, [
    name,
    emailAddress,
    phoneNumber,
    description,
    selectedInquiry,
    selectedCategory,
  ]);

  const _onSubmitPress = async () => {
  const toEmail =
  selectedInquiry.toLowerCase() === 'sales'
    ? 'ho.mktg@hspp.com'
    : selectedInquiry.toLowerCase() === 'service'
    ? 'ho.service@hspp.com'
    : '';
    const payload = {
      name: name,
      email: emailAddress,
      countryCode: '+91',
      mobileNumber: phoneNumber,
      inquiryType: selectedInquiry,
      category: selectedCategory,
      description: description,
      media: '',
      uType:uType,
    };
    try {
      const response = await dispatch(contactUsAction(payload));
      console.log('contact us response on contactUs screen: ', response);
      if (response?.payload?.statusCode === 200) {
        CustomSnackBar.show(
          'Enquiry has been submitted successfully',
          'success',
          400,
        );
        navigation.navigate(ScreenNames.Settings)
      } else {
        console.log('something went wrong');
        
      }
    } catch (error) {
      console.log('error got at catch contactus error:', error);
    
    }
  };

  // const _onSubmitPress = async () => {
  //   // Basic validation (example)
  //   if (!name || !emailAddress || !phoneNumber || !enquiryType || !description) {
  //     Alert.alert('Please fill all required fields.');
  //     return;
  //   }
  
  //   // POINT 6: Validate description content
  //   const descriptionRegex = /^[a-zA-Z0-9\s.,!?-]*$/;
  //   if (!descriptionRegex.test(description)) {
  //     Alert.alert(
  //       'Invalid Characters',
  //       'Description contains unsupported characters. Please remove any special symbols.'
  //     );
  //     return;
  //   }
  
  //   // POINT 5: Determine recipient based on enquiry type
  //   let recipientEmail = 'info@yourapp.com';
  //   switch (enquiryType) {
  //     case 'Support':
  //       recipientEmail = 'support@yourapp.com';
  //       break;
  //     case 'Sales':
  //       recipientEmail = 'sales@yourapp.com';
  //       break;
  //     case 'Feedback':
  //       recipientEmail = 'feedback@yourapp.com';
  //       break;
  //     default:
  //       recipientEmail = 'info@yourapp.com';
  //   }
  
  //   // Create form data object (adjust according to your API)
  //   const formData = {
  //     name,
  //     email: emailAddress,
  //     phone: phoneNumber,
  //     enquiryType,
  //     productCategory,
  //     description,
  //     recipientEmail,
  //     image: uploadedImageUrl || null, // if optional
  //   };
  
  //   try {
  //     setIsSubmitting(true);
  
  //     // Replace with your actual submission method
  //     await submitContactForm(formData);
  
  //     // POINT 7: Navigate after success
  //     Alert.alert('Success', 'Your enquiry has been submitted.', [
  //       {
  //         text: 'OK',
  //         onPress: () => navigation.goBack(), // or navigation.navigate('ThankYou')
  //       },
  //     ]);
  //   } catch (error) {
  //     Alert.alert('Submission Failed', 'Please try again later.');
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };
  
  const backPress = () => {
    navigation.goBack();
  };

  const openGallery = async () => {
    try {
      const image = await ImagePicker.openPicker({
        cropping: true, // Ensure cropping is enabled
        mediaType: 'photo', // Ensure we only pick photos
      });
  
      if (image?.path) {
        console.log('Selected image path:', image.path);
        console.log('Image MIME type:', image.mime);
        console.log('Image size in bytes:', image.size);
  
        const isGif = image.mime === 'image/gif';
        const isTooLarge = image.size > 5242880; // 5 MB in bytes
  
        if (isGif) {
          console.log('GIF format detected',isGif);
          CustomSnackBar.show('Allowed image formats: JPG, JPEG, PNG only.', 'error', 2000); // Show snackbar for GIF
          return;
        }
        if (isTooLarge) {
          console.log('File size exceeds 5 MB');
          CustomSnackBar.show('Maximum image upload size is limited to 5 MB','error', 2000); // Show snackbar for size
          return;
        }
        if (image?.length >= 5) {
          CustomSnackBar.show('You can upload a maximum of 5 images.', 'error', 2000);
          return;
        }
        // Clear any previous error and proceed if valid
        setImage(image.path);
        // You can now process the image as needed (without API call if required)
        console.log('Image is valid for upload:', image.path);
      } else {
        console.log('No image selected');
      }
    } catch (error) {
      console.log('Error selecting image: ', error);
    } finally {
      setTimeout(() => {
        setModalVisible(false); // Delay closing the modal to allow snackbar to show
      }, 1000); 
    }
  };

  const handleTakePhoto = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImage(image.path);
    });
    setModalVisible(false);
  };

  const handleRemove = () => {
    setImage('');
    setModalVisible(false);
  };

  const handleCountrySelect = (country: string) => {
    setSelectedCategory(country);
    setIsCategoryModalVisible(false);
  };

  const handleInquirySelect = (inquiry: string) => {
    setSelectedInquiry(inquiry);
    setIsInquiryModalVisible(false);
  };

  const handleDescriptionChange = (text: string) => {
    if (text.length <= 500) {
      setDescription(text);
    } else {
      CustomSnackBar.show('Description can’t exceed 500 characters.', 'error', 500);
    }
  };
  

  const getChooseModalItems = (): chooseModalItems[] => {
    const items: chooseModalItems[] = [
      {
        id: 1,
        name: 'Upload From Gallery',
        image: Images.galleryIcon,
        onPress: openGallery,
      },
      {
        id: 2,
        name: 'Open Camera',
        image: Images.cameraIcon,
        onPress: () => {
          CustomSnackBar.show('Coming Soon!', 'success',400);
        },
      },
    ];

    return items;
  };

  const renderItem = ({item}: {item: string}) => (
    <TouchableOpacity
      style={styles.cityItem}
      onPress={() => handleCountrySelect(item)}>
      <Text style={styles.cityText}>{item}</Text>
    </TouchableOpacity>
  );

  const renderInquiryItem = ({item}: {item: string}) => (
    <TouchableOpacity
      style={styles.cityItem}
      onPress={() => handleInquirySelect(item)}>
      <Text style={styles.cityText}>{item}</Text>
    </TouchableOpacity>
  );

  const renderItemChooseItem = ({item}: {item: chooseModalItems}) => (
    
    <TouchableOpacity style={styles.container2} onPress={item.onPress}>
      <Image source={item?.image} style={styles.iconImageSize} />
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <KeyboardAwareScrollView
      bounces={false}
      extraHeight={height * (isSmallDevice ? 0.38 : 0.41)}
      showsVerticalScrollIndicator={false}
      style={{flex: 1}}
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps="handled">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[styles.container, {paddingTop: insets.top}]}>
          <CustomStatusBar />
          <CustomHeader
            headerStyle={styles.header}
            leftIcon={Images.backarrow}
            textHeading={'Contact Us'}
            leftButtonStyle={styles.backButton}
            onleftPress={navigation.goBack}
            leftIconStyle={styles.backButton}
          />
          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}>
            <View>
              <InputField
                placeholder="Name"
                style={[
                  styles.inputContainer1,
                  {
                    borderColor:
                      focusedInput === 'name'
                        ? colors.primary
                        : colors.borderSecond,
                  },
                ]}
                placeholderTextColor={colors.inActiveTab}
                value={name}
                onChangeText={setName}
                onFocus={() => setFocusedInput('name')}
                onBlur={() => setFocusedInput(null)}
              />
              <InputField
                placeholder="Email Address*"
                style={[
                  styles.inputContainer1,
                  {
                    borderColor:
                      focusedInput === 'email'
                        ? colors.primary
                        : colors.borderSecond,
                  },
                ]}
                placeholderTextColor={colors.inActiveTab}
                value={emailAddress}
                onChangeText={setEmailAddress}
                onFocus={() => setFocusedInput('emailAddress')}
                onBlur={() => setFocusedInput(null)}
              />
              <View
                style={[
                  styles.inputContainer,
                  {
                    borderColor:
                      focusedInput === 'phoneNumber'
                        ? colors.primary
                        : colors.borderSecond,
                  },
                ]}>
                <Text style={styles.countryCode}>+ 91</Text>
                <View style={styles.separator} />
                <InputField
                  style={styles.inputContainerInside}
                  placeholder="Phone Number"
                  keyboardType="phone-pad"
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                  maxLength={10}
                  placeholderTextColor={colors.inActiveTab}
                  onFocus={() => setFocusedInput('phoneNumber')}
                  onBlur={() => setFocusedInput(null)}
                />
              </View>
              <TouchableOpacity onPress={() => setIsInquiryModalVisible(true)}>
                <InputField
                  placeholder="Select type of Inquiry"
                  placeholderTextColor={colors.inActiveTab}
                  style={styles.inputContainer1}
                  value={selectedInquiry}
                  rightIcon={Images.downArrow}
                  editable={false}
                  onRightIconPress={() => setIsInquiryModalVisible(true)}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setIsCategoryModalVisible(true)}>
                <InputField
                  placeholder="Select category"
                  placeholderTextColor={colors.inActiveTab}
                  style={styles.inputContainer1}
                  value={selectedCategory}
                  rightIcon={Images.downArrow}
                  editable={false}
                  onRightIconPress={() => setIsCategoryModalVisible(true)}
                />
              </TouchableOpacity>
              <InputField
                placeholder="Enter Description here..."
                style={[
                  styles.inputContainer1,
                  {
                    borderColor:
                      focusedInput === 'description'
                        ? colors.primary
                        : colors.borderSecond,
                  },
                ]}
                placeholderTextColor={colors.inActiveTab}
                multiline={true}
                // value={description}
                // onChangeText={setDescription}
                value={description}
                onChangeText={handleDescriptionChange}
                onFocus={() => setFocusedInput('description')}
                onBlur={() => setFocusedInput(null)}
              />
            </View>
            {selectedInquiry === 'Service' && (
                <>
                  <View style={styles.viewUpload}>
                    <Text style={styles.upload}>Upload Image</Text>
                    <Text style={styles.uploadDescription}>
                      Please upload a serial number image
                    </Text>
                  </View>
                
            <TouchableOpacity
              style={styles.imageContainer}
              onPress={() =>  setModalVisible(true)} // only open modal if no image
              activeOpacity={1}>
              {image ? (
                <>
                  <Image
                    source={{uri: image}}
                    style={styles.insideImageUpload}
                    resizeMode="contain"
                  />
                  <TouchableOpacity
                    style={styles.closeIconContainer}
                    onPress={handleRemove}>
                    <Image source={Images.closeIcon} style={styles.closeIcon} />
                  </TouchableOpacity>
                </>
              ) : (
                <Image
                  source={Images.uploadImageIcon}
                  style={styles.insideImage}
                  resizeMode="contain"
                />
              )}
            </TouchableOpacity>
            </>
          )}
          </ScrollView>
          <CustomButton
            buttonText={'SUBMIT'}
            onPress={_onSubmitPress}
            isButtonDisabled={!isButtonEnabled}
            style={styles.buttonContainer}
            textStyle={{color: colors.white}}
            disabledButtonStyle={{backgroundColor: colors.backButtonBackground}}
            disabledButtonTextStyle={{color: colors.lightGreyBlue}}
          />
          <Modal
            animationType="slide"
            transparent
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}>
            <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
              <View style={styles.modalMainContainer}>
                <View style={styles.modalContentContainer}>
                  <CustomFlatList
                    data={getChooseModalItems()}
                    renderItem={renderItemChooseItem}
                    keyExtractor={item => item.id.toString()}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
          <Modal
            transparent={true}
            visible={isCategoryModalVisible}
            animationType="fade"
            onRequestClose={() => setIsCategoryModalVisible(false)}>
            <TouchableWithoutFeedback
              onPress={() => setIsCategoryModalVisible(false)}>
              <View style={styles.modalOverlay}>
                <View style={styles.modalContainer}>
                  <Text style={styles.flatlistHeader}>Select Category</Text>
                  <FlatList
                    data={categories}
                    keyExtractor={item => item}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>

          <Modal
            transparent={true}
            visible={isInquiryModalVisible}
            animationType="fade"
            onRequestClose={() => setIsInquiryModalVisible(false)}>
            <TouchableWithoutFeedback
              onPress={() => setIsInquiryModalVisible(false)}>
              <View style={styles.modalOverlay}>
                <View style={styles.modalContainer}>
                  <Text style={styles.flatlistHeader}>Select Inquiry</Text>
                  <FlatList
                    data={Inquiry}
                    keyExtractor={item => item}
                    renderItem={renderInquiryItem}
                    showsVerticalScrollIndicator={false}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

export default ContactUs;
