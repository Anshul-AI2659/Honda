import {StyleSheet} from 'react-native';
import {vw, vh, normalize} from '../../utils/dimension';
import {size} from '../../utils/size';
import {Colors} from '../../utils/colors';
import { ROBOTO_MEDIUM } from '../../utils/Fonts';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vh(16),
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: Colors.White,
    width: '100%',
  },
  iconButton: {
    paddingHorizontal: vw(14),
    borderColor: Colors.border,
    borderRightWidth: 1,
    marginRight: vw(4),
  },
  iconStyle: {
    width: vw(20),
    height: vw(20),
    resizeMode: 'contain',
    tintColor: 'grey',
  },
  phoneInput: {
    width: '100%',
    height: vh(56),
    fontSize: normalize(16),
    fontFamily:ROBOTO_MEDIUM,
    color:Colors.blackText,
  },
  errorContainer: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: size.error,
    marginTop: vw(4),
    textAlign: 'left',
  },
  calendarImg: {
    width: vw(22),
    height: vw(22),
    resizeMode: 'contain',
    tintColor: 'grey',
  },
});
export default styles;
