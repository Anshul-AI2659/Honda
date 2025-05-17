import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {vw, vh, normalize} from '../../utils/dimension';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: vh(20),
  },
  input: {
    width: vw(48),
    height: vw(56),
    borderWidth: 1,
    borderRadius: 16,
    textAlign: 'center',
    color: Colors.Black,
    fontSize: normalize(18),
  },
});
