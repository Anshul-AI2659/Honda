import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import { normalize, vh, vw } from '../../styles';
import { ROBOTO_MEDIUM } from '../../styles/Fonts';

const styles = StyleSheet.create({
  header: {
    paddingVertical: vh(12),
   
    backgroundColor: colors.white,
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
    backgroundColor: colors.white,
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
    color: colors.secondryBlack,
    // marginTop: vh(8),
  },
  rightButton: {
    width: vw(40),
    height: vw(40),
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: colors.white,
  },
  imageView:{
    alignItems:'center',
    rowGap: vh(8)
  },
  rightIcon: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
  },
  rightText:{
    fontSize:normalize(14),
    fontWeight:'400'
  }
});
export default styles;
