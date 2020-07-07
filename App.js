import React from 'react';
import Index from './src/Index';
import Expo from 'expo';

export default class App extends React.Component {
   constructor(props) {
    super(props);
    this.state = { loading: true };
  }

   async componentWillMount() {
    this.setState({ loading: false });
  }

  render() {
    return (
		<Index />
	);
}
}