import { Platform, StyleSheet } from "react-native";
import colors from "../../utils/colors";
import { normalize, vh, vw } from "../../styles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: vw(16),
        // paddingBottom: vh(35)
    },
    header: {
        // marginBottom: vh(20)
    },
    imageWrapper: {
        width: vw(40),
        height: vw(40),
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: colors.backBackground,
        overflow: 'hidden',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: vw(1),
        borderRadius: 16,
        paddingHorizontal: vw(10),
        marginTop:vh(20)
        // paddingVertical: Platform.OS === 'android' ? 5 : 10,
    },
    countryCode: {
        fontSize: normalize(16),
        fontWeight: 500,
        marginLeft: vw(10),
        color: colors.lightBlack
    },
    separator: {
        width: vw(1),
        height: '60%',
        backgroundColor: colors.primary,
        marginLeft: vw(10)
    },
    buttonView: { flex: 1, justifyContent: 'flex-end', alignItems: 'center',marginBottom:vh(30) },
    buttonContainer: { backgroundColor: colors.primary, width: '100%', borderRadius: 16, height: vh(56) },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.modalBackground,
    },
    modalContainer: {
        backgroundColor: colors.white,
        width: '90%',
        borderRadius: 16,
        paddingHorizontal: vw(16),
        paddingTop: vh(16),
        maxHeight: '50%'
    },
    flatlistHeader: {
        fontSize: normalize(22),
        textAlign: 'center',
        fontWeight: '500'

    },
    cityItem: {
        padding: vh(16),
    },
    cityText: {
        fontSize: normalize(16),
        textAlign: 'center',
        color: colors.black,
    },
    leftIcon:{
        width:vw(40),
        height:vw(40),
        resizeMode:'contain'
    },
    inputContainer1: {
        marginTop:vh(20),
        paddingVertical: Platform.OS === 'android' ? 5 : 15,
    },
    inputContainerInside: {
        borderColor: colors.white, paddingHorizontal: vw(12), paddingVertical: Platform.OS === 'android' ? 3 : 13 
    },
})

export default styles;