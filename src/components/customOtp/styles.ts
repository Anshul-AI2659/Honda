import {StyleSheet} from 'react-native';
import { Colors } from '../../utils/colors';
import { vw,vh } from '../../utils/dimension';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: vh(20),
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    textAlign: 'center',
    paddingHorizontal: vw(20),
    paddingVertical: vh(15),
    color: Colors.Black,
    fontSize: 18,
  },
});
