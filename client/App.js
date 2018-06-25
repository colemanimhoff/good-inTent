import React from 'react'
import { createStackNavigator, createSwitchNavigator } from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import LogInScreen from './screens/LogInScreen'
import SignUpScreen from './screens/SignUpScreen'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
    }
  }

  render() {
    return (
      this.state.loggedIn
        ? <AppNavigator />
        : <AuthNavigator />
    )
  }
}

const AuthNavigator = createSwitchNavigator({
  LogIn: {
    screen: LogInScreen,
    title: 'Log In',
  },
  SignUp: {
    screen: SignUpScreen,
    title: 'Sign Up',
  },
})

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    title: 'Home',
  },
  Auth: {
    screen: AuthNavigator,
  },
})

export default App
