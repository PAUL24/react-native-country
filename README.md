# react-native-country

React-Native Country Selector

## Installation

```sh
npm install react-native-country
```

## Usage

```js
import { CountrySelector } from 'react-native-country';

// ...

  const [selectedCountry, setSelectedCountry] = React.useState(null);

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
  };

    return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        Selected Country: {selectedCountry?.name?.common || 'None'}
      </Text>
      <CountrySelector onSelect={handleSelectCountry} />
    </View>
  );
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
