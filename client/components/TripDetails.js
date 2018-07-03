import React, { Component } from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'
import { Body, List, ListItem, Left, Thumbnail, H3 } from 'native-base'
import { AppConsumer } from '../context/AppContext'

export default class TripDetails extends Component {

    parseDate = (date) => {
        let splitDate = ''
        splitDate = date.split('T')[0].split('-')
        return `${splitDate[1]}-${splitDate[2]}-${splitDate[0]}`
    }

    render() {
        return (
            <AppConsumer>
                {(context) => {
                    const startDate = this.parseDate(context.state.currentTrip[0].start_date)
                    const endDate = this.parseDate(context.state.currentTrip[0].end_date)
                    return <React.Fragment>
                        <H3 style={styles.itemName}>Your Trip</H3>
                        <ScrollView>
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
                                <AppConsumer>
                                    {(context) => {
                                        console.log(context.state.currentTrip[0].groupList)
                                        return <React.Fragment>
                                            <ListItem itemDivider>
                                                <Text>Unaccounted For Items</Text>
                                            </ListItem>
                                            <ListItem>
                                                <Text></Text>
                                            </ListItem>
                                        </React.Fragment>
                                    }}
                                </AppConsumer>
                            </List>
                        </ScrollView>
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
    itemName: {
        textAlign: 'center',
    },
})
