import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {vh} from '../../utils/dimension';
import {size} from '../../utils/size';

interface ContentHeaderProps {
  headerText: string;
  detailText: string;
  headerTextStyle?: object;
  detailTextStyle?:object;
}

const ContentHeader = ({headerText, detailText,headerTextStyle,detailTextStyle}: ContentHeaderProps) => {
  return (
    <View style={[styles.contentHeader]}>
      <Text style={[styles.headerText,headerTextStyle]}>{headerText}</Text>
      <Text style={[styles.detailText,detailTextStyle]}>{detailText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contentHeader: {
  },
  headerText: {
    fontSize: 28,
    fontWeight: '900',
    color: Colors.Black,
  },
  detailText: {
    marginTop: vh(10),
    marginBottom: vh(10),
    fontSize: size.subTitle,
    color: '#656565',
  },
});

export default ContentHeader;
