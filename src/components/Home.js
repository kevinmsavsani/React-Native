/**
* This is the Home page
**/

// React native and others libraries imports
import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';


const Home = () => {
   return (
      <TouchableOpacity style = {{ margin: 128 }}>
         <Text>This is HOME!</Text>
      </TouchableOpacity>
   )
}
export default Home