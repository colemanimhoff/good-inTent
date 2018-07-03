import React, { Component } from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { Item, Input, Label, Button, Text } from 'native-base'
import { AppConsumer } from '../context/AppContext'
import Icon from 'react-native-vector-icons/Entypo'

export default class LogInForm extends Component {
    render() {
        return (
            <React.Fragment>
                <View style={styles.iconContainer}>
                    <Icon color="#67AA56" name="basecamp" size={100}></Icon>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Good inTent</Text>
                </View>
                <AppConsumer>
                    {(context) => {
                        return <ScrollView>
                            <Item stackedLabel>
                                <Label>Email</Label>
                                <Input />
                            </Item>
                            <Item stackedLabel last>
                                <Label>Password</Label>
                                <Input secureTextEntry={true} />
                            </Item>
                            <Button
                                style={styles.button}
                                success
                                onPress={context.state.toggleAuthState}>
                                <Text> Log In </Text>
                            </Button>
                        </ScrollView>
                    }}
                </AppConsumer>
            </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        height: '33%',
        width: '33%',
    },
    button: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    title: {
        fontFamily: 'AppleSDGothicNeo-UltraLight',
        fontSize: 35,
    },
})
