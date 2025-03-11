import {StyleSheet} from 'react-native';

// Utils
import {vw, vh} from '../../utils/dimension';
import {Colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  header: {
    paddingTop: vh(10),
    paddingBottom: vh(20),
  },
  headerImg: {
    marginRight: vw(30),
  },

  subContainer: {
    flex:1,
    paddingBottom:vh(10),
    justifyContent:'space-between',
    paddingHorizontal: vw(20),
  },
  getOtpButton:{
    width:'100%',
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
    fontSize: 12,
    fontWeight: '400',
    color: Colors.greyText,
  },
  underlinedAlertText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.Black,
    textDecorationLine: 'underline',
  },
});
