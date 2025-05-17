import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
import { normalize, vh, vw } from "../../styles/dimensions";

const styles = StyleSheet.create({
    text1: {
        fontSize: normalize(18),
        fontWeight: 600,
        color: colors.black,
        textAlign: 'center'
    },
    centeredContainer: {
        flex: 1,
        alignItems: 'center',
        bottom:vh(40)
    },
    header: {
        marginBottom: vh(20),
        paddingHorizontal: 0
    },
    backButton: {
        width:vw(40),
        height:vw(40),
        resizeMode:'contain'
      },
})

export default styles;