/**
* This is the Home page
**/

// React native and others libraries imports
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, View, Header, Icon, Button, Left, Right, Body, Title, List, ListItem, Thumbnail, Grid, Col } from 'native-base';

// Our custom files and classes import
import Text from '../screens/Text';
import Navbar from '../screens/Navbar';
import SideMenu from '../screens/SideMenu';
import SideMenuDrawer from '../screens/SideMenuDrawer';
import CategoryBlock from '../screens/CategoryBlock';

export default class Home extends React.Component {
    render() {
        var left = <Left style={{flex:1}}>
                       <Button onPress={() => this._sideMenuDrawer.open()} transparent>
                            <Icon name='menu' />
                       </Button>
                    </Left>;
        var right = (<Right><Button transparent><Icon name='menu' /></Button></Right>);
        return (
            <SideMenuDrawer ref={(ref) => this._sideMenuDrawer = ref}>
              <Container>
                <Navbar left={left} right={right} title="MY STORE" />
                <Content>
                  {this.renderCategories()}
                </Content>
              </Container>
            </SideMenuDrawer>
        )
    }

    renderCategories() {
        let cat = [];
        for(var i=0; i<categories.length; i++) {
          cat.push(
            <CategoryBlock key={categories[i].id} id={categories[i].id} image={categories[i].image} title={categories[i].title} />
          );
        }
        return cat;
    }

}


var categories = [
  {
    id: 1,
    title: 'MEN',
    image: 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_489/v1500284127/pexels-photo-497848_yenhuf.jpg'
  },
  {
    id: 2,
    title: 'WOMEN',
    image: 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_460/v1500284237/pexels-photo-324030_wakzz4.jpg'
  },
  {
    id: 3,
    title: 'KIDS',
    image: 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_445/v1500284286/child-childrens-baby-children-s_shcevh.jpg'
  },
  {
    id: 4,
    title: 'ACCESORIES',
    image: 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_467/v1500284346/pexels-photo-293229_qxnjtd.jpg'
  }
];