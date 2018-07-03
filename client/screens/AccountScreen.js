import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Account from '../components/Account'

class AccountScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                < Account />
            </View>
        )
    }
}
export default AccountScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})