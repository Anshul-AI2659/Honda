import {Platform, StyleSheet} from 'react-native';
import colors from '../../../../utils/colors';
import { normalize, vh, vw } from '../../../../styles';
import { ROBOTO_BOLD, ROBOTO_MEDIUM, ROBOTO_REGULAR } from '../../../../styles/Fonts';


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: vw(16),
  },
  header: {
    // paddingVertical: vh(14),
    marginTop: Platform.OS === 'ios' ? vh(0) : vh(3),
    // borderBottomWidth: vw(0.5),
    // borderBottomColor: 'rgba(0, 0, 0, 0.07)',
    // shadowColor: 'rgba(255, 255, 255, 1)',
    // shadowOffset: {width: 0, height: 0.5},
    // shadowOpacity: vw(0.4),
    // elevation: 2,
  },
  backButton: {
    width: vw(40),
    height: vw(40),
    resizeMode: 'contain',
  },
  subContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  mainImgContainer: {
    backgroundColor: colors.backButtonBackground,
    alignItems: 'center',
    paddingBottom: vh(27),
    paddingTop: vh(61),
    borderRadius: 16,
    marginTop: vh(20),
  },
  mainImg: {
    width: vw(348),
    height: vw(162.02),
    resizeMode: 'contain',
  },
  supportTextContainer: {
    marginTop: vh(16),
  },
  supportText: {
    width: vh(380),
    fontFamily: ROBOTO_REGULAR,
    fontSize: normalize(16),
    color:colors?.lightBlack
  },
  flatListContainer: {
    marginVertical: vh(16),
    gap: 16,
  },
  listColumnWrapper: {
    justifyContent: 'space-between',
  },
  itemContainer: {
    width: vw(182),
    height: vw(182),
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingHorizontal: vw(10),
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.borderSecond,
  },
  imageContainer: {
    padding: vw(0),
    marginTop: vh(20),
   //backgroundColor: 'rgba(228, 29, 45, 0.1)',
    borderRadius: 100,
  },
  itemImage: {
    width: vw(66),
    height: vw(66),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  itemTitle: {
    fontSize: normalize(14),
    fontFamily: ROBOTO_MEDIUM,
    fontWeight: '500',
    width: vw(108),
    lineHeight: 24,
    marginTop: vh(20),
    textAlign: 'center',
    color: colors.secondryBlack,
  },
  itemValue: {
    width: vw(161),
    fontSize: normalize(16),
    fontFamily: ROBOTO_BOLD,
    fontWeight: '800',
    textAlign: 'center',
  },
});
export default styles;
