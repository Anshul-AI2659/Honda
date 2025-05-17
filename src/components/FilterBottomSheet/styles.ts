import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import { screenWidth, vh } from '../../styles';

const styles = StyleSheet.create({
  container: {zIndex:1,height:'60%'},
  content: {paddingHorizontal: vh(16)},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  typeFlat: {
    gap: vh(13),
  },
  textRange:{
    fontSize:vh(14),
    fontWeight:'400'
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
    width: 12,
    height: 12,
    backgroundColor: '#E41D2D',
  },
  title: {fontSize: vh(20), fontWeight: 'bold'},
  clearText: {color: '#E41D2D', fontSize: vh(16)},
  sectionTitle: {fontSize: vh(16), fontWeight: '500', marginTop: vh(24)},
  slider: {width: '100%', height: vh(40)},
  priceLabels: {flexDirection: 'row', justifyContent: 'space-between'},
  categoryItem: {
    padding: vh(10),

    flexDirection: 'row',
  },
  sliderMarker: {
    backgroundColor: colors.primary,
    width: vh(24),
    height: vh(24),
    borderRadius: vh(12),
  },
  sliderSelected: {
    backgroundColor: '#E41D2D',
  },
  sliderTrack: {
    height: 4,
    backgroundColor: '#FFE6E8',
  },
  disabledApplyButton: {
    backgroundColor: colors.backButtonBackground,
  },
  disabledApplyText: {
    color: colors.descritptionText,
  },
  selectedCategoryText: {color: '#E41D2D', fontWeight: 'bold'},
  categoryText: {color: 'black'},
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: vh(20),
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
  disabledText: {
    color: colors.inActiveTab,
  },
  cancelText: {color: colors.black, fontSize: vh(16), fontWeight: '800'},
  typeButton: {
    padding: vh(10),
    borderWidth: 1,
    width: screenWidth / 4 + vh(15),
    marginTop: vh(16),
    borderColor: '#DCE3ED',
    borderRadius: 5,
  },
  selectedType: {
    borderColor: colors.primary,
  },
  typeText: {
    color: 'black',
  },
  selectedTypeText: {
    color: colors.primary,
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
    top: vh(-45), 
    zIndex: 15,
    width: vh(40),
    height: vh(40),
    borderRadius: vh(20), 
    backgroundColor: colors.white, 
    alignItems: 'center',
    alignSelf:'center',
    justifyContent: 'center',
    
  },
  close: {
     height:vh(14.29),
    width:vh(14.29)
     
  },
})

export default styles;