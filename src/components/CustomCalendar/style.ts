import { StyleSheet } from "react-native";
import Colors from "../../utils/colors";
import { vw, normalize, vh, FONTS } from "../../styles";

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: Colors.modalBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    width: vw(320),
  },
  dateText: {
    color: Colors.dateTextColor,
    fontWeight: 400,
    fontSize: normalize(26),
    textAlign: 'left',
    paddingLeft: vw(24),
    paddingTop: vh(16),
    paddingRight: vw(12),
    paddingBottom: vh(12)
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: vh(10),
    borderTopWidth: 1,
    borderColor: '#CAC4D0',
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

  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingBottom: vh(18)
    // marginTop: 10,
  },
  cancelButton: {
    paddingHorizontal: vw(12),
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