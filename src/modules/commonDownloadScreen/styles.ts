import {Platform, StyleSheet} from 'react-native';
import {ROBOTO_BOLD, ROBOTO_MEDIUM, ROBOTO_REGULAR} from '../../styles/Fonts';
import colors from '../../utils/colors';
import {vh, vw, normalize} from '../../styles';

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
    width: vw(40),
    height: vw(40),
    resizeMode: 'contain',
  },
  searchContainer: {
    marginHorizontal: vw(16),
  },
  customFlatListStyle: {
    paddingHorizontal: vw(8),
    paddingBottom: vh(150),
    marginTop: vh(12),
  },
  textHeaderItemContainer: {
    width: vw(185),
    height: vw(220),
    backgroundColor: colors.white,
    borderRadius: vw(12),
    marginHorizontal: vw(8),
    marginVertical: vh(8),
    borderWidth:vw(2),
    borderColor:colors.backButtonBackground
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
    width: vw(70),
    height: vw(70),
    alignSelf: 'center',
    resizeMode: 'contain',
    backgroundColor: '#F3F6FA',
  },
  videoItem:{
    width: vw(180),
    height: vw(136),
    alignSelf: 'center',
    resizeMode: 'contain',
    backgroundColor: '#F3F6FA',
  },
  textHeaderItemNumber: {
    fontSize: normalize(16),
    fontFamily: ROBOTO_BOLD,
    width:vw(150),
   textAlign:'center'
  },
  textHeaderItemTitle: {
    fontSize: normalize(14),
    fontFamily: ROBOTO_MEDIUM,
    color: colors.black,
    width:vw(150),
    textAlign:'center'
  },
  textHeaderItemPrice: {
    fontSize: normalize(14),
    fontFamily: ROBOTO_MEDIUM,
    color: colors.secondryBlack,
    width:vw(150),
    textAlign:'center'
  },
  seeMoreRight: {flex:1,justifyContent:'center',alignItems:'center'},
  download:{
    width:vh(28),
    height:vh(28),
    position:'absolute',
    right:vh(6),
    top:vh(6)
    },
    buttonContainer: {
      borderRadius: vw(12),
      backgroundColor: '#F3F6FA',
      borderColor: '#F3F6FA'
  },
});
export default styles;
