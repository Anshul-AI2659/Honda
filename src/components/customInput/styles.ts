import {StyleSheet} from 'react-native';
<<<<<<< HEAD
import colors from '../../utils/colors';
import { normalize, vh, vw } from '../../styles';
=======
import {vw, vh} from '../../utils/dimension';
import {size} from '../../utils/size';
import {Colors} from '../../utils/colors';
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
<<<<<<< HEAD
    backgroundColor: colors.white,
=======
    backgroundColor: Colors.White,
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
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
<<<<<<< HEAD
    fontSize: normalize(16),
=======
    fontSize: size.error,
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
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
