import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import SignUpForm from '../components/SignUpForm'

class SignUpScreen extends Component {

    static navigationOptions = {
        header: null,
    }

    render() {
        console.log(this.props.navigation)
        return (
            <View style={styles.container}>
                <SignUpForm />
                <Button title="Back To Log In"
                    onPress={() => this.props.navigation.navigate('LogIn')} />
            </View>
        )
    }
}
export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
})