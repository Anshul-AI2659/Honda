import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/colors';
import {normalize, vh, vw} from '../../../utils/dimension';
import {ROBOTO_MEDIUM} from '../../../utils/Fonts';

const styles = StyleSheet.create({
  mainContainer: {
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
  choiceContainer: {
    marginTop: vh(16),
    marginBottom: vh(4),
    paddingHorizontal: vw(11),
    flexDirection: 'row',
  },
  Button: {
    paddingVertical: vh(10),
    paddingHorizontal: vw(16),
    marginHorizontal: vw(5),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.tutorialInactiveDot,
    borderRadius: 16,
    backgroundColor: '#fff',
  },
  selectedButton: {
    paddingVertical: vh(10),
    paddingHorizontal: vw(16),
    marginHorizontal: vw(4),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.primary,
    backgroundColor: 'rgba(228, 29, 45, 0.1)',
    borderRadius: 16,
  },
  buttonText: {
    fontSize: normalize(14),
    fontFamily: ROBOTO_MEDIUM,
    color: Colors.description,
  },
  selectedButtonText: {
    fontSize: normalize(14),
    fontFamily: ROBOTO_MEDIUM,
    color: Colors.primary,
  },
  customFlatListStyle: {
    paddingHorizontal: vw(8),
    alignItems: 'center',
  },
  ItemContainer: {
    width: vw(184),
    height: vw(220),
    backgroundColor: Colors.White,
    borderRadius: 15.77,
    borderWidth: vw(2.63),
    borderColor: Colors.lightGrey,
    marginHorizontal: vw(8),
    alignItems: 'center',
    marginVertical: vh(12),
  },
  ImageContainer: {
    width: vw(184),
    height: vw(136),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: Colors.lightGrey,
  },
  ItemImage: {
    width: vw(184),
    height: vw(136),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  ItemTitle: {
    width: vw(155.09),
    textAlign: 'center',
    fontSize: normalize(16),
    fontFamily: ROBOTO_MEDIUM,
    marginTop: vh(18.46),
    color: Colors.description,
  },
});
export default styles;
