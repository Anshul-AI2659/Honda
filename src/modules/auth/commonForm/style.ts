//library import
import { Platform, StyleSheet } from "react-native";
// Utils
import colors from "../../../utils/colors";
// Styles
import { normalize, vh, vw } from "../../../styles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    header: {
        marginTop: Platform.OS === 'ios' ? vh(0) : vh(3),
        paddingVertical: vh(14),
        paddingHorizontal: vw(16),
        ...Platform.select({
          ios: {
            shadowColor: 'rgba(0, 0, 0, 0.07)',
            shadowOffset: {width: 0, height: 4},
            shadowOpacity: .5,
          
          },
          android: {
            boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.07)',
          },
        }),
      },
      scroll:{
         marginTop:vh(18),
         paddingHorizontal:vw(16)
      },
    imageWrapper: {
        width: vw(40),
        height: vw(40),
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: vw(1),
        borderRadius: 16,
        paddingHorizontal: vw(10),
        marginBottom: vh(20), 
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
        backgroundColor: colors.borderSecond,
        marginLeft: vw(10)
    },
    buttonView: { flex: 1, justifyContent: 'flex-end', alignItems: 'center',paddingBottom:vh(20) ,paddingHorizontal:vw(16)},
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
    footerText: {
        fontSize: normalize(12),
        color: '#666',
        textAlign: 'center',
        marginTop: vh(24),
      },
      link: {
        color: colors.black,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        textDecorationColor: colors.black,
      },
      backIcon: {
        width: vw(40),
        height: vw(40),
        resizeMode: 'contain',
      },
      inputContainer1: {
        marginBottom: vh(20),
        paddingVertical: Platform.OS === 'android' ? 5 : 15,
    },
    inputContainerInside: { borderColor: colors.white, paddingHorizontal: vw(12), paddingVertical: Platform.OS === 'android' ? 3 : 13 },
})

export default styles;