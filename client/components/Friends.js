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
                                    return <ListItem avatar key={user.id} style={styles.friendsContainer}>
                                        <Left>
                                            <Thumbnail source={{ uri: user.avatarUrl }} />
                                        </Left>
                                        <Body>
                                            <Text>{user.username}</Text>
                                        </Body>
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
    friendsContainer: {
        padding: 8,
    },
})