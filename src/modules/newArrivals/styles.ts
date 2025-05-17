import {Platform, StyleSheet} from 'react-native';
import { ROBOTO_BOLD, ROBOTO_MEDIUM, ROBOTO_REGULAR } from '../../styles/Fonts';
import colors from '../../utils/colors';
import { FONTS, normalize, screenWidth, vh, vw } from '../../styles';

export default StyleSheet.create({
  mainContainer: {
      flex: 1,
      backgroundColor: colors.white,
    },
    header: {
      marginTop: Platform.OS === 'ios' ? vh(0) : vh(3),
      paddingVertical: vh(14),
      paddingHorizontal: vw(16),
      ...Platform.select({
        ios: {
          shadowColor: 'rgba(0, 0, 0, 0.07)',
          shadowOffset: {width: 0, height: 4},
          shadowOpacity: 1,
          shadowRadius: 3,
        },
        android: {
          boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.07)',
         
        },
      }),
    },
    backButton: {
     width:vw(40),
     height:vw(40),
     resizeMode:'contain'
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
    customFlatListStyle: {
      paddingHorizontal: vw(8),
    },
    textHeaderItemContainer: {
      width: vw(182),
      height: vw(215),
      backgroundColor: colors.white,
      borderRadius: 12,
      marginHorizontal: vw(8),
      marginVertical: vh(12),
    },
    textHeaderImageContainer: {
      width: vw(182),
      height: vw(136),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 12,
      backgroundColor: '#F3F6FA',
    },
    textHeaderItemImage: {
      width: vw(100),
      height: vw(100),
      alignSelf: 'center',
      resizeMode: 'contain',
    },
    textHeaderItemNumber: {
      fontSize: normalize(16),
      fontFamily: ROBOTO_BOLD,
      fontWeight: '700',
      marginTop: vh(10),
    },
    textHeaderItemTitle: {
      fontSize: normalize(14),
      fontFamily: ROBOTO_REGULAR,
      fontWeight: '400',
      marginTop: vh(8),
      color: '#7C8585',
    },
    textHeaderItemPrice: {
      fontSize: normalize(14),
      fontFamily: ROBOTO_BOLD,
      fontWeight: '600',
      marginTop: vh(8),
      color: colors.black,
    },
    footer: {
      width: '100%',
      backgroundColor: colors.white,
      shadowColor: '#DCE3ED99',
      shadowOffset: {width: 0, height: -4},
      shadowOpacity: 0.9,
      shadowRadius: 40,
      elevation: 10,
      borderTopWidth: 1,
      borderTopColor: colors.borderSecond,
    },
    absolute: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1, // Ensure it appears above other components
     
    },
    footerContentContainer: {
      backgroundColor: colors.white,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: vh(14),
    },
    sortByButton: {
      flexDirection: 'row',
      width: vw(206),
      height: vw(36),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.white,
      borderRightWidth: 0.5,
      borderRightColor: colors.borderSecond,
    },
    sortByIcon: {
      width: vw(24),
      height: vw(24),
      resizeMode: 'contain',
    },
    sortByButtonText: {
      fontSize: normalize(18),
      fontFamily: ROBOTO_MEDIUM,
      fontWeight: '500',
      marginLeft: vw(12),
      color: colors.black,
    },
    filterButton: {
      flexDirection: 'row',
      width: vw(206),
      height: vw(36),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.white,
      borderLeftWidth: 0.5,
      borderLeftColor: colors.borderSecond,
    },
    filterIcon: {
      width: vw(24),
      height: vw(24),
      resizeMode: 'contain',
    },
    filterButtonText: {
      fontSize: normalize(16),
      fontFamily: ROBOTO_MEDIUM,
      fontWeight: '500',
      marginLeft: vw(12),
      color: colors.black,
    },
    typeFlat: {
      gap: vh(15),
    },
    textRange:{
      fontSize:vh(14),
      fontWeight:'400'
    },
    divider:{
      width:vw(380),height:vw(1),borderWidth:vw(0.5),borderColor:colors.borderDividerColor,top:vh(15),bottom:vh(5),marginVertical:vh(14)
    },
    checkbox: {
      width: 20,
      height: 20,
      borderWidth: 1,
      borderColor: '#999',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 8,
    },
    priceDisplay: {
      flexDirection: 'row',
      justifyContent: 'flex-end', 
      marginVertical: vh(10), 
    },
    priceText: {
      fontSize: vh(16),
      fontWeight: '600',
    },
    checked: {
      width: vw(12),
      height: vw(12),
      backgroundColor: colors?.primary,
    },
    title: {fontSize: vh(20), fontWeight: 'bold'},
    clearText: {color: colors?.primary, fontSize: vh(16)},
    sectionTitle: {fontSize: vh(16), fontWeight: '500', marginTop: vh(24)},
    slider: {width: '100%', height: vh(40)},
    priceLabels: {flexDirection: 'row', justifyContent: 'space-between'},
    categoryItem: {
      padding: vh(10),
     alignItems:'center',
      flexDirection: 'row',
      
    },
    sliderMarker: {
      backgroundColor: colors.primary,
      width: vh(24),
      height: vh(24),
      borderRadius: vh(12),
    },
    sliderSelected: {
      backgroundColor: colors?.primary,
  
    },
    sliderTrack: {
      height: vh(6),
      backgroundColor: '#FFE6E8',
      borderRadius:vh(20),
      
     
    },
    selectedCategoryText: {color: colors.primary, fontWeight: 'bold'},
    categoryText: {color: 'black', marginStart:vh(10)},
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: vh(20),
      backgroundColor: colors.white,
      paddingHorizontal: vh(16),
      height: vh(92),
      alignItems: 'center',
    },
    cancelButton: {
      padding: vh(10),
      borderWidth: 2,
      borderRadius: vh(16),
      width: screenWidth / 2 - vh(22),
      height: vh(52),
      borderColor: colors.inactiveDot,
      justifyContent: 'center',
      alignItems: 'center',
    },
    applyButton: {
      padding: vh(10),
      backgroundColor: colors.primary,
      width: screenWidth / 2 - vh(22),
      height: vh(52),
      borderRadius: vh(16),
      justifyContent: 'center',
      alignItems: 'center',
    },
    applyText: {color: colors.white, fontSize: vh(16), fontWeight: '800'},
    cancelText: {color: colors.black, fontSize: vh(16), fontWeight: '800'},
    typeButton: {
      padding: vh(10),
      borderWidth: 1,
      width: screenWidth / 4 + vh(12),
      marginTop: vh(16),
      borderColor: '#DCE3ED',
      borderRadius: 5,
      justifyContent:'center',
      alignItems:"center"
    },
    selectedType: {
      borderColor: colors.primary,
      backgroundColor:'#FFE6E8'
    },
    checkboxBox: {
      width: vh(20),
      height: vh(20),
      borderRadius: vh(2),
      justifyContent: 'center',
      alignItems: 'center',
    },
    uncheckedBox: {
      borderWidth: vh(2),
      borderColor: '#8CA2B4',
      backgroundColor: 'transparent',
    },
    checkedBox: {
      backgroundColor: 'black',
    },
    typeText: {
      color: 'black',
    },
    selectedTypeText: {
      color: colors.primary,
    },
    selectedTypesContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginHorizontal:vh(16),
      marginTop: vh(16),
    },
    
    selectedTypeTag: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor:colors.primary ,
      borderWidth: 1,
      borderRadius: vh(16),
      paddingHorizontal:vh(15),
      height:vh(38),
      justifyContent:'center',
      marginRight: vh(12),
    },
    cross:{
    height:vh(10),
    width:vh(10),
    tintColor:colors.primary
    },
    selectedTypeTextTag: {
      color: colors.primary,
      marginRight: vh(11),
      fontSize: vh(14),
      fontWeight:'400'
    },
    
    removeTypeIcon: {
      color: colors.primary,
      fontSize: normalize(16),
      fontFamily:FONTS.ROBOTO_MEDIUM
    },
  
    overlayContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 25, // Ensure it's above the main content but below BottomSheet
    },
    
    blurView: {
      flex: 1,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },

    closeButton: {
      position: 'absolute',
     
      top: vh(-30), 
      
      zIndex: 15,
      width: vh(34.29),
      height: vh(34.29),
      borderRadius: vh(17.15), 
      backgroundColor: colors.white, 
      alignItems: 'center',
      alignSelf:'center',
      justifyContent: 'center',
      
    },
    close: {
       height:vh(14.29),
      width:vh(14.29)
    },
    emptyContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:Platform.OS === 'ios' ? vh(-50) : vh(-40) ,
      alignSelf:'center',

    },
    emptyText: {
      fontSize: normalize(16),
     
      color: colors.descritptionText,
    },
  dot:{   
    position: 'absolute',
    top: vh(5),
    left: vw(72),
    width: vw(10),
    height: vh(10),
    borderRadius: vw(5),
    backgroundColor: colors.primary,
    zIndex: 10,
},
filterdot:{
  position: 'absolute',
    top: vh(5),
    left: vw(82),
    width: vw(10),
    height: vh(10),
    borderRadius: vw(5),
    backgroundColor: colors.primary,
    zIndex: 10,
}
})