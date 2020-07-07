import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'
import { Container } from 'native-base'
import * as Font from 'expo-font'
import Index from './src/Index';

export default class Login extends Component {

  state = {
    isReady: false
  }

  componentDidMount = async() => {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    })
    this.setState({ isReady: true })
  }

  render () {
    if (!this.state.isReady) {
      return <ActivityIndicator />
    }
    return (
        <Index />
    )
  }
}