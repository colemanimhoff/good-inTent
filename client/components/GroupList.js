import React, { Component } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { SwipeRow, Button, Icon, H3 } from 'native-base'
import { AppConsumer } from '../context/AppContext'

export default class GroupList extends Component {

    getUserAvatar = (partyMembers, id) => {
        const currentUser = partyMembers.filter(member => member.id == id)
        return currentUser[0].avatarUrl
    }

    getUsername = (partyMembers, id) => {
        const currentUser = partyMembers.filter(member => member.id == id)
        return currentUser[0].username
    }

    applyStyling = (accountedFor, pending) => {
        if (accountedFor === true) {
            return styles.itemNameChecked
        } else if (accountedFor === false && pending === true) {
            return styles.itemNamePending
        } else {
            return styles.itemName
        }
    }

    render() {
        return (
            <AppConsumer>
                {(context) => {
                    return <React.Fragment>
                        <H3 style={styles.itemName}>{context.state.currentTrip[0].name}</H3>
                        <ScrollView style={styles.listWrapper}>
                            <AppConsumer>
                                {(context) => {
                                    return context.state.currentTrip[0].groupList.map(item => {
                                        return <SwipeRow
                                            key={item.id}
                                            style={styles.listItem}
                                            leftOpenValue={75}
                                            rightOpenValue={-75}
                                            left={
                                                <Button style={styles.button} success onPress={() => { context.state.claimItem(item) }}>
                                                    <Icon active name="add" />
                                                </Button>
                                            }
                                            body={
                                                <View style={styles.textWrapper}>
                                                    <Text style={this.applyStyling(item.accounted_for, item.pending)}>
                                                        {item.name}
                                                    </Text>
                                                </View>
                                            }
                                        />
                                    })
                                }}
                            </AppConsumer>
                        </ScrollView>
                    </React.Fragment>
                }}
            </AppConsumer>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 6,
    },
    textWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textWrapperPending: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    listWrapper: {
        height: '95%',
        paddingBottom: 21,
    },
    listItem: {
        margin: 5,
        width: '99%',
        height: 70,
        shadowOffset: { width: .15, height: .15 },
        shadowColor: '#333',
        shadowOpacity: .8,
        borderRadius: 5,
    },
    button: {
        borderRadius: 5,
        margin: 5,
    },
    itemName: {
        textAlign: 'center',
    },
    itemNamePending: {
        textAlign: 'center',
        color: '#BF4744',
        fontWeight: 'bold',
    },
    itemNameChecked: {
        textAlign: 'center',
        color: '#67AA56',
        fontWeight: 'bold',
    },
    header: {
        padding: 0,
    },
})
