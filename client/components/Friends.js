import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { AppConsumer } from '../context/AppContext'

export default class Friends extends Component {
    render() {
        return (
            <AppConsumer>
                {(context) => {
                    context.state.users.map(user => {
                        console.log(user)
                        // return <View key={user.id}>
                        //     <Text>{user.username}</Text>
                        // </View>
                    })
                }}
            </AppConsumer>
        )
    }
}
