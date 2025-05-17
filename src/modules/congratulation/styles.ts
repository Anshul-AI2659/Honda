import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {normalize, vh, vw} from '../../utils/dimension';
import { ROBOTO_BLACK, ROBOTO_REGULAR } from '../../utils/Fonts';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.White,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: vw(120),
    height: vw(120),
    resizeMode: 'contain',
  },
  textContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: vh(10),
  },
  title: {
    fontSize: normalize(28),
    fontFamily:ROBOTO_BLACK,
    fontWeight: '900',
  },
  subTitle: {
    fontSize: normalize(16),
    fontFamily:ROBOTO_REGULAR,
    fontWeight: '400',
    color: Colors.greyText,
    marginTop: vh(10),
  },
});
export default styles;
