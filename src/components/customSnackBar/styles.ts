import { StyleSheet } from "react-native";
import Colors from "../../utils/colors";
import { vw, vh, normalize } from "../../styles";

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: vh(30),
        left: vw(20),
        right: vw(20),
        padding: vw(15),
        borderRadius: vw(8),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
      },
      message: {
        color: '#fff',
        flex: 1,
        fontSize: normalize(16),
      },
      close: {
        color: '#fff',
        marginLeft: vw(16),
        fontSize: normalize(18),
      },
    });
    