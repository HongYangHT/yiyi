import React from 'react'
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
  StyleSheet
} from 'react-native'

import localStore from '../utils/storage'

export default class AuthLoading extends React.Component {
  constructor(props) {
    super(props)
    this._bootstrapAsync()
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    try {
      // const userInfo = await localStore.load('userInfo')
      const userInfo = await AsyncStorage.getItem('userInfo')
      this.props.navigation.navigate(userInfo && JSON.parse(userInfo).token ? 'Home' : 'Auth')
    } catch (error) {
      throw new Error(error)
    }
    // const userInfo = await AsyncStorage.getItem('userInfo')
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
  }

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
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
})
