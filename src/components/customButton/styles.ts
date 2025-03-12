import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {vh, vw} from '../../utils/dimension';
import {size} from '../../utils/size';

export const styles = StyleSheet.create({
  disabledButton: {
    backgroundColor: Colors.lightGrey,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
    marginTop: vh(44),
    borderRadius: 16,
    paddingVertical: vh(16),
  },
  submitButton: {
    // width:'100%',
    flexDirection: 'row',
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: vh(44),
    borderRadius: 16,
    paddingVertical: vh(16),
  },
  submitButtonText: {
    color: Colors.White,
    fontSize: size.button,
    fontWeight: '800',
  },
  disabledButtonText: {
    color: Colors.greyText,
    fontSize: size.button,
    fontWeight: '800',
  },
  icon: {
    width: vw(28),
    height: vw(28),
    resizeMode: 'contain',
  },
});
