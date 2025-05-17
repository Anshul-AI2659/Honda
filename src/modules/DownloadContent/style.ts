import { Platform, StyleSheet } from "react-native";
import colors from "../../utils/colors";
import { FONTS, normalize, vh, vw } from "../../styles";


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    paddingHorizontal: vh(16),
    marginTop: Platform.OS === 'ios' ? vh(0) : vh(3),
  },
  profileIcon: {
    width: vw(40),
    height: vw(40),
    resizeMode: 'contain',
  },
  notificationButton: {
    width:vw(40),
    height:vw(40),
    resizeMode:'contain'
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
    fontFamily: FONTS.ROBOTO_MEDIUM,
    color: colors.descritptionText,
  },
  selectedButtonText: {
    fontSize: normalize(14),
    fontFamily: FONTS?.ROBOTO_MEDIUM,
    color: colors.primary,
  },
  customFlatListStyle: {
    paddingHorizontal: vw(8),
    alignItems: 'center',
  },
  textHeaderItemContainer: {
    width: vw(184),
    height: vw(220),
    backgroundColor: colors.white,
    borderRadius: 15.77,
    borderWidth: vw(2.63),
    borderColor: colors.backButtonBackground,
    marginHorizontal: vw(8),
    alignItems: 'center',
    marginVertical: vh(12),
  },
  textHeaderImageContainer: {
    width: vw(184),
    height: vw(136),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: colors.backButtonBackground,
  },
  textHeaderItemImage: {
    width: vw(184),
    height: vw(136),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  textHeaderItemTitle: {
    width: vw(155.09),
    textAlign: 'center',
    fontSize: normalize(16),
    fontFamily: FONTS?.ROBOTO_MEDIUM,
    marginTop: vh(18.46),
    color: colors.descritptionText,
  },
  listContainer: {
    alignItems:'center',
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
    fontFamily:FONTS?.ROBOTO_MEDIUM,
    fontWeight: '500',
    width: vw(92),
    textAlign: 'center',
    color: colors.secondryBlack,
  },
  imageStyle: {
    width: vw(99),
    height: vw(12),
    marginTop:vh(20),
    marginLeft:vw(8)
  },
  hiPlusImageStyle:{
    width: vw(43),
    height: vw(30),
    marginLeft:vw(8)
  },
  scrollViewInside:{
    flex: 1,
    alignItems:'center',
    bottom:vh(5)
  }
});
export default styles;
