import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {normalize, screenWidth, vh, vw} from '../../utils/dimension';
import { ROBOTO_EXTRABOLD, ROBOTO_MEDIUM, ROBOTO_REGULAR } from '../../utils/Fonts';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  header: {
    paddingVertical: vh(15),
  },
  backButton: {
    backgroundColor: Colors.headerButton,
  },

  slide: {
    width: screenWidth,
    paddingHorizontal: vw(26),
    paddingBottom: vh(24),
    alignItems: 'center',
    backgroundColor: Colors.lightGrey,
  },
  image: {
    width: vw(360),
    height: vw(360),
    resizeMode: 'contain',
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.White,
    paddingTop: vh(12),
    paddingBottom: vh(14),
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  bottomContainer: {
    width: screenWidth,
    backgroundColor: Colors.White,
    paddingHorizontal: vw(16),
  },
  productName: {
    fontSize: normalize(22),
    fontFamily:ROBOTO_EXTRABOLD,
    fontWeight: '800',
  },
  logoImg: {
    width: vw(90.1),
    height: vw(10.93),
    resizeMode: 'contain',
  },
  productDetailContainer: {
    marginBottom: vh(8),
  },
  productDetail: {
    fontSize: normalize(12),
    fontFamily:ROBOTO_REGULAR,
    fontWeight: '400',
    color: Colors.blackText,
  },
  readMore: {
    fontSize: normalize(14),
    fontFamily:ROBOTO_MEDIUM,
    fontWeight: '500',
    color: Colors.primary,
  },
  productDescription: {
    fontSize: normalize(14),
    fontFamily:ROBOTO_REGULAR,
    fontWeight: '400',
    color: Colors.description,
    lineHeight: 22.4,
  },
  allExpandableContainer: {
    paddingBottom: vh(20),
  },
  singleExpandableContainer: {
    marginTop: vh(24),
    paddingHorizontal: vw(16),
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  dealerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: vh(16),
    marginTop: vh(24),
    paddingHorizontal: vw(16),
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  dealer: {
    fontSize: normalize(16),
    fontFamily:ROBOTO_MEDIUM,
    fontWeight: '500',
    letterSpacing: 1,
    color: Colors.blackText,
  },
  locateDealer: {
    fontSize: normalize(14),
    fontFamily:ROBOTO_EXTRABOLD,
    fontWeight: '600',
    color: Colors.primary,
    textDecorationLine: 'underline',
  },
  alertBanner: {
    backgroundColor: Colors.lightGrey,
    borderRadius: 8,
    marginTop: vh(24),
    padding: vw(12),
    paddingLeft: vw(13),
  },
  alertHeader: {
    flexDirection: 'row',
  },
  infoImg: {
    width: vw(16),
    height: vw(16),
    resizeMode: 'contain',
  },
  alertTitle: {
    fontSize: normalize(14),
    fontFamily:ROBOTO_MEDIUM,
    fontWeight: '500',
    color: Colors.blackText,
    marginLeft: vw(8),
  },
  alertDescriptionContainer: {
    marginTop: vh(9),
  },
  alertDescription: {
    fontSize: normalize(14),
    fontFamily:ROBOTO_REGULAR,
    fontWeight: '400',
    color: Colors.description,
  },
  footer: {
    width: '100%',
    backgroundColor: Colors.White,
    shadowColor: '#DCE3ED99',
    shadowOffset: {width: 0, height: -4},
    shadowOpacity: 0.9,
    shadowRadius: 40,
    elevation: 10,
  },
  footerContentContainer: {
    backgroundColor: Colors.White,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: vw(16),
    paddingVertical: vh(15),
  },
  footerTextContainer: {
    backgroundColor: Colors.White,
    marginVertical: vh(5),
  },
  priceText: {
    fontSize: normalize(20),
    fontFamily:ROBOTO_MEDIUM,
    fontWeight: '500',
    color: Colors.blackText,
  },
  priceDetailText: {
    fontSize: normalize(12),
    fontFamily:ROBOTO_REGULAR,
    fontWeight: '400',
    color: Colors.description,
  },
  buyNowButton: {
    width: vw(174),
    height: vw(52),
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
  buyNowButtonText: {
    fontSize: normalize(16),
    fontFamily:ROBOTO_EXTRABOLD,
    fontWeight: '800',
    color: Colors.White,
  },
});
export default styles;
