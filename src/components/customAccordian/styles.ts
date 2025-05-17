import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import { vh, normalize } from '../../styles';
import { ROBOTO_MEDIUM, ROBOTO_REGULAR } from '../../styles/Fonts';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
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
    color: colors.secondryBlack,
  },
  img: {
    height: vh(24),
    width: vh(24),
    tintColor: colors.black,
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
    color: colors.secondryBlack,
  },
  itemValue: {
    fontSize: normalize(14),
    fontFamily:ROBOTO_MEDIUM,
    fontWeight: '500',
    color: colors.secondryBlack,
  },
});
export default styles;
