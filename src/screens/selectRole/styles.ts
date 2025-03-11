import {StyleSheet} from 'react-native';

// Utils
import {Colors} from '../../utils/colors';
import {vh, vw} from '../../utils/dimension';
import {size} from '../../utils/size';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  subContainer: {
    paddingHorizontal: vw(20),
  },
  flatListContainer: {
    paddingVertical: vh(20),
  },
  itemContainer: {
    backgroundColor: Colors.itemBackground,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    paddingVertical: vh(30),
    paddingHorizontal: vw(24),
    marginRight: vw(20),
    marginBottom: vh(20),
  },
  imageContainer: {
    padding: vw(14),
    backgroundColor: Colors.primaryOpacity,
    borderRadius: 100,
  },
  itemImage: {
    width: vw(34),
    height: vw(34),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  itemTitle: {
    fontSize: size.itemTitle,
    fontWeight: '500',
    width: vw(108),
    height: vw(20),
    marginTop: vh(20),
    textAlign: 'center',
    color:Colors.Black,
  },
});
export default styles;
