import React, {
  Component
} from "react";
import {
  StyleSheet,
  View,
  Text
} from "react-native";

export default class signin extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text>signin</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});