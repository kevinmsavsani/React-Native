/**
* This is the Home page
**/

// React native and others libraries imports
import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';


const Search = () => {
   return (
      <TouchableOpacity style = {{ margin: 128 }}>
         <Text>This is Search!</Text>
      </TouchableOpacity>
   )
}
export default Search