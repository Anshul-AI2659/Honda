<<<<<<< HEAD
import {Platform, StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import { vw, vh, normalize } from '../../styles';
import { ROBOTO_BOLD, ROBOTO_REGULAR } from '../../styles/Fonts';
=======
import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {normalize, vh, vw} from '../../utils/dimension';
import {ROBOTO_BOLD, ROBOTO_REGULAR, ROBOTO_SEMIBOLD} from '../../utils/Fonts';
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: colors.white,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: vw(8),
    paddingTop: vh(20),
    marginBottom:vh(27)
  },
  header: {
    marginTop: Platform.OS === 'ios' ? vh(0) : vh(3),
    paddingVertical: vh(14),
    paddingHorizontal: vw(16),
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.07)',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: .5,
      
      },
      android: {
        boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.07)',
      },
    }),
  },
  backIcon: {
    width: vw(40),
    height: vw(40),
=======
    backgroundColor: Colors.White,
  },
  scrollView: {
    flex: 1,
    backgroundColor: Colors.White,
    paddingHorizontal: vw(8),
    paddingVertical: vh(20),
  },
  header: {
    paddingVertical: vh(14),
    borderBottomWidth: 1,
    borderBottomColor: '#00000012',
    shadowColor: '#00000012',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.9,
    shadowRadius: 14,
    elevation: 3,
  },
  backButton: {
    backgroundColor: Colors.headerButton,
  },
  backIcon: {
    width: vw(24),
    height: vw(24),
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
    resizeMode: 'contain',
  },
  customFlatListStyle: {
    marginBottom: vh(36),
    marginTop: vh(16),
  },
  textHeaderItemContainer: {
    width: vw(140),
    height: vw(183),
<<<<<<< HEAD
    backgroundColor: colors.white,
=======
    backgroundColor: Colors.White,
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
    borderRadius: 12,
    marginHorizontal: vw(8),
  },
  textHeaderImageContainer: {
    width: vw(140),
    height: vw(104),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
<<<<<<< HEAD
    backgroundColor: colors.backButtonBackground,
=======
    backgroundColor: Colors.lightGrey,
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
  },
  textHeaderItemImage: {
    width: vw(100),
    height: vw(100),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  textHeaderItemNumber: {
    fontSize: normalize(16),
    fontFamily: ROBOTO_BOLD,
    fontWeight: '700',
    marginTop: vh(10),
  },
  textHeaderItemTitle: {
    fontSize: normalize(14),
    fontFamily: ROBOTO_REGULAR,
    fontWeight: '400',
    marginTop: vh(8),
<<<<<<< HEAD
    color: colors.descritptionText,
  },
  textHeaderItemPrice: {
    fontSize: normalize(14),
    fontFamily: ROBOTO_BOLD,
    fontWeight: '600',
    marginTop: vh(8),
    color: colors.secondryBlack,
=======
    color: Colors.description,
  },
  textHeaderItemPrice: {
    fontSize: normalize(14),
    fontFamily: ROBOTO_SEMIBOLD,
    fontWeight: '600',
    marginTop: vh(8),
    color: Colors.blackText,
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
  },
});

export default styles;
