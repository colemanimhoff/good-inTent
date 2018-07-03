import React, { Component } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Item, Input, Label, Button, Text } from 'native-base'
import { AppConsumer } from '../context/AppContext'
import Icon from 'react-native-vector-icons/Entypo'

export default class SignUpForm extends Component {
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
                            <Item stackedLabel>
                                <Label>Username</Label>
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
                                <Text> Sign Up </Text>
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
    iconContainer: {
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'AppleSDGothicNeo-UltraLight',
        fontSize: 35,
    },
})
