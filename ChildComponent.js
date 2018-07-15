import React from 'react';
import { View, Text } from 'react-native';

const ChildComponent = props => (
  <View>
    <Text>{props.content}</Text>
  </View>
);

export default ChildComponent;
