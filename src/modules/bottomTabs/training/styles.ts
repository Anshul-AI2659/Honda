<<<<<<< HEAD
import {Platform, StyleSheet} from 'react-native';
// Utils
import colors from '../../../utils/colors';
// Styles
import {ROBOTO_MEDIUM} from '../../../styles/Fonts';
import {normalize, screenWidth, vh, vw} from '../../../styles/dimensions';
=======
import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/colors';
import {normalize, vh, vw} from '../../../utils/dimension';
import {ROBOTO_MEDIUM} from '../../../utils/Fonts';
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: colors.white,
  },
  header: {
    paddingHorizontal: vh(16),
    marginTop: Platform.OS === 'ios' ? vh(0) : vh(3),
=======
    backgroundColor: Colors.White,
  },
  header: {
    paddingVertical: vh(12),
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
  },
  profileIcon: {
    width: vw(40),
    height: vw(40),
    resizeMode: 'contain',
  },
  notificationButton: {
<<<<<<< HEAD
    backgroundColor: colors.headerButton,
=======
    backgroundColor: Colors.headerButton,
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
  },
  choiceContainer: {
    marginTop: vh(16),
    marginBottom: vh(4),
    paddingHorizontal: vw(11),
    flexDirection: 'row',
  },
  Button: {
    paddingVertical: vh(10),
    paddingHorizontal: vw(16),
    marginHorizontal: vw(5),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
<<<<<<< HEAD
    borderColor: colors.backButtonBackground,
    borderRadius: 16,
    backgroundColor: colors.white,
=======
    borderColor: Colors.tutorialInactiveDot,
    borderRadius: 16,
    backgroundColor: '#fff',
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
  },
  selectedButton: {
    paddingVertical: vh(10),
    paddingHorizontal: vw(16),
    marginHorizontal: vw(4),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
<<<<<<< HEAD
    borderColor: colors.primary,
=======
    borderColor: Colors.primary,
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
    backgroundColor: 'rgba(228, 29, 45, 0.1)',
    borderRadius: 16,
  },
  buttonText: {
    fontSize: normalize(14),
    fontFamily: ROBOTO_MEDIUM,
<<<<<<< HEAD
    color: colors.descritptionText,
=======
    color: Colors.description,
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
  },
  selectedButtonText: {
    fontSize: normalize(14),
    fontFamily: ROBOTO_MEDIUM,
<<<<<<< HEAD
    color: colors.primary,
=======
    color: Colors.primary,
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
  },
  customFlatListStyle: {
    paddingHorizontal: vw(8),
    alignItems: 'center',
  },
<<<<<<< HEAD
  textHeaderItemContainer: {
    width: vw(184),
    height: vw(220),
    backgroundColor: colors.white,
    borderRadius: 15.77,
    borderWidth: vw(2.63),
    borderColor: colors.backButtonBackground,
=======
  ItemContainer: {
    width: vw(184),
    height: vw(220),
    backgroundColor: Colors.White,
    borderRadius: 15.77,
    borderWidth: vw(2.63),
    borderColor: Colors.lightGrey,
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
    marginHorizontal: vw(8),
    alignItems: 'center',
    marginVertical: vh(12),
  },
<<<<<<< HEAD
  textHeaderImageContainer: {
=======
  ImageContainer: {
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
    width: vw(184),
    height: vw(136),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
<<<<<<< HEAD
    backgroundColor: colors.backButtonBackground,
  },
  textHeaderItemImage: {
=======
    backgroundColor: Colors.lightGrey,
  },
  ItemImage: {
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
    width: vw(184),
    height: vw(136),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
<<<<<<< HEAD
  textHeaderItemTitle: {
=======
  ItemTitle: {
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
    width: vw(155.09),
    textAlign: 'center',
    fontSize: normalize(16),
    fontFamily: ROBOTO_MEDIUM,
    marginTop: vh(18.46),
<<<<<<< HEAD
    color: colors.descritptionText,
  },
  listContainer: {
    marginBottom: vh(24),
    gap: vw(16),
    // paddingHorizontal: vh(16),
  },
  itemContainer: {
    width: vw(116),
    height: vw(156),
    backgroundColor: colors.white,
    alignItems: 'center',
    borderRadius: vw(12),
    marginHorizontal:vw(8),
    marginVertical:vh(8),
    borderWidth: vw(2),
    borderColor: colors.backButtonBackground,
  },
  imageContainer: {
    width: vw(116),
    height: vw(92),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: colors.backButtonBackground,
  },
  itemImage: {
    width: vw(100),
    height: vw(100),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  itemTitle: {
    fontSize: normalize(14),
    fontFamily:ROBOTO_MEDIUM,
    fontWeight: '500',
    width: vw(92),
    textAlign: 'center',
    color: colors.secondryBlack,
  },
  imageStyle: {
    width: vw(99),
    height: vw(12),
    paddingLeft:vw(6),
    marginTop:vh(20)
 },
  hiPlusImageStyle:{
    width: vw(43),
    height: vw(30),
    marginLeft:vw(8)
  },
  scrollViewInside:{
    // flex: 1,
    // alignItems:'center',
    // bottom:vh(20)
  },
  hiImage: {
    width: vh(40),
    height: vh(40),
    paddingLeft:vw(5)
  },
  shimmerStyle: {
    width: screenWidth / 3 - vh(12),
    height: vh(156),
    backgroundColor: colors.white,
    borderRadius: vh(8),
    borderWidth: 1,
    borderColor: colors.backButtonBackground,
    margin: vh(6),
  },
  extraCardStyle:{
    width:vw(116),
    backgroundColor: colors.white,
    borderRadius: vh(8),
    borderWidth: vw(2),
    borderColor: colors.backButtonBackground,
    height:vw(156),
    marginTop:vh(5)
 },
 listContainerHiPlus: {
  gap: vw(16),
  paddingHorizontal: vh(16),
  paddingBottom: vh(12),
},
=======
    color: Colors.description,
  },
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
});
export default styles;
