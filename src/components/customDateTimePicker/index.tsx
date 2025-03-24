import {format} from 'date-fns';
import React, {useState} from 'react';
import {ImageSourcePropType, TextInput, TouchableOpacity} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Colors} from '../../utils/colors';
import styles from './styles';

interface CustomDateTimePickerProps {
  label: string;
  Icon: ImageSourcePropType;
//   calendarIcon: ImageSourcePropType;
  onDateChange: (date: Date | string) => void;
  mode: 'date' | 'time' | 'datetime';
  containerStyle:object;
}

const CustomDateTimePicker = ({
  label,
//   calendarIcon,
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
    onDateChange(date);
    hideDatePicker();
  };

  return (
    <>
      <TouchableOpacity onPress={showDatePicker} style={containerStyle}>
        <TextInput
          style={styles.phoneInput}
          placeholder={label}
          value={dob}
          onPress={showDatePicker}
          placeholderTextColor={Colors.placeHolderText}
          editable={false}
        />
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={mode}
        onConfirm={handleConfirmDate}
        onCancel={hideDatePicker}
      />
    </>
  );
};

export default CustomDateTimePicker;
