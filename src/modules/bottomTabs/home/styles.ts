import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/colors';
import {normalize, screenWidth, vh, vw} from '../../../utils/dimension';
import { ROBOTO_BOLD, ROBOTO_EXTRABOLD, ROBOTO_MEDIUM, ROBOTO_REGULAR, ROBOTO_SEMIBOLD } from '../../../utils/Fonts';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  scrollView: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  header: {
    paddingVertical: vh(12),
  },
  profileIcon: {
    width: vw(40),
    height: vw(40),
    resizeMode: 'contain',
  },
  notificationButton: {
    backgroundColor: Colors.headerButton,
  },
  HIPlusHeaderStyle: {
    alignItems: 'flex-end',
  },
  corouselItemContainer: {
    flexDirection: 'row',
    backgroundColor: 'red',
    marginHorizontal: vw(10),
    paddingVertical: vh(15),
    borderRadius: 16,
  },
  itemTextContainer: {
    paddingHorizontal: vw(16),
  },
  itemHeaderText: {
    fontSize: normalize(18),
    fontFamily:ROBOTO_BOLD,
    fontWeight: '700',
    color: Colors.White,
  },
  itemDetailsText: {
    width: vw(167),
    fontFamily:ROBOTO_REGULAR,
    fontSize: normalize(12),
    color: Colors.White,
  },
  image: {
    width: vw(100),
    height: vw(100),
    resizeMode: 'contain',
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: vh(16),
    marginBottom: vh(20),
  },
  slide: {
    width: screenWidth,
  },
  customFlatListStyle: {
    marginTop:vh(12),
    marginBottom:vh(24),
  },
  HIPlusImgStyle: {
    width: vw(44),
    height: vw(35),
    resizeMode: 'contain',
  },
  itemContainer: {
    width: vw(140),
    height: vw(168),
    backgroundColor: Colors.White,
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: vw(8),
    borderWidth: 2,
    borderColor: Colors.lightGrey,
  },
  imageContainer: {
    width: vw(140),
    height: vw(104),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: Colors.lightGrey,
  },
  itemImage: {
    width: vw(100),
    height: vw(100),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  itemTitle: {
    fontSize: normalize(14),
    fontFamily:ROBOTO_MEDIUM,
    fontWeight: '500',
    width: vw(118),
    height: vw(40),
    marginTop: vh(20),
    textAlign: 'center',
    color: Colors.Black,
  },
  hiValuePlusImg: {
    width: vh(44),
    height: vh(35),
    resizeMode: 'contain',
  },
  banner: {
    marginBottom: vh(30),
  },
  bannerHeader: {
    paddingHorizontal: vw(16),
  },
  bannerContainer: {
    height: vw(141),
    flexDirection: 'row',
    backgroundColor: '#2C2C2C',
    marginHorizontal: vw(16),
    paddingVertical: vh(16),
    paddingHorizontal: vw(16),
    borderRadius: 16,
  },
  bannerImg: {
    width: vw(120),
    height: vw(120),
    resizeMode: 'contain',
  },
  bannerTextContainer: {
    marginLeft: vw(8),
  },
  bannerTitle: {
    fontSize: normalize(18),
    fontFamily:ROBOTO_BOLD,
    fontWeight: '700',
    color: Colors.White,
  },
  bannerSubTitle: {
    width: vw(210),
    fontSize: normalize(12),
    fontFamily:ROBOTO_REGULAR,
    lineHeight: 20,
    fontWeight: '400',
    color: Colors.White,
  },
  checkNowButton: {
    width: vw(96),
    height: vw(28),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: Colors.White,
  },
  checkNowText: {
    fontSize:normalize(8.6),
    fontFamily:ROBOTO_EXTRABOLD,
    fontWeight: '800',
  },
  textHeaderItemContainer: {
    width: vw(140),
    height: vw(183),
    backgroundColor: Colors.White,
    borderRadius: 12,
    marginHorizontal: vw(6),
    marginBottom: vh(20),
  },
  textHeaderImageContainer: {
    width: vw(140),
    height: vw(104),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: Colors.lightGrey,
  },
  textHeaderItemImage: {
    width: vw(100),
    height: vw(100),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  textHeaderItemNumber: {
    fontSize: normalize(16),
    fontFamily:ROBOTO_BOLD,
    fontWeight: '700',
    marginTop: vh(10),
  },
  textHeaderItemTitle: {
    fontSize: normalize(14),
    fontFamily:ROBOTO_REGULAR,
    fontWeight: '400',
    marginTop: vh(8),
    color: Colors.description,
  },
  textHeaderItemPrice: {
    fontSize: normalize(14),
    fontFamily:ROBOTO_SEMIBOLD,
    fontWeight: '600',
    marginTop: vh(8),
    color: Colors.blackText,
  },
});

export default styles;
