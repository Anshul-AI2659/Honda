import {StyleSheet} from 'react-native';

// Utils
import {Colors} from '../../../utils/colors';
import {vh, vw} from '../../../utils/dimension';
import {size} from '../../../utils/size';
import { ROBOTO_MEDIUM } from '../../../utils/Fonts';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  subContainer: {
    marginHorizontal:vw(16),
  },
  flatListContainer: {
    paddingHorizontal:vw(16),
    paddingVertical:vh(16),
    alignItems:'center',
    justifyContent:'center',
  },
  itemContainer: {
    width:vw(182),
    height:vw(182),
    backgroundColor: Colors.itemBackground,
    marginHorizontal:vw(8),
    marginVertical:vh(8),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
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
    fontFamily:ROBOTO_MEDIUM,
    fontWeight: '500',
    width: vw(108),
    height: vw(20),
    marginTop: vh(20),
    textAlign: 'center',
    color:Colors.Black,
  },
});
export default styles;
