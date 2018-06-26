import React from 'react'
import { createStackNavigator, createSwitchNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import LogInScreen from './LogInScreen'
import SignUpScreen from './SignUpScreen'
import { AppConsumer } from '../context/AppContext'
import { Text, View } from 'react-native'

class App extends React.Component {
    render() {
        return (
            <AppConsumer>
                {(context) => {
                    console.log(context.state.loggedIn)
                    // context.state.loggedIn
                    //     ? <AppNavigator />
                    //     : <AuthNavigator />
                }}
            </AppConsumer>

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
