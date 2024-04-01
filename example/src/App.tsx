import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { CountrySelector } from 'react-native-country';

export default function App() {
  const [selectedCountry, setSelectedCountry] = React.useState(null);

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
  };
  //+', ' + selectedCountry?.cca2 ? selectedCountry?.cca2 : ''
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Selected Country: {selectedCountry?.name?.common || 'None'}
      </Text>
      <CountrySelector onSelect={handleSelectCountry} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
