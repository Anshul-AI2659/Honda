import { Platform, StyleSheet } from 'react-native';
// Utils
import colors from '../../../utils/colors';
// Styles
import { vh, vw, normalize, screenWidth } from '../../../styles';
import { ROBOTO_BOLD, ROBOTO_MEDIUM, ROBOTO_REGULAR } from '../../../styles/Fonts';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    paddingHorizontal:vh(16),
    marginTop: Platform.OS === 'ios' ? vh(0) : vh(3),
  },
  profileIcon: {
    width: vw(40),
    height: vw(40),
    resizeMode: 'contain',
  },
  notificationButton: {
    backgroundColor: colors.headerButton,
  },
  // searchContainer:{
  //   marginBottom:vh(24),
  // },
  searchContainer:{
    marginBottom:vh(24),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F6FA',
    borderRadius: vw(16),
    height:vh(56),
    borderWidth:1,
    borderColor:colors.inactiveDot,
  },
  HIPlusHeaderStyle: {
    alignItems: 'flex-end',
  },
  corouselList:{
    marginTop:vh(20),
  },
  corouselItemContainer: {
    flexDirection: 'row',
    backgroundColor: 'red',
    marginHorizontal: vw(10),
    paddingVertical: vh(15),
    borderRadius: 16,
  },
  itemTextContainer: {
    
  },
  itemHeaderText: {
    fontSize: normalize(18),
    fontFamily:ROBOTO_BOLD,
    fontWeight: '700',
    color: colors.white,
  },
  itemDetailsText: {
    width: vw(167),
    fontFamily:ROBOTO_REGULAR,
    fontWeight:'500',
    fontSize: normalize(12),
    color: colors.white,
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
    backgroundColor: colors.white,
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: vw(8),
    borderWidth: 2,
    borderColor: colors.backButtonBackground,
  },
  imageContainer: {
    width: vw(140),
    height: vw(104),
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
    fontFamily:ROBOTO_MEDIUM,
    fontWeight: '500',
    width: vw(118),
    height: vw(40),
    marginTop: vh(20),
    textAlign: 'center',
    color: colors.black,
  },
  hiValuePlusImg: {
    width: vh(44),
    height: vh(35),
    resizeMode: 'contain',
  },
  banner: {
    width:'100%',
    marginBottom: vh(30),
    
  },
  bannerHeader: {
  },
  bannerContainer: {
    flexDirection: 'row',
    backgroundColor: '#2C2C2C',
    paddingVertical: vh(11),
   
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
    color: colors.white,
  },
  bannerSubTitle: {
    width: vw(210),
    fontSize: normalize(12),
    fontFamily:ROBOTO_REGULAR,
    lineHeight:20,
    fontWeight: '400',
    color: colors.white,
  },
  checkNowButton: {
    width: vw(96),
    height: vw(28),
    marginTop:vh(12),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: colors.white,
  },
  checkNowText: {
    fontSize:normalize(8.6),
    fontFamily:ROBOTO_BOLD,
  },
  textHeaderItemContainer: {
    width: vw(140),
    height: vw(183),
    backgroundColor: colors.white,
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
    backgroundColor: colors.backButtonBackground,
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
    color: colors.descritptionText,
  },
  textHeaderItemPrice: {
    fontSize: normalize(14),
    fontFamily:ROBOTO_BOLD,
    fontWeight: '600',
    marginTop: vh(8),
    color: colors.secondryBlack,
  },

  imageStyle: {
    width: vw(99),
    height: vw(12),
  
    marginTop:vh(9),
    
 },
 extraCardStyle:{
      width:vw(116),
         backgroundColor: colors.white,
         borderRadius: vh(8),
         borderWidth: vw(2),
         borderColor: colors.backButtonBackground,
         height:vw(156)
   },
   listContainer: {
    marginBottom: vh(24),
    gap: vw(16),
    marginTop:vh(12),
   
    paddingHorizontal:vh(16),
   
  },
  listContainerHiPlus: {
    gap: vw(16),
    paddingHorizontal:vh(16),
    paddingBottom: vh(24),
  },
  himage:{
    width: vw(63),
    height: vh(30),
    marginStart:vh(10),
    resizeMode: 'contain',
  },
  hiImage: {
    width: vh(40),
    height: vh(40),
    paddingLeft:vw(5)
  },
  shimmerLoader:{
    width: screenWidth / 3 - vh(12),
    height: vh(156),
    backgroundColor: colors.white,
    borderRadius: vh(8),
    borderWidth: 1,
    borderColor: colors.backButtonBackground,
    margin: vh(6),
  }
});

export default styles;