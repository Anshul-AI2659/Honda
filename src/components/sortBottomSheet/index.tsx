import React, {useRef, useCallback, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {runOnJS} from 'react-native-reanimated';
import styles from './styles';
import {Images} from '../../assets';

interface SortBottomSheetProps {
  visible: boolean;
  onClose: () => void;
  onApplySort: (sortOrder: string) => void;
}

const SortBottomSheet: React.FC<SortBottomSheetProps> = ({
  visible,
  onClose,
  onApplySort,
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [selectedSort, setSelectedSort] = useState<string>('high');

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1) {
        runOnJS(onClose)();
      }
    },
    [onClose],
  );

  const applySort = () => {
    onApplySort(selectedSort);
    onClose();
  };

  if (!visible) return null;

  return (
    <GestureHandlerRootView style={styles.container}>
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
          handleIndicatorStyle={{display: 'none'}}
          ref={bottomSheetRef}
          index={0}
          onChange={handleSheetChanges}
          enablePanDownToClose={true}
          enableContentPanningGesture={true}>
          <BottomSheetView style={styles.content}>
            <Text style={styles.sectionTitle}>Sort By</Text>

            <TouchableOpacity
              style={styles.option}
              onPress={() => setSelectedSort('high')}>
              <Text style={styles.optionText}>Price (High to Low)</Text>

              <Image
                source={
                  selectedSort === 'high'
                    ? Images.selectRadio
                    : Images.unselectRadio
                }
                style={styles.radio}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.option2}
              onPress={() => setSelectedSort('low')}>
              <Text style={styles.optionText}>Price (Low to High)</Text>
              <Image
                source={
                  selectedSort === 'low'
                    ? Images.selectRadio
                    : Images.unselectRadio
                }
                style={styles.radio}
              />
            </TouchableOpacity>
          </BottomSheetView>
        </BottomSheet>
      </KeyboardAvoidingView>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
          <Text style={styles.cancelText}>CANCEL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.applyButton} onPress={applySort}>
          <Text style={styles.applyText}>APPLY</Text>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
};

export default SortBottomSheet;
