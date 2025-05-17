import {StyleSheet,Dimensions} from 'react-native';
import { FONTS, FontsStyles, vh, vw } from '../../../styles';
import colors from '../../../utils/colors';
import { ROBOTO_BOLD } from '../../../styles/Fonts';
const {width: screenWidth} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: vh(40),
  },
  slideContainer: {
    width: screenWidth,
    alignItems: 'center',
    
  },
  img:{
   marginTop:vh(77),
   height:vh(16),
   width:vh(131),
   resizeMode:'contain'  
  },
  header: {
       
    flexDirection: 'row',
    alignItems: 'center',
  },
  contain:{justifyContent: 'center', alignItems: 'center', flex: 0.9},

  headView:{marginHorizontal: vh(20)},
  hondaText: {
    fontSize: vw(22),
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
    marginBottom: vh(10),
  },
  productImage: {
    width: vw(340),
    height: vw(340),
  },
  head: {
    fontSize: vw(22),
    fontFamily: FONTS.ROBOTO_BOLD,
    textAlign: 'center',
    marginTop: vh(15),
  },
  description: {
    fontSize: vw(16),
    textAlign: 'center',
    color: colors.descritptionText,
    marginHorizontal: vw(20),
    marginTop: vh(5),
    width:vw(353),
    letterSpacing:0
  },
  dot: {
    height: vh(8),
    borderRadius: vw(4),
    backgroundColor: colors.borderSecond,
    marginHorizontal: vw(4),
  },
  pagination: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: vh(56),
  },
  
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: screenWidth - vw(48),
    alignSelf: 'center',
    marginBottom: vh(70),
  },
  skipText: {
    fontSize: vw(16),
    color: colors.primary,
    fontFamily:ROBOTO_BOLD,
  },
 
  startedButton:{
    backgroundColor: colors?.primary,
    width:'100%',
  },
  startedButtonText:{
    fontFamily:FONTS?.ROBOTO_BOLD,
  },

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: vw(24),
    marginBottom:vh(70)
  },
  nextButton: {
    width: vw(174),
    height: vw(52),
    backgroundColor: colors.primary,
    borderRadius: vw(16),
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonText: {
    color: colors.white,
    fontSize: vh(16),
    fontFamily: ROBOTO_BOLD,
    textAlign: 'center',
    letterSpacing:vw(0.4)
  },
  skipButton: {
    width: vw(93),
    height: vw(20),
    marginLeft: vw(14),
    backgroundColor: colors.white,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  skipButtonText: {
    color: colors.primary,
    fontSize: vh(16),
    fontFamily: ROBOTO_BOLD,
    fontWeight: '700',
  },
  getStartedButtonContainer: {
    paddingHorizontal: vw(16),
   marginBottom:vh(70)
  },
  getStartedButton: {
    width: '100%',
    height: vw(56),
    backgroundColor: colors.primary,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  getStartedButtonText: {
    color: colors.white,
    fontSize: vh(16),
    fontFamily: ROBOTO_BOLD,
    fontWeight: '800',
    textAlign: 'center',
  },

});