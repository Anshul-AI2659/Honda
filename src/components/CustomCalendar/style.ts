import {StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/dimension';
import {Colors} from '../../utils/colors';

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#00000080',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: Colors.White,
    borderRadius: 10,
    width: vw(320),
  },
  dateText: {
    color: '#1D1B20',
    fontWeight: 400,
    fontSize: 26,
    textAlign: 'left',
    paddingLeft: vw(24),
    paddingTop: vh(16),
    paddingRight: vw(12),
    paddingBottom: vh(12),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: vh(10),
    borderTopWidth: 1,
    borderColor: '#CAC4D0',
    width: '100%',
  },
  monthText: {
    fontSize: 16,
    fontWeight: 500,
    color: '#49454F',
  },
  navText: {
    fontSize: 24,
    // fontWeight: 'bold',
  },
  arrow: {
    flexDirection: 'row',
    columnGap: vw(20),
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingBottom: vh(18),
    // marginTop: 10,
  },
  cancelButton: {
    paddingHorizontal: vw(12),
    paddingTop: vh(8),
  },
  buttonText: {
    color: Colors.primary,
    fontSize: 15,
    fontWeight: 500,
  },
  okButton: {
    paddingHorizontal: vw(12),
    paddingTop: vh(8),
  },
});

export default styles;
