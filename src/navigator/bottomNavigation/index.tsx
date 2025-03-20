import React from 'react';
import {Image, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screens
import More from '../../modules/bottomTabs/more';
import Home from '../../modules/bottomTabs/home';
import Category from '../../modules/bottomTabs/category';
import Promotion from '../../modules/bottomTabs/promotion';
import Training from '../../modules/bottomTabs/training';

// Utils
import {BottomTabParamList} from '../../utils/types';
import {vh} from '../../utils/dimension';
import {Colors} from '../../utils/colors';

//Assets
import {Icons} from '../../assets';

//Styles
import styles from './styles';
import {ROBOTO_MEDIUM, ROBOTO_SEMIBOLD} from '../../utils/Fonts';

type TabBarIconProps = {
  focused: boolean;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const HomeTabIcon = ({focused}: TabBarIconProps) => (
  <Image
    style={[
      styles.icon,
      {tintColor: focused ? Colors.primary : Colors.inActiveTab},
    ]}
    source={Icons.homeFocused}
  />
);

const CategoryTabIcon = ({focused}: TabBarIconProps) => (
  <Image
    style={[
      styles.icon,
      {tintColor: focused ? Colors.primary : Colors.inActiveTab},
    ]}
    source={Icons.category}
  />
);

const PromotionTabIcon = ({focused}: TabBarIconProps) => (
  <Image
    style={[
      styles.icon,
      {tintColor: focused ? Colors.primary : Colors.inActiveTab},
    ]}
    source={Icons.promotion}
  />
);

const TrainingTabIcon = ({focused}: TabBarIconProps) => (
  <Image
    style={[
      styles.icon,
      {tintColor: focused ? Colors.primary : Colors.inActiveTab},
    ]}
    source={Icons.training}
  />
);

const MoreTabIcon = ({focused}: TabBarIconProps) => (
  <Image
    style={[
      styles.icon,
      {tintColor: focused ? Colors.primary : Colors.inActiveTab},
    ]}
    source={Icons.more}
  />
);

const TabBarLabelWithDot = ({
  label,
  focused,
}: {
  label: string;
  focused: boolean;
}) => (
  <View style={styles.singleTabContainer}>
    <Text
      style={[
        styles.tabBarLabel,
        {
          color: focused ? Colors.blackText : Colors.inActiveTab,
          fontFamily: focused ? ROBOTO_SEMIBOLD : ROBOTO_MEDIUM,
        },
      ]}>
      {label}
    </Text>
    {focused && <View style={styles.focusedDot} />}
  </View>
);

const getTabBarLabel =
  (label: string) =>
  ({focused}: {focused: boolean}) => {
    return <TabBarLabelWithDot label={label} focused={focused} />;
  };

// Main Component
const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarHideOnKeyboard:true,
        tabBarStyle: {
          height: vh(104),
          justifyContent: 'center',
          backgroundColor: Colors.White,
          paddingTop: vh(12),
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: HomeTabIcon,
          tabBarLabel: getTabBarLabel('Home'),
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarIcon: CategoryTabIcon,
          tabBarLabel: getTabBarLabel('Category'),
        }}
      />
      <Tab.Screen
        name="Promotion"
        component={Promotion}
        options={{
          tabBarIcon: PromotionTabIcon,
          tabBarLabel: getTabBarLabel('Promotion'),
        }}
      />
      <Tab.Screen
        name="Training"
        component={Training}
        options={{
          tabBarIcon: TrainingTabIcon,
          tabBarLabel: getTabBarLabel('Training'),
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarIcon: MoreTabIcon,
          tabBarLabel: getTabBarLabel('More'),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
