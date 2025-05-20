import {StyleSheet} from 'react-native';
<<<<<<< HEAD
import colors from '../../utils/colors';
import { normalize, vh, vw } from '../../styles';
import { ROBOTO_BLACK, ROBOTO_REGULAR } from '../../styles/Fonts';

=======
import {Colors} from '../../utils/colors';
import {normalize, vh, vw} from '../../utils/dimension';
import { ROBOTO_BLACK, ROBOTO_REGULAR } from '../../utils/Fonts';
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    // bottom:vh(20)
=======
    backgroundColor: Colors.White,
    alignItems: 'center',
    justifyContent: 'center',
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
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
<<<<<<< HEAD
=======
    fontWeight: '900',
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
  },
  subTitle: {
    fontSize: normalize(16),
    fontFamily:ROBOTO_REGULAR,
<<<<<<< HEAD
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
=======
    fontWeight: '400',
    color: Colors.greyText,
    marginTop: vh(10),
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
  },
});
export default styles;
