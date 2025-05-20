import {StyleSheet} from 'react-native';
<<<<<<< HEAD
import { vh, vw, normalize } from '../../styles';
import { ROBOTO_MEDIUM } from '../../styles/Fonts';
import colors from '../../utils/colors';

=======
import {vw, vh, normalize} from '../../utils/dimension';
import {size} from '../../utils/size';
import {Colors} from '../../utils/colors';
import { ROBOTO_MEDIUM } from '../../utils/Fonts';
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vh(16),
    borderWidth: 1,
    borderRadius: 10,
<<<<<<< HEAD
    backgroundColor: colors.white,
=======
    backgroundColor: Colors.White,
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
    width: '100%',
  },
  iconButton: {
    paddingHorizontal: vw(14),
<<<<<<< HEAD
    borderColor: colors.borderLight,
=======
    borderColor: Colors.border,
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
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
<<<<<<< HEAD
    color:colors.lightBlack,
=======
    color:Colors.blackText,
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
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
<<<<<<< HEAD
    fontSize: normalize(16),
=======
    fontSize: size.error,
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
    marginTop: vw(4),
    textAlign: 'left',
  },
  
});
export default styles;
