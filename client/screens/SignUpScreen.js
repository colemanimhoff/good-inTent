import React, { Component } from 'react'
import { View, StyleSheet, Button } from 'react-native'
import SignUpForm from '../components/SignUpForm'

class SignUpScreen extends Component {
    render() {
        return (
            < View style={styles.container} >
                <SignUpForm />
                <Button title="Back To Log In"
                    onPress={() => this.props.navigation.navigate('LogIn')}
                    style={styles.link} />
            </View>
        )
    }
}
export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    link: {
        fontSize: 20,
        padding: 20,
    },
})