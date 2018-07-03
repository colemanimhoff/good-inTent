import React, { Component } from 'react'
import CurrentTrip from '../components/CurrentTrip'
import { View, Button } from 'react-native'

class CurrentTripScreen extends Component {

    render() {
        return (
            <View>
                <Button title="Go Back Home" onPress={() => this.props.navigation.goBack()}></Button>
                <CurrentTrip />
            </View>
        )
    }
}
export default CurrentTripScreen