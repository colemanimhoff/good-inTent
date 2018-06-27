import React from 'react'

const usersUrl = 'https://good-intent.herokuapp.com/users'

const inititalState = {
    loggedIn: true,
    users: [],
}

export const AppContext = React.createContext()
export const AppConsumer = AppContext.Consumer

export class AppProvider extends React.Component {

    constructor(props) {
        super(props)
        this.state = inititalState
    }

    componentDidMount() {
        return fetch(usersUrl)
            .then(response => response.json())
            .then(users => this.setState({
                users: users,
            }))
    }

    toggleAuthState = () => {
        this.setState({ loggedIn: !this.state.loggedIn })
    }

    render() {
        return (
            <AppContext.Provider value={{
                state: {
                    loggedIn: this.state.loggedIn,
                    users: this.state.users,
                    toggleAuthState: this.toggleAuthState,
                },
            }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}