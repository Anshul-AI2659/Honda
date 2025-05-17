import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './style';
import CustomWebView from '../../components/customWebView';
import { useNavigation } from '@react-navigation/native';
import CustomStatusBar from '../../components/statusBar';
import CustomHeader from '../../components/customHeader';
import { Images } from '../../assets';

type RouteParams = {
  url: string;
};

type Props = {
  route: { params: RouteParams };
};

const WebView = ({ route }:Props) => {
  const insets = useSafeAreaInsets();
  const { url } = route?.params;
  const navigation = useNavigation();
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
       <CustomStatusBar />
      {/*-------CustomHeader------*/}
       <CustomHeader
          headerStyle={styles.header}
          leftIcon={Images.backarrow}
          leftIconStyle={styles.backButton}
          onleftPress={navigation.goBack}
        />
      <CustomWebView url={url} />
    </View>
  );
};

export default WebView