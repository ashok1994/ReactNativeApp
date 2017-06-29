import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
var { height, width } = Dimensions.get('window');
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>you </Text>
        <Image
          style={{
            width: width - 10,
            height: height / 3 - 10,
            borderRadius: 5,
          }}
          source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0xkAcreNXnbhEUolDBy91mLy_JQYm19rWNjJoJBMGiXWc8g6nASStnw" }}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
