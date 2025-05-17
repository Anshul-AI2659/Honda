// permissions.ts
import { PermissionsAndroid, Platform} from 'react-native';

// Helper for requesting Camera Permission
export const requestCameraPermission = async (): Promise<boolean> => {
  try {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs camera access to take photos',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } else {
      // On iOS, the permissions are handled in Info.plist
      return true;
    }
  } catch (err) {
    console.warn(err);
    return false;
  }
};

// Helper for requesting Storage Permission (Read/Write)
export const requestStoragePermission = async (): Promise<boolean> => {
  try {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission',
          message: 'App needs access to your storage to select and save photos',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } else {

      return true;
    }
  } catch (err) {
    console.warn(err);
    return false;
  }
};

export const requestCameraAndStoragePermissions = async (): Promise<boolean> => {
  const cameraPermission = await requestCameraPermission();
  const storagePermission = await requestStoragePermission();
  return cameraPermission && storagePermission;
};
