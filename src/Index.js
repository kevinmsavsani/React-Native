/**
* This is the Main file
* This file contains the routes of all the pages
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Root } from 'native-base';

// Our custom files and classes import
import Home from './components/Home';
import Search from './components/Search';
import Cart from './components/Cart';
import WishList from './components/WishList';
import Map from './components/Map';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Category from './components/Category';
import Product from './components/Product';
import ImageGallery from './components/ImageGallery';
import Login from './components/Login';
import Signup from './components/Signup';
import Checkout from './components/Checkout';

export default class Index extends Component {
  componentWillMount = () => {
    BackHandler.addEventListener('hardwareBackPress', () => Actions.pop());
  };

  render() {
    return(
      <Root>
        <Router>
          <Scene key="root">
            <Scene initial key="home" component={Home} hideNavBar />
            <Scene key="search" component={Search} modal hideNavBar />
            <Scene key="cart" component={Cart} modal hideNavBar />
            <Scene key="wishlist" component={WishList} modal hideNavBar />
            <Scene key="map" component={Map} modal hideNavBar />
            <Scene key="contact" component={Contact} modal hideNavBar />
            <Scene key="newsletter" component={Newsletter} modal hideNavBar />
            <Scene key="category" component={Category} hideNavBar />
            <Scene key="product" component={Product} hideNavBar />
            <Scene key="imageGallery" component={ImageGallery} modal hideNavBar />
            <Scene key="login" component={Login} hideNavBar />
            <Scene key="signup" component={Signup} hideNavBar />
            <Scene key="checkout" component={Checkout} hideNavBar />
          </Scene>
        </Router>
      </Root>
    );
  }

}
