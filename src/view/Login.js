import React, { Component } from 'react'
import {
  View,
  Image,
  TextInput,
  Text,
  Button,
  AsyncStorage
} from 'react-native'
import qs from 'qs'
// import localStore from '../utils/storage'
import styles from '../styles/app'

export default class login extends Component {
  constructor(props) {
    super(props)
    this.state = { appName: 'Yi Yi', name: ', password: ', login: '登录', signIn: '注册'}
  }
  $_onChangeName = value => {
    this.setState(state => ({ name: value }))
  }
  $_onChangePassword = value => {
    this.setState(state => ({ password: value }))
  }
  $_onNavToSignIn = () => {
    this.props.navigation.navigate('Signin')
  }
  $_onLogin = () => {
    let { name, password } = this.state
    this.$_onDoLogin({
      name,
      password
    })
  }
  $_onDoLogin = (params) => {
    return fetch('http://localhost:8099/api/v1/u/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: qs.stringify(params)
    })
      .then(res => res.json())
      .then(data => {
        if (data.code === 0) {
          AsyncStorage.setItem('userInfo', JSON.stringify(data.data))
          this.props.navigation.navigate('Index')
        }
      })
      .catch(error => {
        console.error(error)
      })
  }
  render() {
    return <View style={styles.container}>
        <View style={styles.logoWrapper}>
          <Image style={styles.logo} source={require('../assets/img/app-logo.png')} />
        </View>
        <View style={styles.form}>
          <View style={styles.inputWrapper}>
            <TextInput style={styles.names} autoCapitalize="none" autoCorrect={false} contextMenuHidden={true} placeholder="请输入您的帐号" onChangeText={value => this.$_onChangeName(value)} />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput style={styles.password} autoCapitalize="none" keyboardAppearance="dark" autoCorrect={false} secureTextEntry={true} contextMenuHidden={true} placeholder="请输入您的密码" onChangeText={value => this.$_onChangePassword(value)} />
          </View>
          <View style={styles.tipWrapper}>
            <Text style={styles.tip} iossuppressHighlighting={true} onPress={this.$_onNavToSignIn}>
              您还没注册吗？注册
            </Text>
          </View>
          <View style={[styles.buttonWrapper, styles.buttonTop,  styles.primary]}>
            <Button style={styles.button} color="#fff" title={this.state.login} onPress={this.$_onLogin} />
          </View>
          <View style={[styles.buttonWrapper, styles.info]}>
            <Button style={styles.button} color="#465154" title={this.state.signIn} onPress={this.$_onNavToSignIn} />
          </View>
        </View>
      </View>
  }
}

