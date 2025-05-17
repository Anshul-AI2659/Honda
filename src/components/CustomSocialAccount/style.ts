import { StyleSheet } from "react-native";
import Colors from "../../utils/colors";
import { normalize, vh, vw } from "../../styles/dimensions";
import { FONTS } from "../../styles";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: vw(16),
        paddingVertical: vh(12),
        backgroundColor: '#F3F6FA',
        borderColor: '#F2F3F3',
        borderWidth: 1,
        marginVertical: 0,
        borderRadius: 12,
        marginBottom: 20
    },
    text1: {
        fontSize: normalize(14),
        fontFamily:FONTS.ROBOTO_MEDIUM,
        color: '#050507',
    },
    text2: {
        fontSize: normalize(12),
        fontFamily:FONTS.ROBOTO_REGULAR,
        color: '#050507' ,
        marginTop:vh(2)
    },
    imageContainerView:{
        flexDirection: 'row',
        columnGap: 12
    },
    imageContainer: {
        width: vw(52),
        height: vw(52),
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: vw(26)
    },
    image: {
        width: vw(32),
        height: vw(32)
    }

})

export default styles;