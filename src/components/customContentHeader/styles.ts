import {Platform, StyleSheet} from 'react-native';
<<<<<<< HEAD
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { normalize, vh } from '../../styles';
import { ROBOTO_BLACK, ROBOTO_REGULAR } from '../../styles/Fonts';

=======
import {Colors} from '../../utils/colors';
import {normalize, vh} from '../../utils/dimension';
import {size} from '../../utils/size';
import {ROBOTO_BLACK, ROBOTO_REGULAR} from '../../utils/Fonts';
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625

const styles = StyleSheet.create({
  contentHeader: {},
  headerText: {
    fontSize: normalize(28),
    fontFamily: ROBOTO_BLACK,
    fontWeight: '900',
    color: Colors.Black,
  },
  detailText: {
    marginTop: vh(10),
<<<<<<< HEAD
    fontSize: normalize(16),
=======
    fontSize: size.subTitle,
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
    fontFamily: ROBOTO_REGULAR,
    color: Colors.greyText,
  },
  changeNumberText: {
    fontSize: normalize(16),
    fontFamily: ROBOTO_REGULAR,
    fontWeight: '400',
    marginTop:vh(8),
    textDecorationLine: 'underline',
    textDecorationColor: Colors.Black,
    ...Platform.select({
      android: {
        textDecorationLine: 'underline',
      },
    }),
  },
});
export default styles;
