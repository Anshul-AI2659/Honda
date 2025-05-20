<<<<<<< HEAD
import { StyleSheet } from "react-native";
import Colors from "../../utils/colors";
import { vw, normalize, vh, FONTS } from "../../styles";
=======
import {StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/dimension';
import {Colors} from '../../utils/colors';
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: Colors.modalBackground,
=======
    backgroundColor: '#00000080',
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
<<<<<<< HEAD
    backgroundColor: Colors.white,
=======
    backgroundColor: Colors.White,
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
    borderRadius: 10,
    width: vw(320),
  },
  dateText: {
<<<<<<< HEAD
    color: Colors.dateTextColor,
    fontWeight: 400,
    fontSize: normalize(26),
=======
    color: '#1D1B20',
    fontWeight: 400,
    fontSize: 26,
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
    textAlign: 'left',
    paddingLeft: vw(24),
    paddingTop: vh(16),
    paddingRight: vw(12),
<<<<<<< HEAD
    paddingBottom: vh(12)
=======
    paddingBottom: vh(12),
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: vh(10),
    borderTopWidth: 1,
    borderColor: '#CAC4D0',
<<<<<<< HEAD
    width: '100%'
  },
  monthText: {
    fontSize: normalize(16),
    fontFamily:FONTS?.ROBOTO_MEDIUM,
    color: Colors.monthTextColor,
   
  },
  navText: {
    fontSize: normalize(24),
    textAlign: 'center',
  },
  arrow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 0

=======
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
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
<<<<<<< HEAD
    paddingBottom: vh(18)
=======
    paddingBottom: vh(18),
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
    // marginTop: 10,
  },
  cancelButton: {
    paddingHorizontal: vw(12),
<<<<<<< HEAD
    paddingTop: vh(8)
  },
  buttonText: {
    color: Colors.primary,
    fontSize: normalize(15),
    fontFamily:FONTS?.ROBOTO_REGULAR
  },
  okButton: {
    paddingHorizontal: vw(12),
    paddingTop: vh(8)
  },
  
  headerLeftImage: { width: vw(7.5), height: vh(3.75) },
  leftArrow: { marginStart:vh(20)},
  left:{
    flexDirection:'row'
  },
  rightArrow:{
    marginEnd:vh(20)
  },
  right:{
    flexDirection:'row'
  },
  yearArrow: {
    marginHorizontal: vh(10),
    
  },
});

export default styles;
=======
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
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
