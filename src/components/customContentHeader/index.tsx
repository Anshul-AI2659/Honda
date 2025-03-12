import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {Colors} from '../../utils/colors';
import {vh} from '../../utils/dimension';
import {size} from '../../utils/size';

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

const styles = StyleSheet.create({
  contentHeader: {},
  headerText: {
    fontSize: 28,
    fontWeight: '900',
    color: Colors.Black,
  },
  detailText: {
    marginTop: vh(10),
    marginBottom: vh(10),
    fontSize: size.subTitle,
    color: Colors.greyText,
  },
  changeNumberText: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: vh(5),
    textDecorationLine: 'underline',
    textDecorationColor:Colors.Black,
    ...Platform.select({
      android: {
        textDecorationLine: 'underline',
      },
    }),
  },
});

export default ContentHeader;
