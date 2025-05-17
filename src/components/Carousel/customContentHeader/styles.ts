import {Platform, StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {normalize, vh} from '../../utils/dimension';
import {size} from '../../utils/size';
import {ROBOTO_BLACK, ROBOTO_REGULAR} from '../../utils/Fonts';

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
    fontSize: size.subTitle,
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
