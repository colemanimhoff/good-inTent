import React from 'react'

const usersUrl = 'https://good-intent.herokuapp.com/users'
const tripsUrl = 'https://good-intent.herokuapp.com/trips'

const inititalState = {
    loggedIn: false,
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

    render() {
        console.log(this.state.currentTrip)
        return (
            <AppContext.Provider value={{
                state: {
                    loggedIn: this.state.loggedIn,
                    users: this.state.users,
                    trips: this.state.trips,
                    currentTrip: this.state.currentTrip,
                    toggleAuthState: this.toggleAuthState,
                    getCurrentTrip: this.getCurrentTrip,
                },
            }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}