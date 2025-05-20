import {StyleSheet} from 'react-native';
<<<<<<< HEAD




import { ROBOTO_BOLD } from '../../styles/Fonts';
import colors from '../../utils/colors';
import { vh, vw } from '../../styles';
=======
import {Colors} from '../../utils/colors';
import {vw} from '../../utils/dimension';
import {size} from '../../utils/size';
import { ROBOTO_EXTRABOLD } from '../../utils/Fonts';
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625

export const styles = StyleSheet.create({
  disabledButton: {
    backgroundColor: colors.lightGrey,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  submitButton: {
<<<<<<< HEAD
    backgroundColor: colors.primary,
=======
    backgroundColor: Colors.primary,
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  submitButtonText: {
<<<<<<< HEAD
    color: colors.white,
    fontSize: vh(16),
    fontFamily:ROBOTO_BOLD,
    fontWeight: '800',
  },
  disabledButtonText: {
    color: colors.grey,
    fontSize: vh(16),
    fontFamily:ROBOTO_BOLD,
=======
    color: Colors.White,
    fontSize: size.button,
    fontFamily:ROBOTO_EXTRABOLD,
    fontWeight: '800',
  },
  disabledButtonText: {
    color: Colors.greyText,
    fontSize: size.button,
    fontFamily:ROBOTO_EXTRABOLD,
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
    fontWeight: '800',
  },
  icon: {
    width: vw(28),
    height: vw(28),
    resizeMode: 'contain',
  },
});