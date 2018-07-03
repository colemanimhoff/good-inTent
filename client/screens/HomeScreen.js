import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import { View, StyleSheet, Text } from 'react-native'
import { Container, List, ListItem } from 'native-base'
import { AppConsumer } from '../context/AppContext'

const tripsUrl = 'https://good-intent.herokuapp.com/trips'

class HomeScreen extends Component {

    render() {
        return (
            < React.Fragment >
                <Container>
                    <List>
                        <AppConsumer>
                            {(context) => {
                                return <ListItem>
                                    <Text style={styles.label}>Add Trip</Text>
                                    <Icon
                                        style={styles.icon}
                                        name="plus" size={45}
                                        onPress={() => this.props.navigation.navigate('AddTrip')}>
                                    </Icon>
                                </ListItem>
                            }}
                        </AppConsumer>
                        <ListItem>
                            <Text style={styles.label}>Your Trips</Text>
                        </ListItem>
                        <AppConsumer>
                            {(context) => {
                                return context.state.trips.map(trip => {
                                    return < ListItem
                                        key={trip.id}
                                        style={styles.trip}
                                        itemDivider
                                        title={trip.id}
                                        onPress={() => {
                                            return context.state.getCurrentTrip(`${tripsUrl}/${trip.id}`)
                                                .then(() => {
                                                    if (context.state.currentTrip) {
                                                        return this.props.navigation.navigate('CurrentTrip')
                                                    } else {
                                                        throw new Error('Couldn\'t Load Trip')
                                                    }
                                                })
                                        }}>
                                        <Text>{trip.name}</Text>
                                    </ListItem>
                                })
                            }}
                        </AppConsumer>
                    </List>
                    <View >
                    </View>
                </Container>
            </React.Fragment >
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
        color: '#67AA56',
    },
    label: {
        flex: 1,
        alignItems: 'center',
    },
    trip: {
        height: 70,
        margin: 5,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 1.0,
        borderRadius: 5,
    },
})