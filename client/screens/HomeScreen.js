import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import { View, StyleSheet, Text } from 'react-native'
import { Container, List, ListItem } from 'native-base'
import { AppConsumer } from '../context/AppContext'

const tripsUrl = 'https://good-intent.herokuapp.com/trips'

class HomeScreen extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         trips: [],
    //     }
    // }

    // componentDidMount() {
    //     return fetch(tripsUrl)
    //         .then(trips => trips.json())
    //         .then(trips => this.setState({ trips: trips }))
    // }

    render() {
        return (
            < React.Fragment >
                <Container>
                    <List>
                        <ListItem>
                            <Text style={styles.label}>Add Trip</Text>
                            <Icon
                                style={styles.icon}
                                name="plus" size={45}
                                onPress={() => this.props.navigation.navigate('AddTrip')}>
                            </Icon>
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
                                            context.state.getCurrentTrip(`${tripsUrl}/${trip.id}`)
                                                .then(this.props.navigation.navigate('CurrentTrip'))
                                                .catch(error => console.log(error))
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
        margin: 3,
        shadowOffset: { width: 3, height: 3 },
        shadowColor: '#333',
        shadowOpacity: 1.0,
        borderRadius: 5,
    },
})