import {StyleSheet} from 'react-native';

// Utils
import { vw } from '../../utils/dimension';
import { Colors } from '../../utils/colors';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.White,
  },
  splashlogo: {
    width: vw(247.24),
    height: vw(30),
    resizeMode:'contain',
  },
});
