import React, { Component } from 'react'
import GroupList from '../components/GroupList'
import { View, StyleSheet } from 'react-native'

class GroupListScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <GroupList />
            </View>
        )
    }
}

export default GroupListScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})