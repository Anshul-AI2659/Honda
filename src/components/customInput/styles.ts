import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import { normalize, vh, vw } from '../../styles';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: colors.white,
  },
  textInput:{
    // paddingHorizontal:vw(16),
  },
  iconButton: {
    width: 55,
    borderRightWidth: 1,
    borderWidth: 1,
  },
  iconStyle: {
    width: vw(20),
    height: vw(20),
    resizeMode: 'contain',
  },

  errorContainer: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: normalize(16),
    marginTop: vw(4),
    marginHorizontal:vw(16),
    textAlign: 'left',
  },
  eyeImg: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
    tintColor: 'grey',
    marginTop: vh(7),
  },
});
export default styles;
