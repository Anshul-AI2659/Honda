import {StyleSheet} from 'react-native';
<<<<<<< HEAD
import colors from '../../utils/colors';
import { normalize, vh, vw } from '../../styles';
import { ROBOTO_MEDIUM } from '../../styles/Fonts';
=======
import {Colors} from '../../utils/colors';
import {normalize, vh, vw} from '../../utils/dimension';
import {ROBOTO_MEDIUM} from '../../utils/Fonts';
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625

const styles = StyleSheet.create({
  header: {
    paddingVertical: vh(12),
<<<<<<< HEAD
   
    backgroundColor: colors.white,
=======
    paddingHorizontal: vw(16),
    backgroundColor: Colors.White,
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
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
<<<<<<< HEAD
    backgroundColor: colors.white,
=======
    backgroundColor: Colors.White,
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
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
<<<<<<< HEAD
    color: colors.secondryBlack,
    // marginTop: vh(8),
=======
    fontWeight: '500',
    color: Colors.blackText,
    marginTop: vh(8),
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
  },
  rightButton: {
    width: vw(40),
    height: vw(40),
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
<<<<<<< HEAD
    backgroundColor: colors.white,
  },
  imageView:{
    alignItems:'center',
    rowGap: vh(8)
=======
    backgroundColor: Colors.White,
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
  },
  rightIcon: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
  },
<<<<<<< HEAD
  rightText:{
    fontSize:normalize(14),
    fontWeight:'400'
  }
=======
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
});
export default styles;
