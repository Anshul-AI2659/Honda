import {StyleSheet} from 'react-native';
import {scaleFont} from './Mixins';
import {vw} from './dimensions';

// FONT WEIGHT
export const FONT_WEIGHT_REGULAR = '400';
export const FONT_WEIGHT_BOLD = '700';

// FONT SIZE
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_12 = scaleFont(12);

// LINE HEIGHT
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_16 = scaleFont(16);

// FONT STYLE
export const FONT_REGULAR = {
  fontFamily: 'OpenSans-Regular',
  fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_BOLD = {
  fontFamily: 'OpenSans-Bold',
  fontWeight: FONT_WEIGHT_BOLD,
};
export const CommonStyles = StyleSheet.create({
  FLEX_ONE: {
    flex: 1,
  },
  FLEX_GROW_1: {
    flexGrow: 1
  },
  FLEX_DIRECTION: {
    flexDirection: 'row',
  },
  CENTER: {
    alignItems:'center',
    justifyContent:'center',
  },
  ALIGN_ITEM_CENTER: {
    alignItems:'center'
  },
  MARGIN_VERTICAL_16: {
    marginVertical: vw(16),
  },
  PADDING_VERTICAL_16: {
    paddingVertical: vw(16),
  },
  MARGIN_HORIZONTAL_16: {
    marginHorizontal: vw(16),
  },
  HIT_SLOP: {
    top: vw(20),
    bottom: vw(20),
    right: vw(20),
    left: vw(20),
  },
  SEPARATOR: {
    borderWidth: 1,
    marginTop: vw(16),
    borderColor: '#E5E7EB',
  }
});
