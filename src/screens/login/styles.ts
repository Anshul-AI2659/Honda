import {Platform, StyleSheet} from 'react-native';

// Utils
import {vw, vh} from '../../utils/dimension';
import {Colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  backButton:{
    backgroundColor:Colors.headerButton,
  },
  subContainer: {
    flex:1,
    marginTop:vh(20),
    paddingBottom:vh(10),
    justifyContent:'space-between',
    paddingHorizontal: vw(20),
  },
  getOtpDisableButton:{
    width:'100%',
    paddingVertical: vh(16),
    alignSelf:'center',
    borderRadius: 16,
  },
  getOtpButton:{
    width:'100%',
    paddingVertical: vh(16),
    alignSelf:'center',
    borderRadius: 16,
  },
  bottomContainer: {
    marginTop: vh(116),
  },
  policyContainer: {
    marginTop: vh(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  alertText: {
    width:vw(326),
    resizeMode:'contain',
    fontSize: 12,
    fontWeight: '400',
    color: Colors.greyText,
  },
  underlinedAlertText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.Black,
    textDecorationLine: 'underline',
    ...Platform.select({
      android: {
        textDecorationLine: 'underline',
      },
    }),
  },
});
