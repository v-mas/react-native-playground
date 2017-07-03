// @Flow
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={[styles.container, {
        flex: 1,
      }]}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>

        <View style={[styles.container, {
          backgroundColor: '#123456',
          width: 200,
          height: 100,
          flexDirection: 'column',
          justifyContent: 'center',
        }]}>
          <Text style={{
            color: '#f00',
          }}>To jest mój tekścik :D</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
