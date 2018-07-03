import React, { Component } from 'react'
import { StyleSheet, View, Text, ScrollView, Modal } from 'react-native'
import { SwipeRow, Button, Icon, H3, Container, Header, Content, ListItem, Left, Right, Radio } from 'native-base'
import { AppConsumer } from '../context/AppContext'

const itemsUrl = `https://good-intent.herokuapp.com/items`
const listUrl = `https://good-intent.herokuapp.com/lists/individual`
const tripsUrl = `https://good-intent.herokuapp.com/trips`

export default class IndividualList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            items: [],
            list: [],
        }
    }

    componentDidMount() {
        return fetch(itemsUrl)
            .then(response => response.json())
            .then(items => {
                return items.map(item => {
                    return {
                        id: item.id,
                        name: item.name,
                        checked: false,
                    }
                })
            })
            .then(items => this.setState({ items: items }))
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

    setModalVisible(visible) {
        this.setState({ modalVisible: visible })
    }

    addItem = (array, itemId, tripId) => {
        let list = [...this.state.list]
        array.forEach(member => {
            let item = {
                item_id: itemId,
                trip_id: tripId,
                accounted_for: false,
                user_id: member.id,
                pending: null,
                claimed_by: null,
            }
            return list.push(item)
        })
        return this.setState({ list: list })
    }

    postList = (url) => {
        return fetch(url, {
            method: 'POST',
            headers: new Headers({
                'content-type': 'application/json',
            }),
            body: JSON.stringify(this.state.list),
        })
            .then(response => response.json())
            .then(response => console.log(response))
    }

    render() {
        return (
            <React.Fragment>
                <AppConsumer>
                    {(context) => {
                        return <View style={styles.listWrapper}>
                            <H3 style={styles.itemName}>{context.state.currentTrip[0].name}</H3>
                            <View style={{ marginTop: 22 }}>
                                <Modal
                                    animationType="slide"
                                    transparent={false}
                                    visible={this.state.modalVisible}
                                    onRequestClose={() => {
                                        alert('Modal has been closed.')
                                    }}>
                                    <Container>
                                        <Header />
                                        <Button
                                            danger
                                            style={styles.button}
                                            onPress={() => { this.setModalVisible(!this.state.modalVisible) }}>
                                            <Text>Go Back</Text>
                                        </Button>
                                        <Content>
                                            {this.state.items.map(item => {
                                                return <ListItem
                                                    key={item.id}
                                                    selected={true}
                                                    style={styles.listItemRadio}
                                                    onPress={() => {
                                                        this.addItem(
                                                            context.state.currentTrip[0].partyMembers,
                                                            item.id,
                                                            context.state.currentTrip[0].id,
                                                            context.state.userId
                                                        )
                                                    }}>
                                                    <Left>
                                                        <Text>{item.name}</Text>
                                                    </Left>
                                                    <Right>
                                                        <Radio
                                                            color={'#f0ad4e'}
                                                            selectedColor={'#5cb85c'}
                                                            selected={this.state.list.filter(listItem => {
                                                                return listItem.item_id === item.id
                                                            }).length >= 1 ? true : false}
                                                        />
                                                    </Right>
                                                </ListItem>
                                            })}
                                            <View style={{ marginTop: 22 }}>
                                                <View>
                                                    <Button
                                                        success
                                                        style={styles.button}
                                                        onPress={() => {
                                                            return this.postList(listUrl)
                                                                .then(context.state.getCurrentTrip(
                                                                    `${tripsUrl}/${context.state.currentTrip[0].id}`
                                                                ))
                                                                .then(this.setModalVisible(!this.state.modalVisible))
                                                        }}>
                                                        <Text>Add Items!</Text>
                                                    </Button>
                                                </View>
                                            </View>
                                        </Content>
                                    </Container>
                                </Modal>
                                <Button
                                    success
                                    style={styles.button}
                                    onPress={() => this.setModalVisible(true)}>
                                    <Text>Add Items</Text>
                                </Button>
                            </View>
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
                                                    <Button style={styles.icon}
                                                        success onPress={() => {
                                                            return context.state.checkOffItem(item)
                                                                .then(response => {
                                                                    if (response) {
                                                                        return context.state.getCurrentTrip(
                                                                            `${tripsUrl}/
                                                                            ${context.state.currentTrip[0].id}`
                                                                        )
                                                                    } else {
                                                                        throw new Error('Couldn\'t Load Trip!')
                                                                    }
                                                                })
                                                                .catch(error => console.log(error))
                                                        }}>
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
                                                        style={styles.icon}
                                                        danger onPress={() => {
                                                            return context.state.moveItem(item)
                                                                .then(response => {
                                                                    if (response) {
                                                                        return context.state.getCurrentTrip(
                                                                            `${tripsUrl}/
                                                                            ${context.state.currentTrip[0].id}`
                                                                        )
                                                                    } else {
                                                                        throw new Error('Couldn\'t Load Trip!')
                                                                    }
                                                                })
                                                                .catch(error => console.log(error))
                                                        }}>
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
            </React.Fragment>
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
    listItem: {
        margin: 5,
        width: '99%',
        height: 70,
        shadowOffset: { width: .15, height: .15 },
        shadowColor: '#333',
        shadowOpacity: .8,
        borderRadius: 5,
    },
    listItemRadio: {
        height: 60,
    },
    icon: {
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
    button: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
