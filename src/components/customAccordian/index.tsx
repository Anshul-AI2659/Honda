interface CustomCardProps {
  title: string;

  isExpanded?: boolean;
  onAccordionPress?: () => void;

  expandImage?: any;
  unexpandImage?: any;
  iconSize?: number;
  iconColor?: string;
  children?:ReactNode
  style?:ViewStyle
}

import React, { ReactNode } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ViewStyle } from 'react-native';
import { FontsStyles, normalize, vh } from '../../styles';
import { ROBOTO_MEDIUM } from '../../styles/Fonts';
import colors from '../../utils/colors';

const SingleExpandableList = ({ title, isExpanded, onAccordionPress, children ,expandImage, unexpandImage,
 iconSize,
    iconColor,style}:CustomCardProps) => {
  return (
    <View style={[styles.container,style]}>
      <View  style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={onAccordionPress}>
        <Image
                source={isExpanded ? expandImage : unexpandImage}
                style={[
                  styles.iconImage,
                  {
                    width: iconSize || 24,
                    height: iconSize || 24,
                    tintColor: iconColor || '#666',
                  },
                ]}
              />
      </TouchableOpacity>
      </View>
      {isExpanded && <View style={styles.content}>{children}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: vh(24) ,borderWidth:1,borderRadius:vh(12),borderColor:colors.inactiveDot,justifyContent:'center'},
  header: { flexDirection: 'row', justifyContent: 'space-between', padding:vh(16),alignItems:'center'},
  title: { fontSize: normalize(16),fontFamily:ROBOTO_MEDIUM,letterSpacing:0.1 },
  content: { flex:1},
  iconImage: {
    resizeMode: 'contain',
  },
});

export default SingleExpandableList;