import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

class App extends Component {
  state = {
    initialState: "This is initial state"
  }

  getToggledString = initialState => {
    return initialState === "This is initial state" ? "Not initialState" : initialState;
  }

  handlePress = () => {
    this.setState( prevState => ({
      initialState: this.getToggledString(prevState.initialState)
    }))
  }

  render() {
    return (
      <View><Text>{this.state.initialState}</Text>
      <TouchableHighlight onPress={this.handlePress} style={styles.button} ><Text>Touch this</Text></TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    borderColor: 'black',
    height: 50,
    borderWidth: 1,
    borderStyle: 'solid'
  }
})

export default App;
