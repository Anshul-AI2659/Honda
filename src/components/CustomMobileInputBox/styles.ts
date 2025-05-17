import {StyleSheet} from 'react-native';
import {vw, vh} from '../../utils/dimension';
import {size} from '../../utils/size';
import {Colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
    marginLeft: vw(10),
    borderBottomRightRadius: 16,
    borderTopRightRadius: 16,
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
 
});
