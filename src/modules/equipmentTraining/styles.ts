import {Platform, StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import {ROBOTO_MEDIUM} from '../../styles/Fonts';
import {normalize, vh, vw} from '../../styles';

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
  profileIcon: {
    width: vw(40),
    height: vw(40),
    resizeMode: 'contain',
  },
  notificationButton: {
    backgroundColor: colors.headerButton,
  },
  choiceContainer: {
    marginTop: vh(16),
    marginBottom: vh(8),
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
    borderColor: colors.backButtonBackground,
    borderRadius: 16,
    backgroundColor: colors.white,
  },
  selectedButton: {
    paddingVertical: vh(10),
    paddingHorizontal: vw(16),
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
    color: colors.descritptionText,
  },
  selectedButtonText: {
    fontSize: normalize(14),
    fontFamily: ROBOTO_MEDIUM,
    color: colors.primary,
  },
  customFlatListStyle: {
    // paddingHorizontal: vw(8),
    // alignItems: 'center',
    paddingHorizontal: vw(8),
    paddingBottom: vh(150),
    marginTop: vh(12),
  },
  textHeaderItemContainer: {
        width: vw(184),
        height: vw(220),
        backgroundColor: colors.white,
        borderRadius: vw(12),
        marginHorizontal: vw(8),
        marginVertical: vh(6),
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
    textHeaderItemTitle: {
      fontSize: normalize(14),
      fontFamily: ROBOTO_MEDIUM,
      color: colors.black,
      width:vw(150),
      lineHeight:vh(20),
      alignSelf:'center',
      textAlign:'center'
    },
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
