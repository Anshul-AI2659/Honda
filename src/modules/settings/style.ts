import { Platform, StyleSheet } from "react-native";
import Colors from "../../utils/colors";
import { vw, vh, normalize } from "../../styles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: vw(16),
        backgroundColor: Colors.white
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
    headerText: {
        fontSize: normalize(18),
        fontWeight: 500,
        color: Colors.black,
        marginBottom: vh(16)
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
    icon: {
        width: vw(12),
        height: vh(7),
        resizeMode: 'contain'
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
    text: {
        fontSize: normalize(16),
        fontWeight: 400,
        color: Colors.black
    },
    secondContainer: {
        borderRadius: vw(12),
        borderColor: Colors.borderLight,
        borderWidth: vw(1),
        marginBottom: vh(24),
    },
    firstContainer1: {
         padding: vw(16),
         marginBottom: 0,
         elevation: 0,
         shadowColor: '',
         shadowOffset: { width: 0, height: 0 },
         shadowOpacity: 0,
         shadowRadius: 0,
         borderRadius:vw(12)
    },
    line: {
        height: vh(1),
        backgroundColor: Colors.borderLight,
        marginHorizontal: vw(16),
    },
    buttonContainer: {
        borderRadius: 12,
        backgroundColor: '#F3F6FA',
        borderColor: '#F3F6FA'
    }
})

export default styles;