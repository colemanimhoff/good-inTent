import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base'
import { AppConsumer } from '../context/AppContext'

export default class SignUpForm extends Component {
    render() {
        return (
            <AppConsumer>
                {(context) => {
                    return <Container style={styles.container}>
                        <Content>
                            <Form>
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
                            </Form>
                        </Content>
                    </Container>
                }}

            </AppConsumer>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        top: 100,
    },
    button: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
