import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {vh, vw} from '../../../../utils/dimension';
import {size} from '../../../../utils/size';
import {Colors} from '../../../../utils/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ScreenNames} from '../../../../utils/screenNames';
import {BottomTabParamList} from '../../../../utils/types';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

interface MoreProps {
  navigation: BottomTabNavigationProp<BottomTabParamList>;
}
const More = ({navigation}: MoreProps) => {
  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: async () => {
            try {
              await AsyncStorage.removeItem('userToken');
              navigation.reset({
                index: 0,
                routes: [{name: ScreenNames.RoleSelect}],
              });
            } catch (error) {
              console.error('Error removing token', error);
            }
          },
          style: 'destructive',
        },
      ],
      {cancelable: true},
    );
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Text style={styles.bodyText}> In Progress......</Text>
      </View>
      <TouchableOpacity
        style={styles.logoutButton}
        activeOpacity={0.7}
        onPress={handleLogout}>
        <Text style={styles.logoutText}>{'Log out'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default More;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: '14%',
    alignItems: 'flex-end',
    paddingHorizontal: vw(15),
    paddingBottom: vh(20),
    backgroundColor: Colors.primary,
  },
  headerText: {
    fontSize: size.headerTitle,
    fontWeight: '600',
    color: Colors.White,
  },
  settingsImg: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
  },
  subContainer: {
    width: '100%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyText: {
    fontSize: 24,
  },
  logoutButton: {
    paddingVertical: vh(10),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '400',
    color: 'red',
  },
});
