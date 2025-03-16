import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Custom Components
import CustomStatusBar from '../../../components/statusBar';
import CustomHeader from '../../../components/customHeader';
import ContentHeader from '../../../components/customContentHeader';
import CustomMobileInputBox from '../../../components/CustomMobileInputBox';
import CustomButton from '../../../components/customButton';

// Utils
import { StackParamList } from '../../../utils/types';
import {ScreenNames} from '../../../utils/screenNames';
import {validatePhoneNumber} from '../../../utils/validations';
import {string} from '../../../utils/strings';

// Styles
import {styles} from './styles';

// Assets
import { Icons } from '../../../assets';

interface LoginProps {
  onClose?: StackNavigationProp<StackParamList>;
  navigation: StackNavigationProp<StackParamList>;
}

//Main Component
const Login = ({navigation}: LoginProps) => {
  const [callingCode] = useState('+91');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState(false);

  const isButtonDisabled = !validatePhoneNumber(phoneNumber);

  const handleLogin = () => {
    navigation.navigate(ScreenNames.VerifyOtp,{phoneNumber});
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={styles.mainContainer}>
          <CustomStatusBar />
          <CustomHeader
            leftIcon={Icons.back}
            onleftPress={navigation.goBack}
            leftButtonStyle={styles.backButton}
          />
          <View style={styles.subContainer}>
            <View>
            <ContentHeader
              headerText={string.Login.title}
              detailText={string.Login.subTitle}
            />
            <CustomMobileInputBox
              label={string.Login.phoneLabel}
              callingCode={callingCode}
              phoneNumber={phoneNumber}
              setPhoneNumber={setPhoneNumber}
              error={error}
              setError={setError}
              errorText={string.Login.phoneNumberError}
            />
            </View>
            <View style={styles.bottomContainer}>
              <CustomButton
                buttonText={string.Login.buttonText}
                onPress={handleLogin}
                isButtonDisabled={isButtonDisabled}
                disabledButtonStyle={styles.getOtpDisableButton}
                buttonStyle={styles.getOtpButton}
              />
              <View style={styles.policyContainer}>
                <Text style={styles.alertText}>
                  {string.Login.alertText}
                  <Text style={styles.underlinedAlertText}>
                    {string.Login.privacyText}
                  </Text>
                  {string.Login.and}
                  <Text style={styles.underlinedAlertText}>
                    {string.Login.terms}
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
};

export default Login;
