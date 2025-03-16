import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {normalize, vh, vw} from '../../utils/dimension';
import {ROBOTO_BOLD, ROBOTO_REGULAR, ROBOTO_SEMIBOLD} from '../../utils/Fonts';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  scrollView: {
    flex: 1,
    backgroundColor: Colors.White,
    paddingHorizontal: vw(8),
    paddingTop: vh(20),
  },
  header: {
    paddingVertical: vh(14),
    borderBottomWidth: 1,
    borderBottomColor: '#00000012',
    shadowColor: '#00000012',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.9,
    shadowRadius: 14,
    elevation: 3,
  },
  backButton: {
    backgroundColor: Colors.headerButton,
  },
  backIcon: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
  },
  customFlatListStyle: {
    marginBottom: vh(36),
    marginTop: vh(16),
  },
  textHeaderItemContainer: {
    width: vw(140),
    height: vw(183),
    backgroundColor: Colors.White,
    borderRadius: 12,
    marginHorizontal: vw(8),
  },
  textHeaderImageContainer: {
    width: vw(140),
    height: vw(104),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: Colors.lightGrey,
  },
  textHeaderItemImage: {
    width: vw(100),
    height: vw(100),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  textHeaderItemNumber: {
    fontSize: normalize(16),
    fontFamily: ROBOTO_BOLD,
    fontWeight: '700',
    marginTop: vh(10),
  },
  textHeaderItemTitle: {
    fontSize: normalize(14),
    fontFamily: ROBOTO_REGULAR,
    fontWeight: '400',
    marginTop: vh(8),
    color: Colors.description,
  },
  textHeaderItemPrice: {
    fontSize: normalize(14),
    fontFamily: ROBOTO_SEMIBOLD,
    fontWeight: '600',
    marginTop: vh(8),
    color: Colors.blackText,
  },
});

export default styles;
