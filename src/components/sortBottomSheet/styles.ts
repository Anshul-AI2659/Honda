import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import { screenWidth, vh, vw } from '../../styles';


const styles = StyleSheet.create({
  container: {zIndex:1,height:'30%'},
  content: {paddingHorizontal: vh(16),paddingVertical:vh(8)},
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
    borderColor: colors.placeholderTextColor,
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
    backgroundColor:colors.borderten,
  },
  title: {fontSize: vh(20), fontWeight: 'bold'},
  clearText: {color:colors.borderten, fontSize: vh(16)},
  sectionTitle: {fontSize: vh(20), fontWeight: '500', marginBottom: vh(10)},
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
    backgroundColor:colors.borderten,
  },
  sliderTrack: {
    height: 4,
    backgroundColor:colors.borderthree,
  },
  selectedCategoryText: {color:colors.borderten, fontWeight: 'bold'},
  categoryText: {color: 'black'},
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: vh(10),
    backgroundColor: colors.white,
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
    width: screenWidth / 4 + vh(15),
    marginTop: vh(16),
    borderColor: colors.borderfour,
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
  optionText: {
    fontSize: vh(16),
    fontWeight:'400',
    color: 'black',
  },
  selectedIndicator: {
    color:colors.lightBlack,
    fontSize: vh(14),
  },
  radio:{
      height:vh(24),
      width:vh(24)
  },
  option: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: vh(16),
      borderBottomWidth: vw(1),
      borderBottomColor: '#F2F3F3',
    },
  
    option2: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: vh(12),
    },
    closeButton: {
      position: 'absolute',
      top: vh(-55), 
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