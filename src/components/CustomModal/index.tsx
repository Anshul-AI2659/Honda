import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  Pressable,
  ViewStyle,
  TextStyle,
  ImageSourcePropType,
  GestureResponderEvent,
} from 'react-native';

interface CustomModalProps {
  modalVisible: boolean;
  onRequestClose: () => void;
  title?: string;
  message?: string;
  icon?: ImageSourcePropType;
  buttonText?: string;
  onButtonPress?: (event: GestureResponderEvent) => void;
  fullScreen?: boolean;
  children?: React.ReactNode;
  modalStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  messageStyle?: TextStyle;
  buttonStyle?: ViewStyle;
  buttonTextStyle?: TextStyle;
}

const CustomModal: React.FC<CustomModalProps> = ({
  modalVisible,
  onRequestClose,
  title,
  message,
  icon,
  buttonText,
  onButtonPress,
  fullScreen = false,
  children,
  modalStyle,
  containerStyle,
  titleStyle,
  messageStyle,
  buttonStyle,
  buttonTextStyle,
}) => {
  return (
    <Modal
      animationType="fade"
      visible={modalVisible}
      transparent={!fullScreen}
      onRequestClose={onRequestClose}
    >
      <View style={[styles.modalBackground, fullScreen && styles.fullScreenBackground, modalStyle]}>
        <View style={[styles.modalContainer, fullScreen && styles.fullScreenContainer, containerStyle]}>
          {icon && <Image source={icon} style={styles.iconStyle} />}
          {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
          {message && <Text style={[styles.message, messageStyle]}>{message}</Text>}
          
          {children}

          {buttonText && (
            <Pressable style={[styles.button, buttonStyle]} onPress={onButtonPress || onRequestClose}>
              <Text style={[styles.buttonText, buttonTextStyle]}>{buttonText}</Text>
            </Pressable>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  fullScreenBackground: {
    backgroundColor: 'rgba(0,0,0,0.9)',
  },
  modalContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  fullScreenContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 0,
    justifyContent: 'center',
  },
  iconStyle: {
    height: 60,
    width: 60,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginVertical: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
