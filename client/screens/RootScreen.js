import React from 'react'
import {
    createStackNavigator,
    createSwitchNavigator,
    createMaterialTopTabNavigator,
    createBottomTabNavigator,
} from 'react-navigation'
import { StyleSheet } from 'react-native'
import { Header, Left, Right, Body, Title } from 'native-base'
import Icon from 'react-native-vector-icons/Entypo'
import { AppConsumer } from '../context/AppContext'
import LogInScreen from './LogInScreen'
import SignUpScreen from './SignUpScreen'
import HomeScreen from './HomeScreen'
import FriendsScreen from './FriendsScreen'
import AccountScreen from './AccountScreen'
import AddTripScreen from './AddTripScreen'
import IndividualListScreen from './IndividualListScreen'
import GroupListScreen from './GroupListScreen'
import TripDetailsScreen from './TripDetailsScreen'

export default class App extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Header style={styles.header}>
                    <Left />
                    <Body>
                        <Title style={styles.headerFont}>Good inTent</Title>
                    </Body>
                    <Right />
                </Header>
                <AppConsumer>
                    {(context) => {
                        return context.state.loggedIn
                            ? <AppNavigator />
                            : <AuthNavigator />
                    }}
                </AppConsumer>
            </React.Fragment>
        )
    }
}

const tripNavBarStyling = {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: '#67AA56',
        inactiveTintColor: '#828282',
        style: {
            backgroundColor: '#f2f2f2',
        },
        labelStyle: {
            fontSize: 10,
            bottom: 1,
        },
        indicatorStyle: {
            height: 0,
        },
        showIcon: true,
    },
    headerMode: 'none',
}

const homeBarNavStyling = {
    tabBarOptions: {
        activeTintColor: '#67AA56',
        inactiveTintColor: '#828282',
        style: {
            backgroundColor: '#f2f2f2',
            height: 70,
        },
        labelStyle: {
            fontSize: 10,
            bottom: 10,
        },
    },
    headerMode: 'none',
}

const CurrentTripNavigator = createMaterialTopTabNavigator({
    IndividualList: {
        screen: IndividualListScreen,
        navigationOptions: {
            tabBarLabel: 'My List',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="list" color={tintColor} size={24} />
            ),
        },
    },
    GroupList: {
        screen: GroupListScreen,
        navigationOptions: {
            tabBarLabel: 'Group List',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="list" color={tintColor} size={24} />
            ),
        },
    },
    TripDetails: {
        screen: TripDetailsScreen,
        navigationOptions: {
            tabBarLabel: 'Trip Details',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="compass" color={tintColor} size={24} />
            ),
        },
    },
}, tripNavBarStyling)

const TripNavigator = createStackNavigator({
    Home: HomeScreen,
    AddTrip: AddTripScreen,
    CurrentTrip: CurrentTripNavigator,
},
    {
        mode: 'modal',
        headerMode: 'none',
    })

TripNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true
    if (navigation.state.index > 0) {
        tabBarVisible = false
    }

    return {
        tabBarVisible,
    }
}

const HomeNavigator = createBottomTabNavigator({
    Home: {
        screen: TripNavigator,
        navigationOptions: {
            tabBarLabel: 'HOME',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="home" color={tintColor} size={24} />
            ),
        },
    },
    Friends: {
        screen: FriendsScreen,
        navigationOptions: {
            tabBarLabel: 'FRIENDS',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="users" color={tintColor} size={24} />
            ),
        },
    },
    Account: {
        screen: AccountScreen,
        navigationOptions: {
            tabBarLabel: 'ACCOUNT',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="cog" color={tintColor} size={24} />
            ),
        },
    },
}, homeBarNavStyling)

const AuthNavigator = createSwitchNavigator({
    LogIn: LogInScreen,
    SignUp: SignUpScreen,
},
    {
        headerMode: 'none',
    }
)

const AppNavigator = createStackNavigator({
    Home: HomeNavigator,
    Auth: AuthNavigator,
},
    {
        headerMode: 'none',
    }
)

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#67AA56',
    },
    headerFont: {
        color: '#fff',
    },
})