import {format} from 'date-fns';
import React, {useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  TextInput,
  TouchableOpacity,
<<<<<<< HEAD
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
=======
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Colors} from '../../utils/colors';
import styles from './styles';

interface CustomDateTimePickerProps {
  label: string;
  rightIcon: ImageSourcePropType;
  rightIconStyle?: object;
  //   calendarIcon: ImageSourcePropType;
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
  onDateChange: (date: Date | string) => void;
  mode: 'date' | 'time' | 'datetime';
  containerStyle: object;
}

const CustomDateTimePicker = ({
  label,
  rightIcon,
<<<<<<< HEAD
  clearIcon,   // <-- NEW
=======
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
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
<<<<<<< HEAD
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
=======
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
        {rightIcon && (
          <Image
            source={rightIcon}
            style={[styles.rightIcon, rightIconStyle]}
          />
        )}
      </TouchableOpacity>
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={mode}
        onConfirm={handleConfirmDate}
        onCancel={hideDatePicker}
<<<<<<< HEAD
        pickerStyleIOS={{ alignContent:'center', justifyContent:'center', alignSelf:'center' }}
=======
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
      />
    </>
  );
};

export default CustomDateTimePicker;
