<<<<<<< HEAD
import { Platform, StyleSheet } from 'react-native';
// Styles
import { normalize, screenWidth, vh, vw } from '../../../styles/dimensions';
// Utils
import colors from '../../../utils/colors';
import { FONTS } from '../../../styles';

export default StyleSheet.create({
  hiImage: {
    width: vh(40),
    height: vh(40),
    paddingLeft:vw(5)
  },
  imageStyle: {
     width: vw(99),
     height: vw(12),
     paddingLeft:vw(6),
     marginTop:vh(20)
  },
  
  container: {
    flex: 1,
    backgroundColor: colors.white,
    // paddingLeft:vw(16),
  },
  searchInput: {
    flex: 1,
    fontSize: vw(13),
  },
  arrivalContainer:{
    paddingHorizontal: vh(12),
    // marginBottom: vh(36),
    gap: vh(10),
  },
  listContainer: {
    marginBottom: vh(24),
    gap: vw(16),
    paddingHorizontal: vh(16),
  },
  listContainerHiPlus: {
    gap: vw(16),
    paddingHorizontal: vh(16),
    paddingBottom: vh(12),
  },
  searchContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F6FA',
    borderRadius: vw(16),
    height:vh(56),
    borderWidth:1,
    borderColor:colors.inactiveDot,
  }, 
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
    marginVertical: vh(10),
    marginTop: vh(70),
    paddingHorizontal: vh(12),
    position: 'relative', 
    marginBottom:vh(20)
  },
  logo: {
    width: vw(100),
    height: vh(30),
    resizeMode: 'contain',
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -vw(50) }], 
  },
  notificationWrapper: {
    position: 'absolute',
    right: vh(15), 
  },
  notifyView: {
    height: vh(30),
    width: vh(30),
    borderRadius: vh(15),
    backgroundColor: '#F4F7FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationIcon: {
    width: vw(18),
    height: vh(18),
    resizeMode: 'contain',
  },
  himage:{
    width: vw(63),
    height: vh(30),
    marginStart:vh(10),
    resizeMode: 'contain',
   
    marginTop:vh(12)
  },
  header: {
    paddingHorizontal:vh(16),
    marginTop: Platform.OS === 'ios' ? vh(0) : vh(3)
    
  },
  headerImg: {
    marginLeft: vw(55),
  },
  leftButtonStyle:{
    backgroundColor:colors.backButtonBackground,
  },
  leftIconStyle:{
    width:vw(40),
    height:vw(40),
    resizeMode:'contain'
  },
  rightButtonStyle:{
    backgroundColor:colors.backButtonBackground,
  },
  extraCardStyle:{
     width:vw(116),
     backgroundColor: colors.white,
     borderRadius: vh(8),
     borderWidth: vw(2),
     borderColor: colors.backButtonBackground,
     height:vw(156),
     marginTop:vh(5)
  },
  newArrivalText:{
  fontSize:normalize(18),
   fontFamily:FONTS?.ROBOTO_BOLD
  },
  shimmerStyle: {
    width: screenWidth / 3 - vh(12),
    height: vh(156),
    backgroundColor: colors.white,
    borderRadius: vh(8),
    borderWidth: 1,
    borderColor: colors.backButtonBackground,
    margin: vh(6),
  },
  sellingText:{
    marginTop:vh(17),
    fontSize:normalize(18),
    fontFamily:FONTS?.ROBOTO_BOLD
  },
  tellingText:{
     fontSize:normalize(18),
     fontFamily:FONTS?.ROBOTO_BOLD
  },
  fab: {
    elevation: 7,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  
  fabOption: {
    marginBottom: vh(16),
  },
  fabContainer: {
    position: 'absolute',
    bottom: vh(0), 
    right: vh(8),
    alignItems: 'center',
    justifyContent:'center',
    
  },
  
});
=======
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
  searchContainer:{
    marginBottom:vh(10),
  },
  HIPlusHeaderStyle: {
    alignItems: 'flex-end',
  },
  corouselList:{
    marginTop:vh(20),
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
    fontWeight:'500',
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
    width:'100%',
    marginBottom: vh(30),
    paddingHorizontal: vw(16),
  },
  bannerHeader: {
  },
  bannerContainer: {
    flexDirection: 'row',
    backgroundColor: '#2C2C2C',
    paddingVertical: vh(11),
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
    lineHeight:20,
    fontWeight: '400',
    color: Colors.White,
  },
  checkNowButton: {
    width: vw(96),
    height: vw(28),
    marginTop:vh(12),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: Colors.White,
  },
  checkNowText: {
    fontSize:normalize(8.6),
    fontFamily:ROBOTO_EXTRABOLD,
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
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
