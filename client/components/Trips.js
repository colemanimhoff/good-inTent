import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Container, Header, Left, Right, Body, Title } from 'native-base'
// import { AppConsumer } from '../context/AppContext'

export default class Trips extends Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Header>
                        <Left />
                        <Body>
                            <Title>Good InTent</Title>
                        </Body>
                        <Right />
                    </Header>
                </Container>
            </React.Fragment>
        )
    }
}
