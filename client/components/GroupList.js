import React, { Component } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { SwipeRow, Button, Icon, Header, Title, Body } from 'native-base'
import { AppConsumer } from '../context/AppContext'

export default class GroupList extends Component {
    render() {
        return (
            <AppConsumer>
                {(context) => {
                    return <React.Fragment>
                        <Header style={styles.header} iosBarStyle="light-content">
                            <Body>
                                <Title style={styles.headerFont}>{context.state.currentTrip[0].name}</Title>
                            </Body>
                        </Header>
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
                                                <Button style={styles.button} success onPress={() => alert('Add')}>
                                                    <Icon active name="add" />
                                                </Button>
                                            }
                                            body={
                                                <View style={styles.textWrapper}>
                                                    <Text style={styles.itemName}>{item.name}</Text>
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
    listWrapper: {
        marginBottom: 100,
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
    button: {
        borderRadius: 5,
        margin: 5,
    },
    itemName: {
        textAlign: 'center',
    },
    header: {
        padding: 0,
    },
})
