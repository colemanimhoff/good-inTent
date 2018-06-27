import React, { Component } from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { AppConsumer } from '../context/AppContext'

export default class Account extends Component {
    render() {
        return (
            <AppConsumer>
                {(context) => {
                    return <View>
                        <Button
                            onPress={context.state.toggleAuthState}
                            title="Sign Out"></Button>
                    </View>
                }}
            </AppConsumer>
        )
    }
}
