import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ControlComponent from './ControlComponent';

class StatefulComponent extends Component {
  state = {
    counter: 0,
  }

  increment = () => {
    // this.setState({ counter: this.state.counter + 1 })
    this.setState(({ counter }) => ({
      counter: counter + 1
    }));
  }

  decrement = () => {
    // this.setState({ counter: this.state.counter + 1 })
    this.setState(({ counter }) => ({
      counter: counter - 1
    }));
  }

  render() {
    return (
      <ControlComponent increment={this.increment} decrement={this.decrement}>
        <Text>Current Counter: {this.state.counter}</Text>
      </ControlComponent>
    );
  }
}

export default StatefulComponent;