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


export default class Index extends Component {
  componentWillMount = () => {
    BackHandler.addEventListener('hardwareBackPress', () => Actions.pop());
  };

  render() {
    return (
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <StatusBar style="auto" />
        </View>
      );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
