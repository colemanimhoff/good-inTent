import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Container, Content, Form, Item, Label, Input, DatePicker } from 'native-base'
// import { AppConsumer } from '../context/AppContext'

export default class AddTrip extends Component {

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

    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item stackedLabel>
                            <Label>Start Date</Label>
                            <Input />
                        </Item>
                    </Form>
                    <Item stackedLabel>
                        <Label style={styles.dateLabel}>Trip Name</Label>
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
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    dateLabel: {
        paddingLeft: 10,
    },
})
