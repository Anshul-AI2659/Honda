import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomStatusBar from '../../components/statusBar';
import CustomHeader from '../../components/customHeader';
import {Images} from '../../assets';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {vh} from '../../styles';
import colors from '../../utils/colors';

const ModelCalculator = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const appliancesList = [
    {id: 1, name: 'CFL', load: 20, startingLoad: 20},
    {id: 2, name: 'Tube Lights', load: 40, startingLoad: 40},
    {id: 3, name: 'Fan', load: 45, startingLoad: 45},
    {id: 4, name: 'Bulb', load: 60, startingLoad: 60},
    {id: 5, name: 'TV', load: 120, startingLoad: 120},
    {id: 6, name: 'Refrigerator', load: 200, startingLoad: 600},
    {id: 7, name: 'Air Cooler', load: 400, startingLoad: 1200},
    {id: 8, name: 'Water Motor', load: 750, startingLoad: 2000},
    {id: 9, name: 'Geyser', load: 2000, startingLoad: 2000},
    {id: 10, name: 'AC (1.5 T ***** Rating)', load: 2100, startingLoad: 2500},
  ];

  const [appliances, setAppliances] = useState(
    appliancesList.map(item => ({...item, quantity: 0})),
  );

  // Calculate total load based on selected appliances
  const totalLoad = appliances.reduce(
    (sum, item) => sum + item.startingLoad * item.quantity,
    0,
  );

  // Function to update appliance count
  const updateApplianceCount = (id: number, change: number) => {
    setAppliances(prev =>
      prev.map(item =>
        item.id === id
          ? {...item, quantity: Math.max(0, item.quantity + change)}
          : item,
      ),
    );
  };

  // Function to reset count
  const clearLoad = () => {
    setAppliances(prev =>
      prev.map(item => ({
        ...item,
        quantity: 0,
      })),
    );
  };

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <CustomStatusBar />
      {/*-------CustomHeader------*/}
      <CustomHeader
        headerStyle={styles.header}
        leftIcon={Images.backarrow}
        textHeading="Model Calculators"
        onleftPress={navigation.goBack}
        leftIconStyle={styles.backButton}
        rightText="Clear Load"
        rightButtonStyle={styles.right}
        rightTextStyle={[styles.rightText, (totalLoad===0) && styles.grey]}
        onRightPress={clearLoad}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/*-------CustomSearch------*/}
        <View style={styles.greyContain}>
          <Image source={Images.newGenrator} style={styles.modelImg} />
          <Text style={styles.firstLine}>
            Find the right power backup for your needs!
          </Text>
          <Text style={styles.secondLine}>
            Select appliances to calculate the required power.
          </Text>
        </View>

        <View style={styles.appliancesContainer}>
          {appliances.map((item, index) => (
            <View
              key={item.id}
              style={[
                styles.applianceRow,
                index === appliances.length - 1 && {borderBottomWidth: 0},
              ]}>
              <View style={styles.applianceInfo}>
                <Text style={styles.applianceName}>{item.name}</Text>
                <Text style={styles.applianceLoad}>
                  Load {item.load}W | Starting Load {item.startingLoad}W
                </Text>
              </View>
              <View style={styles.counterContainer}>
              <TouchableOpacity
                  onPress={() => updateApplianceCount(item.id, -1)}
                  activeOpacity={item.quantity==0?0.9:0}
                  style={{
                    width: vh(60),
                    height: vh(40),
                   
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                 <Text style={[styles.counterminusText, item.quantity==0 &&{color:colors.inActiveTab}]}>-</Text>
                </TouchableOpacity>
                <Text style={styles.counterValue}>{item.quantity}</Text>
                <TouchableOpacity
                  onPress={() => updateApplianceCount(item.id, 1)}
                  style={{
                    width: vh(60),
                    height: vh(40),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={styles.counterplusText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {totalLoad > 0 && (
        <View style={styles.footer}>
          <View style={styles.footerContentContainer}>
            <View style={styles.footerTextContainer}>
              <Text style={styles.priceText}>{totalLoad} W</Text>
              <Text style={styles.priceDetailText}>Total Load</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Text style={styles.version}>EU70is</Text>
                <Text style={styles.detail}>View Details</Text>
              </View>
              <Image source={Images.newGenrator} style={styles.generatorImg} />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default ModelCalculator;
