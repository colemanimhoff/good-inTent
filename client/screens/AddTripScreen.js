import React, { Component } from 'react'
import { StyleSheet, View, Button, TextInput, Text, Modal } from 'react-native'
import {
    H3,
    Container,
    Form,
    Item,
    Label,
    DatePicker,
    Body,
    Left,
    Thumbnail,
    ListItem,
} from 'native-base'
import Autocomplete from 'react-native-autocomplete-input'
import { AppConsumer } from '../context/AppContext'

const usersUrl = `https://good-intent.herokuapp.com/users`
const partyUrl = `https://good-intent.herokuapp.com/parties`
let newParty = []

export default class AddTripScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            start_date: new Date(),
            end_date: new Date(),
            users: [],
            query: '',
            party: [],
            newTripId: '',
            modalVisible: false,
        }
    }

    componentDidMount() {
        fetch(`${usersUrl}`)
            .then(res => res.json())
            .then((response) => {
                return this.setState({ users: response })
            })
            .catch(error => console.log(error))
    }

    handleText = (text) => {
        this.setState({ name: text })
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible })
    }

    setStartDate = (newDate) => {
        this.setState({ startDate: newDate })
    }

    setEndDate = (newDate) => {
        this.setState({ startDate: newDate })
    }


    addUser = (username) => {
        let currentUser = this.state.users.filter(user => user.username === username)
        let partyMember = {
            user_id: currentUser[0].id,
            trip_id: this.state.newTripId,
        }
        newParty.push(partyMember)
        this.setState({ party: newParty })
    }

    postParty = (hostId) => {
        let host = {
            user_id: hostId,
            trip_id: this.state.newTripId,
        }
        let totalParty = this.state.party.concat(host)
        return fetch(partyUrl, {
            method: 'POST',
            headers: new Headers({
                'content-type': 'application/json',
            }),
            body: JSON.stringify(totalParty),
        })
            .then(response => response.json())
    }

    findFriend(query) {
        if (query === '') {
            return []
        }
        const { users } = this.state
        const regex = new RegExp(`${query.trim()}`, 'i')
        return users.filter(user => user.username.search(regex) >= 0)
    }


    render() {
        const { query } = this.state
        const user = this.findFriend(query)
        const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim()
        return (
            <React.Fragment>
                <AppConsumer>
                    {(context) => {
                        return <Container>
                            <H3 style={styles.heading}>Add Trip</H3>
                            <Button title="Back" onPress={() => this.props.navigation.goBack()}></Button>
                            <Form>
                                <Item stackedLabel name="name">
                                    <Label>Trip Name</Label>
                                </Item>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Name Your Trip!"
                                    onChangeText={this.handleText}
                                />
                                <Item stackedLabel>
                                    <Label style={styles.dateLabel}>Start Date</Label>
                                    <DatePicker
                                        defaultDate={new Date(2018, 6, 27)}
                                        minimumDate={new Date(2018, 1, 1)}
                                        maximumDate={new Date(2018, 12, 31)}
                                        locale={'en'}
                                        timeZoneOffsetInMinutes={undefined}
                                        modalTransparent={false}
                                        animationType={'fade'}
                                        androidMode={'default'}
                                        placeHolderText="Select Start Date"
                                        textStyle={{ color: 'green' }}
                                        placeHolderTextStyle={{ color: '#333' }}
                                        onDateChange={this.setStartDate}
                                    />
                                </Item>
                                <Item stackedLabel>
                                    <Label style={styles.dateLabel}>End Date</Label>
                                    <DatePicker
                                        defaultDate={new Date(2018, 6, 27)}
                                        minimumDate={new Date(2018, 1, 1)}
                                        maximumDate={new Date(2018, 12, 31)}
                                        locale={'en'}
                                        timeZoneOffsetInMinutes={undefined}
                                        modalTransparent={false}
                                        animationType={'fade'}
                                        androidMode={'default'}
                                        placeHolderText="Select End Date"
                                        textStyle={{ color: 'green' }}
                                        placeHolderTextStyle={{ color: '#333' }}
                                        onDateChange={this.setEndDate}
                                    />
                                </Item>
                            </Form>
                            <View style={{ marginTop: 22 }}>
                                <Modal
                                    animationType="slide"
                                    transparent={false}
                                    visible={this.state.modalVisible}
                                    onRequestClose={() => {
                                        alert('Modal has been closed.')
                                    }}>
                                    <View style={{ marginTop: 22 }}>
                                        <Item stackedLabel>
                                            <Label style={styles.dateLabel}>Add Friends</Label>
                                        </Item>

                                        <Autocomplete
                                            autoCapitalize="none"
                                            autoCorrect={false}
                                            style={styles.textInput}
                                            containerStyle={styles.textInput}
                                            data={user.length === 1 && comp(query, user[0].username) ? [] : user}
                                            defaultValue={query}
                                            onChangeText={text => this.setState({ query: text })}
                                            placeholder="Add Your Friends!"
                                            renderItem={({ username, avatarUrl }) => (
                                                <ListItem avatar style={styles.friendsContainer} onPress={() => {
                                                    this.addUser(username)
                                                }}>
                                                    <Left>
                                                        <Thumbnail source={{ uri: avatarUrl }} />
                                                    </Left>
                                                    <Body>
                                                        <Text>{username}</Text>
                                                    </Body>
                                                </ListItem>
                                            )}
                                        />
                                        <Button title="Back"
                                            onPress={() => {
                                                this.setModalVisible(!this.state.modalVisible)
                                            }}>
                                        </Button>
                                        <Button title="Complete Your Trip"
                                            onPress={() => {
                                                return this.postParty(context.state.userId)
                                                    .then(context.state.getAllTrips(
                                                        `${usersUrl}/${context.state.userId}`
                                                    ))
                                                    .then(this.props.navigation.goBack())
                                                    .catch(error => console.log(error))
                                            }}>
                                        </Button>
                                    </View>
                                </Modal>

                                <Button
                                    title="Create Trip"
                                    onPress={() => {
                                        context.state.addTrip(
                                            this.state.name, this.state.start_date, this.state.end_date
                                        )
                                            .then(response => this.setState({ newTripId: response.id }))
                                            .then(this.setModalVisible(true))
                                            .catch(error => console.log(error))
                                    }}>
                                    <Text>Add Your Friends</Text>
                                </Button>
                            </View>
                        </Container>
                    }}
                </AppConsumer>
            </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    dateLabel: {
        textAlign: 'center',
    },
    heading: {
        textAlign: 'center',
        padding: 5,
    },
    textInput: {
        width: '100%',
        height: 40,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    friendsContainer: {
        padding: 8,
    },

})
