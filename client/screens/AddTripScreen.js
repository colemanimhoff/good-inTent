import React, { Component } from 'react'
import { StyleSheet, View, TextInput, Modal, ScrollView } from 'react-native'
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
    Header,
    Title,
    Right,
    Button,
    Text,
    Radio,
} from 'native-base'
import Icon from 'react-native-vector-icons/Entypo'
import { AppConsumer } from '../context/AppContext'

const tripsUrl = `https://good-intent.herokuapp.com/trips`
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

    addUser = (newUser) => {
        let partyMember = {
            user_id: newUser.id,
            trip_id: this.state.newTripId,
        }
        newParty.push(partyMember)
        this.setState({ party: newParty })
    }

    postParty = (hostId) => {
        let clearParty = []
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
            .then(response => {
                if (response) {
                    return this.setState({ party: clearParty })
                } else {
                    throw new Error('Couldn\'t Clear Party!')
                }
            })
    }

    deleteTrip = (url) => {
        return fetch(url, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .catch(error => console.log(error))
    }

    render() {
        return (
            <React.Fragment>
                <AppConsumer>
                    {(context) => {
                        return <Container>
                            <H3 style={styles.heading}>Add Trip</H3>
                            <View
                                style={styles.iconContainer}>
                                <Text
                                    style={styles.backLink}
                                    onPress={() => this.props.navigation.goBack()}>
                                    Back Home
                                </Text>
                            </View>
                            <View style={styles.iconContainer}>
                                <Icon color="#67AA56" name="basecamp" size={100}></Icon>
                            </View>
                            <Form>
                                <Item stackedLabel name="name">
                                    <Label>Trip Name</Label>
                                </Item>
                                <TextInput
                                    ref={input => { this.textInput = input }}
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
                                    <View>
                                        <Header style={styles.header}>
                                            <Left />
                                            <Body>
                                                <Title style={styles.headerFont}>Good inTent</Title>
                                            </Body>
                                            <Right />
                                        </Header>
                                        <H3 style={styles.heading}>Add Your Friends</H3>
                                        <View style={styles.buttonContainer}>
                                            <Text
                                                style={styles.backLink}
                                                onPress={() => {
                                                    this.deleteTrip(`${tripsUrl}/${this.state.newTripId}`)
                                                    this.setModalVisible(!this.state.modalVisible)
                                                }}>
                                                Back Home
                                            </Text>
                                        </View>
                                        <ScrollView style={styles.ScrollView}>
                                            {this.state.users.map(user => {
                                                return <ListItem
                                                    onPress={() => this.addUser(user)}
                                                    key={user.id}
                                                    selected={true}>
                                                    <Left>
                                                        <Thumbnail source={{ uri: user.avatarUrl }} />
                                                    </Left>
                                                    <Body>
                                                        <Text style={styles.username}>{user.username}</Text>
                                                    </Body>
                                                    <Right>
                                                        <Radio
                                                            color={'#f0ad4e'}
                                                            selectedColor={'#5cb85c'}
                                                            selected={this.state.party.filter(partyMember => {
                                                                return partyMember.user_id === user.id
                                                            }).length >= 1 ? true : false}
                                                        />
                                                    </Right>
                                                </ListItem>
                                            })}
                                            <Button
                                                style={styles.button}
                                                success
                                                title="Complete Your Trip"
                                                onPress={() => {
                                                    return this.postParty(context.state.userId)
                                                        .then(context.state.getAllTrips(
                                                            `${usersUrl}/${context.state.userId}`
                                                        ))
                                                        .then(this.props.navigation.goBack())
                                                        .catch(error => console.log(error))
                                                }}>
                                                <Text style={styles.buttonText}>Complete Your Trip</Text>
                                            </Button>
                                        </ScrollView>
                                    </View>
                                </Modal>
                                <View style={styles.buttonContainer}>
                                    <Button
                                        title="Add Friends"
                                        style={styles.button}
                                        success
                                        onPress={() => {
                                            context.state.addTrip(
                                                this.state.name, this.state.start_date, this.state.end_date
                                            )
                                                .then(response => this.setState({ newTripId: response.id }))
                                                .then(this.setModalVisible(true))
                                                .catch(error => console.log(error))
                                        }}>
                                        <Text style={styles.buttonText}>Add Your Friends</Text>
                                    </Button>
                                </View>
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
        paddingTop: 5,
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
    username: {
        color: '#000',
        width: '100%',
    },
    header: {
        backgroundColor: '#67AA56',
    },
    headerFont: {
        color: '#fff',
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    backLink: {
        color: '#007AFF',
        fontSize: 20,
        padding: 5,
    },
    button: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ScrollView: {
        flexGrow: 1,
        marginBottom: 125,

    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
})
