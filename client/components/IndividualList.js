import React, { Component } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { SwipeRow, Button, Icon, List, ListItem } from 'native-base'
import { AppConsumer } from '../context/AppContext'

export default class IndividualList extends Component {

    render() {
        return (
            <AppConsumer>
                {(context) => {
                    return <View style={styles.listWrapper}>
                        <List>
                            <ListItem>
                                <Text>{context.state.currentTrip[0].name}</Text>
                            </ListItem>
                        </List>
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
                                                    <Text style={
                                                        item.accounted_for === true
                                                            ? styles.itemNameChecked
                                                            : styles.itemName
                                                    }>{item.name}</Text>
                                                </View>
                                            }
                                            right={
                                                <Button style={styles.button} danger onPress={() => alert('Trash')}>
                                                    <Icon active name="trash" />
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
        marginBottom: 155,
        paddingBottom: 5,
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
    listItemChecked: {
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
})
