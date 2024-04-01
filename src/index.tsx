import React, { useState } from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import countries from 'world-countries';
import Fuse from 'fuse.js';
import { useAsync } from 'react-async-hook';

import countryCodeEmoji, { emojiCountryCode } from 'country-code-emoji';
interface Country {
  cca2: string;
  name: {
    common: string;
  };
}

interface Props {
  onSelect: (country: Country) => void;
}

export const CountrySelector: React.FC<Props> = ({ onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const fuse = new Fuse(countries, { keys: ['name.common'] });
  const filteredCountries = fuse
    .search(searchTerm)
    .map((result) => result.item);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search Country..."
        value={searchTerm}
        onChangeText={setSearchTerm}
        style={styles.textinput}
      />
      <FlatList
        data={filteredCountries}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onSelect(item)}>
            <View style={styles.row}>
              {[item.cca2].map(countryCodeEmoji)}
              <Text style={styles.title}>
                {item.idd.root +
                  (item.idd.suffixes.length === 1 ? item.idd.suffixes[0] : '') +
                  ' ' +
                  item.name.common}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.cca2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginLeft: 10,
  },
  textinput: {
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
