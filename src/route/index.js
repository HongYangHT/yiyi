import React from 'react'
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator
} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import App from '../view/App'
import Login from '../view/Login'
import Signin from '../view/Signin'
import My from '../view/My'
import AuthLoading from '../view/AuthLoading'
import Promote from '../view/Promote'

const AuthNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: ({ navigation }) => ({
        header: null // 去头部
      })
    },
    Signin: {
      screen: Signin,
      navigationOptions: ({ navigation }) => ({
        header: null // 去头部
      })
    }
  },
  {
    initialRouteName: 'Login'
  }
)

const HomeNavigator = createBottomTabNavigator(
  {
    Index: {
      screen: App,
      navigationOptions: ({ navigation }) => ({
        header: null, // 去头部
        title: '首页'
      })
    },
    Promote: {
      screen: Promote,
      navigationOptions: ({
        navigation
      }) => ({
        title: '子曰'
      })
    },
    My: {
      screen: My,
      navigationOptions: ({ navigation }) => ({
        header: null, // 去头部
        title: '我的'
      })
    }
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        switch (routeName) {
          case 'Index':
            iconName = 'ios-home'
            break
          case 'Promote':
            iconName = 'ios-paper'
            break
          case 'My':
            iconName = 'ios-people'
            break
          default:
            iconName = 'ios-home'
            break
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return (
          <Ionicons
            name={iconName}
            size = {
              horizontal ? 25: (focused ? 20 : 18)
            }
            color={tintColor}
          />
        )
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    }
  }
)

const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    Auth: AuthNavigator,
    Home: HomeNavigator
  },
  {
    initialRouteName: 'AuthLoading'
  }
)

export default createAppContainer(AppNavigator)
