import React, { Component } from 'react'
import CurrentTrip from '../components/CurrentTrip'
import { View, Button, StyleSheet } from 'react-native'

class CurrentTripScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Button title="Go Back Home" onPress={() => this.props.navigation.goBack()}></Button>
                <CurrentTrip />
            </View>
        )
    }
}
export default CurrentTripScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})