import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { vh, vw } from "../../styles";
import colors from "../../utils/colors";


interface LocationData {
  state: string;
  cities: {
    city: string;
    pincodes: string[];
  }[];
}

const locationData: LocationData[] = [
  {
    state: "Uttar Pradesh",
    cities: [
      { city: "Noida", pincodes: ["201301", "201310", "201319"] },
      { city: "Lucknow", pincodes: ["226001", "226002", "226003"] },
    ],
  },
  {
    state: "Maharashtra",
    cities: [
      { city: "Mumbai", pincodes: ["400001", "400002", "400003"] },
      { city: "Pune", pincodes: ["411001", "411002", "411003"] },
    ],
  },
];

const CustomLocationSearch = ({ onSelect }: { onSelect: (location: string) => void }) => {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedPincode, setSelectedPincode] = useState<string | null>(null);
  const [searchText, setSearchText] = useState("");

  const filteredStates = locationData.filter((item) =>
    item.state.toLowerCase().includes(searchText.toLowerCase())
  );

  const selectedStateData = locationData.find((item) => item.state === selectedState);
  const filteredCities = selectedStateData?.cities.filter((item) =>
    item.city.toLowerCase().includes(searchText.toLowerCase())
  );

  const selectedCityData = selectedStateData?.cities.find(
    (item) => item.city === selectedCity
  );
  const filteredPincodes = selectedCityData?.pincodes.filter((pincode) =>
    pincode.includes(searchText)
  );

  return (
    <View style={styles.container}>
      {/* State Dropdown */}
      {!selectedState && (
        <>
          <TextInput
            selectionColor={colors.descritptionText}
            placeholder="Search State"
            style={styles.input}
            value={searchText}
            onChangeText={setSearchText}
          />
          <FlatList
            removeClippedSubviews={false}
            data={filteredStates}
            keyExtractor={(item) => item.state}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.item}
                onPress={() => {
                  setSelectedState(item.state);
                  setSearchText("");
                }}
              >
                <Text>{item.state}</Text>
              </TouchableOpacity>
            )}
          />
        </>
      )}

      {/* City Dropdown */}
      {selectedState && !selectedCity && (
        <>
          <TextInput 
            selectionColor={colors.primary}
            placeholder="Search City"
            style={styles.input}
            value={searchText}
            onChangeText={setSearchText}
          />
          <FlatList
            removeClippedSubviews={false}
            data={filteredCities}
            keyExtractor={(item) => item.city}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.item}
                onPress={() => {
                  setSelectedCity(item.city);
                  setSearchText("");
                }}
              >
                <Text>{item.city}</Text>
              </TouchableOpacity>
            )}
          />
        </>
      )}

      {/* Pincode Dropdown */}
      {selectedCity && !selectedPincode && (
        <>
          <TextInput
             selectionColor={colors.primary}
            placeholder="Search Pincode"
            style={styles.input}
            value={searchText}
            onChangeText={setSearchText}
          />
          <FlatList
            removeClippedSubviews={false}
            data={filteredPincodes}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.item}
                onPress={() => {
                  setSelectedPincode(item);
                  onSelect(`${selectedState}, ${selectedCity}, ${item}`);
                }}
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </>
      )}

      {/* Selected Location */}
      {selectedPincode && (
        <View style={styles.selectedLocation}>
          <Text style={styles.selectedText}>
            {selectedState} → {selectedCity} → {selectedPincode}
          </Text>
          <TouchableOpacity
            style={styles.resetButton}
            onPress={() => {
              setSelectedState(null);
              setSelectedCity(null);
              setSelectedPincode(null);
              setSearchText("");
            }}
          >
            <Text style={styles.resetText}>Reset</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: vh(10),
    backgroundColor: "#fff",
  },
  input: {
    height: vh(40),
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: vw(10),
    marginBottom: vh(10),
  },
  item: {
    padding: vh(10),
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  selectedLocation: {
    marginTop: vh(10),
    padding: vh(10),
    backgroundColor: colors.primary,
    borderRadius: 8,
  },
  selectedText: {
    color: "#fff",
    fontWeight: "bold",
  },
  resetButton: {
    marginTop: vh(5),
    backgroundColor: "red",
    padding: vh(5),
    borderRadius: 5,
    alignItems: "center",
  },
  resetText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default CustomLocationSearch;
