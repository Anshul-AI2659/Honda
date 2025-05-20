import {StyleSheet} from 'react-native';
<<<<<<< HEAD
import colors from '../../utils/colors';
import { vh, normalize } from '../../styles';
import { ROBOTO_MEDIUM, ROBOTO_REGULAR } from '../../styles/Fonts';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
=======
import {Colors} from '../../utils/colors';
import {normalize, vh} from '../../utils/dimension';
import { ROBOTO_MEDIUM, ROBOTO_REGULAR } from '../../utils/Fonts';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.White,
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
    paddingVertical: vh(16),
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    fontSize: normalize(16),
    fontFamily:ROBOTO_MEDIUM,
    fontWeight: '500',
    letterSpacing: 1,
<<<<<<< HEAD
    color: colors.secondryBlack,
=======
    color: Colors.blackText,
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
  },
  img: {
    height: vh(24),
    width: vh(24),
<<<<<<< HEAD
    tintColor: colors.black,
=======
    tintColor: Colors.Black,
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    marginBottom: vh(8),
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: vh(8),
  },
  itemFeature: {
    fontSize: normalize(14),
    fontFamily:ROBOTO_REGULAR,
    fontWeight: '400',
<<<<<<< HEAD
    color: colors.secondryBlack,
=======
    color: Colors.blackText,
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
  },
  itemValue: {
    fontSize: normalize(14),
    fontFamily:ROBOTO_MEDIUM,
    fontWeight: '500',
<<<<<<< HEAD
    color: colors.secondryBlack,
=======
    color: Colors.blackText,
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
  },
});
export default styles;
