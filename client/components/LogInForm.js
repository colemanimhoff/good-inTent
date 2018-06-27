import React, { Component } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base'
import { AppConsumer } from '../context/AppContext'

export default class LogInForm extends Component {
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
