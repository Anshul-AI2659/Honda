import Snackbar from 'react-native-snackbar';

type SnackBarType = 'success' | 'error' | 'info' | 'warning';

const backgroundColors: Record<SnackBarType, string> = {
  success: '#4CAF50',   // Green
  error: '#F44336',     // Red
  info: '#2196F3',      // Blue
  warning: '#FFC107',   // Yellow/Orange
};

class CustomSnackBar {
  static show(
    message: string,
    type: SnackBarType = 'success',
    duration?: number,
    action?: {
      text: string;
      onPress: () => void;
      textColor?: string;
    }
  ) {
    Snackbar.show({
      text: message,
      duration: duration ?? Snackbar.LENGTH_SHORT,
      backgroundColor: backgroundColors[type],
      textColor: '#fff',
      action: action
        ? {
            text: action.text,
            textColor: action.textColor || '#FFFFFF',
            onPress: action.onPress,
          }
        : undefined,
    });
  }
}

export default CustomSnackBar;