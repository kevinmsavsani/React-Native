/**
* This is the Home page
**/

// React native and others libraries imports
import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, View, Header, Icon, Button, Left, Right, Body, Title, List, ListItem, Thumbnail, Grid, Col } from 'native-base';

import Navbar from '../screens/Navbar';

const Home = () => {
    var left = (<Left><Button transparent><Icon name='menu' /></Button></Left>);
    var right = (<Right><Button transparent><Icon name='menu' /></Button></Right>);
    return (
        <Navbar left={left} right={right} title="My Navbar" />
    )
}
export default Home