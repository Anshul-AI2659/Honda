import { Platform, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
// Styles
import { normalize, vh, vw } from "../../../styles";
//Utils
import colors from "../../../utils/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 16,
    },
    image: {
        width: vw(40),
        height: vw(40)
    },
    header: {
        marginTop: Platform.OS === 'ios' ? vh(0) : vh(3),
    },
    cardContainer: {
        flexDirection: 'row',
        padding: 16,
        marginTop: vh(16),
        backgroundColor: '#1F1F24',
        borderRadius: 12,
        alignItems: 'center',
        columnGap: vw(12),
        height: vh(112),
        marginBottom: vh(24)
    },
    imageHii: {
        width: vw(80),
        height: vw(80)
    },
    hiValueContainer: {
        rowGap: Platform.OS == 'android' ? 8 : 4,
    },
    title1: {
        fontSize: normalize(20),
        fontWeight: 700,
        color: Colors.white
    },
    description1: {
        fontSize: normalize(14),
        fontWeight: 400,
        color: Colors.white,
        paddingLeft: 5
    },
    phoneContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    phone: {
        width: vw(18),
        height: vw(18)
    },
    viewContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: vw(2)
    },
    viewText: {
        color: Colors.white,
        fontSize: normalize(14),
        bottom: Platform.OS === 'ios' ? vh(1) : vh(2)
    },
    arrow: {
        tintColor: Colors.white,
        width: vw(18),
        height: vw(18),
        alignSelf: 'center'
    },
    firstContainer: {
        backgroundColor: Colors.white,
        padding: 16,
        borderRadius: 12,
        borderColor: '#F2F3F3',
        borderWidth: 1,
        marginBottom: vh(16),
        elevation: 0,
        shadowColor: '',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
    },
    text: {
        fontSize: normalize(16),
        fontWeight: 400,
        color: Colors.black
    },
    leftButtonStyle: {
        backgroundColor: colors.backButtonBackground,
    },
    leftIconStyle: {
        width: vw(40),
        height: vw(40),
        resizeMode: 'contain'
    },
    rightButtonStyle: {
        backgroundColor: colors.backButtonBackground,
    },
    buttonContainer: {
        borderRadius: 12,
        backgroundColor: '#F3F6FA',
        borderColor: '#F3F6FA'
    }
})

export default styles;