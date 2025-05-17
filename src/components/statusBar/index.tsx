import React from 'react';
import { View, StatusBar, StatusBarStyle } from 'react-native';

interface CustomStatusBarProps {
  barStyle?: StatusBarStyle;
}

const CustomStatusBar: React.FC<CustomStatusBarProps> = ({ barStyle = 'dark-content' }) => {
  return (
    <View>
      <StatusBar
        backgroundColor="transparent"
        barStyle={barStyle}
        translucent={true}
      />
    </View>
  );
};

export default CustomStatusBar;
