import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, { useEffect, useState } from 'react';
import {StyleSheet, View, Image, Text, Platform} from 'react-native';
import {ScreenNames} from '../../utils/screenNames';
import colors from '../../utils/colors';
import { Images } from '../../assets';
import Home from '../../modules/bottomTabs/home';
import More from '../../modules/bottomTabs/more';
import Promotion from '../../modules/bottomTabs/promotion';
import Training from '../../modules/bottomTabs/training';
import { normalize, vh, vw } from '../../styles';
import Category from '../../modules/bottomTabs/products';
import { useAppDispatch, useAppSelector } from '../../hooks';


const Tab = createBottomTabNavigator();

const TabIcon = ({focused, icon}) => {
  return (
    <View style={styles.iconContainer}>
      <Image
        source={icon}
        style={[
          styles.icon,
          {tintColor: focused ? colors.primary : colors.lightGrey},
        ]}
      />
      {focused && <View style={styles.redDot} />}
    </View>
  );
};

const TabLabel = ({ focused, label }) => {
  return (
    <Text
      style={{
        color: focused ? colors.primary : colors.lightGrey,
        fontWeight: 'bold',
        fontSize: normalize(12),
        marginTop:vh(2)
      }}>
      {label}
    </Text>
  );
};


const BottomTabNavigator = ({route}) => {
   const {roleName,data} = route.params ?? 'Dealer'
   console.log('at bottom tab',roleName);

      

  return (
    <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: true,
      headerShown: false,
      tabBarStyle: {
        backgroundColor: colors.white,
        height: vh(100),
        paddingTop:vh(12),

        ...Platform.select({
          ios: {
            shadowColor: 'rgba(220, 227, 237, 0.4)',
            shadowOffset: {width: 0, height: -4},
            shadowOpacity: 1,
            shadowRadius: 40,
          },
          android:{
            boxShadow: '0px -4px 40px rgba(220, 227, 237, 0.6)',
          },
        }),
      },
      tabBarLabelStyle: {
        color: 'black',
        fontWeight: 'bold',
      },
      tabBarItemStyle: {
        flex: 1, // Makes each tab take equal width
        alignItems: 'center',
      },
    }}>
      <Tab.Screen
        initialParams={{roleName,data}}
        component={Home}
        name={ScreenNames.Home}
        options={{
          // tabBarLabel: 'Home',
          tabBarLabel: ({ focused }) => <TabLabel focused={focused} label="Home" />,
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icon={Images.homeIcon} />
          ),
        }}
      />

      <Tab.Screen
         initialParams={{roleName,data}}
        component={Category}
        name={ScreenNames.Category}
        options={{
          tabBarLabel: ({ focused }) => <TabLabel focused={focused} label="Products" />,
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icon={Images.categoryIcon} />
          ),
        }}
      />

      <Tab.Screen
        initialParams={{roleName,data}}
        component={Promotion}
        name={ScreenNames.Promotion}
        options={{
          tabBarLabel: ({ focused }) => <TabLabel focused={focused} label="Promotions" />,
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icon={Images.promotionIcon} />
          ),
        }}
      />

      <Tab.Screen
        initialParams={{roleName,data}}
        component={Training}
        name={ScreenNames.Training}
        options={{
          tabBarLabel: ({ focused }) => <TabLabel focused={focused} label="Training" />,
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icon={Images.trainingIcon} />
          ),
        }}
      />

      <Tab.Screen
        initialParams={{roleName,data}}
        component={More}
        name={ScreenNames.More}
        options={{
          tabBarLabel: ({ focused }) => <TabLabel focused={focused} label="More" />,
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icon={Images.moreIcon} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
  },
  icon: {
    width: vw(24),
    height: vh(25),
    resizeMode: 'contain',
  },
  redDot: {
    width: vh(6),
    height: vh(6),
    borderRadius: vh(3),
    backgroundColor: colors.primary,
    bottom: vh(-30), 
  },
});
