import { View, Text, Image } from 'react-native'
import React, { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './style'
import { Switch } from 'react-native-switch';
import Colors from '../../../../utils/colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Images } from '../../../../assets';
import CustomHeader from '../../../../components/customHeader';
import colors from '../../../../utils/colors';
import CustomStatusBar from '../../../../components/statusBar';
import { useAppDispatch } from '../../../../hooks';
import { updateNotificationAction } from '../../../../Redux/Actions/authAction';

type RootStackParamList = {
    Notifications: undefined;
}

type NotificationScreenProps = NativeStackScreenProps<RootStackParamList>;

const Notifications = ({ navigation,route }:NotificationScreenProps) => {
    const {roleName,data} = route?.params ?? 'Dealer'
    const dispatch = useAppDispatch();
    const insets = useSafeAreaInsets();
    const [isEnabled, setIsEnabled] = useState(false);

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <CustomStatusBar />
            <CustomHeader
            headerStyle={styles.header}
            leftIcon={Images.backarrow}
            textHeading="Notifications"
            leftButtonStyle={styles.backButton}
            onleftPress={navigation.goBack}
            leftIconStyle={styles.backButton}
            />
            <View style={styles.mainContainer}>
                <View style={styles.mainContainer1}>
                    <View style={styles.textContainer}>
                        <Text style={styles.text1}>Push Notifications</Text>
                        <Text style={styles.text2}>Toggle On/Off Push Notifications</Text>
                    </View>
                    <Switch
                        value={isEnabled}
                        // onValueChange={(val) => setIsEnabled(val)}
                        onValueChange={val => {
                            setIsEnabled(val);
                            dispatch(updateNotificationAction({
                              param: { pushNotification: val },
                              token: data?.accessToken, // 🔐 Add your actual access token here
                              callback: (response: any) => {
                                console.log('Notification update response:', response);
                              },
                            }));
                          }}
                        disabled={false}
                        renderActiveText={false}
                        renderInActiveText={false}
                        backgroundActive={'#20B233'}
                        backgroundInactive={colors.inactiveDot}
                        circleInActiveColor={Colors.white}
                        circleActiveColor={Colors.white}
                        renderInsideCircle={() => (
                            isEnabled ? <Image source={Images.tickIcon} style={styles.icon}/> : <Image source={Images.crossIcon} style={styles.icon}/>
                        )}
                        circleBorderWidth={4}
                        circleBorderInactiveColor={colors.inactiveDot}
                        circleBorderActiveColor={'#20B233'}
                        switchWidthMultiplier={1.4}
                    />
                </View>
            </View>
        </View>
    )
}

export default Notifications