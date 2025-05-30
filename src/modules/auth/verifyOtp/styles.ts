import {StyleSheet} from 'react-native';

// Utils
import {vh, vw} from '../../../utils/dimension';
import {Colors} from '../../../utils/colors';
import {size} from '../../../utils/size';
import { ROBOTO_SEMIBOLD } from '../../../utils/Fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  backButton: {
    backgroundColor: Colors.headerButton,
  },
  subContainer: {
    flex: 1,
    paddingHorizontal: vw(16),
    paddingBottom: vh(20),
    marginTop: vh(20),
    justifyContent: 'space-between',
  },
  error: {
    color: Colors.red,
    marginTop: vh(10),
  },
  disableVerifyButton: {
    width: '100%',
    alignSelf: 'center',
    paddingVertical: vh(16),
    borderRadius: 16,
  },
  verifyButton: {
    width: '100%',
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
    fontFamily:ROBOTO_SEMIBOLD,
    fontWeight: '600',
    color: Colors.primary,
  },
  timerContainer: {
    alignItems: 'center',
    marginTop: vh(10),
  },
  timerText: {
    fontSize: size.description,
    fontFamily:ROBOTO_SEMIBOLD,
    fontWeight: '600',
    color: Colors.primary,
  },
  resendText: {
    fontSize: size.description,
    fontFamily:ROBOTO_SEMIBOLD,
    fontWeight: '600',
    color: Colors.blackText,
  },
});
