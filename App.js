import React, { Component } from 'react';
import { View, Text } from 'react-native';
import InputScreen from './app/screens/InputScreen';
import OptionsScreen from './app/screens/OptionsScreen';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        {/* <InputScreen/> */}
        <OptionsScreen componentId={this.props.componentId}/>
      </View>
    );
  }
}
