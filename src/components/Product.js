/**
* This is the Home page
**/

// React native and others libraries imports
import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';


const Product = () => {
   return (
      <TouchableOpacity style = {{ margin: 128 }}>
         <Text>This is Product!</Text>
      </TouchableOpacity>
   )
}
export default Product