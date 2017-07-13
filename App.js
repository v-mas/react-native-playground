// @Flow
import React from 'react';
import { StyleSheet, Text, View, Button, Animated } from 'react-native';

const INSIDE_BOX_HEIGHT = 150
const ANIMATION_DURATION = 400

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hidden: false,
      insideboxAlpha: new Animated.Value(1),
      insideboxHeight: new Animated.Value(INSIDE_BOX_HEIGHT),
    }
  }

  _switchButtonPress = (e) => {
    console.log("button pressed", this.state)
    if (this.state.hidden) {
      Animated.parallel([
        Animated.timing(
          this.state.insideboxHeight,
          {
            toValue: INSIDE_BOX_HEIGHT,
            duration: ANIMATION_DURATION,
          }),
        Animated.timing(
          this.state.insideboxAlpha,
          {
            toValue: 1,
            duration: ANIMATION_DURATION / 2,
            delay: ANIMATION_DURATION / 4,
          }
        ),
      ]).start()
    } else {
      Animated.parallel([
        Animated.timing(
          this.state.insideboxAlpha,
          {
            toValue: 0,
            duration: ANIMATION_DURATION / 2,
            delay: ANIMATION_DURATION / 4,
          }),
        Animated.timing(
          this.state.insideboxHeight,
          {
            toValue: 0,
            duration: ANIMATION_DURATION,
          }),
      ]).start()
    }
    this.setState({
      hidden: !this.state.hidden,
    })

  }

  render() {
    return (
      <View style={[styles.container, styles.fill, { marginTop: 21 }]}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>

        <Animated.View style={[styles.container, styles.insideBox, {
          marginTop: 10,
          opacity: this.state.insideboxAlpha,
          height: this.state.insideboxHeight
        }]}>
          <Text style={{
            color: '#f00',
          }}>To jest mój tekścik :D</Text>
        </Animated.View>
        <View style={styles.butts}>
          <Button
            onPress={this._switchButtonPress}
            title="SWITCH!" />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1
  },

  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  insideBox: {
    backgroundColor: '#123456',
    width: 200,
    height: INSIDE_BOX_HEIGHT,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  butts: {
    padding: 10,
  }
});
