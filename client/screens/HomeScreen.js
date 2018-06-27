import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import { View, StyleSheet, Text } from 'react-native'
import { Container, Header, Left, Right, Body, Title, List, ListItem } from 'native-base'

class HomeScreen extends Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Header style={styles.header}>
                        <Left />
                        <Body>
                            <Title style={styles.headerFont}>Good inTent</Title>
                        </Body>
                        <Right />
                    </Header>
                    <List>
                        <ListItem>
                            <Text style={styles.label}>Add Trip</Text>
                            <Icon
                                style={styles.icon}
                                name="plus" size={45}
                                onPress={() => this.props.navigation.navigate('AddTrip')}>
                            </Icon>
                        </ListItem>
                        <ListItem
                            style={styles.trip}
                            itemDivider
                            title="Current Trip"
                            onPress={() => this.props.navigation.navigate('CurrentTrip')}>
                            <Text>Rocky Mountain National Park</Text>
                        </ListItem>
                    </List>
                    <View >
                    </View>
                </Container>
            </React.Fragment>
        )
    }
}

export default HomeScreen

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#67AA56',
    },
    headerFont: {
        color: '#fff',
    },
    icon: {
        color: '#007f00',
    },
    label: {
        flex: 1,
        alignItems: 'center',
    },
    trip: {
        height: 70,
    },
})