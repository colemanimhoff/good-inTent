import React, { Component } from 'react'
import IndividualList from '../components/IndividualList'
import { View, Text, StyleSheet, Button } from 'react-native'

class IndividualListScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Button title="Back"
                    onPress={() => this.props.navigation.popToTop()} />
                <IndividualList />
            </View>
        )
    }
}

export default IndividualListScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})