import React, { Component } from 'react'
import IndividualList from '../components/IndividualList'
import { View, Button } from 'react-native'

export default class IndividualListScreen extends Component {

    render() {
        return (
            <View>
                <Button title="Back"
                    onPress={() => this.props.navigation.popToTop()} />
                <IndividualList />
            </View>
        )
    }
}