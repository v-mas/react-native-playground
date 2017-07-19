// @Flow
import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Button, Animated } from 'react-native'
import { Styles, Messages } from 'const'

const INSIDE_BOX_HEIGHT = 150
const ANIMATION_DURATION = 400

const mapStateToProps = state => {
  console.log("map state ", state)
  return {
    hidden: state.mainContainerVisibility
  }
}

const mapDispatchToProps = dispatch => ({
  visibilityClick: () => dispatch({
    type: Messages.MAIN_CHANGE_CONTAINER_VISIBILITY,
  })
})

class UI_Main extends React.Component {
    props: {
      hidden: boolean,
      visibilityClick: Function,
    };

    constructor(props) {
      super(props)
      console.log("main constructor with props ", props)
      this.state = {
        insideboxAlpha: new Animated.Value(props.hidden ? 0 : 1),
        insideboxHeight: new Animated.Value(props.hidden ? 0 : INSIDE_BOX_HEIGHT)
      }
    }

    componentWillReceiveProps(nextProps) {
      console.log("check animation start state:(", this.state, ") props:(", this.props, ") next:(", nextProps, ")")
      if (this.props.hidden !== nextProps.hidden) {
        if (!nextProps.hidden) {
          Animated.parallel([
            Animated.timing(
              this.state.insideboxHeight, {
                toValue: INSIDE_BOX_HEIGHT,
                duration: ANIMATION_DURATION,
              }),
            Animated.timing(
              this.state.insideboxAlpha, {
                toValue: 1,
                duration: ANIMATION_DURATION / 2,
                delay: ANIMATION_DURATION / 4,
              }
            ),
          ]).start()
        } else {
          Animated.parallel([
            Animated.timing(
              this.state.insideboxAlpha, {
                toValue: 0,
                duration: ANIMATION_DURATION / 2,
                delay: ANIMATION_DURATION / 4,
              }),
            Animated.timing(
              this.state.insideboxHeight, {
                toValue: 0,
                duration: ANIMATION_DURATION,
              }),
          ]).start()
        }
      }
    }

    buttonPress = () => {
      this.props.visibilityClick()
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>

                <Animated.View style={[styles.insideBox, {
                    opacity: this.state.insideboxAlpha,
                    height: this.state.insideboxHeight
                }]}>
                    <Text style={styles.insideText}>To jest mój tekścik :D</Text>
                </Animated.View>
                <View style={styles.butts}>
                    <Button
                        onPress={this.buttonPress}
                        title="SWITCH!" />
                </View>

            </View>
        );
    }
}
const baseStyles = {
  baseContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
}
const styles = StyleSheet.create({
  container: {
    ...baseStyles.baseContainer,
    ...Styles.fill,
    marginTop: 21,
  },

  insideBox: {
    ...baseStyles.baseContainer,
    marginTop: 10,
    backgroundColor: '#123456',
    width: 200,
    height: INSIDE_BOX_HEIGHT,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  insideText: {
    color: '#f00',
  },

  butts: {
    padding: 10,
  }
})

export const Main = connect(mapStateToProps, mapDispatchToProps)(UI_Main)
