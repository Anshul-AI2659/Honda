import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {vw} from '../../utils/dimension';
import {size} from '../../utils/size';
import { ROBOTO_EXTRABOLD } from '../../utils/Fonts';

export const styles = StyleSheet.create({
  disabledButton: {
    backgroundColor: Colors.lightGrey,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  submitButton: {
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  submitButtonText: {
    color: Colors.White,
    fontSize: size.button,
    fontFamily:ROBOTO_EXTRABOLD,
    fontWeight: '800',
  },
  disabledButtonText: {
    color: Colors.greyText,
    fontSize: size.button,
    fontFamily:ROBOTO_EXTRABOLD,
    fontWeight: '800',
  },
  icon: {
    width: vw(28),
    height: vw(28),
    resizeMode: 'contain',
  },
});
