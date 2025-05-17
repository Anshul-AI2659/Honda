import {format} from 'date-fns';
import React, {useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import styles from './styles';
import colors from '../../utils/colors';

// 👇 Add a new prop: clearIcon
interface CustomDateTimePickerProps {
  label: string;
  rightIcon: ImageSourcePropType;
  clearIcon: ImageSourcePropType;  // <-- NEW
  rightIconStyle?: object;
  onDateChange: (date: Date | string) => void;
  mode: 'date' | 'time' | 'datetime';
  containerStyle: object;
}

const CustomDateTimePicker = ({
  label,
  rightIcon,
  clearIcon,   // <-- NEW
  rightIconStyle,
  onDateChange,
  mode,
  containerStyle,
}: CustomDateTimePickerProps) => {
  const [dob, setDob] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDate = (date: Date) => {
    let formattedDate;
    if (mode === 'time') {
      formattedDate = format(date, 'h:mm a');
    } else if (mode === 'date') {
      formattedDate = format(date, 'dd/MM/yyyy');
    } else {
      formattedDate = format(date, 'dd/MM/yyyy h:mm a');
    }
    setDob(formattedDate);
    onDateChange(formattedDate);
    hideDatePicker();
  };

  const handleClearDate = () => {
    setDob('');
    onDateChange(''); // <-- send empty string to parent
  };

  return (
    <>
      <View style={[containerStyle, {flexDirection: 'row', alignItems: 'center'}]}>
        <TouchableOpacity onPress={showDatePicker} style={{flex: 1}}>
          <TextInput
            selectionColor={colors.primary}
            style={styles.phoneInput}
            placeholder={label}
            value={dob}
            placeholderTextColor={(label === 'Select From' || label === 'Select To') ? colors.inActiveTab : colors.black}
            editable={false}
            pointerEvents="none"
          />
        </TouchableOpacity>

        {dob ? (
          <TouchableOpacity onPress={handleClearDate}>
            <Image
              source={clearIcon}
              style={[styles.rightIcon, rightIconStyle]}
            />
          </TouchableOpacity>
        ) : (
          rightIcon && (
            <TouchableOpacity onPress={showDatePicker}>
              <Image
                source={rightIcon}
                style={[styles.rightIcon, rightIconStyle]}
              />
            </TouchableOpacity>
          )
        )}
      </View>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={mode}
        onConfirm={handleConfirmDate}
        onCancel={hideDatePicker}
        pickerStyleIOS={{ alignContent:'center', justifyContent:'center', alignSelf:'center' }}
      />
    </>
  );
};

export default CustomDateTimePicker;
