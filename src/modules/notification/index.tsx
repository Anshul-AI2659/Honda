import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ImageSourcePropType,
} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CustomStatusBar from '../../components/statusBar';
import {StackNavigationProp} from '@react-navigation/stack';
import {Icons} from '../../assets';
import moment from 'moment';
import CustomCalendar from '../../components/CustomCalendar';
import { StackParamList } from '../../utils/types';

const notificationsData: Record<
  string,
  {header: string; description: string; image?: ImageSourcePropType}[]
> = {
  '2025-03-11': [
    {
      header: 'Your Account created successfully',
      description: 'Explore the  multiple products as per your requirement',
      image: Icons.notificationOn,
    },
    {
      header: 'Your Account created successfully',
      description: 'Explore the  multiple products as per your requirement',
      image: Icons.notificationOn,
    },
    {
      header: 'Your Account created successfully',
      description: 'Explore the  multiple products as per your requirement',
      image: Icons.notificationOff,
    },
    {
      header: 'Your Account created successfully',
      description: 'Explore the  multiple products as per your requirement',
      image: Icons.notificationOn,
    },
    {
      header: 'Your Account created successfully',
      description: 'Explore the  multiple products as per your requirement',
      image: Icons.notificationOff,
    },
  ],
  '2025-03-10': [
    {
      header: 'Your Account created successfully',
      description: 'Explore the  multiple products as per your requirement',
      image: Icons.notificationOn,
    },
  ],
  '2025-03-12': [
    {
      header: 'Your Account created successfully',
      description: 'Explore the  multiple products as per your requirement',
      image: Icons.notificationOn,
    },
    {
      header: 'Your Account created successfully',
      description: 'Explore the  multiple products as per your requirement',
      image: Icons.notificationOn,
    },
    {
      header: 'Your Account created successfully',
      description: 'Explore the  multiple products as per your requirement',
      image: Icons.notificationOff,
    },
    {
      header: 'Your Account created successfully',
      description: 'Explore the  multiple products as per your requirement',
      image: Icons.notificationOn,
    },
    {
      header: 'Your Account created successfully',
      description: 'Explore the  multiple products as per your requirement',
      image: Icons.notificationOff,
    },
  ],
};
interface NotificationProps {
  navigation: StackNavigationProp<StackParamList>;
}

const Notification: React.FC<NotificationProps> = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    moment().format('YYYY-MM-DD'),
  );

  const showCalendar = () => setCalendarVisible(true);
  const hideCalendar = () => setCalendarVisible(false);

  const handleConfirm = (date: string) => {
    const formattedDate = moment(date).format('YYYY-MM-DD');
    setSelectedDate(formattedDate);
    hideCalendar();
  };

  const notifications = notificationsData[selectedDate] || [];
  const formattedDate = moment(selectedDate).format('MMMM DD, YYYY');

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <CustomStatusBar />
      <View style={styles.header}>
        <View style={styles.leftPart}>
          <TouchableOpacity
            style={styles.backContainer}
            onPress={async () => {
              navigation.goBack();
            }}>
            <Image
              source={Icons.back}
              style={styles.back}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Notifications</Text>
        </View>
        <TouchableOpacity style={styles.backContainer} onPress={showCalendar}>
          <Image
            source={Icons.calendar}
            style={styles.calendar}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      {notifications.length > 0 ? (
        <View style={{paddingBottom: 35}}>
          <FlatList
            data={notifications}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View style={styles.notificationItem}>
                <View style={styles.bellContainer}>
                  <Image
                    source={item.image}
                    style={styles.bell}
                    resizeMode="contain"
                  />
                </View>
                <View style={{flex: 1, rowGap: 6}}>
                  <Text style={styles.notificationHeader}>{item.header}</Text>
                  <Text style={styles.notificationDescription}>
                    {item.description}
                  </Text>
                  <Text style={styles.notificationDate}>{formattedDate}</Text>
                </View>
              </View>
            )}
            contentContainerStyle={{paddingHorizontal: 16}}
            showsVerticalScrollIndicator={false}
          />
        </View>
      ) : (
        <View style={styles.contentEmptyView}>
          <Image
            source={Icons.notificationBell}
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
      <CustomCalendar
        visible={isCalendarVisible}
        onClose={hideCalendar}
        onConfirm={handleConfirm}
        selectedDate={selectedDate}
      />
      {/* <CustomCalendar
                visible={isCalendarVisible}
                onClose={hideCalendar}
                onConfirm={handleConfirm}
                selectedDate={moment(selectedDate).toDate()}
            /> */}
    </View>
  );
};

export default Notification;
