import React, { Component } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { SwipeRow, Button, Icon, List, ListItem, H3 } from 'native-base'
import { AppConsumer } from '../context/AppContext'

export default class IndividualList extends Component {

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
                    return <View style={styles.listWrapper}>
                        <H3 style={styles.itemName}>{context.state.currentTrip[0].name}</H3>
                        <ScrollView>
                            <AppConsumer>
                                {(context) => {
                                    const myList = context.state.currentTrip[0].individualList.filter(item => {
                                        return item.user_id === context.state.userId
                                    })
                                    return myList.map(item => {
                                        return <SwipeRow
                                            key={item.id}
                                            style={styles.listItem}
                                            leftOpenValue={75}
                                            rightOpenValue={- 75}
                                            left={
                                                <Button style={styles.button}
                                                    success onPress={() => context.state.checkOffItem(item)}>
                                                    <Icon active name="add" />
                                                </Button>
                                            }
                                            body={
                                                <View style={styles.textWrapper}>
                                                    <Text
                                                        style={this.applyStyling(item.accounted_for, item.pending)}>
                                                        {item.name}
                                                    </Text>
                                                </View>
                                            }
                                            right={
                                                <Button
                                                    style={styles.button}
                                                    danger onPress={() => context.state.moveItem(item)}>
                                                    <Icon active name="ios-move" />
                                                </Button>
                                            }
                                        />
                                    })
                                }}
                            </AppConsumer>
                        </ScrollView>
                    </View>
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
    itemNameChecked: {
        textAlign: 'center',
        color: '#67AA56',
        fontWeight: 'bold',
    },
    itemNamePending: {
        textAlign: 'center',
        color: '#BF4744',
        fontWeight: 'bold',
    },
})
