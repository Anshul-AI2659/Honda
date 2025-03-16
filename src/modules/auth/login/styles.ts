import {Platform, StyleSheet} from 'react-native';

// Utils
import {vw, vh, normalize} from '../../../utils/dimension';
import {Colors} from '../../../utils/colors';
import { ROBOTO_REGULAR, ROBOTO_SEMIBOLD } from '../../../utils/Fonts';

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
  bottomContainer:{
  },
  policyContainer: {
    marginTop: vh(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  alertText: {
    resizeMode:'contain',
    fontSize: normalize(12),
    fontFamily:ROBOTO_REGULAR,
    fontWeight: '400',
    color: Colors.greyText,
  },
  underlinedAlertText: {
    fontSize: normalize(12),
    fontFamily:ROBOTO_SEMIBOLD,
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
