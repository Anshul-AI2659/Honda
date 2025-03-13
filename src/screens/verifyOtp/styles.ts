import {StyleSheet} from 'react-native';

// Utils
import {vh, vw} from '../../utils/dimension';
import {Colors} from '../../utils/colors';
import { size } from '../../utils/size';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  subContainer: {
    flex:1,
    paddingHorizontal: vw(20),
    paddingBottom:vh(20),
    justifyContent:'space-between',
  },
  header: {
    paddingTop: vh(10),
    paddingBottom: vh(20),
  },
  headerImg: {
    marginRight: vw(30),
  },

  error: {
    color: Colors.red,
    marginTop: vh(10),
  },
  disableVerifyButton:{
    width:'100%',
    alignSelf: 'center',
    paddingVertical: vh(16),
    borderRadius: 16,
  },
  verifyButton:{
    width:'100%',
    alignSelf: 'center',
    paddingVertical: vh(16),
    borderRadius: 16,
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: vh(20),
  },
  resendLink: {
    fontSize: size.description,
    fontWeight: '600',
    color: Colors.primary,
  },
  timerContainer: {
    alignItems: 'center',
    marginTop: vh(10),
  },
  timerText: {
    fontSize: size.description,
    fontWeight:'600',
    color: Colors.primary,
  },
  resendText:{
    fontSize:size.description,
    fontWeight:'600',
    color:Colors.blackText,
  },
});
