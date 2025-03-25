import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {normalize, vh, vw} from '../../utils/dimension';
import {
  ROBOTO_MEDIUM,
  ROBOTO_REGULAR,
  ROBOTO_SEMIBOLD,
} from '../../utils/Fonts';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  header: {
    paddingVertical: vh(12),
  },
  backButton: {
    backgroundColor: Colors.headerButton,
  },
  subContainer: {
    flex: 1,
    paddingVertical: vh(20),
    paddingBottom: vh(40),
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
    backgroundColor: Colors.White,
    padding: vw(8),
    borderRadius: 40,
    shadowColor: '#8B9EB833', //New Color
    shadowOffset: {width: 0, height: 2.72},
    shadowOpacity: 1,
    shadowRadius: 2.72,
    elevation: 3,
  },
  addImg: {
    width: vw(20),
    height: vw(20),
    resizeMode: 'contain',
    tintColor: Colors.primary,
  },
  inputContainer: {
    width: vw(380),
    height: vw(56),
    borderRadius: 16,
    borderColor: Colors.tutorialInactiveDot,
    paddingVertical: vh(2),
    marginHorizontal: vw(16),
    marginTop: vh(20),
    backgroundColor: Colors.White,
  },
  textInput: {
    width: '100%',
    height: vw(54),
    fontFamily: ROBOTO_MEDIUM,
    fontSize: normalize(16),
  },

  serviceDaysContainer: {
    marginTop: vh(28),
    paddingHorizontal: vw(10),
  },
  serviceDaysText: {
    fontSize: normalize(18),
    fontFamily: ROBOTO_MEDIUM,
    marginLeft: vw(6),
  },
  dayButton: {
    width: vw(44),
    height: vw(44),
    backgroundColor: Colors.White,
    borderRadius: 61.6,
    marginHorizontal: vw(6),
    borderWidth: 0.96,
    borderColor: '#D9DFE6', // New Color
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedDayButton: {
    width: vw(44),
    height: vw(44),
    backgroundColor: Colors.Black,
    borderRadius: 61.6,
    marginHorizontal: vw(6), // New Color
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayText: {
    fontSize: normalize(13.2),
    fontFamily: ROBOTO_SEMIBOLD,
    color: Colors.tutorialDescription,
  },
  selectedDayText: {
    fontSize: normalize(13.2),
    fontFamily: ROBOTO_SEMIBOLD,
    color: Colors.White,
  },
  weekOptionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: vw(6),
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
    tintColor: Colors.tutorialDescription,
  },
  radioSelected: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
    tintColor: Colors.blackText,
  },
  singleWeekOptionText: {
    fontSize: normalize(16),
    fontFamily: ROBOTO_REGULAR,
    marginLeft: vw(4),
  },
  serviceHoursContainer: {
    marginTop: vh(28),
    paddingHorizontal: vw(16),
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
    height: vw(56),
    paddingHorizontal: vw(16),
    borderWidth: 1,
    backgroundColor: Colors.White,
    borderRadius: 16,
    borderColor: Colors.tutorialInactiveDot,
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
    height: '30%',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: vw(16),
    paddingHorizontal: vw(20),
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: vh(10),
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
});
export default styles;
