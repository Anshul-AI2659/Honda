import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Images } from '../../assets';
import { vw, vh } from '../../styles';


interface HiValueCardProps {
  onPress: () => void;
}

const HiValueCard: React.FC<HiValueCardProps> = ({ onPress }) => {
  return (
    <View style={styles.container}>
      {/* Main Content */}
      <View style={styles.content}>
        <Image source={Images.hivaluelogo} style={styles.productImage} />

        <View style={styles.textContainer}>
          <Text style={styles.title}>HI Value +</Text>
          <Text style={styles.description}>
            Certified Refurbished Generators, Engines & Machinery
          </Text>

          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>CHECK NOW</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HiValueCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2C2C2C',
    borderRadius: vw(16),
    padding: vw(10),
    marginVertical: vh(24),
    marginHorizontal:vh(12)
  },
  logo: {
    width: vw(40),
    height: vh(15),
    resizeMode: 'contain',
    marginBottom: vh(5),
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: vw(120),
    height: vw(120),
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    marginLeft: vw(10),
  },
  title: {
    fontSize: vw(16),
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    fontSize: vw(12),
    color: 'white',
    marginVertical: vh(5),
    paddingEnd:vh(10),
    lineHeight:vh(20)
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: vh(8),
    paddingHorizontal: vw(15),
    borderRadius: vw(5),
    marginTop:vh(8),
    alignSelf: 'flex-start',
  },
  buttonText: {
    fontSize: vw(8),
    fontWeight: 'bold',
    color: 'black',
  },
});
