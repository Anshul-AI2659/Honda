import { Platform, StyleSheet } from "react-native";
import colors from "../../utils/colors";
import { vh, vw } from "../../styles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
     header: {
        marginTop: Platform.OS === 'ios' ? vh(0) : vh(3),
        paddingHorizontal:vh(16),
        borderBottomWidth: vw(1),
        borderBottomColor: 'rgba(0, 0, 0, 0.07)',
        shadowColor: 'rgba(255, 255, 255, 1)',
        shadowOffset: {width: 0, height: 0.5},
        shadowOpacity: vw(0.4),
        elevation: 2,
    },
    backButton: {
        width: vw(40),
        height: vw(40),
        resizeMode: 'contain',
    },
    imageView:{
        marginTop:vh(10)
    },
})

export default styles;