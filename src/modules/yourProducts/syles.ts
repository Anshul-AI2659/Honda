import {Platform, StyleSheet} from 'react-native';
import {FONTS, normalize, vh, vw} from '../../styles';
import {ROBOTO_BOLD, ROBOTO_MEDIUM, ROBOTO_REGULAR} from '../../styles/Fonts';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    marginTop: Platform.OS === 'ios' ? vh(0) : vh(3),
    paddingVertical: vh(14),
    paddingHorizontal: vw(16),
  },
  backButton: {
    width: vw(40),
    height: vw(40),
    resizeMode: 'contain',
  },
  customFlatListStyle: {
    paddingHorizontal: vw(8),
    paddingBottom: vh(150),
    alignItems: 'center',
  },
  itemContainer: {
    width: vw(380),
    height: vw(285),
    backgroundColor: colors.white,
    alignItems: 'center',
    borderRadius: vw(12),
    borderWidth: vw(2),
    borderColor: colors.backButtonBackground,
    marginTop: vh(15),
  },
  imageContainer: {
    width: vw(380),
    height: vw(196),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: colors.backButtonBackground,
  },
  itemImage: {
    width: vw(178),
    height: vw(178),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  lowerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: vw(356),
    margin: vw(12),
    alignSelf: 'center',
  },
  warrantyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vh(8),
  },
  itemNumber: {
    fontSize: normalize(18),
    fontFamily: ROBOTO_BOLD,
  },
  itemTitle: {
    fontSize: normalize(14),
    fontFamily: ROBOTO_REGULAR,
    color: colors.descritptionText,
    marginTop: vh(4),
  },
  infoIcon: {
    width: vw(16),
    height: vw(16),
    resizeMode: 'contain',
  },
  warrantyText: {
    fontSize: normalize(12),
    fontFamily: ROBOTO_REGULAR,
    color: colors.secondryBlack,
    marginLeft: vw(4),
  },
  lowerRight: {
    alignItems: 'flex-end',
  },
  priceText: {
    fontSize: normalize(14),
    fontFamily: ROBOTO_MEDIUM,
    color: colors.secondryBlack,
  },
  buttonStyle: {
    width: vw(109),
    height: vw(36),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vw(8),
    marginTop: vh(13),
  },
  buttonText:{
    fontSize: normalize(12),
    fontFamily: FONTS?.ROBOTO_BOLD,
  },
  footer:{
    width:vw(412),
    height:vw(86),
  },
});
export default styles;
