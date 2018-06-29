import React, { Component } from 'react'
import Friends from '../components/Friends'
import { View, StyleSheet } from 'react-native'

class FriendScreen extends Component {

    render() {
        return (
            <React.Fragment>
                <View style={styles.container}>
                    <Friends />
                </View>
            </React.Fragment>
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