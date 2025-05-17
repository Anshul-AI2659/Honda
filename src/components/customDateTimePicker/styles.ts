import {StyleSheet} from 'react-native';
import { vh, vw, normalize } from '../../styles';
import { ROBOTO_MEDIUM } from '../../styles/Fonts';
import colors from '../../utils/colors';


const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vh(16),
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: colors.white,
    width: '100%',
  },
  iconButton: {
    paddingHorizontal: vw(14),
    borderColor: colors.borderLight,
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
    height: vh(56),
    fontSize: normalize(16),
    fontFamily:ROBOTO_MEDIUM,
    color:colors.lightBlack,
  },
  rightIcon:{
    width:vw(24),
    height:vw(24),
    resizeMode:'contain',
  },
  errorContainer: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: normalize(16),
    marginTop: vw(4),
    textAlign: 'left',
  },
  
});
export default styles;
