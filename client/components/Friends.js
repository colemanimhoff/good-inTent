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
                                            <Thumbnail source={{ uri: 'https://media.licdn.com/dms/image/C5603AQGnqcfTTZ4ceg/profile-displayphoto-shrink_200_200/0?e=1535587200&v=beta&t=vQOb745DwP6yW3NH02x_bh6SEnBmvFpun4jzIsOgh10' }} />
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