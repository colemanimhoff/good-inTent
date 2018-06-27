import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import LogInForm from '../components/LogInForm'
import { Header, Left, Right, Body, Title } from 'native-base'

class LogInScreen extends Component {

    render() {
        return (
            <React.Fragment>
                <View style={styles.container}>
                    <Header style={styles.header}>
                        <Left />
                        <Body>
                            <Title style={styles.headerFont}>Good inTent</Title>
                        </Body>
                        <Right />
                    </Header>
                    <LogInForm />
                    <Button style={styles.button}
                        title="Not A Member? Sign Up" onPress={() => this.props.navigation.navigate('SignUp')} />
                </View>
            </React.Fragment>
        )
    }
}
export default LogInScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#007f00',
    },
    headerFont: {
        color: '#fff',
    },
})