import React, { Component } from "react";
import {
  View,
  Text
} from 'react-native'
export default class SayHello extends Component {
  render() {
    return (<View>
      <Text style={
        {
          fontSize: 14,
          color: '#333',
          marginTop: 20,
          textAlign: 'center'
        }
      }> hi, {
          this.props.name
        } </Text>
    </View>
    )
  }
}
