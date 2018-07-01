import React, { Component } from 'react'
import TripDetails from '../components/TripDetails'
import { View, Button } from 'react-native'

export default class TripDetailsScreen extends Component {
    render() {
        return (
            <View>
                <Button title="Back" onPress={() => this.props.navigation.popToTop()}></Button>
                <TripDetails />
            </View>
        )
    }
}