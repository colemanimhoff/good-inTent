import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { Item, Input, Label, Button, Text } from 'native-base'
import { AppConsumer } from '../context/AppContext'

export default class LogInForm extends Component {
    render() {
        return (
            <AppConsumer>
                {(context) => {
                    return <ScrollView>
                        <Item stackedLabel>
                            <Label>Email</Label>
                            <Input />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Password</Label>
                            <Input secureTextEntry={true} />
                        </Item>
                        <Button
                            style={styles.button}
                            success
                            onPress={context.state.toggleAuthState}>
                            <Text> Log In </Text>
                        </Button>
                    </ScrollView>
                }}
            </AppConsumer>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        height: '33%',
        width: '33%',
    },
    button: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    conatiner: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})
