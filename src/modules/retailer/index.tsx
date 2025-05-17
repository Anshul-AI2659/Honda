import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import CustomHeader from '../../components/customHeader';
import CustomStatusBar from '../../components/statusBar';
import CustomSearch from '../../components/CustomSearchBar';
import CustomButton from '../../components/CustomButton';
import {Images} from '../../assets';

import CustomFlatList from '../../components/CustomFlatList';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../utils/types';
import FilterBottomSheet from '../../components/FilterBottomSheet';
import {retailers} from '../../staticData';
import CheckBox from 'react-native-check-box';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {BlurView} from '@react-native-community/blur';
import {Menu, Provider as PaperProvider} from 'react-native-paper';
import {format, parse} from 'date-fns';
import colors from '../../utils/colors';
import {navigate} from '../../navigations/navigationServices';
import {ScreenNames} from '../../utils/screenNames';
import styles from './styles';
import CustomSnackBar from '../../components/customSnackBar';

interface RetailerProps {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

const Retailer = ({navigation}: RetailerProps) => {
  const [visibleTooltips, setVisibleTooltips] = useState<{
    [key: string]: boolean;
  }>({});
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [dateError, setDateError] = useState('');

  const [resetFilter, setResetFilter] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<{
    from: Date | null;
    to: Date | null;
  }>({from: null, to: null});
  const [hasSelectedFilters, setHasSelectedFilters] = useState(false);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [visibleMenus, setVisibleMenus] = useState<{[key: string]: boolean}>(
    {},
  );
  const [filteredRetailers, setFilteredRetailers] = useState(retailers);
  const [openPicker, setOpenPicker] = useState<'from' | 'to' | null>(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const openMenu = (id: string) =>
    setVisibleMenus(prev => ({...prev, [id]: true}));
  const closeMenu = (id: string) =>
    setVisibleMenus(prev => ({...prev, [id]: false}));
  const toggleTooltip = (id: string) => {
    setVisibleTooltips(prev => ({...prev, [id]: !prev[id]}));
  };

  const filterRetailers = () => {
    const filtered = retailers.filter(retailer => {
      const retailerDate = parse(retailer.date, 'MM/dd/yyyy', new Date());
      const matchesStatus =
        selectedStatus.length === 0 || selectedStatus.includes(retailer.status);
      const matchesDate =
        (!selectedDate.from || retailerDate >= selectedDate.from) &&
        (!selectedDate.to || retailerDate <= selectedDate.to);
      return matchesStatus && matchesDate;
    });
    setFilteredRetailers(filtered);
    setHasSelectedFilters(
      selectedStatus.length > 0 ||
        selectedDate.from !== null ||
        selectedDate.to !== null,
    );
  };

  const toggleFilter = () => {
    setFilterVisible(!isFilterVisible);
    if (!isFilterVisible) {
      filterRetailers();
    }
  };

  const onAddNewRetailer = () => {
    navigation.navigate(ScreenNames.RetailerFormScreen);
  };

  const renderRetailer = ({item}) => (
    <View style={styles.retailerCard}>
      <View style={styles.option}>
        <Text style={styles.retailerName}>{item.name}</Text>

        <Menu
          visible={visibleMenus[item.id]}
          onDismiss={() => closeMenu(item.id)}
          anchor={
            <TouchableOpacity onPress={() => CustomSnackBar.show('Coming Soon!', 'success', 600)}>
              <Image source={Images.threeDotIcon} style={styles.moreIcon} />
            </TouchableOpacity>
          }>
          <Menu.Item
            onPress={() => CustomSnackBar.show('Coming Soon!', 'success', 600)}
            title="View"
          />
          <Menu.Item
            onPress={() => Alert.alert('Edit Retailer')}
            title="Edit"
          />
          <Menu.Item
            onPress={() => Alert.alert('Deactivate Retailer')}
            title="De-activate"
          />
        </Menu>
      </View>

      <Text style={styles.retailerPhone}>{item.phone}</Text>
      <View style={styles.option}>
        <View
          style={[
            styles.statusContainer,
            item.status === 'Activated'
              ? styles.activeStatus
              : styles.deactiveStatus,
          ]}>
          <Text
            style={
              item.status === 'Activated'
                ? styles.statusText
                : styles.statusTextDeactivate
            }>
            {item.status}
          </Text>
        </View>

        <Text style={styles.dateText}>{item.date}</Text>
      </View>
    </View>
  );

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDateValue: Date) => {
    setDate(selectedDateValue);

    if (openPicker === 'from') {
      setSelectedDate(prev => ({...prev, from: selectedDateValue}));

      // If 'to' already selected, validate
      if (selectedDate.to && selectedDateValue > selectedDate.to) {
        CustomSnackBar.show(
         'From Date must be less than To Date',
          'error',
          400,
        );
      } else {
        setDateError('');
      }
    } else if (openPicker === 'to') {
      setSelectedDate(prev => ({...prev, to: selectedDateValue}));

      if (selectedDate.from && selectedDateValue < selectedDate.from) {
        CustomSnackBar.show(
          'To Date must be greater than From Date',
           'error',
           400,
         );
      } else {
        setDateError('');
      }
    }

    setOpenPicker(null);
    hideDatePicker();

    // Only filter if there is no date error
    setTimeout(() => {
      if (!dateError) {
        filterRetailers();
      }
    }, 0);
  };

  return (
    <PaperProvider>
      <SafeAreaView style={styles.mainContainer}>
        <CustomStatusBar />
        <CustomHeader
          headerStyle={styles.header}
          leftIcon={Images.backarrow}
          textHeading="Retailer"
          leftIconStyle={styles.backButton}
          onleftPress={navigation.goBack}
        />

        {isFilterVisible && (
          <BlurView
            style={styles.absolute}
            blurType="light"
            blurAmount={5}
            reducedTransparencyFallbackColor="white"
            overlayColor="rgba(51, 51, 51, 0.3)"
          />
        )}
        <View style={styles.searchFilter}>
          <CustomSearch
            placeholder={'Search Retailers Name'}
            searchContainerStyle={styles.searchContainer}
          />
          <TouchableOpacity style={styles.filter} onPress={toggleFilter}>
            {hasSelectedFilters && (
              <View
                style={{
                  position: 'absolute',
                  top: 2,
                  right: 2,
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: 'red',
                  zIndex: 10,
                }}
              />
            )}
            <View
              style={{
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={Images.filter} style={styles.filterImg} />
            </View>
          </TouchableOpacity>
        </View>
        <CustomFlatList
          data={filteredRetailers}
          renderItem={renderRetailer}
          keyExtractor={item => item.id}
          contentContainerStyle={{ flexGrow: 1 }}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No Data Available</Text>
            </View>
          }
        />

        <FilterBottomSheet
          visible={isFilterVisible}
          onClose={toggleFilter}
          style={{height: '50%'}}
          hasSelectedFilters={hasSelectedFilters}
          selectedStatus={selectedStatus}
          selectedDate={selectedDate}
          applyFilter={() => {
            filterRetailers();
            setFilterVisible(false);
            setResetFilter(false);
          }}
          onClearAll={() => {
            setResetFilter(true);
            setFilterVisible(false);
            setSelectedStatus([]);
            setSelectedDate({from: null, to: null});
            setFilteredRetailers(retailers);
            setHasSelectedFilters(false);
          }}>
          <View>
            <Text style={styles.head}>Status</Text>
            <CheckBox
              isChecked={selectedStatus.includes('Activated')}
              style={styles.checkBox}
              onClick={() => {
                setSelectedStatus(prev =>
                  prev.includes('Activated')
                    ? prev.filter(status => status !== 'Activated')
                    : [...prev, 'Activated'],
                );
              }}
              rightText="Activated"
            />
            <CheckBox
              isChecked={selectedStatus.includes('De-activated')}
              style={styles.checkBox}
              onClick={() => {
                setSelectedStatus(prev =>
                  prev.includes('De-activated')
                    ? prev.filter(status => status !== 'De-activated')
                    : [...prev, 'De-activated'],
                );
              }}
              rightText="De-activated"
            />
          </View>
        <View style={styles.line}></View>

          <Text style={styles.head}>Added on date</Text>
          <View style={styles.date}>
            <TouchableOpacity
              onPress={() => {
                setOpenPicker('from');
                showDatePicker();
              }}
              style={styles.datebox}>
              <Text style={styles.select}>
                {selectedDate.from
                  ? format(selectedDate.from, 'dd/MM/yyyy')
                  : 'Select From'}
              </Text>
              <Image source={Images.dateCalanderIcon} style={styles.dateImg} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setOpenPicker('to');
                showDatePicker();
              }}
              style={styles.datebox}>
              <Text style={styles.select}>
                {selectedDate.to
                  ? format(selectedDate.to, 'dd/MM/yyyy')
                  : 'Select To'}
              </Text>
              <Image source={Images.dateCalanderIcon} style={styles.dateImg} />
            </TouchableOpacity>
          </View>
          {dateError ? (
            <Text style={styles.dateError}>
              {dateError}
            </Text>
          ) : null}
        </FilterBottomSheet>

        {!isFilterVisible && (
          <CustomButton
            buttonText={'ADD NEW RETAILER'}
            onPress={onAddNewRetailer}
            buttonStyle={styles.addButton}
          />
        )}

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          pickerStyleIOS={{alignSelf: 'center'}}
        />
      </SafeAreaView>
    </PaperProvider>
  );
};
export default Retailer;
