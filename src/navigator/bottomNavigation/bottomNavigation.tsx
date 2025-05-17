/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
// import React from 'react';
// import {Image, Text, View} from 'react-native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// // Screens
// import More from '../../modules/bottomTabs/more';
// import Home from '../../modules/bottomTabs/home';
// import Category from '../../modules/bottomTabs/category';
// import Promotion from '../../modules/bottomTabs/promotion';
// import Training from '../../modules/bottomTabs/training';

// // Utils
// import {BottomTabParamList} from '../../utils/types';
// import {vh} from '../../utils/dimension';
// import {Colors} from '../../utils/colors';

// //Assets
// import {Icons} from '../../assets';

// //Styles
// import styles from './styles';

// type TabBarIconProps = {
//   focused: boolean;
// };

// const Tab = createBottomTabNavigator<BottomTabParamList>();

// const HomeTabIcon = ({focused}: TabBarIconProps) => (
//   <Image
//     style={[
//       styles.icon,
//       {tintColor: focused ? Colors.primary : Colors.inActiveTab},
//     ]}
//     source={Icons.homeFocused}
//   />
// );

// const CategoryTabIcon = ({focused}: TabBarIconProps) => (
//   <Image
//     style={[
//       styles.icon,
//       {tintColor: focused ? Colors.primary : Colors.inActiveTab},
//     ]}
//     source={Icons.category}
//   />
// );

// const PromotionTabIcon = ({focused}: TabBarIconProps) => (
//   <Image
//     style={[
//       styles.icon,
//       {tintColor: focused ? Colors.primary : Colors.inActiveTab},
//     ]}
//     source={Icons.promotion}
//   />
// );

// const TrainingTabIcon = ({focused}: TabBarIconProps) => (
//   <Image
//     style={[
//       styles.icon,
//       {tintColor: focused ? Colors.primary : Colors.inActiveTab},
//     ]}
//     source={Icons.training}
//   />
// );

// const MoreTabIcon = ({focused}: TabBarIconProps) => (
//   <Image
//     style={[
//       styles.icon,
//       {tintColor: focused ? Colors.primary : Colors.inActiveTab},
//     ]}
//     source={Icons.more}
//   />
// );

// const TabBarLabelWithDot = ({
//   label,
//   focused,
// }: {
//   label: string;
//   focused: boolean;
// }) => (
//   <View style={styles.singleTabContainer}>
//     <Text
//       style={[
//         styles.tabBarLabel,
//         {color: focused ? Colors.primary : Colors.inActiveTab},
//       ]}>
//       {label}
//     </Text>
//     {focused && <View style={styles.focusedDot} />}
//   </View>
// );

// const getTabBarLabel =
//   (label: string) =>
//   ({focused}: {focused: boolean}) => {
//     return <TabBarLabelWithDot label={label} focused={focused} />;
//   };

// // Main Component
// const BottomNavigation = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={() => ({
//         headerShown: false,
//         tabBarShowLabel: true,
//         tabBarStyle: {
//           height: vh(104),
//           justifyContent: 'center',
//           backgroundColor: Colors.White,
//           paddingTop: vh(12),
//         },
//       })}>
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           tabBarIcon: HomeTabIcon,
//           tabBarLabel: getTabBarLabel('Home'),
//         }}
//       />
//       <Tab.Screen
//         name="Category"
//         component={Category}
//         options={{
//           tabBarIcon: CategoryTabIcon,
//           tabBarLabel: getTabBarLabel('Category'),
//         }}
//       />
//       <Tab.Screen
//         name="Promotion"
//         component={Promotion}
//         options={{
//           tabBarIcon: PromotionTabIcon,
//           tabBarLabel: getTabBarLabel('Promotion'),
//         }}
//       />
//       <Tab.Screen
//         name="Training"
//         component={Training}
//         options={{
//           tabBarIcon: TrainingTabIcon,
//           tabBarLabel: getTabBarLabel('Training'),
//         }}
//       />
//       <Tab.Screen
//         name="More"
//         component={More}
//         options={{
//           tabBarIcon: MoreTabIcon,
//           tabBarLabel: getTabBarLabel('More'),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default BottomNavigation;

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Svg, {Circle, Path} from 'react-native-svg';
import {Colors} from '../../utils/colors';
import {Icons} from '../../assets';
import {vw} from '../../utils/dimension';
const {width} = Dimensions.get('window');

// Dummy Screens
const HomeScreen = () => (
  <View style={styles.screen}>
    <Text>Home Screen</Text>
  </View>
);

const TocScreen = () => (
  <View style={styles.screen}>
    <Text>TOC Screen</Text>
  </View>
);

