<<<<<<< HEAD
import React, {useEffect, useState} from 'react';
import {
  Image,
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import styles from './style';
import {Images} from '../../assets';
import {vh, vw} from '../../styles';
import colors from '../../utils/colors';

LocaleConfig.locales['custom'] = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  dayNames: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  today: 'Today',
=======
import React, { useEffect, useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import styles from './style';

LocaleConfig.locales['custom'] = {
    monthNames: [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ],
    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    today: "Today"
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
};
LocaleConfig.defaultLocale = 'custom';

interface DatePickerProps {
<<<<<<< HEAD
  visible: boolean;
  onClose: () => void;
  onConfirm: (date: string) => void;
  selectedDate?: string;
}

const CalendarModal: React.FC<DatePickerProps> = ({
  visible,
  onClose,
  onConfirm,
  selectedDate,
}) => {
  const [currentDate, setCurrentDate] = useState(selectedDate || '');
  const [currentMonth, setCurrentMonth] = useState(new Date());

  useEffect(() => {
    if (selectedDate) {
      setCurrentDate(selectedDate);
      setCurrentMonth(new Date(selectedDate));
    }
  }, [selectedDate]);

  const handleDayPress = (day: {dateString: string}) => {
    setCurrentDate(day.dateString);
    // setCurrentMonth(new Date(day.dateString));
  };

  const handleMonthChange = (month: {year: number; month: number}) => {
    const newMonth = new Date(month.year, month.month - 1);
    setCurrentMonth(newMonth);
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View style={styles.modalContainer}>
              <Text style={styles.dateText}>
                {currentDate
                  ? new Date(currentDate).toLocaleDateString('en-US', {
                      weekday: 'short',
                      month: 'short',
                      day: 'numeric',
                    })
                  : 'Select a Date'}
              </Text>

              <Calendar
                current={currentMonth.toISOString().split('T')[0]}
                onDayPress={handleDayPress}
                // onMonthChange={(month) => setCurrentMonth(new Date(month.year, month.month - 1))}
                onMonthChange={month =>
                  setCurrentMonth(new Date(month.dateString))
                }
                markedDates={
                  currentDate
                    ? {
                        [currentDate]: {
                          selected: true,
                          selectedColor: '#E41D2D',
                        },
                      }
                    : {}
                }
                theme={{
                  todayTextColor: colors.primary,
                  selectedDayBackgroundColor: colors.primary,
                  arrowColor: 'black',
                  textDayFontSize: 16,
                  textMonthFontSize: 16,
                  textDayHeaderFontSize: 14,
                  textSectionTitleColor: '#1D1B20',
                }}
                renderHeader={date => {
                  const formattedMonth = currentMonth.toLocaleString('en-US', {
                    month: 'long',
                    year: 'numeric',
                  });
                  return (
                    <View style={styles.header}>
                     
                        <View style={styles.left}>
                        <TouchableOpacity
                          onPress={() => {
                            const prevYear = new Date(currentMonth);
                            prevYear.setFullYear(prevYear.getFullYear() - 1);
                            setCurrentMonth(prevYear);
                          }}
                          style={styles.yearArrow}>
                          <Text style={styles.navText}>{'«'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => {
                            const prevMonth = new Date(currentMonth);
                            prevMonth.setMonth(prevMonth.getMonth() - 1);
                            setCurrentMonth(prevMonth);
                          }}
                          style={styles.leftArrow}>
                          <Text style={styles.navText}>{'‹'}</Text>
                        </TouchableOpacity>
                        </View>
                        
                        <Text style={styles.monthText}>{formattedMonth}</Text>
                        <View style={styles.right}>
                        <TouchableOpacity
                          onPress={() => {
                            const nextMonth = new Date(currentMonth);
                            nextMonth.setMonth(nextMonth.getMonth() + 1);
                            setCurrentMonth(nextMonth);
                          }}
                          style={styles.rightArrow}>
                          <Text style={styles.navText}>{'›'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => {
                            const nextYear = new Date(currentMonth);
                            nextYear.setFullYear(nextYear.getFullYear() + 1);
                            setCurrentMonth(nextYear);
                          }}
                          style={styles.yearArrow}>
                          <Text style={styles.navText}>{'»'}</Text>
                        </TouchableOpacity>
                        </View>
                      
                    </View>
                  );
                }}
                hideArrows={true}
                hideExtraDays={true}
              />
              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
                  <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => onConfirm(currentDate)}
                  style={styles.okButton}>
                  <Text style={styles.buttonText}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
=======
    visible: boolean;
    onClose: () => void;
    onConfirm: (date: string) => void;
    selectedDate?: string;
}

const CalendarModal: React.FC<DatePickerProps> = ({ visible, onClose, onConfirm, selectedDate }) => {
    const [currentDate, setCurrentDate] = useState(selectedDate || '');

    useEffect(() => {
        if (selectedDate) {
            setCurrentDate(selectedDate);
        }
    }, [selectedDate]);

    const handleDayPress = (day: { dateString: string }) => {
        setCurrentDate(day.dateString);
    };

    const handleMonthChange = (monthOffset: number) => {
        const current = new Date(currentDate);
        current.setMonth(current.getMonth() + monthOffset);
        setCurrentDate(current.toISOString().split('T')[0]);
    };

    return (
        <Modal visible={visible} transparent animationType="fade">
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.dateText}>
                        {currentDate
                            ? new Date(currentDate).toLocaleDateString('en-US', {
                                weekday: 'short',
                                month: 'short',
                                day: 'numeric'
                            })
                            : 'Select a Date'}
                    </Text>

                    <Calendar
                        current={currentDate}
                        onDayPress={handleDayPress}
                        markedDates={currentDate ? { [currentDate]: { selected: true, selectedColor: 'red' } } : {}}
                        theme={{
                            todayTextColor: 'red',
                            selectedDayBackgroundColor: 'red',
                            arrowColor: 'black',
                            textDayFontSize: 16,
                            textMonthFontSize: 16,
                            textDayHeaderFontSize: 14,
                        }}
                        renderHeader={(date) => {
                            const monthYear = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(date);
                            return (
                                <View style={styles.header}>
                                    <Text style={styles.monthText}>{monthYear}</Text>
                                    <View style={styles.arrow}>
                                        <TouchableOpacity onPress={() => handleMonthChange(-1)} style={{ marginHorizontal: 10 }}>
                                            <Text style={styles.navText}>‹</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => handleMonthChange(1)}>
                                            <Text style={styles.navText}>›</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            );
                        }}
                        hideArrows={true}
                        hideExtraDays={true}
                    />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onConfirm(currentDate)} style={styles.okButton}>
                            <Text style={styles.buttonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
>>>>>>> f681a5d601d3bc1b5efad13d01dee80dbb697625
};

export default CalendarModal;