import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import { normalize, vh, vw } from '../../styles';
import { ROBOTO_BLACK, ROBOTO_REGULAR } from '../../styles/Fonts';


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    // bottom:vh(20)
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
  },
  subTitle: {
    fontSize: normalize(16),
    fontFamily:ROBOTO_REGULAR,
    color: colors.descritptionText,
    marginTop: vh(8),
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: vw(120),
    height: vw(120),
    bottom:vh(10)
  },
});
export default styles;
