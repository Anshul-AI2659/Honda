import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {SCREEN_WIDTH, vh, vw} from '../../utils/dimension';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  header: {
    paddingVertical: vh(15),
  },
  headerImg: {
    marginRight: vw(30),
  },
  slide: {
    width: SCREEN_WIDTH,
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
    width: SCREEN_WIDTH,
    backgroundColor: Colors.White,
    paddingHorizontal: vw(16),
  },
  productName: {
    fontSize: 22,
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
    fontSize: 12,
    fontWeight: '400',
    color: '#050507',
  },
  readMore: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.primary,
  },
  productDescription: {
    fontSize: 14,
    fontWeight: '400',
    color: '#7C8585',
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
    borderColor: '#F2F3F3',
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
    borderColor: '#F2F3F3',
  },
  dealer: {
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 1,
    color: '#050507',
  },
  locateDealer: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.primary,
    textDecorationLine: 'underline',
  },
  alertBanner: {
    backgroundColor: '#F3F6FA',
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
    fontSize: 14,
    fontWeight: '500',
    color: '#050507',
    marginLeft: vw(8),
  },
  alertDescriptionContainer: {
    marginTop: vh(9),
  },
  alertDescription: {
    fontSize: 14,
    fontWeight: '400',
    color: '#7C8585',
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
    fontSize: 20,
    fontWeight: '500',
    color: '#050507',
  },
  priceDetailText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#7C8585',
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
    fontSize: 16,
    fontWeight: '800',
    color: Colors.White,
  },
});
export default styles;
