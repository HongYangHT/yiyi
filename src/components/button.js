import React, {
  Component
} from 'react'
import {
  View,
  Button
} from 'react-native'

export default class YButton extends Component {
  constructor(props) {
    super(props)
    
  }
  render () {
    return (
      <View style={[styles.buttonWrapper, styles.buttonTop,  styles.primary]}>
        <Button style={styles.button} color="#fff" title={this.state.login} onPress={this.$_onLogin} />
      </View>
    )
  }
}
