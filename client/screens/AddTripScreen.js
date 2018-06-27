import React, { Component } from 'react'
import AddTrip from '../components/AddTrip'
import { View, Button, StyleSheet } from 'react-native'
import { Header, Left, Right, Body, Title } from 'native-base'

class CurrentTripScreen extends Component {

    render() {
        return (
            <React.Fragment>
                <Header style={styles.header}>
                    <Left />
                    <Body>
                        <Title style={styles.headerFont}>Add Trip</Title>
                    </Body>
                    <Right />
                </Header>
                <View style={styles.container}>
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
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
})