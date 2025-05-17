import { Platform, StyleSheet } from "react-native";
import Colors from "../../../../utils/colors";
import { vw, vh, normalize } from "../../../../styles";
import colors from "../../../../utils/colors";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: vw(16),
        backgroundColor: Colors.white,
        paddingBottom: vh(20)
    },
    header: {
        marginTop: Platform.OS === 'ios' ? vh(0) : vh(3),
        marginBottom: vh(20),
        paddingHorizontal: 0
    },
    backButton: {
        width:vw(40),
        height:vw(40),
        resizeMode:'contain'
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
    mainContainer: { flex: 1, justifyContent: 'space-between' },
    mainContainer1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textContainer: {
        rowGap: vh(2)
    },
    text1: {
        fontSize: normalize(18),
        color: Colors.lightBlack,
        fontWeight: 500
    },
    text2: {
        fontSize: normalize(14),
        color: Colors.lightGreyBlue,
        fontWeight: 400
    },
    icon: {
        width: vw(12),
        height: vh(12),
        tintColor: '#8CA2B4'
    },
    buttonContainer: { backgroundColor: Colors.primary, paddingVertical: vh(15), width: '100%',borderRadius:vw(16) },
    buttonDisabled: { backgroundColor: colors.backButtonBackground, paddingVertical: vh(15), width: '100%',borderRadius:vw(16) },
    text: { color: Colors.white},
    textDisabled: { color: Colors.lightGreyBlue}
})

export default styles;