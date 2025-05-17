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
searchContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#F3F6FA',
      borderRadius: vw(16),
      height:vh(56),
      borderWidth:1,
      borderColor:colors.inactiveDot,
    },
  customFlatListStyle: {
    paddingHorizontal: vw(8),
    paddingBottom: vh(150),
    marginTop: vh(12),
  },
  textHeaderItemContainer: {
    width: vw(182),
    height: vw(215),
    backgroundColor: colors.white,
    borderRadius: 12,
    marginHorizontal: vw(8),
    marginVertical: vh(8),
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
    backgroundColor: '#F3F6FA',
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
});
export default styles;
