import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import SignUpForm from '../components/SignUpForm'
import { Header, Left, Right, Body, Title } from 'native-base'

class SignUpScreen extends Component {
    render() {
        return (
            < View style={styles.container} >
                <Header style={styles.header}>
                    <Left />
                    <Body>
                        <Title style={styles.headerFont}>Good inTent</Title>
                    </Body>
                    <Right />
                </Header>
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
    header: {
        backgroundColor: '#67aa56',
    },
    headerFont: {
        color: '#fff',
    },
})