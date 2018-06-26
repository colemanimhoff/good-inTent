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
    render() {
        return (
            <AppContext.Provider value={{
                state: this.state,
            }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}