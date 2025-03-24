import {StyleSheet} from 'react-native';
import {vw, vh} from '../../utils/dimension';
import {size} from '../../utils/size';
import {Colors} from '../../utils/colors';
import { ROBOTO_MEDIUM } from '../../utils/Fonts';

export const styles = StyleSheet.create({
  inputContainer: {
    paddingVertical:vh(2),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vh(20),
    marginHorizontal:vw(16),
    borderWidth: 1,
    borderRadius: 16,
    borderColor: Colors.tutorialInactiveDot,
    backgroundColor: Colors.White,
  },

  countryCodeButton: {
    flexDirection: 'row',
    borderRightWidth: 1,
    paddingVertical: vh(8),
    paddingLeft: vw(16),
    paddingRight: vw(12),
    borderRightColor: Colors.tutorialInactiveDot,
    alignItems: 'center',
  },
  countryCodeText: {
    fontSize: vh(16),
    color: Colors.tutorialDescription,
  },
  phoneInputMobile: {
    width: vh(300),
    height: vh(52),
    fontSize: vw(16),
    fontFamily:ROBOTO_MEDIUM,
    marginLeft: vw(10),
    borderBottomRightRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: Colors.White,
  },
  errorContainer: {
    borderColor: Colors.red,
  },
  errorText: {
    color: Colors.red,
    fontSize: size.error,
    marginTop: vh(4),
    textAlign: 'left',
  },
  modalContainer: {
    flex: 1,
    paddingHorizontal: vw(20),
    backgroundColor: Colors.White,
    justifyContent: 'center',
  },
  searchInput: {
    height: vh(40),
    paddingHorizontal: vw(10),
    marginHorizontal: vw(20),
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 15,
  },
  countryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: vh(20),
    paddingHorizontal: vw(20),
    borderBottomWidth: 0.2,
  },
  countryText: {
    fontSize: size.itemTitle,
    marginRight: vw(10),
  },
  countryName: {
    fontSize: size.description,
    color: Colors.Black,
  },
  closeButton: {
    marginTop: vh(20),
    marginHorizontal: vw(20),
    backgroundColor: Colors.primary,
    padding: vw(10),
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: vh(20),
    paddingHorizontal: vw(20),
  },
  modalText: {
    fontSize: size.headerTitle,
    fontWeight: 'bold',
  },
});
