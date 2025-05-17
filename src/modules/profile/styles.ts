import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import { vh, vw, normalize, FONTS } from '../../styles';
import { ROBOTO_MEDIUM, ROBOTO_REGULAR } from '../../styles/Fonts';


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    paddingHorizontal:vw(16)
  },
  backIcon: {
    width: vw(40),
    height: vw(40),
    resizeMode: 'contain',
  },
  subContainer: {
    flex: 1,
    paddingVertical: vh(20),
    // paddingBottom: vh(40),
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: vh(5),
  },
  profileImage: {
    width: vw(118),
    height: vw(118),
    borderRadius: 56.57,
  },
  addButton: {
    position: 'absolute',
    top: vw(80),
    right: vw(140),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    padding: vw(8),
    borderRadius: 40,
    shadowColor: 'black', //New Color
    shadowOffset: {width: 0, height: 2.72},
    shadowOpacity: 2,
    shadowRadius: 2.72,
    elevation: vw(6),
  },
  addImg: {
    width: vw(20),
    height: vw(20),
    resizeMode: 'contain',
    tintColor: colors.primary,
  },
  inputContainer: {
    width: vw(380),
    height: vw(56),
    borderRadius: 16,
    borderColor: colors.borderSecond,
    paddingVertical: vh(2),
    marginHorizontal: vw(16),
    paddingHorizontal:vw(16),
    marginTop: vh(20),
    backgroundColor: colors.white,
    alignItems:'center',
    justifyContent:'space-between',
  },
  phoneNumberInputContainer: {
    flexDirection: 'row',
    borderWidth: vw(1),
    borderColor: colors?.borderSecond,
    borderRadius: vw(16),
    height:vw(56),
    paddingHorizontal: vw(10),
    alignItems: 'center',
    marginTop: vh(20),
    width: vw(380),
    marginHorizontal:vw(16)
  },
  textInput: {
    width: '100%',
    height: vw(54),
    fontFamily: ROBOTO_MEDIUM,
    fontSize: normalize(16),
  },
  emailTextInput:{
    // width: '75%',
    height: vw(54),
    fontFamily: ROBOTO_MEDIUM,
    fontSize: normalize(16),
  },
  verifyNowText:{
    fontSize:normalize(14),
    fontFamily:ROBOTO_MEDIUM,
    color:colors.primary,
  },
  serviceDaysContainer: {
    marginTop: vh(28),
    // paddingHorizontal: vw(10),
    marginHorizontal:vh(20)
  },
  serviceDaysText: {
    fontSize: normalize(18),
    fontFamily: ROBOTO_MEDIUM,
    // marginLeft: vw(6),
  },
  dayButton: {
    width: vw(44),
    height: vw(44),
    backgroundColor: colors.white,
    borderRadius: vw(61.6),
    marginHorizontal: vw(4.4),
    borderWidth: vw(0.96),
    borderColor: '#D9DFE6', // New Color
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedDayButton: {
    width: vw(44),
    height: vw(44),
    backgroundColor: colors.black,
    borderRadius: vw(61.6),
    marginHorizontal: vw(4.4), // New Color
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayText: {
    fontSize: normalize(13.2),
    fontFamily: ROBOTO_MEDIUM,
    color: colors.descritptionText,
  },
  selectedDayText: {
    fontSize: normalize(13.2),
    fontFamily: ROBOTO_MEDIUM,
    color: colors.white,
  },
  weekOptionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginHorizontal: vw(6),
    marginTop: vh(16),
  },
  singleWeekContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  radioUnselected: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
    tintColor: colors.descritptionText,
  },
  radioSelected: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
    tintColor: colors.lightBlack,
  },
  singleWeekOptionText: {
    fontSize: normalize(16),
    fontFamily: ROBOTO_REGULAR,
    marginLeft: vw(4),
  },
  serviceHoursContainer: {
    marginTop: vh(28),
    // paddingHorizontal: vw(16),
    marginHorizontal:vh(20),
    marginBottom:vh(26),
  },
  serviceHoursText: {
    fontSize: normalize(18),
    fontFamily: ROBOTO_MEDIUM,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: vh(16),
    marginBottom: vh(30),
  },
  singleTimeContainer: {
    flexDirection: 'row',
    width: vw(182),
    height: vw(54),
    paddingHorizontal: vw(16),
    borderWidth: vw(1),
    backgroundColor: colors.white,
    borderRadius: vw(16),
    borderColor: colors.borderSecond,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  updateButton: {
    width: vw(380),
    alignSelf: 'center',
    paddingVertical: vh(18),
    marginBottom: vh(20),
    borderRadius: 16,
  },
  disableUpdateButton: {
    width: vw(380),
    alignSelf: 'center',
    paddingVertical: vh(18),
    marginBottom: vh(20),
    borderRadius: 16,
    
    backgroundColor:colors.backButtonBackground
  },
  modalMainContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(51, 51, 51, 0.3)',
  },
  modalTopContainer: {
    width: '100%',
    height: '100%',
  },
  modalContentContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: vw(14),
    paddingHorizontal: vw(20),
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: vh(12),
    marginVertical: vh(10),
  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconImageSize: {
    height: vw(30),
    width: vw(30),
    resizeMode: 'contain',
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    marginLeft: vw(20),
  },
  rightIcon: {
    width: vw(24),
    height: vw(24)
  },
  contentContainer:{flex: 1, marginTop: vh(16)},
  partition: {
      color: colors.primary,
      marginRight: vw(10),
      fontSize: vw(20),
    },
    input: {
      flex: 1,
      fontSize: normalize(16),
      paddingVertical: vh(10),
      fontFamily:FONTS?.ROBOTO_REGULAR,
      color:colors?.descritptionText
    },
    errorBorder: {
      borderColor: 'red',
    },
    errorText: {
      color: colors.primary,
      fontSize: normalize(12),
      fontFamily:FONTS.ROBOTO_MEDIUM,
      marginTop:vh(10),
      marginLeft:vw(5)
    },
    countryCode: {
      fontSize: normalize(16),
      fontFamily:FONTS?.ROBOTO_REGULAR,
      color: colors?.descritptionText,
      marginRight: vw(8),
    },
});
export default styles;