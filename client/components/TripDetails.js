import React, { Component } from 'react'
import { StyleSheet, Text, ScrollView, View } from 'react-native'
import { Body, List, ListItem, Left, Thumbnail, H3 } from 'native-base'
import { AppConsumer } from '../context/AppContext'

const usersUrl = `https://good-intent.herokuapp.com/users`

export default class TripDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],

        }
    }

    componentDidMount() {
        return fetch(usersUrl)
            .then(users => users.json())
            .then(users => this.setState({ users: users }))
    }

    parseDate = (date) => {
        let splitDate = ''
        splitDate = date.split('T')[0].split('-')
        return `${splitDate[1]}-${splitDate[2]}-${splitDate[0]}`
    }

    getAvatar = (id) => {
        if (this.state.users.length > 0) {
            const user = this.state.users.find(user => user.id === id)//.avatarUrl
            if (user && user.avatarUrl) return user.avatarUrl
        } else {
            return 'pending'
        }
    }

    render() {
        return (
            <AppConsumer>
                {(context) => {
                    const startDate = this.parseDate(context.state.currentTrip[0].start_date)
                    const endDate = this.parseDate(context.state.currentTrip[0].end_date)
                    return <React.Fragment>
                        <H3 style={styles.tripName}>Your Trip</H3>
                        <View style={styles.scrollViewContainer}>
                            <ScrollView style={styles.scrollView}>
                                <List>
                                    <ListItem itemDivider>
                                        <Text>Where</Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text>{context.state.currentTrip[0].name}</Text>
                                    </ListItem>
                                    <ListItem itemDivider>
                                        <Text>When</Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text>{startDate} - {endDate}</Text>
                                    </ListItem>
                                    <ListItem itemDivider>
                                        <Text>Your Party</Text>
                                    </ListItem>
                                    <AppConsumer>
                                        {(context) => {
                                            return context.state.currentTrip[0].partyMembers.map(user => {
                                                return <ListItem avatar key={user.id} style={styles.partyMemberContainer}>
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
                                    <ListItem itemDivider>
                                        <Text>Unaccounted For Items</Text>
                                    </ListItem>
                                    {<AppConsumer>
                                        {(context) => {
                                            return context.state.currentTrip[0].groupList.filter(item => {
                                                return item.pending === true && item.accounted_for === false
                                            })
                                                .map((item, index) => {
                                                    return <ListItem key={index} style={styles.items}>
                                                        <Thumbnail source={
                                                            { uri: this.getAvatar(item.user_id) }} />
                                                        <Text style={styles.item}>{item.name}</Text>
                                                        {
                                                            item.accounted_for
                                                                ? <Thumbnail
                                                                    style={styles.thumbnailRight}
                                                                    source={{ uri: this.getAvatar(item.claimed_by) }} />
                                                                : <Thumbnail
                                                                    style={styles.thumbnailRight}
                                                                    source={{ uri: 'pending' }} />
                                                        }
                                                    </ListItem>
                                                })
                                        }
                                        }
                                    </AppConsumer>}
                                </List>
                            </ScrollView>
                        </View>
                    </React.Fragment>
                }}
            </AppConsumer>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        padding: 0,
        height: 10,
    },
    dateContainer: {
        padding: 50,
        flex: 1,
        justifyContent: 'center',
    },
    partyMemberContainer: {
        padding: 8,
    },
    tripName: {
        textAlign: 'center',
    },
    scrollView: {
        height: '100%',
        marginBottom: 50,
    },
    scrollViewContainer: {
        height: '100%',
        paddingBottom: '13%',
        marginBottom: '2%',
    },
    items: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    // item: {
    //     width: '100%',
    // },
    // thumbnailRight: {
    //     marginLeft: 52,
    // },
})
