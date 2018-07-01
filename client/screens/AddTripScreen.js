import React, { Component } from 'react'
import { StyleSheet, View, Button, Text } from 'react-native'
import {
    H3,
    Container,
    Content,
    Form,
    Item,
    Label,
    Input,
    DatePicker,
} from 'native-base'
import { AppConsumer } from '../context/AppContext'

export default class AddTripScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            startDate: new Date(),
            endDate: new Date(),
        }
    }

    setStartDate = (newDate) => {
        this.setState({ startDate: newDate })
    }

    setEndDate = (newDate) => {
        this.setState({ startDate: newDate })
    }

    getUsernames = (users) => {
        return users.map(user => user.username)
    }

    render() {
        return (
            <Container>
                <Content>
                    <H3 style={styles.heading}>Add Trip</H3>
                    <Button title="Back" onPress={() => this.props.navigation.goBack()}></Button>
                    <Form>
                        <Item stackedLabel>
                            <Label>Trip Name</Label>
                            <Input />
                        </Item>
                    </Form>
                    <Item stackedLabel>
                        <Label style={styles.dateLabel}>Start Date</Label>
                        <DatePicker
                            defaultDate={new Date(2018, 6, 27)}
                            minimumDate={new Date(2018, 1, 1)}
                            maximumDate={new Date(2018, 12, 31)}
                            locale={'en'}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={'fade'}
                            androidMode={'default'}
                            placeHolderText="Select Start Date"
                            textStyle={{ color: 'green' }}
                            placeHolderTextStyle={{ color: '#333' }}
                            onDateChange={this.setStartDate}
                        />
                    </Item>
                    <Item stackedLabel>
                        <Label style={styles.dateLabel}>End Date</Label>
                        <DatePicker
                            defaultDate={new Date(2018, 6, 27)}
                            minimumDate={new Date(2018, 1, 1)}
                            maximumDate={new Date(2018, 12, 31)}
                            locale={'en'}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={'fade'}
                            androidMode={'default'}
                            placeHolderText="Select End Date"
                            textStyle={{ color: 'green' }}
                            placeHolderTextStyle={{ color: '#333' }}
                            onDateChange={this.setDate}
                        />
                    </Item>
                    <Item stackedLabel>
                        <Label style={styles.dateLabel}>Add Friends</Label>
                    </Item>
                    <AppConsumer>
                        {(context) => {

                        }}
                    </AppConsumer>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    dateLabel: {
        paddingLeft: 11,
    },
    heading: {
        textAlign: 'center',
        padding: 5,
    },
})
