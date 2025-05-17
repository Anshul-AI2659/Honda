import {Platform, StyleSheet} from 'react-native';
import { ROBOTO_BOLD, ROBOTO_MEDIUM, ROBOTO_REGULAR } from '../../styles/Fonts';
import colors from '../../utils/colors';
import { vh, vw, normalize } from '../../styles';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
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
    flexDirection: 'row',
  },
  Button: {
    paddingVertical: vh(10),
    paddingHorizontal: vw(16),
    marginHorizontal: vw(4),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.inactiveDot,
    borderRadius: 16,
    backgroundColor: colors.white,
  },
  selectedButton: {
    paddingVertical: vh(10),
    paddingHorizontal:vw(16),
    marginHorizontal: vw(14),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: vw(1),
    borderColor: colors.primary,
    backgroundColor: 'rgba(228, 29, 45, 0.1)',
    borderRadius: normalize(16),
  },
  buttonText: {
    fontSize: normalize(14),
    fontFamily: ROBOTO_MEDIUM,
    color: '#7C8585',
    fontWeight: '500',
  },
  selectedButtonText: {
    fontSize: normalize(14),
    fontFamily: ROBOTO_MEDIUM,
    color: colors.primary,
  },
  customFlatListStyle: {
    paddingHorizontal: vw(8),
    paddingBottom:vh(150)
  },
  textHeaderItemContainer: {
    width: vw(182),
    height: vw(215),
    backgroundColor: colors.white,
    borderRadius: 12,
    marginHorizontal: vw(8),
    marginVertical: vh(12),
  },
  textHeaderImageContainer: {
    width: vw(182),
    height: vw(136),
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