import React, { useState } from 'react';
import { Modal, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomStatus from '../../components/CustomStatus';
import styles from './style';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Colors from '../../utils/colors';
import CustomCard from '../../components/CustomCard';
import { Images } from '../../assets';
import CustomLogout from '../../components/CustomLogout';
import CustomHeader from '../../components/customHeader';
import { ScreenNames } from '../../utils/screenNames';
import CustomStatusBar from '../../components/statusBar';

type RootStackParamList = {
    Setting: undefined;
    ToggleNotifications: undefined;
    FaqScreen: undefined;
    WebViewScreen: {url:string};
    ContactUs: undefined;
    CustomerSupportScreen:undefined
}

type SettingScreenProps = NativeStackScreenProps<RootStackParamList>;

const Setting: React.FC<SettingScreenProps> = ({ navigation,route }) => {
    const {roleName,data} = route?.params ?? 'Dealer'
    const insets = useSafeAreaInsets();
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
    const backPress = () => {
        navigation.goBack()
    }
/**
 * Navigates to the Toggle Notifications screen
 */
const notificationPress = () => {
    navigation.navigate(ScreenNames.ToggleNotifications,{roleName:roleName,data:data});
  };
  
  /**
   * Navigates to the FAQ screen
   */
  const faqsPress = () => {
    navigation.navigate(ScreenNames.FaqScreen);
  };
  
  /**
   * Navigates to the Privacy Policy page in a WebView
   */
  const privacyPolicyPress = () => {
    navigation.navigate(ScreenNames.WebViewScreen, {
      url: 'https://www.hondacarindia.com/privacy-policy',
    });
  };


   const onContactUsPress = () =>{
    navigation.navigate(ScreenNames.ContactUs);
   }

   const onCustomerSupport = () =>{
    navigation.navigate(ScreenNames.CustomerSupportScreen);
   }
  
  /**
   * Navigates to the Terms and Conditions page in a WebView
   */
  const termsPress = () => {
    navigation.navigate(ScreenNames.WebViewScreen, {
      url: 'https://www.hondacarindia.com/privacy-policy',
    });
  };
  
  /**
   * Opens the delete account confirmation modal
   */
  const deleteAccountPress = () => {
    setDeleteModalVisible(true);
  };
  
  /**
   * Confirms account deletion, closes the modal, and logs the action
   */
  const confirmDelete = () => {
    setDeleteModalVisible(false);
    console.log('Account Deleted');
  };
    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <CustomStatusBar />
            <CustomHeader
            headerStyle={styles.header}
            leftIcon={Images.backarrow}
            textHeading="Settings"
            leftButtonStyle={styles.backButton}
            onleftPress={navigation.goBack}
            leftIconStyle={styles.backButton}
            />
            <ScrollView showsVerticalScrollIndicator={false} >
                <Text style={styles.headerText}>Help</Text>
                <View style={styles.secondContainer}>
                    <CustomCard
                        title={'FAQs'}
                        description={''}
                        cardStyle={styles.firstContainer1}
                        unexpandImage={Images.rightArrow}
                        titleStyle={styles.text}
                        onAccordionPress={faqsPress}
                        showAccordion={true}
                        iconColor={Colors.lightBlack}
                        iconSize={14}
                    />
                    <View style={styles.line}></View>
                    <CustomCard
                        title={'Customer Support'}
                        description={''}
                        cardStyle={styles.firstContainer1}
                        unexpandImage={Images.rightArrow}
                        titleStyle={styles.text}
                        showAccordion={true}
                        iconColor={Colors.lightBlack}
                        iconSize={14}
                        onAccordionPress={onCustomerSupport}
                    />
                    <View style={styles.line}></View>
                    <CustomCard
                        title={'Contact Us'}
                        description={''}
                        cardStyle={styles.firstContainer1}
                        unexpandImage={Images.rightArrow}
                        titleStyle={styles.text}
                        showAccordion={true}
                        iconColor={Colors.lightBlack}
                        iconSize={14}
                        onAccordionPress={onContactUsPress}
                    />
                    <View style={styles.line}></View>
                    <CustomCard
                        title={'Global Honda'}
                        description={''}
                        cardStyle={styles.firstContainer1}
                        unexpandImage={Images.rightArrow}
                        titleStyle={styles.text}
                        showAccordion={true}
                        iconColor={Colors.lightBlack}
                        iconSize={14}
                        // onAccordionPress={onContactUsPress}
                    />
                    <View style={styles.line}></View>
                    <CustomCard
                        title={'Global Brand Slogan'}
                        description={''}
                        cardStyle={styles.firstContainer1}
                        unexpandImage={Images.rightArrow}
                        titleStyle={styles.text}
                        showAccordion={true}
                        iconColor={Colors.lightBlack}
                        iconSize={14}
                        // onAccordionPress={onContactUsPress}
                    />
                    <View style={styles.line}></View>
                    <CustomCard
                        title={'Honda History'}
                        description={''}
                        cardStyle={styles.firstContainer1}
                        unexpandImage={Images.rightArrow}
                        titleStyle={styles.text}
                        showAccordion={true}
                        iconColor={Colors.lightBlack}
                        iconSize={14}
                        // onAccordionPress={onContactUsPress}
                    />
                    <View style={styles.line}></View>
                    <CustomCard
                        title={'Honda Philosophy'}
                        description={''}
                        cardStyle={styles.firstContainer1}
                        unexpandImage={Images.rightArrow}
                        titleStyle={styles.text}
                        showAccordion={true}
                        iconColor={Colors.lightBlack}
                        iconSize={14}
                        // onAccordionPress={onContactUsPress}
                    />
                </View>
                <Text style={styles.headerText}>About</Text>
                <View style={styles.secondContainer}>
                    <CustomCard
                        title={'Privacy Policy'}
                        description={''}
                        cardStyle={styles.firstContainer1}
                        unexpandImage={Images.rightArrow}
                        titleStyle={styles.text}
                        showAccordion={true}
                        onAccordionPress={privacyPolicyPress}
                        iconColor={Colors.lightBlack}
                        iconSize={14}
                    />
                    <View style={styles.line}></View>
                    <CustomCard
                        title={'Terms & Conditions'}
                        description={''}
                        cardStyle={styles.firstContainer1}
                        unexpandImage={Images.rightArrow}
                        titleStyle={styles.text}
                        showAccordion={true}
                        onAccordionPress={termsPress}
                        iconColor={Colors.lightBlack}
                        iconSize={14}
                    />
                </View>
                <Text style={styles.headerText}>Permissions</Text>
                <CustomCard
                    title={'Notifications'}
                    description={''}
                    cardStyle={styles.firstContainer}
                    unexpandImage={Images.rightArrow}
                    titleStyle={styles.text}
                    onAccordionPress={notificationPress}
                    showAccordion={true}
                    iconColor={Colors.lightBlack}
                    iconSize={14}
                />
                <Text style={styles.headerText}>Account  Control</Text>
                <CustomCard
                    title={'Delete Account'}
                    description={''}
                    cardStyle={styles.firstContainer}
                    unexpandImage={Images.rightArrow}
                    titleStyle={styles.text}
                    showAccordion={true}
                    onAccordionPress={deleteAccountPress}
                    iconColor={Colors.lightBlack}
                    iconSize={14}
                />
            </ScrollView>
            <Modal transparent visible={isDeleteModalVisible} animationType="slide">
                <CustomLogout
                    title="Delete Account"
                    description="Are you sure you want to delete your account ?"
                    buttonText2="CANCEL"
                    buttonText1="DELETE"
                    onButtonPress1={() => setDeleteModalVisible(false)}
                    onButtonPress2={confirmDelete}
                    styleButtonContainer1={[styles.buttonContainer,{backgroundColor: Colors.primary}]}
                    textStyle1={{color: Colors.white}}
                    styleButtonContainer2={styles.buttonContainer}
                />
            </Modal>
        </View>
    )
}

export default Setting