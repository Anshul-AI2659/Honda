//lib import
import { Platform, StyleSheet } from 'react-native';
// Styles
import { FONTS, screenWidth, vh, vw } from '../../../styles';
// Utils
import colors from '../../../utils/colors';

export default StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: colors.white,
      paddingHorizontal:vw(16),
     
    },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      title: {
        fontSize: vh(28),
        fontFamily:FONTS.ROBOTO_BLACK,

      },
      subtitle: {
        fontSize: vh(16),
        color: colors.grey,
        fontWeight: '400',
        marginTop: vh(8),
      },
      grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: vh(16),
        marginTop: vh(24),
      },
      roleCard: {
        width: screenWidth/3+ vh(42),
        height: vw(182),
        backgroundColor: colors.backButtonBackground,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: vh(16),
      },
      roleIcon: {
        width: vh(60),
        height: vh(60),
        resizeMode:'contain',
      },
      roleText: {
        fontSize: vh(20),
        fontWeight: '500',
        color: colors.lightBlack,
        marginTop:vh(25),
        letterSpacing:vw(0.4)
      },
       backButton: {
          right: Platform.OS === 'android' ? vw(14) : vw(0)
        },
        backIcon: {
          width: vw(40),
          height: vw(40),
          resizeMode: 'contain',
        },
        HeadingContainer:{
          // paddingVertical:vh(20),
          // paddingHorizontal:vw(16)
          marginTop:vh(16)
        }
})