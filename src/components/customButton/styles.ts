import {StyleSheet} from 'react-native';




import { ROBOTO_BOLD } from '../../styles/Fonts';
import colors from '../../utils/colors';
import { vh, vw } from '../../styles';

export const styles = StyleSheet.create({
  disabledButton: {
    backgroundColor: colors.lightGrey,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  submitButton: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  submitButtonText: {
    color: colors.white,
    fontSize: vh(16),
    fontFamily:ROBOTO_BOLD,
    fontWeight: '800',
  },
  disabledButtonText: {
    color: colors.grey,
    fontSize: vh(16),
    fontFamily:ROBOTO_BOLD,
    fontWeight: '800',
  },
  icon: {
    width: vw(28),
    height: vw(28),
    resizeMode: 'contain',
  },
});