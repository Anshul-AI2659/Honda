import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { vh, vw } from '../../styles';
import colors from '../../utils/colors';

const TabButton = ({ label, selectedTab, setSelectedTab }) => {
    const isSelected = selectedTab === label;
    return (
      <TouchableOpacity
        style={[
          styles.selected,
          {
            backgroundColor: isSelected ? '#002D62' : colors.white,
          },
        ]}
        onPress={() => setSelectedTab(label)}
      >
        <Text
          style={{
            color: isSelected ? 'white' : '#000000',
            fontWeight: isSelected ? '400' : '500',
            fontSize: 14,
          }}
        >
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

export default TabButton

const styles = StyleSheet.create({

    selected: {
        paddingVertical: vh(12),
        paddingHorizontal: vw(20),
        borderRadius: vh(20),
        alignItems: 'center',
        justifyContent: 'center',
      },
})