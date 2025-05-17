import { StyleSheet } from "react-native";
import Colors from "../../utils/colors";
import { vw, vh } from "../../styles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3333334D',
    },
    content: {
        width: vw(364),
        padding: 24,
        backgroundColor: Colors.white,
        borderRadius: 16,
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: vh(12),
        textAlign: 'center',
        color: Colors.black
    },
    description: {
        fontSize: 16,
        color: '#7C8585',
        textAlign: 'center',
    },
    buttonContainerView: { flexDirection: 'row', columnGap: vw(10), justifyContent: 'center' },
    buttonContainer: {
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: vh(24),
        width: vw(154),
        paddingVertical: vh(16),
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.black,
    },
    text: {
        color: Colors.lightGreyBlue,
        fontSize: 15,
        fontWeight: 'bold'
    }
});

export default styles;