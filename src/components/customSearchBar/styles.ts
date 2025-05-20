import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {normalize, vh, vw} from '../../utils/dimension';

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.tutorialInactiveDot,
    borderRadius: 16,
    paddingHorizontal: vw(16),
    marginHorizontal: vw(16),
    marginTop: vh(20),
    backgroundColor: Colors.lightGrey,
  },
  searchIcon: {
    width: vw(20),
    height: vw(20),
    resizeMode: 'contain',
  },
  searchInput: {
    flex: 1,
    height: vh(56),
    borderRadius: 16,
    paddingLeft: vw(10),
    fontSize: normalize(16),
    color: Colors.Black,
  },
});
export default styles;
