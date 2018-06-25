import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base'

export default class SignUpForm extends Component {
    render() {
        return (
            <Container>
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
                            style={styles.button} success><Text> Sign Up </Text></Button>
                    </Form>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
