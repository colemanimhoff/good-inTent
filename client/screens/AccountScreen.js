import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button,
} from 'react-native'

class AccountScreen extends Component {

    static navigationOptions = {
        header: null,
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="Back To Auth Baby!" onPress={() => this.props.navigation.navigate('Auth')} />
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