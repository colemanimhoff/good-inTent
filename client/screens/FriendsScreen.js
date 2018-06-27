import React, { Component } from 'react'
import Friends from '../components/Friends'
import { View, Text, StyleSheet } from 'react-native'

class FriendScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Friends />
            </View>
        )
    }
}
export default FriendScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})