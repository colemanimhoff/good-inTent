import React from 'react'
import { createStackNavigator, createSwitchNavigator } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import LogInScreen from './LogInScreen'
import SignUpScreen from './SignUpScreen'
import HomeScreen from './HomeScreen'
import AccountScreen from './AccountScreen'
import { AppConsumer } from '../context/AppContext'
import { Icon } from 'react-native-vector-icons/Feather'

class App extends React.Component {

    render() {
        return (
            <AppConsumer>
                {(context) => {
                    return context.state.loggedIn
                        ? <AppNavigator />
                        : <AuthNavigator />
                }}
            </AppConsumer>

        )
    }
}

const HomeNavigator = createMaterialBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        title: 'Home',
    },
    Account: {
        screen: AccountScreen,
        title: 'Account',
    },
}, {
        activeTintColor: 'red',
        inactiveTintColor: 'green',
        barStyle: {
            backgroundColor: '#f5f5f5',
        },
    })

const AuthNavigator = createSwitchNavigator({
    LogIn: {
        screen: LogInScreen,
        title: 'Log In',
        tabBarIcon: ({ tintColor }) => {
            <Icon name="home" color={tintColor} size={50} />
        },
    },
    SignUp: {
        screen: SignUpScreen,
        title: 'Sign Up',
    },
})



const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeNavigator,
    },
    Auth: {
        screen: AuthNavigator,
    },
})

export default App
