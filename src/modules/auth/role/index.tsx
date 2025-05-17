/* eslint-disable react/no-unstable-nested-components */
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// Assets
import { Images } from '../../../assets';
// Styles
import styles from './styles';
// Utils
import { ScreenNames } from '../../../utils/screenNames';
import { RootStackParamList } from '../../../utils/types';
// Custom Components
import CustomHeader from '../../../components/customHeader';
import CustomStatusBar from '../../../components/statusBar';
import { useAppDispatch } from '../../../hooks';
import { authAction } from '../../../Redux/Slices/authslice';

const roles = [
  {id: 1, name: 'Customer', icon: Images.customerRoleIcon},
  {id: 2, name: 'Dealer', icon: Images.dealerRoleIcon},
  {id: 3, name: 'Retailer', icon: Images.retailerRoleIcon},
  {id: 4, name: 'Employee', icon: Images.employeeRoleIcon},
];
type RoleNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.Role
>;
const Role = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<RoleNavigationProp>();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.mainContainer, {paddingTop: insets.top}]}>
      <CustomStatusBar />
      <CustomHeader headerIcon={Images.hondaLogoIcon} headerStyle={styles.header} />

      <View style={styles.HeadingContainer}>
        <Text style={styles.title}>Who Are You?</Text> 
        <Text style={styles.subtitle}>Please select a role to continue</Text>
      </View>

      <View style={styles.grid}>
        {roles?.map(role => (
          <TouchableOpacity
            key={role.id}
            style={styles.roleCard}
            onPress={() => {
              dispatch(authAction?.setUserType(role.id)); // Set uType (1, 2, 3, or 4)
              navigation.navigate(ScreenNames.Signin, {roleName: role.name});
            }}
            >
              <Image source={role.icon} style={styles.roleIcon} />
            <Text style={styles.roleText}>{role.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Role;
