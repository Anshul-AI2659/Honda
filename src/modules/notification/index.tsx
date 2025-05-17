import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import moment from 'moment';
import styles from './styles';
import {Images} from '../../assets';
import CustomHeader from '../../components/customHeader';
import {notificationsData} from '../../staticData';
import CustomStatusBar from '../../components/statusBar';
import {
  Dialog,
  Portal,
  Button,
  Provider as PaperProvider,
} from 'react-native-paper'; // 👈 updated imports
import {Calendar} from 'react-native-calendars'; // 👈 added calendar
import {Picker} from '@react-native-picker/picker'; // or use any dropdown/picker you like
import {FONTS, normalize, vh, vw} from '../../styles';
import colors from '../../utils/colors';
import {LocaleConfig} from 'react-native-calendars';
import DropDownPicker from 'react-native-dropdown-picker';

type RootStackParamList = {
  Notification: undefined;
  AnotherScreen: undefined;
};

type NotificationScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Notification'>;
  route: RouteProp<RootStackParamList, 'Notification'>;
};

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
};
LocaleConfig.defaultLocale = 'custom';

const Notification = ({navigation}: NotificationScreenProps) => {
  const insets = useSafeAreaInsets();
  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(moment().toDate()); // using Date object
  const [displayedDate, setDisplayedDate] = useState(selectedDate); // for calendar navigation
  const [tempDate, setTempDate] = useState(selectedDate);
  const [selectedDay, setSelectedDay] = useState(moment(selectedDate).format('YYYY-MM-DD'));
  const [yearMenuVisible, setYearMenuVisible] = useState(false);

  const showCalendar = () => {
    setTempDate(selectedDate);
    setCalendarVisible(true);
  };
  const hideCalendar = () => setCalendarVisible(false);

  const handleConfirm = () => {
    setSelectedDate(tempDate);
    setCalendarVisible(false);
  };

  const formattedDateKey = moment(selectedDate).format('YYYY-MM-DD');
  const formattedDisplayDate = moment(selectedDate).format('DD-MM-YYYY');

  const notifications = notificationsData[formattedDateKey] || [];

  const backPress = () => {
    navigation.goBack();
  };

  const years = [];
  for (let y = 2025; y <= 2125; y++) years.push(y);
  const isAtMinMonth = moment(displayedDate).isSame('2025-01-01', 'month');
  const isAtMaxMonth = moment(displayedDate).isSame('2125-12-01', 'month');

  return (
    <PaperProvider>
      <View style={[styles.container, {paddingTop: insets.top + 10}]}>
        <CustomStatusBar />
        <CustomHeader
          textHeading="Notifications"
          onleftPress={backPress}
          leftIcon={Images.backarrow}
          leftIconStyle={styles.imageWrapper}
          headerStyle={styles.header}
          rightIcon={Images.calanderIcon}
          onRightPress={showCalendar}
          rightIconStyle={styles.imageWrapper}
        />

        {notifications.length > 0 ? (
          <View style={{paddingBottom: 35}}>
            <FlatList
              removeClippedSubviews={false}
              data={notifications}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <View
                  style={[
                    styles.notificationItem,
                    {
                      backgroundColor:
                        item.image === Images.notificationOff
                          ? 'white'
                          : '#FFF6F7',
                      borderColor:
                        item.image === Images.notificationOff
                          ? '#F2F3F3'
                          : '#E41D2D33',
                    },
                  ]}>
                  <Image
                    source={item.image}
                    style={styles.bell}
                    resizeMode="contain"
                  />
                  <View style={styles.headerContainer}>
                    <Text style={styles.notificationHeader}>{item.header}</Text>
                    <Text style={styles.notificationDescription}>
                      {item.description}
                    </Text>
                    <Text style={styles.notificationDate}>
                      {formattedDisplayDate}
                    </Text>
                  </View>
                </View>
              )}
              showsVerticalScrollIndicator={false}
            />
          </View>
        ) : (
          <View style={styles.contentEmptyView}>
            <Image
              source={Images.notificationHome}
              style={styles.notificationBell}
            />
            <Text style={styles.text1}>You're up to date!</Text>
            <View>
              <Text style={styles.text2}>
                There are no new notifications at this
              </Text>
              <Text style={styles.text2}>
                time. Check again soon, and keep up
              </Text>
              <Text style={styles.text2}>the great work!</Text>
            </View>
          </View>
        )}

        {/* New Calendar Dialog */}
        <Portal>
          <Dialog
            visible={isCalendarVisible}
            onDismiss={hideCalendar}
            style={{
              borderRadius: vw(20),
              backgroundColor: 'white',
              //marginHorizontal: vw(26),
            }}>
            <Dialog.Title
              style={{
                // s
                paddingVertical: vh(10),
                fontSize: normalize(32),
                borderBottomWidth: 1,
                borderBottomColor: '#CAC4D0',
              }}>
              {moment(tempDate).format('ddd, MMM DD')}
            </Dialog.Title>
            <Dialog.Content>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  height: vh(40),
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                {/* Left Arrow */}

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  {/* Month Name */}
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        fontSize: normalize(16),
                        fontFamily: FONTS?.ROBOTO_MEDIUM,
                        color: '#49454F',
                      }}>
                      {moment(displayedDate).format('MMMM')}
                    </Text>
                  </View>
                 

                  <DropDownPicker
                    open={yearMenuVisible}
                    value={moment(displayedDate).year()}
                    items={years.map(y => ({label: y.toString(), value: y}))}
                    setOpen={setYearMenuVisible}
                    setValue={val => {
                      if (val) {
                        const newDate = moment(displayedDate)
                          .year(val())
                          .toDate();
                        setDisplayedDate(newDate);
                        setTempDate(newDate);
                      }
                    }}
                    setItems={() => {}} // no need to set items again dynamically
                    containerStyle={{width: vw(90)}}
                    style={{
                      backgroundColor: 'white',
                      borderWidth: 0, // 👈 remove border
                      elevation: 0,
                      height: vh(40),
                    }}
                    textStyle={{
                      fontSize: normalize(16),
                      fontFamily: FONTS?.ROBOTO_MEDIUM,
                      color: '#49454F',
                    }}
                    dropDownContainerStyle={{
                      backgroundColor: 'white',
                      borderWidth: vw(0.4), 
                      elevation: 0,
                      borderColor:colors.inActiveTab
                    }}
                    listMode="SCROLLVIEW" // so it scrolls nicely
                  />
                </View>

                {/* Right Arrow */}

                {/* <View style={{flexDirection: 'row', right: vw(12)}}>
                  <TouchableOpacity
                    onPress={() => {
                      const newDate = moment(displayedDate)
                        .subtract(1, 'month')
                        .toDate();
                      setDisplayedDate(newDate);
                      setTempDate(newDate);
                    }}>
                    <Image
                      source={Images.leftIcon}
                      style={{marginEnd: vh(6)}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      const newDate = moment(displayedDate)
                        .add(1, 'month')
                        .toDate();
                      setDisplayedDate(newDate);
                      setTempDate(newDate);
                    }}>
                    <Image
                      source={Images.righttIcon}
                      style={{marginStart: vh(6)}}
                    />
                  </TouchableOpacity>
                </View> */}
                <View style={{flexDirection: 'row', right: vw(12)}}>
                <TouchableOpacity
                  disabled={isAtMinMonth}
                  onPress={() => {
                    if (!isAtMinMonth) {
                      const newDate = moment(displayedDate).subtract(1, 'month').toDate();
                      setDisplayedDate(newDate);
                      setTempDate(newDate);
                    }
                  }}
                  style={{opacity: isAtMinMonth ? 0.3 : 1}} // visually indicate disabled
                >
                  <Image source={Images.leftIcon} style={{marginEnd: vh(6)}} />
                </TouchableOpacity>

                <TouchableOpacity
                  disabled={isAtMaxMonth}
                  onPress={() => {
                    if (!isAtMaxMonth) {
                      const newDate = moment(displayedDate).add(1, 'month').toDate();
                      setDisplayedDate(newDate);
                      setTempDate(newDate);
                    }
                  }}
                  style={{opacity: isAtMaxMonth ? 0.3 : 1}} // visually indicate disabled
                >
                  <Image source={Images.righttIcon} style={{marginStart: vh(6)}} />
                </TouchableOpacity>
              </View>

              </View>

              {/* Calendar */}
              <Calendar
                key={moment(displayedDate).format('YYYY-MM')}
                current={moment(displayedDate).format('YYYY-MM-DD')}
                onDayPress={day => {
                  setSelectedDay(day.dateString); 
                  const newDate = new Date(day.timestamp);
                  setTempDate(newDate);
                  setDisplayedDate(newDate);
                }}
                renderHeader={() => null}
                onMonthChange={month => {
                  setDisplayedDate(new Date(month.year, month.month - 1, 1));
                }}
                hideExtraDays={true}
                hideArrows={true}
                theme={{
                  selectedDayBackgroundColor: colors?.primary,
                  todayTextColor: colors?.primary,
                  arrowColor: colors?.primary,
                  textDayFontWeight: '500',
                  textMonthFontWeight: 'bold',
                  textDayHeaderFontWeight: '600',
                  textSectionTitleColor: colors.dateTextColor,
                }}
                markedDates={{
                  [selectedDay]: {
                    selected: true,
                    disableTouchEvent: true,
                    selectedColor: colors?.primary,
                    selectedTextColor: 'white',
                  },
                }}
              />
            </Dialog.Content>

            <Dialog.Actions>
              <Button
                onPress={hideCalendar}
                labelStyle={{color: colors.primary, fontSize: normalize(14)}}>
                Cancel
              </Button>
              <Button
                onPress={handleConfirm}
                labelStyle={{color: colors.primary, fontSize: normalize(14)}}>
                OK
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </PaperProvider>
  );
};

export default Notification;