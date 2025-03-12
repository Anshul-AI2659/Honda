import {StyleSheet} from 'react-native';
import {Colors} from '../../../../utils/colors';
import {SCREEN_WIDTH, vh, vw} from '../../../../utils/dimension';

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
    paddingTop: vh(10),
    paddingBottom: vh(20),
  },
  HIPlusHeaderStyle: {
    alignItems: 'flex-end',
  },
  headerImg: {
    marginLeft: vw(30),
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
    fontSize: 18,
    fontWeight: '700',
    color: Colors.White,
  },
  itemDetailsText: {
    width: vw(167),
    fontSize: 12,
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
    width: SCREEN_WIDTH,
  },
  customFlatListStyle: {
    paddingHorizontal: vw(10),
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
    marginHorizontal: vw(6),
    marginBottom: vh(20),
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
    fontSize: 14,
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
    fontSize: 18,
    fontWeight: '700',
    color: Colors.White,
  },
  bannerSubTitle: {
    width: vw(210),
    fontSize: 12,
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
    fontSize: vw(8.6),
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
    fontSize: 16,
    fontWeight: '700',
    marginTop: vh(10),
  },
  textHeaderItemTitle: {
    fontSize: 14,
    fontWeight: '400',
    marginTop: vh(8),
    color: '#7C8585',
  },
  textHeaderItemPrice: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: vh(8),
    color: '#050507',
  },
});

export default styles;
