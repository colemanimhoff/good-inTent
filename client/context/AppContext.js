import React from 'react'

const inititalState = {
    loggedIn: true,
}

export const AppContext = React.createContext()
export const AppConsumer = AppContext.Consumer

export class AppProvider extends React.Component {

    constructor(props) {
        super(props)
        this.state = inititalState
    }

    toggleAuthState = () => {
        this.setState({ loggedIn: !this.state.loggedIn })
    }

    render() {
        return (
            <AppContext.Provider value={{
                state: {
                    loggedIn: this.state.loggedIn,
                    toggleAuthState: this.toggleAuthState,
                },
            }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}