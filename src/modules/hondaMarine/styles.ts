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
    marginHorizontal: vw(4),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: 'rgba(228, 29, 45, 0.1)',
    borderRadius: 16,
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
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vw(12),
    backgroundColor: '#F3F6FA',
  },
  textHeaderItemImage: {
    width: vw(100),
    height: vw(100),
    alignSelf: 'center',
    resizeMode: 'contain',
    backgroundColor:'#F3F6FA'
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
  calculatorImage:{
   marginTop:vh(20),marginRight:vw(14),
   height:vw(56),
   width:vw(56)
  }
});
export default styles;
