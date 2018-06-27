import React, { Component } from 'react'
import TripDetails from '../components/TripDetails'
import { View, Text, StyleSheet } from 'react-native'

class TripDetailsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TripDetails />
            </View>
        )
    }
}
export default TripDetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})