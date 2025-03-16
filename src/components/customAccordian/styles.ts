import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {normalize, vh} from '../../utils/dimension';
import { ROBOTO_MEDIUM, ROBOTO_REGULAR } from '../../utils/Fonts';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.White,
    paddingVertical: vh(16),
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    fontSize: normalize(16),
    fontFamily:ROBOTO_MEDIUM,
    fontWeight: '500',
    letterSpacing: 1,
    color: Colors.blackText,
  },
  img: {
    height: vh(24),
    width: vh(24),
    tintColor: Colors.Black,
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    marginBottom: vh(8),
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: vh(8),
  },
  itemFeature: {
    fontSize: normalize(14),
    fontFamily:ROBOTO_REGULAR,
    fontWeight: '400',
    color: Colors.blackText,
  },
  itemValue: {
    fontSize: normalize(14),
    fontFamily:ROBOTO_MEDIUM,
    fontWeight: '500',
    color: Colors.blackText,
  },
});
export default styles;
