<<<<<<< HEAD
import {Platform, StyleSheet} from 'react-native';
import { ROBOTO_BOLD, ROBOTO_MEDIUM, ROBOTO_REGULAR } from '../../styles/Fonts';
import colors from '../../utils/colors';
import { vh, vw, normalize } from '../../styles';
=======
import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {normalize, vh, vw} from '../../utils/dimension';
import {
  ROBOTO_BOLD,
  ROBOTO_MEDIUM,
  ROBOTO_REGULAR,
  ROBOTO_SEMIBOLD,
} from '../../utils/Fonts';
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: colors.white,
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
  backButton: {
   width:vw(40),
   height:vw(40),
   resizeMode:'contain'
  },
  searchContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#F3F6FA',
      borderRadius: vw(16),
      height:vh(56),
      borderWidth:1,
      borderColor:colors.inactiveDot,
    },
  choiceContainer: {
    marginTop: vh(10),
    marginBottom: vh(4),
    paddingHorizontal: vw(4),
=======
    backgroundColor: Colors.White,
  },
  header: {
    paddingVertical: vh(14),
    borderBottomWidth: 1,
    borderBottomColor: '#00000012',
  },
  backButton: {
    backgroundColor: Colors.headerButton,
  },
  searchContainer: {
    marginHorizontal: vw(16),
  },
  choiceContainer: {
    marginTop: vh(16),
    marginBottom: vh(4),
    paddingHorizontal: vw(12),
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
    flexDirection: 'row',
  },
  Button: {
    paddingVertical: vh(10),
    paddingHorizontal: vw(16),
    marginHorizontal: vw(4),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
<<<<<<< HEAD
    borderColor: colors.inactiveDot,
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
    paddingHorizontal:vw(16),
<<<<<<< HEAD
    marginHorizontal: vw(14),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: vw(1),
    borderColor: colors.primary,
    backgroundColor: 'rgba(228, 29, 45, 0.1)',
    borderRadius: normalize(16),
=======
    marginHorizontal: vw(4),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.primary,
    backgroundColor: 'rgba(228, 29, 45, 0.1)',
    borderRadius: 16,
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
  },
  buttonText: {
    fontSize: normalize(14),
    fontFamily: ROBOTO_MEDIUM,
<<<<<<< HEAD
    color: '#7C8585',
=======
    color: Colors.description,
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
    fontWeight: '500',
  },
  selectedButtonText: {
    fontSize: normalize(14),
    fontFamily: ROBOTO_MEDIUM,
<<<<<<< HEAD
    color: colors.primary,
  },
  customFlatListStyle: {
    paddingHorizontal: vw(8),
    paddingBottom:vh(150)
=======
    fontWeight: '500',
    color: Colors.primary,
  },
  customFlatListStyle: {
    paddingHorizontal: vw(8),
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
  },
  textHeaderItemContainer: {
    width: vw(182),
    height: vw(215),
<<<<<<< HEAD
    backgroundColor: colors.white,
=======
    backgroundColor: Colors.White,
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
    borderRadius: 12,
    marginHorizontal: vw(8),
    marginVertical: vh(12),
  },
  textHeaderImageContainer: {
    width: vw(182),
    height: vw(136),
<<<<<<< HEAD
    flexDirection: 'row',
    borderRadius: 12,
    backgroundColor: '#F3F6FA',
  },
  textHeaderItemImage: {
    width: vw(135),
    height: vw(128),
    marginTop: vh(4),
    marginLeft: vw(12),
    resizeMode: 'contain',
  },
  favouriteContainer: {
    width: vw(22),
    height: vw(22),
    marginTop: vh(6),
    marginLeft: vw(1),
    borderRadius: vw(140),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  favouriteImg: {
    width: vw(16),
    height: vw(15.44),
=======
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: Colors.lightGrey,
  },
  textHeaderItemImage: {
    width: vw(100),
    height: vw(100),
    alignSelf: 'center',
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
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
<<<<<<< HEAD
    marginTop: vh(8),
    color: colors.descritptionText,
  },
  textHeaderItemPrice: {
    fontSize: normalize(14),
    fontFamily: ROBOTO_MEDIUM,
    fontWeight: '600',
    marginTop: vh(8),
    color: colors.secondryBlack,
  },
  searchHeader:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  calculatorContainer: {
    position: 'absolute',
    bottom: vh(30), // adjust as needed
    left:vw(120),
    zIndex: 1,
    elevation: 8, // for Android shadow layering
  },
  
  calculatorImage: {
    width: vw(195),  // adjust size as needed
    height: vw(70.18),
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
  
});
export default styles;
=======
    fontWeight: '400',
    marginTop: vh(8),
    color: Colors.description,
  },
  textHeaderItemPrice: {
    fontSize: normalize(14),
    fontFamily: ROBOTO_SEMIBOLD,
    fontWeight: '600',
    marginTop: vh(8),
    color: Colors.blackText,
  },
});
export default styles;
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
