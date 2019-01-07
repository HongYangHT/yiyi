import React, {
  Component
} from "react";
import {
  StyleSheet,
  View,
  Text
} from "react-native";

export default class poetry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '每日一曰每日一曰每日一曰每日一曰每日一曰每日一曰每日一曰每日一曰每日一曰每日一曰每日一曰每日一曰每日一曰'
    }
  }
  $_logout = () => {
    // AsyncStorage.removeItem('userInfo')
    this.props.navigation.navigate('Auth')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});