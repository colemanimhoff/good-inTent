import React from 'react'
import RootScreen from './screens/RootScreen'
import { AppProvider } from './context/AppContext'

class App extends React.Component {

  render() {
    return (
      <AppProvider>
        <RootScreen />
      </AppProvider >
    )
  }
}

export default App
