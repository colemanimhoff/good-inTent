import React, { Component } from 'react'
import Friends from '../components/Friends'
import { View, StyleSheet } from 'react-native'
import { Header, Left, Right, Body, Title } from 'native-base'

class FriendScreen extends Component {

    render() {
        return (
            <React.Fragment>
                <Header style={styles.header}>
                    <Left />
                    <Body>
                        <Title style={styles.headerFont}>Good inTent</Title>
                    </Body>
                    <Right />
                </Header>
                <View style={styles.container}>
                    <Friends />
                </View>
            </React.Fragment>
        )
    }
}
export default FriendScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        backgroundColor: '#007f00',
    },
    headerFont: {
        color: '#fff',
    },
})