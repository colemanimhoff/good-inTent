import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import LogInForm from '../components/LogInForm'

class LogInScreen extends Component {

    static navigationOptions = {
        header: null,
    }

    render() {
        return (
            <React.Fragment>
                <View style={styles.container}>
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
})