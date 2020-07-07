/**
* This is the Main file
* This file contains the routes of all the pages
**/

// React native and others libraries imports
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { BackHandler, StyleSheet, Text, View } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Root } from 'native-base';

// Our custom files and classes import
import Home from './components/Home';

export default class Main extends Component {
  componentWillMount = () => {
    BackHandler.addEventListener('hardwareBackPress', () => Actions.pop());
  };

  render() {
    return(
      <Root>
        <Router>
          <Scene key="root">
            <Scene initial key="home" component={Home} />
          </Scene>
        </Router>
      </Root>
    );
  }

}
