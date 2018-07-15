import React, { Component } from 'react';
import { View, Button } from 'react-native'

class ControlComponent extends Component {
  render(){
    const { increment, decrement, children } = this.props;
    return (
      <View>
        <Button onPress={increment} title="+" />
        {children}
        <Button onPress={decrement} title="-" />
      </View>
    );
  }
}

export default ControlComponent;