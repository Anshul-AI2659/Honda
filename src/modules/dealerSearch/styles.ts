import {Dimensions, Platform, StyleSheet} from 'react-native';
import { vh, vw } from '../../styles';
import colors from '../../utils/colors';
const {width: screenWidth} = Dimensions.get('window');
export default StyleSheet.create({
    timeIMg: {
        width: vh(18),
        height: vh(18),
      },
      locImg: {
        width: vh(18),
        height: vh(18),
      },
      dealerImg: {
        width: vh(118),
        height: vh(118),
        borderRadius: vh(8),
      },
      mapFlex: {
        flex: 1,
      },
      cardRow: {
        flexDirection: 'row',
      },
      flatStyle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
      },
      directionImg: {
        width: vh(16),
        height: vh(16),
        tintColor: '#7C8585',
        marginRight: vh(8),
      },
      callImg: {
        width: vh(16),
        height: vh(16),
        tintColor: '#7C8585',
        marginRight: vh(8),
      },
      emailImg: {
        width: vh(16),
        height: vh(16),
        tintColor: '#7C8585',
        marginRight: vh(8),
      },
      container: {flex: 1, backgroundColor: colors.white, paddingTop: vh(22)},
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: vh(12),
        marginTop: vh(12),
      },
      headerText: {fontSize: vh(20), fontWeight: 'bold', marginLeft: vw(10)},
      backButton: {width: vh(40), height: vh(40), resizeMode: 'contain'},
      dropdownContainer: {
        flexDirection: 'row',
        paddingHorizontal: vh(10),
        paddingVertical: vh(13),
        justifyContent: 'space-between',
      },
      locateButton: {
        position: 'absolute',
        bottom: vh(30),
        right: vh(10),
        zIndex:10
      },
      dropdown: {
        flex: 1,
        marginHorizontal: vw(5),
       
      },
      dropDownPicker: {
        borderColor: colors.inactiveDot,
        borderWidth: 1,
       
      },
      dropDownContainer: {
        // borderColor: colors.inactiveDot,
        marginTop:vh(5),
        borderWidth: 0,
        width: screenWidth,
        
      },
      map: { ...StyleSheet.absoluteFillObject },
      dealerCard: {
        backgroundColor: colors.white,
        paddingVertical: vh(16),
        // marginVertical: vh(5),
        paddingHorizontal: vh(12),
        borderRadius: 10,
        shadowColor: colors.shadowColor,
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        bottom:0
      },
      dealerName: {
        fontSize: vh(18),
        fontWeight: '500',
        color: '#050507',
        marginBottom: vh(4),
      },
      dealerService: {
        fontSize: vh(12),
        fontWeight: '400',
        color: '#050507',
        marginBottom: vh(9.5),
      },
      dealerAddress: {
        fontSize: vh(12),
        color: '#7C8585',
        fontWeight: '400',
        lineHeight: vh(14.4),
        marginBottom: vh(8),
        marginLeft: vh(6),
      },
      dealerTime: {
        fontSize: vh(12),
        color: '#7C8585',
        fontWeight: '400',
        lineHeight: vh(14.4),
        marginBottom: vh(8),
        paddingEnd: vh(17),
        marginLeft: vh(6),
      },
      logo: {
        width: vh(65),
        height: vh(8),
        marginBottom: vh(8),
      },
      buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: vh(16),
        width: screenWidth - vh(24),
      },
      button: {
        backgroundColor: colors.white,
        padding: vh(8),
        flexDirection: 'row',
        borderRadius: 5,
        width: screenWidth / 4 - 3,
        height: vh(36),
        borderWidth: 1,
        borderColor: colors.inactiveDot,
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      directionButton: {
        backgroundColor: colors.white,
        padding: vh(8),
        flexDirection: 'row',
        borderRadius: 5,
        width: screenWidth / 4 + vh(57),
        height: vh(36),
        borderWidth: 1,
        borderColor: colors.inactiveDot,
        justifyContent: 'center',
        alignItems: 'center',
      },
      selectdirectButton: {
        borderWidth: 1,
        borderColor: colors.primary,
        padding: vh(8),
        flexDirection: 'row',
        borderRadius: 5,
        width: screenWidth / 4 + vh(59),
        height: vh(36),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
      },
      selectButton: {
        borderWidth: 1,
        borderColor: colors.primary,
        padding: vh(8),
        flexDirection: 'row',
        borderRadius: 5,
        width: screenWidth / 4 - vh(3),
        height: vh(36),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
      },
      buttonText: {
        color: '#7C8585',
        fontSize: vh(14),
        fontWeight: '500',
      },
      dealerContent: {
        marginStart: vh(12),
        width: screenWidth / 2 + vh(50),
      },
})