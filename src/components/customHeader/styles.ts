import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {normalize, vh, vw} from '../../utils/dimension';
import {ROBOTO_MEDIUM} from '../../utils/Fonts';

const styles = StyleSheet.create({
  header: {
    paddingVertical: vh(12),
    paddingHorizontal: vw(16),
    backgroundColor: Colors.White,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftButton: {
    width: vw(40),
    height: vw(40),
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: Colors.White,
  },
  leftIcon: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
  },
  headerImg: {
    width: vw(131.86),
    height: vw(16),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  textHeading: {
    fontSize: normalize(18),
    fontFamily: ROBOTO_MEDIUM,
    fontWeight: '500',
    color: Colors.blackText,
    marginTop: vh(8),
  },
  rightButton: {
    width: vw(40),
    height: vw(40),
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: Colors.White,
  },
  rightIcon: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
  },
});
export default styles;
