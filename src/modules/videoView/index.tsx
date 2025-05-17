import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { CustomYouTubePlayer } from '../../components/CustomYouTubePlyaer';
import CustomHeader from '../../components/customHeader';
import { Images } from '../../assets';
import { useNavigation } from '@react-navigation/native';
import { vh, vw } from '../../styles';
import CustomStatusBar from '../../components/statusBar';

const YouTubePlayerScreen = ({ route }: { route: any }) => {
const { videoId } = route.params;
const navigation = useNavigation()

  console.log('logggggggg',videoId);
  
  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <CustomHeader
        headerStyle={styles.header}
        leftIcon={Images.backarrow}
        leftButtonStyle={styles.backButton}
        onleftPress={navigation.goBack}
        leftIconStyle={styles.backButton}
        rightButtonStyle={styles.rightButton}
      />
      <CustomYouTubePlayer videoId={videoId} autoPlay />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
     flex: 1,
     backgroundColor: 'black',
     justifyContent:'center'
  },
    backIcon: {
      width: vw(40),
      height: vw(40),
      resizeMode: 'contain',
      
    },
    header: {
      bottom:vh(150),
      backgroundColor:"black",
      marginHorizontal:vh(18)
    },
    backButton: {width: vh(40), height: vh(40), resizeMode: 'contain'},
    rightButton:{
      backgroundColor:'black'
    }
});

export default YouTubePlayerScreen;
