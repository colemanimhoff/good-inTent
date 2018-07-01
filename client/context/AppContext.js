import React from 'react'

const usersUrl = 'https://good-intent.herokuapp.com/users'
const tripsUrl = 'https://good-intent.herokuapp.com/trips'
const individualListUrl = `https://good-intent.herokuapp.com/lists/individual`


const inititalState = {
    loggedIn: true,
    userId: 1,
    trips: [],
    currentTrip: [],
    users: [],
}

export const AppContext = React.createContext()
export const AppConsumer = AppContext.Consumer

export class AppProvider extends React.Component {

    constructor(props) {
        super(props)
        this.state = inititalState
    }

    getData = (url) => {
        return fetch(url)
            .then(response => response.json())
    }

    componentDidMount() {

        this.getData(usersUrl)
            .then(users => this.setState({
                users: users,
            }))
            .catch(error => console.log(error))

        this.getData(tripsUrl)
            .then(trips => this.setState({
                trips: trips,
            }))
            .catch(error => console.log(error))
    }

    toggleAuthState = () => {
        return this.setState({ loggedIn: !this.state.loggedIn })
    }

    getCurrentTrip = (url) => {
        return this.getData(url)
            .then(trip => {
                if (trip) {
                    return this.setState({ currentTrip: trip })
                }
            })
            .catch(error => console.log(error))
    }

    checkOffItem = (clickedItem, url) => {
        let tripId = this.state.currentTrip[0].id
        let currentList = this.state.currentTrip[0].individualList
        let currentItem = currentList.filter(currentItem => currentItem === clickedItem)
        return fetch(`${individualListUrl}/${currentItem[0].id}`, {
            method: 'PUT',
            headers: new Headers({
                'content-type': 'application/json',
            }),
            body: JSON.stringify({
                trip_id: tripId,
                item_id: currentItem[0].item_id,
                accounted_for: !(currentItem[0].accounted_for),
                user_id: currentItem[0].user_id,
                claimed_by: currentItem[0].claimed_by,
            }),
        })
            .then(response => response.json())
            .then(this.getCurrentTrip(`${tripsUrl}/${tripId}`))
            .catch(error => console.log(error))
    }

    render() {
        return (
            <AppContext.Provider value={{
                state: {
                    loggedIn: this.state.loggedIn,
                    users: this.state.users,
                    userId: 1,
                    trips: this.state.trips,
                    currentTrip: this.state.currentTrip,
                    toggleAuthState: this.toggleAuthState,
                    getCurrentTrip: this.getCurrentTrip,
                    checkOffItem: this.checkOffItem,
                },
            }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}