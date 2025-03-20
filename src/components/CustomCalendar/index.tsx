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
};
LocaleConfig.defaultLocale = 'custom';

interface DatePickerProps {
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
};

export default CalendarModal;