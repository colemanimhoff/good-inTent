import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.font}>Good inTent</Text>
        <Text style={styles.font}>Coming Soon</Text>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#389E2A',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
    width: '100%',
  },
  font: {
    color: '#fff',
    fontSize: 20,
    textShadowColor: '#333',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
  },
})
