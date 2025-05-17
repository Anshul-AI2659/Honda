import {StyleSheet} from 'react-native';
import { normalize, vw } from '../../styles/dimensions';
import colors from '../../utils/colors';
import { ROBOTO_BOLD } from '../../styles/Fonts';

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
    fontFamily:ROBOTO_BOLD,
    fontWeight: '800',
  },
  seeMoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeMoreText: {
    fontSize:normalize(14),
    fontFamily:ROBOTO_BOLD,
    fontWeight: '600',
    marginRight: vw(8),
  },
  seeMoreImg: {
    width: vw(20),
    height: vw(20),
    resizeMode: 'contain',
  },
  flatListContainer: {
 
  },
});
export default styles;