// import Modal from 'react-native-modal';
import {StyleSheet, Modal, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';
import { screenHeight, vh } from '../../styles';
import { Images } from '../../assets';
import EmptyPlaceholder from '../../components/emptyPlaceHolder';

/**
 * used to check if internet is available or not
 */

function NetInfoHandler() {
  const [connected, setConnected] = useState<boolean | null>(true);
  const [netWorkState, setNetworkState] = useState<{
    isConnected: boolean|null;
    isInternetReachable: boolean|null;
  }>({
    isConnected: true,
    isInternetReachable: true,
  });
  const [isWifiOrMobileOff, setIsWifiOrMobileOff] = useState(false);

  /**
   * netinfo listener added
   */
  useEffect(() => {
    NetInfo.addEventListener(state => {
      console.log('NetInfoHandler', state);
      setConnected(state?.isConnected);
      setNetworkState({
        isConnected: state?.isConnected,
        isInternetReachable: state?.isInternetReachable,
      });
    });
  }, []);

  /**
   * called when retry is pressed
   */
  const onRetryPress = () => {
    NetInfo.refresh()
      .then(state => {
        setConnected(state.isConnected);
        setNetworkState({
          isConnected: state?.isConnected,
          isInternetReachable: state?.isInternetReachable,
        });
      })
      .catch(() => {});
  };

  /**
   * if internet is connected return null otherwise show no internet modal
   */
  if (connected) {
    return null;
  }

  if (isWifiOrMobileOff) {
    return null;
  }

  return (
    <SafeAreaView style={{height: screenHeight, backgroundColor: 'white',paddingBottom:vh(40)}}>
      <EmptyPlaceholder
        onPress={onRetryPress}
        buttonTitle={'Please try again late'}
        source={Images.honda}
        title={"Lost Connection"}
        placeholderDescription={`We're experiencing technical difficulties or network failure!!`}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
});

export default React.memo(NetInfoHandler);
