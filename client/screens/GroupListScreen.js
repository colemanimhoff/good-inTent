import React, { Component } from 'react'
import GroupList from '../components/GroupList'
import { View, Button } from 'react-native'

export default class GroupListScreen extends Component {

    render() {
        return (
            <View>
                <Button title="Back" onPress={() => this.props.navigation.popToTop()}></Button>
                <GroupList />
            </View >
        )
    }
}