const SearchScreen = () => (
  <View style={styles.screen}>
    <Text>Search Screen</Text>
  </View>
);

const LibraryScreen = () => (
  <View style={styles.screen}>
    <Text>Library Screen</Text>
  </View>
);

const MoreScreen = () => (
  <View style={styles.screen}>
    <Text>More Screen</Text>
  </View>
);

// Tab Navigator
const Tab = createBottomTabNavigator();

// Custom TabBarButton for the center button
const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      marginTop: -15,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    onPress={onPress}>
    <View
      style={{
        top: -28,
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#b71c1c',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

const TabBarBackground = () => {
  const height = 120;
  const curveRadius = 40;

  // const path = `
  //   M0 0
  //   H${width / 2.5 - curveRadius}
  //   C${width / 2.13 - curveRadius / 1.8} 0, ${width / 2.2 - curveRadius / 2}
  // ${curveRadius}, ${width / 2} ${curveRadius}
  //   C${width / 1.85 + curveRadius / 2} ${curveRadius}, ${
  //   width / 1.82 + curveRadius / 2
  // } 0, ${width / 1.75 + curveRadius + 4} 0
  //   H${width}
  //   V${height}
  //   H0
  //   Z
  // `;

  const path = `
    M0 ${curveRadius}
    H${width / 2 - curveRadius * 2}
    C${width / 2 - curveRadius + 6} ${curveRadius}, ${
    width / 2.4 - curveRadius / 2
  } 0, ${width / 2} 0
    C${width / 2 + curveRadius + 6} 0, ${
    width / 1.82 + curveRadius / 2
  } ${curveRadius}, ${width / 1.72 + curveRadius} ${curveRadius}
    H${width}
    V${height}
    H0
    Z
  `;

  return (
    <Svg
      width={width}
      height={height + curveRadius}
      style={{boxShadow: '0px -4px 40px 0px rgba(220, 227, 237, 0.6)'}}>
      <Path fill="#fff" d={path} />
    </Svg>
  );
};

// Main App Component
const App = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        position: 'absolute',
        backgroundColor: 'rgba(220, 227, 237, 0.6)',
        height: 120,
        borderColor: 'rgba(220, 227, 237, 0.6)',
        justifyContent: 'flex-end',
        paddingTop: 60,
        // boxShadow: '0px -4px 40px 0px rgba(220, 227, 237, 0.6)',
      },
      tabBarBackground: () => <TabBarBackground />,
    }}>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image
              style={[focused ? styles.iconActive : styles.icon]}
              source={focused ? Icons.homeActive : Icons.homeFocused}
            />
            <Text
              style={{
                color: focused ? '#b71c1c' : '#748c94',
                fontSize: 12,
                width: 50,
                textAlign: 'center',
              }}>
              Home
            </Text>
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="TOC"
      component={TocScreen}
      options={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image
              style={[focused ? styles.iconActive : styles.icon]}
              source={focused ? Icons.findEventsActive : Icons.category}
            />
            <Text
              style={{
                color: focused ? '#b71c1c' : '#748c94',
                fontSize: 12,
                width: 50,
                textAlign: 'center',
              }}>
              TOC
            </Text>
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchScreen}
      options={{
        tabBarIcon: ({focused}) => (
          <Image
            source={Icons.search}
            style={{width: 32, height: 32, tintColor: '#fff'}}
          />
        ),
        tabBarButton: props => <CustomTabBarButton {...props} />,
      }}
    />
    <Tab.Screen
      name="Library"
      component={LibraryScreen}
      options={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image
              style={[focused ? styles.iconActive : styles.icon]}
              source={focused ? Icons.calendarActive : Icons.promotion}
            />
            <Text
              style={{
                color: focused ? '#b71c1c' : '#748c94',
                fontSize: 12,
                width: 50,
                textAlign: 'center',
              }}>
              Library
            </Text>
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="More"
      component={MoreScreen}
      options={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image
              style={[focused ? styles.iconActive : styles.icon]}
              source={focused ? Icons.moreActive : Icons.more}
            />
            <Text
              style={{
                color: focused ? '#b71c1c' : '#748c94',
                fontSize: 12,
                width: 50,
                textAlign: 'center',
              }}>
              More
            </Text>
          </View>
        ),
      }}
    />
  </Tab.Navigator>
);

export default App;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(220, 227, 237, 0.6)',
  },
  iconActive: {
    width: vw(70),
    height: vw(70),
    resizeMode: 'contain',
  },
  icon: {
    width: vw(32),
    height: vw(32),
    resizeMode: 'contain',
  },
});
