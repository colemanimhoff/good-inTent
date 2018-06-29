import React, { Component } from 'react'
import AddTrip from '../components/AddTrip'
import { View, Button, StyleSheet } from 'react-native'

class CurrentTripScreen extends Component {

    render() {
        return (
            <React.Fragment>
                <View style={styles.button}>
                    <Button title="Back" onPress={() => this.props.navigation.goBack()}></Button>
                </View>
                <AddTrip />
            </React.Fragment>
        )
    }
}
export default CurrentTripScreen

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'flex-start',
    },
})