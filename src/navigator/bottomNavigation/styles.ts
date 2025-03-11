import {StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/dimension';
import {Colors} from '../../utils/colors';

const styles = StyleSheet.create({
  singleTabContainer: {
    alignItems: 'center',
  },
  icon: {
    width: vw(32),
    height: vw(32),
    resizeMode: 'contain',
  },
  tabBarLabel: {
    marginTop: vh(8),
  },
  focusedDot: {
    width: vw(6),
    height: vw(6),
    backgroundColor: Colors.primary,
    borderRadius: vw(3),
    marginTop: vh(6),
  },
});
export default styles;
