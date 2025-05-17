import { StyleSheet } from "react-native";
import Colors from "../../../../utils/colors";
import { vw, vh, normalize } from "../../../../styles";
import { ROBOTO_REGULAR } from "../../../../styles/Fonts";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: vw(16),
        backgroundColor: Colors.white
    },
    header: {
        marginBottom: vw(20),
        paddingHorizontal: 0
    },
    firstContainer: {
        backgroundColor: Colors.white,
        padding: 16,
        borderRadius: 12,
        borderColor: Colors.borderLight,
        borderWidth: 1,
        marginBottom: vh(24),
        elevation: 0,
        shadowColor: '',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
    },
    imageWrapper: {
        width: vw(40),
        height: vh(40),
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F4F7FF',
        overflow: 'hidden',
    },
    text: {
        fontSize: normalize(16),
        fontFamily: ROBOTO_REGULAR,
        color: Colors.black
    },
    description: {
        fontSize: normalize(14),
        fontFamily: ROBOTO_REGULAR,
        color: Colors.lightGreyBlue,
        letterSpacing:vw(0.6)
    }
})

export default styles;