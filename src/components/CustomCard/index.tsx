import React, { ReactNode } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Switch,
  TouchableOpacity,
  Image,
  TextStyle,
} from 'react-native';

interface CustomCardProps {
  title: ReactNode;
  description: ReactNode;
  isExpanded?: boolean;
  onAccordionPress?: () => void;
  switchValue?: boolean;
  onSwitchChange?: (value: boolean) => void;
  cardStyle?: StyleProp<ViewStyle>;
  showSwitch?: boolean;
  showAccordion?: boolean;
  showArrow?: boolean;
  expandImage?: any;
  unexpandImage?: any;
  iconSize?: number;
  iconColor?: string;
  switchSize?: { width: number; height: number };
  switchColors?: {
    trackActive?: string;
    trackInactive?: string;
    thumbActive?: string;
    thumbInactive?: string;
  };
  titleStyle?: TextStyle;
  descriptionStyle?: TextStyle;
}

const CustomCard = ({
  title,
  description,
  isExpanded = false,
  onAccordionPress,
  switchValue = false,
  onSwitchChange,
  cardStyle,
  showSwitch = false,
  showAccordion = false,
  showArrow = false,
  expandImage,
  unexpandImage,
  iconSize,
  iconColor,
  switchSize,
  switchColors,
  titleStyle,
  descriptionStyle
}: CustomCardProps) => {
  return (
    <TouchableOpacity style={[styles.card, cardStyle]} onPress={onAccordionPress} activeOpacity={0.8}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          {typeof title === 'string' ? (
            <Text style={[styles.title, titleStyle]}>{title}</Text>
          ) : (
            title
          )}
        </View>
        <View style={styles.rightControls}>
          {showSwitch && (
            <View
              style={[
                styles.switchContainer,
                switchSize && {
                  transform: [
                    { scaleX: switchSize.width / 51 },
                    { scaleY: switchSize.height / 31 },
                  ],
                },
              ]}>
              <Switch
                value={switchValue}
                onValueChange={onSwitchChange}
                trackColor={{
                  false: switchColors?.trackInactive || '#767577',
                  true: switchColors?.trackActive || '#81b0ff',
                }}
                thumbColor={
                  switchValue
                    ? switchColors?.thumbActive || '#2196F3'
                    : switchColors?.thumbInactive || '#f4f3f4'
                }
              />
            </View>
          )}
          {showAccordion && (
            <TouchableOpacity
              onPress={onAccordionPress}
              style={styles.iconButton}>
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
          )}
        </View>
      </View>

      {isExpanded && (showAccordion || showArrow) && (
        <View style={styles.content}>
          {typeof description === 'string' ? (
            <Text style={[styles.description, descriptionStyle]}>{description}</Text>
          ) : (
            description
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    flex: 1,
    fontSize: 18,
    marginRight: 12,
  },
  rightControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  iconButton: {
    marginLeft: 8,
    padding: 4,
  },
  content: {
    marginTop: 12,
    paddingTop: 12,
    // borderTopWidth: 1,
    // borderTopColor: '#eee',
  },
  description: {
    fontSize: 14,
    color: '#7C8585',
  },
  iconImage: {
    resizeMode: 'contain'
  },
  switchContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomCard;