import React, { Component } from 'react'
import { StyleSheet, Image, View, ScrollView } from 'react-native'
import { Item, Input, Label, Button, Text } from 'native-base'
import { AppConsumer } from '../context/AppContext'

export default class SignUpForm extends Component {
    render() {
        return (
            <AppConsumer>
                {(context) => {
                    return <ScrollView>
                        {/* <Image style={styles.image} source={require('../assets/goodIntentLogo.png')} /> */}
                        <Item stackedLabel>
                            <Label>Email</Label>
                            <Input />
                        </Item>
                        <Item stackedLabel>
                            <Label>Username</Label>
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
                            <Text> Sign Up </Text>
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
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
