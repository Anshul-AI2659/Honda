import {StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { normalize, vh, vw } from '../../styles';
import { ROBOTO_MEDIUM } from '../../styles/Fonts';


export const styles = StyleSheet.create({
  inputContainer: {
<<<<<<< HEAD
    paddingVertical:vh(2),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vh(20),
    marginHorizontal:vw(16),
=======
    flexDirection: 'row',
    alignItems: 'center',
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
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
<<<<<<< HEAD
    width: vh(300),
    height: vh(52),
    fontSize: vw(16),
    fontFamily:ROBOTO_MEDIUM,
=======
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
    marginLeft: vw(10),
    borderBottomRightRadius: 16,
    borderTopRightRadius: 16,
  },
  errorContainer: {
    borderColor: Colors.red,
  },
  errorText: {
    color: Colors.red,
    fontSize: normalize(16),
    marginTop: vh(4),
    textAlign: 'left',
  },
  countryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: vh(20),
    paddingHorizontal: vw(20),
    borderBottomWidth: 0.2,
  },
<<<<<<< HEAD

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
    fontSize: normalize(16),
    fontWeight: 'bold',
  },
=======
  countryText: {
    fontSize: size.itemTitle,
    marginRight: vw(10),
  },
  countryName: {
    fontSize: size.description,
    color: Colors.Black,
  },
 
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
});
