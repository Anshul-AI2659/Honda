import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {normalize, vw} from '../../utils/dimension';
import { ROBOTO_EXTRABOLD, ROBOTO_SEMIBOLD } from '../../utils/Fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: vw(8),
  },
  headerImg: {
    width: vw(99),
    height: vw(12),
    resizeMode: 'contain',
  },
  heading: {
    fontSize: normalize(18),
    fontFamily:ROBOTO_EXTRABOLD,
    fontWeight: '800',
  },
  seeMoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeMoreText: {
    fontSize:normalize(14),
    fontFamily:ROBOTO_SEMIBOLD,
    fontWeight: '600',
    marginRight: vw(8),
  },
  seeMoreImageButton: {
    padding: vw(5),
    borderRadius: 100,
    backgroundColor: Colors.primary,
  },
  seeMoreImg: {
    width: vw(10),
    height: vw(10),
    resizeMode: 'contain',
  },
  flatListContainer: {
  },
});
export default styles;
