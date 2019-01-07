import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
  AsyncStorage,
  Image
} from 'react-native'
// import localStore from '../utils/storage'
import {
  Header,
  Card
}
from 'react-native-elements'
export default class poetry extends Component {
  constructor(props) {
    super(props)
    this.state = { poetry: [{ id: 1091, poetry_author_id: 479, title: "相和歌辞 王昭君三首 三", content: "胡地无花草，春来不似春。|自然衣带缓，非是为腰身。", poetry: ["胡地无花草，春来不似春", "自然衣带缓，非是为腰身"], yunlv_rule: "平仄平平仄，平平仄仄平。|仄平平仄仄，平仄平平平。", author: "东方虬", dynasty: "T", created_at: "2018-11-29T00:03:51.000Z", updated_at: "2018-11-29T00:03:51.000Z" }], title: "每日一荐" };
  }

  componentDidMount = async () => {
    try {
      await this.$_getPromotePoetry()
      console.log(1)
    } catch (error) {
      console.error(error)
    }
  }

  $_getPromotePoetry = () => {
    return fetch("http://localhost:8099/api/v1/pty/fetch")
      .then(res => res.json())
      .then(data => {
        if (data.code === 0) {
          let result = data.data && data.data.map(item => {
            return {
              ...item,
              poetry: item.content.split('|')
            }
          })
          this.setState({
            poetry: result
          })
        }
      })
      .catch(error => {
        console.error(error)
      })
  }

  $_logout = () => {
    // AsyncStorage.removeItem('userInfo')
    this.props.navigation.navigate('Auth')
  }
  render() {
    return <View style={styles.container}>
        <Header style={styles.headerWraper} backgroundColor="#F5FCFF" centerComponent={<Image style={styles.logo} source={require("../assets/img/app-logo.png")} />} leftComponent={{ color: "#fff" }} rightComponent={{ color: "#fff" }} />
        <Card style={styles.cardWrapper} title={this.state.title}>
          {this.state.poetry.map((p, i) => {
            return <View key={i}>
                <Text>{p.title}</Text>
                <Text>{"作者：" + p.author}</Text>
                {p.poetry.map((p, i) => {
                  return <Text key={i}>{p}</Text>;
                })}
              </View>;
          })}
        </Card>
        <Button title="换一首" onPress={this.$_getPromotePoetry} />
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: "#F5FCFF",
    paddingTop: 10
  },
  headerWraper: {
    width: "100%",
    paddingBottom: 0
  },
  logo: {
    width: 30,
    height: 30,
    borderRadius: 15
  },
  cardWrapper: {
    height: 300
  }
});
