import {StyleSheet} from 'react-native';
import { vh,vw } from '../../utils/dimension';
import { Colors } from '../../utils/colors';
// import { size } from '../../utils/size';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 8,
    marginBottom:12,
    shadowColor: '#00000012',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 3,
    paddingHorizontal: 16,
  },
  leftPart: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 16,
  },
  backContainer: {
    width: vw(40),
    height: vh(40),
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4F7FF',
    overflow: 'hidden',
  },
  back: {
    width: vw(24),
    height: vh(24),
  },
  headerText: {
    fontSize: 18,
    fontWeight: 500,
  },
  calendar: {
    width: vw(18),
    height: vh(19.5),
  },
  contentEmptyView: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 10,
  },
  notificationBell: {
    width: vw(143),
    height: vw(143),
  },
  text1: {
    fontSize: 20,
    fontWeight: 700,
    color: '#050507',
    textAlign: 'center',
  },
  text2: {
    fontSize: 16,
    fontWeight: 400,
    color: '#7C8585',
    textAlign: 'center',
  },
  notificationItem: {
    // width: vw(380),
    backgroundColor: '#FFF6F7',
    padding: 12,
    marginVertical: 8,
    borderRadius: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#E41D2D33',
    columnGap: 10,
  },
  bellContainer: {
    width: vw(38),
    height: vh(38),
    borderRadius: 26.39,
    borderColor: '#F2F3F3',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },
  bell: {
    width: vw(25.33),
    height: vh(25.33),
    resizeMode:'contain',
  },
  notificationHeader: {
    fontSize: 16,
    fontWeight: 600,
    color: '#050507',
  },
  notificationDescription: {
    fontSize: 12,
    color: '#8CA2B4',
    fontWeight: 400,
  },
  notificationDate: {
    fontSize: 12,
    color: '#7C8585',
    fontWeight: 400,
  },
});

export default styles;
