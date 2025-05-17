import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

interface ContentHeaderProps {
  headerText: string;
  detailText: string;
  headerTextStyle?: object;
  detailTextStyle?: object;
  changeText?:string;
}

const ContentHeader = ({
  headerText,
  detailText,
  headerTextStyle,
  detailTextStyle,
  changeText,
}: ContentHeaderProps) => {
  return (
    <View style={[styles.contentHeader]}>
      <Text style={[styles.headerText, headerTextStyle]}>{headerText}</Text>
      <Text style={[styles.detailText, detailTextStyle]}>{detailText}</Text>
      {changeText && (
        <Text style={styles.changeNumberText}>{changeText}</Text>
      )}
    </View>
  );
};



export default ContentHeader;
