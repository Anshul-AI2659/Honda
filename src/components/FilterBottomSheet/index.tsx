import React, {useRef, useCallback, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
  ViewStyle,
} from 'react-native';
import BottomSheet, {
  BottomSheetView,
  BottomSheetScrollView,
  BottomSheetFlatList,
} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {runOnJS} from 'react-native-reanimated';
import {Images} from '../../assets';
import styles from './styles';
import colors from '../../utils/colors';

interface FilterBottomSheetProps {
  visible: boolean;
  onClose: () => void;
  showCheckbox?: boolean;
  applyFilter: () => void;
  onClearAll: () => void;
  children?: React.ReactNode;
  priceRange?: number[];
  selectedCategories?: string[];
  selectedTypes?: string[];
  style?: ViewStyle;
  hasSelectedFilters?: boolean;
  selectedStatus: string[];
  selectedDate: {from: Date | null; to: Date | null};
  initialPriceRange?: number[];
  initialSelectedCategories?: string[];
  initialSelectedTypes?: string[];
}

const FilterBottomSheet: React.FC<FilterBottomSheetProps> = ({
  visible,
  onClose,
  showCheckbox = true,
  applyFilter,
  onClearAll,
  children,
  priceRange = [0, 0],
  selectedCategories = [],
  selectedTypes = [],
  style,
  hasSelectedFilters = false,
  selectedStatus,
  selectedDate,
  initialPriceRange = [0, 0],
  initialSelectedCategories = [],
  initialSelectedTypes = [],
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1) {
        runOnJS(onClose)();
      }
    },
    [onClose],
  );

  // const isFilterActive =
  //   selectedStatus.length > 0 ||
  //   selectedDate.from !== null ||
  //   selectedDate.to !== null ||
  //   priceRange[0] !== initialPriceRange[0] ||
  //   priceRange[1] !== initialPriceRange[1] ||
  //   JSON.stringify(selectedCategories) !==
  //     JSON.stringify(initialSelectedCategories) ||
  //   JSON.stringify(selectedTypes) !== JSON.stringify(initialSelectedTypes);

//   const isPartialDateSelected =
//   (selectedDate.from && !selectedDate.to) || (!selectedDate.from && selectedDate.to);

// const isAnyOtherFilterActive =
//   selectedStatus.length > 0 ||
//   priceRange[0] !== initialPriceRange[0] ||
//   priceRange[1] !== initialPriceRange[1] ||
//   JSON.stringify(selectedCategories) !== JSON.stringify(initialSelectedCategories) ||
//   JSON.stringify(selectedTypes) !== JSON.stringify(initialSelectedTypes);

// const isFilterActive =
//   !isPartialDateSelected && (
//     isAnyOtherFilterActive || 
//     (selectedDate.from && selectedDate.to)
//   );

const isPartialDateSelected =
  (selectedDate.from !== null && selectedDate.to === null) ||
  (selectedDate.to !== null && selectedDate.from === null);

const isFullDateRangeSelected =
  selectedDate.from !== null && selectedDate.to !== null;

const isInvalidDateRange =
  isFullDateRangeSelected &&
  new Date(selectedDate?.to) < new Date(selectedDate?.from);

const isOtherFiltersSelected =
  selectedStatus.length > 0 ||
  priceRange[0] !== initialPriceRange[0] ||
  priceRange[1] !== initialPriceRange[1] ||
  JSON.stringify(selectedCategories) !== JSON.stringify(initialSelectedCategories) ||
  JSON.stringify(selectedTypes) !== JSON.stringify(initialSelectedTypes);

// Final condition
const isFilterActive =
  !isPartialDateSelected &&
  !isInvalidDateRange &&
  (isOtherFiltersSelected || isFullDateRangeSelected);





  if (!visible) return null;

  return (
    <GestureHandlerRootView style={[styles.container, style]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'android' ? 50 : 0}
        style={{flex: 1}}>
        {visible && (
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Image source={Images.close} style={styles.close} />
          </TouchableOpacity>
        )}

        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          onChange={handleSheetChanges}
          enablePanDownToClose={true}
          enableContentPanningGesture={true}
          handleIndicatorStyle={{display: 'none'}}>
          <View style={[styles.content]}>
            <BottomSheetScrollView
              showsVerticalScrollIndicator={false}
              nestedScrollEnabled={true}
              keyboardShouldPersistTaps="handled"
              contentContainerStyle={{flexGrow: 1}}>
              <View style={styles.header}>
                <Text style={styles.title}>Filter</Text>
                <TouchableOpacity
                  onPress={onClearAll}
                  disabled={!hasSelectedFilters}>
                  <Text
                    style={[
                      styles.clearText,
                      hasSelectedFilters
                        ? {color: colors.primary}
                        : styles.disabledText,
                    ]}>
                    Clear all
                  </Text>
                </TouchableOpacity>
              </View>
              {children}
            </BottomSheetScrollView>
          </View>
        </BottomSheet>
      </KeyboardAvoidingView>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
          <Text style={styles.cancelText}>CANCEL</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={[
            styles.applyButton,
            !isFilterActive && !hasSelectedFilters && styles.disabledApplyButton,
          ]}
          onPress={isFilterActive ? applyFilter : undefined}
          disabled={!isFilterActive}>
          <Text
            style={[
              styles.applyText,
              !isFilterActive && !hasSelectedFilters && styles.disabledApplyText,
            ]}>
            APPLY
          </Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={[
            styles.applyButton,
            !isFilterActive && styles.disabledApplyButton,
          ]}
          onPress={isFilterActive ? applyFilter : undefined}
          disabled={!isFilterActive}>
          <Text
            style={[
              styles.applyText,
              !isFilterActive && styles.disabledApplyText,
            ]}>
            APPLY
          </Text>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
};

export default FilterBottomSheet;
