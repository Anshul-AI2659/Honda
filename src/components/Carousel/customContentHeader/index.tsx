import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

interface ContentHeaderProps {
  headerText: string;
  detailText: string;
  headerTextStyle?: object;
  detailTextStyle?: object;
  changeNumber?:boolean
}

const ContentHeader = ({
  headerText,
  detailText,
  headerTextStyle,
  detailTextStyle,
  changeNumber,
}: ContentHeaderProps) => {
  return (
    <View style={[styles.contentHeader]}>
      <Text style={[styles.headerText, headerTextStyle]}>{headerText}</Text>
      <Text style={[styles.detailText, detailTextStyle]}>{detailText}</Text>
      {changeNumber && (
        <Text style={styles.changeNumberText}>{'Change Number?'}</Text>
      )}
    </View>
  );
};



export default ContentHeader;
