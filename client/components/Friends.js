import React, { Component } from 'react'
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base'
import { StyleSheet } from 'react-native'
import { AppConsumer } from '../context/AppContext'

export default class Friends extends Component {

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <List>
                        <AppConsumer>
                            {(context) => {
                                return context.state.users.map(user => {
                                    return <ListItem avatar key={user.id}>
                                        <Left>
                                            <Thumbnail source={{ uri: user.avatarUrl }} />
                                        </Left>
                                        <Body>
                                            <Text>{user.username}</Text>
                                            <Text> - </Text>
                                        </Body>
                                        <Right>
                                            <Text note>Trips: 1</Text>
                                        </Right>
                                    </ListItem>
                                })
                            }}
                        </AppConsumer>
                    </List>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
})