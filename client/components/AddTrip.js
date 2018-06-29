import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'
import { H3, Container, Content, Form, Item, Label, Input, DatePicker, ListItem, Right, Left, Radio } from 'native-base'
import { AppConsumer } from '../context/AppContext'

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
                    <H3 style={styles.heading}>Add Trip</H3>
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
                            return context.state.users.map(user => {
                                return <ListItem key={user.id} selected={true} >
                                    <Left>
                                        <Text>{user.username}</Text>
                                    </Left>
                                    <Right>
                                        <Radio
                                            color={'#f0ad4e'}
                                            selectedColor={'#5cb85c'}
                                            selected={false}
                                        />
                                    </Right>
                                </ListItem>
                            })
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
    },
})
