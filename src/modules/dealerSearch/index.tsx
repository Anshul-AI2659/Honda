import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  Linking,
  Platform,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import DropDownPicker from 'react-native-dropdown-picker';
import {Images} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {Dealer} from './types';
import colors from '../../utils/colors';
import styles from './styles';
import CustomStatusBar from '../../components/statusBar';
import CustomHeader from '../../components/customHeader';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {locateDealerAction} from '../../Redux/Actions/moreAction';
import {vh} from '../../styles/dimensions';
import CustomFlatList from '../../components/CustomFlatList';

const DealerSearch = () => {
  const navigation = useNavigation();

  const [states] = useState([
    {label: 'Uttar Pradesh', value: 'Uttar Pradesh'},
    {label: 'Maharashtra', value: 'Maharashtra'},
    {label: 'Karnataka', value: 'Karnataka'},
    {label: 'Tamil Nadu', value: 'Tamil Nadu'},
    {label: 'Gujarat', value: 'Gujarat'},
  ]);
  const citiesData = {
    'Uttar Pradesh': [
      {label: 'Noida', value: 'Noida'},
      {label: 'LucknowCity', value: 'Lucknow'},
      {label: 'Varanasi', value: 'Varanasi'},
      {label: 'Kanpur', value: 'Kanpur'},
    ],
    Maharashtra: [
      {label: 'Mumbai', value: 'Mumbai'},
      {label: 'Pune', value: 'Pune'},
      {label: 'Nagpur', value: 'Nagpur'},
    ],
    Karnataka: [
      {label: 'Bangalore', value: 'Bangalore'},
      {label: 'Mysore', value: 'Mysore'},
    ],
    'Tamil Nadu': [
      {label: 'Chennai', value: 'Chennai'},
      {label: 'Coimbatore', value: 'Coimbatore'},
    ],
    Gujarat: [
      {label: 'Ahmedabad', value: 'Ahmedabad'},
      {label: 'Surat', value: 'Surat'},
    ],
  };

  const pincodeData = {
    Noida: [
      {label: '201301', value: '201301'},
      {label: '201310', value: '201310'},
      {label: '201305', value: '201305'},
    ],
    Lucknow: [
      {label: '226001', value: '226001'},
      {label: '226010', value: '226010'},
      {label: '226015', value: '226015'},
    ],
    Mumbai: [
      {label: '400001', value: '400001'},
      {label: '400020', value: '400020'},
      {label: '400050', value: '400050'},
    ],
    Pune: [
      {label: '411001', value: '411001'},
      {label: '411030', value: '411030'},
    ],
    Bangalore: [
      {label: '560001', value: '560001'},
      {label: '560034', value: '560034'},
    ],
    Chennai: [
      {label: '600001', value: '600001'},
      {label: '600040', value: '600040'},
    ],
    Ahmedabad: [
      {label: '380001', value: '380001'},
      {label: '380015', value: '380015'},
    ],
    Coimbatore: [
      {label: '381019', value: '380001'},
      {label: '380153', value: '380015'},
    ],
  };

  const [selectedState, setSelectedState] = useState(null);
  const [locateDealerData, setlocateDealerdata] = useState();
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedPincode, setSelectedPincode] = useState(null);
  const [stateOpen, setStateOpen] = useState(false);
  const [cityOpen, setCityOpen] = useState(false);
  const [pincodeOpen, setPincodeOpen] = useState(false);
  const [Button, SetButton] = useState('Direction');
  const [cityOptions, setCityOptions] = useState([]);
  const [pincodeOptions, setPincodeOptions] = useState([]);
  const {token, uType} = useAppSelector(state => state.authReducer);
  const dispatch = useAppDispatch();

  const [dealers, setDealers] = useState<Dealer[]>([]);
  const [region, setRegion] = useState({
    latitude: 28.6139,
    longitude: 77.209,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });

  const fetchCoordinates = async (address: string) => {
    try {
      const apiKey = 'AIzaSyBcnIY0jyH-1TjgRUczAphn6wekaKwFT30';
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        address,
      )}&key=${apiKey}`;

      const response = await fetch(url);
      console.log('Response Check', response);
      const data = await response.json();
      console.log('Data Check', data);
      if (data.status === 'OK') {
        const location = data.results[0].geometry.location;
        return location;
      } else {
        console.error('Geocoding failed:', data.status);
        return null;
      }
    } catch (error) {
      console.error('Geocoding error:', error);
      return null;
    }
  };

  const centerMapOnUser = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;

        const newRegion = {
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        };

        setRegion(newRegion); // this updates the map center and the user marker
        mapRef.current?.animateToRegion(newRegion);
      },
      error => {
        console.error(error);
      },
      {enableHighAccuracy: true},
    );
  };

  useEffect(() => {
    fetchLocateDealer();
  }, []);

  const fetchLocateDealer = () => {
    const params = {
      data: {
        accessToken: token,
        userType: uType,
        state: selectedState,
        city: selectedCity,
        pincode: selectedPincode,
        latitude: '28.7041',
        longitude: '77.1025',
      },
      callback: response => {
        setlocateDealerdata(response?.data);
      },
    };
    dispatch(locateDealerAction(params));
  };

  const mapRef = React.useRef<MapView>(null);
  const animateToLocation = (lat: number, lng: number) => {
    const newRegion = {
      latitude: lat,
      longitude: lng,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    };
    setRegion(newRegion);
    mapRef.current?.animateToRegion(newRegion, 1000);
  };

  useEffect(() => {
    if (selectedState) {
      fetchCoordinates(selectedState).then(location => {
        if (location) animateToLocation(location.lat, location.lng);
      });
      setCityOptions(citiesData[selectedState] || []);
      setSelectedCity(null);
      setPincodeOptions([]);
      setSelectedPincode(null);
    }
  }, [selectedState]);

  useEffect(() => {
    if (selectedCity && selectedState) {
      const fullAddress = `${selectedCity}, ${selectedState}`;
      fetchCoordinates(fullAddress).then(location => {
        if (location) animateToLocation(location.lat, location.lng);
      });
      setPincodeOptions(pincodeData[selectedCity] || []);
      setSelectedPincode(null);
    }
  }, [selectedCity]);

  useEffect(() => {
    if (selectedPincode && selectedCity && selectedState) {
      const fullAddress = `${selectedPincode}, ${selectedCity}, ${selectedState}`;
      fetchCoordinates(fullAddress).then(location => {
        if (location) animateToLocation(location.lat, location.lng);
      });
    }
  }, [selectedPincode]);

  const dummyDealers = [
    {
      id: '1',
      name: 'Pioneer One Honda',
      services: 'Sales, Service, Spare Parts',
      address: 'Prince Mohammad St, Jeddah',
      time: '7:00 AM to 8:30 PM || Mon, Tue, Wed, Thu, Fri',
      latitude: 28.5355,
      logo: Images.honda,
      dealerImg: Images.dealerImg,
      longitude: 77.391,
      state: 'Uttar Pradesh',
      city: 'Noida',
      pincode: '201301',
    },
  ];

  useEffect(() => {
    if (!selectedState && !selectedCity && !selectedPincode) {
      setDealers([]);
      return;
    }
    const filteredDealers = dummyDealers.filter(dealer => {
      return (
        (!selectedState || dealer.state === selectedState) &&
        (!selectedCity || dealer.city === selectedCity) &&
        (!selectedPincode || dealer.pincode === selectedPincode)
      );
    });

    setDealers(filteredDealers);
  }, [selectedState, selectedCity, selectedPincode]);

  const handleGetDirection = item => {
    let url = '';
    if (Platform.OS === 'ios') {
      url = `http://maps.apple.com/?daddr=${37.7749},${-122.4194}`;
    } else {
      url = `https://www.google.com/maps/dir/?api=1&destination=${37.7749},${-122.4194}`;
    }

    Linking.openURL(url).catch(err =>
      console.error('Error launching map:', err),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomStatusBar />
      <CustomHeader
        headerStyle={styles.header}
        leftIcon={Images.backarrow}
        textHeading="Locate Dealers"
        leftButtonStyle={styles.backButton}
        onleftPress={navigation.goBack}
        leftIconStyle={styles.backButton}
      />
      <View style={styles.dropdownContainer}>
        <DropDownPicker
          listItemContainerStyle={{width: 150}}
          open={stateOpen}
          setOpen={setStateOpen}
          value={selectedState}
          items={states}
          setValue={setSelectedState}
          placeholder="State"
          containerStyle={styles.dropdown}
          textStyle={{
            fontSize: 14,
          }}
          labelProps={{
            numberOfLines: 1,
            ellipsizeMode: 'tail',
          }}
          style={[
            styles.dropDownPicker,
           
            stateOpen && !selectedState ? {borderColor: colors.primary} : {},
          ]}
          dropDownContainerStyle={styles.dropDownContainer}
        />
        <DropDownPicker
          listItemContainerStyle={{width: 150}}
          open={cityOpen}
          setOpen={setCityOpen}
          value={selectedCity}
          items={cityOptions}
          setValue={setSelectedCity}
          placeholder="City"
          containerStyle={styles.dropdown}
          textStyle={{
            fontSize: 14,
          }}
          labelProps={{
            numberOfLines: 1,
            ellipsizeMode: 'tail',
          }}
          disabled={!selectedState}
          style={[
            styles.dropDownPicker,
            
            cityOpen && !selectedCity ? {borderColor: colors.primary} : {},
          ]}
          dropDownContainerStyle={styles.dropDownContainer}
        />
        <DropDownPicker
          listItemContainerStyle={{width: 150}}
          open={pincodeOpen}
          setOpen={setPincodeOpen}
          value={selectedPincode}
          items={pincodeOptions}
          setValue={setSelectedPincode}
          placeholder="Pincode"
          containerStyle={styles.dropdown}
          disabled={!selectedCity}
          textStyle={{
            fontSize: 14,
          }}
          labelProps={{
            numberOfLines: 1,
            ellipsizeMode: 'tail',
          }}
          style={[
            styles.dropDownPicker,
           
            pincodeOpen && !selectedPincode
              ? {borderColor: colors.primary}
              : {},
          ]}
          dropDownContainerStyle={styles.dropDownContainer}
        />
      </View>

      <View style={styles.mapFlex}>
        <MapView
          ref={mapRef}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          region={region}>
          {/* Marker for user's current location */}

          <Marker
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude,
            }}
            title="You are here"
            image={Images.homeLocate}
          />

          {/* Marker for filtered dealers */}
          {dealers?.map(dealer => (
            <Marker
              key={dealer.id}
              coordinate={{
                latitude: dealer.latitude,
                longitude: dealer.longitude,
              }}
              title={dealer.name}
              description={dealer.services}
              image={Images.homeLocate}
            />
          ))}
        </MapView>

        <TouchableOpacity
          style={[
            styles.locateButton,
            dealers.length > 0 && {bottom: vh(220)}, // Apply `top: 100` only when dealers has elements
          ]}
          onPress={centerMapOnUser}>
          <Image
            source={Images.Currlocation} 
          />
        </TouchableOpacity>
        <CustomFlatList
          data={dealers}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.dealerCard}>
              <View style={styles.cardRow}>
                <Image source={item.dealerImg} style={styles.dealerImg} />
                <View style={styles.dealerContent}>
                  <Image source={item.logo} style={styles.logo} />
                  <Text style={styles.dealerName}>{item.name}</Text>
                  <Text style={styles.dealerService}>{item.services}</Text>
                  <View style={styles.cardRow}>
                    <Image source={Images.locationIcon} style={styles.locImg} />
                    <Text style={styles.dealerAddress}>{item.address}</Text>
                  </View>
                  <View style={styles.cardRow}>
                    <Image source={Images.timerIcon} style={styles.timeIMg} />
                    <Text style={styles.dealerTime}>{item.time}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.buttonRow}>
                <TouchableOpacity
                  style={[
                    styles.button,
                    Button === 'Email' && styles.selectButton,
                  ]}
                  onPress={() => {
                    SetButton('Email');
                    const email = `mailto:${'ho.service@hspp.com'}`;
                    Linking.openURL(email).catch(err =>
                      console.warn('Failed to open email client:', err),
                    );
                  }}>
                  <Image
                    source={Images.emailBoxDull}
                    style={[
                      styles.emailImg,
                      Button === 'Email' && {tintColor: colors.primary},
                    ]}
                  />
                  <Text
                    style={[
                      styles.buttonText,
                      Button === 'Email' && {color: colors.primary},
                    ]}>
                    Email
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.button,
                    Button === 'Call' && styles.selectButton,
                  ]}
                  onPress={() => {
                    SetButton('Call');
                    const phoneNumber = `tel:${'1800 11 2323'.replace(
                      /\s/g,
                      '',
                    )}`;
                    Linking.openURL(phoneNumber).catch(err =>
                      console.warn('Failed to open dialer:', err),
                    );
                  }}>
                  <Image
                    source={Images.callIconDull}
                    style={[
                      styles.callImg,
                      Button === 'Call' && {tintColor: colors.primary},
                    ]}
                  />
                  <Text
                    style={[
                      styles.buttonText,
                      Button === 'Call' && {color: colors.primary},
                    ]}>
                    Call
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.directionButton,
                    Button === 'Direction' && styles.selectdirectButton,
                  ]}
                  onPress={() => {
                    SetButton('Direction');
                    handleGetDirection(item);
                  }}>
                  <Image
                    source={Images.directionIcon}
                    style={[
                      styles.directionImg,
                      Button === 'Direction' && {tintColor: colors.primary},
                    ]}
                  />
                  <Text
                    style={[
                      styles.buttonText,
                      Button === 'Direction' && {color: colors.primary},
                    ]}>
                    Get Direction
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          contentContainerStyle={styles.flatStyle}
        />
      </View>
    </SafeAreaView>
  );
};

export default DealerSearch;
