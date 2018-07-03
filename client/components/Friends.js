import React, { Component } from 'react'
import { Container, Content, List, ListItem, Left, Body, Thumbnail, Text } from 'native-base'
import { StyleSheet, ScrollView } from 'react-native'
import { AppConsumer } from '../context/AppContext'

export default class Friends extends Component {

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <List>
                        <ScrollView>
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
                        </ScrollView>
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