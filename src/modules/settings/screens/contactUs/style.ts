import { Platform, StyleSheet } from "react-native";
import colors from "../../../../utils/colors";
import { normalize, vh, vw } from "../../../../styles/dimensions";
import { ROBOTO_MEDIUM } from "../../../../styles/Fonts";
import { FONTS } from "../../../../styles";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: vw(16)
    },
    header: {
        marginBottom: vw(20),
        paddingHorizontal: 0
    },
    backButton: {
        width:vw(40),
        height:vw(40),
        resizeMode:'contain'
      },
    imageWrapper: {
        width: vw(40),
        height: vw(40),
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: colors.backBackground,
        overflow: 'hidden',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: vw(1),
        borderColor: colors.borderSecond,
        borderRadius: 16,
        paddingHorizontal: vw(10),
        marginBottom: vh(20),
        // paddingVertical: Platform.OS === 'android' ? 5 : 10,
    },
    countryCode: {
        fontSize: normalize(16),
        fontWeight: 500,
        marginLeft: vw(10),
        color: colors.lightGreyBlue
    },
    separator: {
        width: vw(1),
        height: '60%',
        backgroundColor: colors.borderSecond,
        marginLeft: vw(10)
    },
    upload: {
        fontSize: normalize(16),
        color: colors.lightBlack,
        fontFamily:ROBOTO_MEDIUM,
        paddingTop: vh(4)
    },
    uploadDescription: {
        fontSize: normalize(14),
        color: colors.lightGreyBlue,
        fontFamily:FONTS.ROBOTO_REGULAR
    },
    viewUpload: {
        rowGap: vh(5)
    },
    imageContainer: {
        borderColor: colors.borderSecond,
        borderWidth: vw(1.25),
        width: vw(100),
        height: vw(100),
        marginTop: vh(16),
        borderRadius: 13.33,
        alignItems:'center',
        justifyContent:'center'
    },
    insideImage: {
        width: vw(47.5),
        height: vw(47.5),
        borderRadius: vw(13.33),
    },
    insideImageUpload:{
        width: vw(100),
        height: vw(98),
        borderRadius: vw(13.33), 
    },
    modalMainContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: colors.modalBackground,
    },
    modalContentContainer: {
        height: '20%',
        backgroundColor: colors.white,
        borderRadius: 20,
        // paddingVertical: vw(16),
        paddingHorizontal: vw(20),
    },
    container2: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: vh(10),
        marginVertical: vh(10),
    },
    iconImageSize: {
        height: vw(30),
        width: vw(30),
        resizeMode: 'contain',
    },
    name: {
        fontSize: 16,
        fontWeight: 500,
        color: colors.black,
        marginLeft: vw(20),
    },
    buttonContainer: { backgroundColor: colors.primary, width: '100%', borderRadius: 16, height: vh(56), marginTop: vh(16), marginBottom: vh(20) },
    cityItem: {
        padding: vh(16),
        borderBottomWidth: vw(1),
        borderColor: colors.backButtonBackground,
    },
    cityText: {
        fontSize: normalize(16),
        textAlign: 'center',
        color: colors.black,
    },
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
        fontWeight: 500

    },
    inputContainer1: {
        marginBottom: vh(20),
        paddingVertical: Platform.OS === 'android' ? 5 : 15,
    },
    inputContainerInside: {
        borderColor: colors.white, paddingHorizontal: vw(12), paddingVertical: Platform.OS === 'android' ? 3 : 13 
    },
    closeIconContainer: {
        position: 'absolute',
        top: vw(6),
        right: vw(6),
        backgroundColor: 'white',
        borderRadius: vw(12),
        elevation: vw(8), // for shadow on Android
        shadowColor: '#000', // shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: vw(0.25),
        shadowRadius: vw(3.84),
        zIndex: 10,
        width:vw(24),
        height:vw(24),
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        alignContent:'center'
      },
      
      closeIcon: {
        width: vw(20),
        height: vw(20),
        alignSelf:'center'
      },
})

export default styles