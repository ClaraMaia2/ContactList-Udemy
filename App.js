import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Axios from 'axios';

import Header from './src/components/Header';
import PeopleList from './src/components/PeopleList';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      peoples: []
    };
  }

  componentDidMount() {
    /* Promises = treat asynchronous calls  
        - resolved -> the promise could get the call results
        - rejected -> the promise couldn't get the call results
        - pending -> the promise doesn't know if the promise was resolved or rejected
      Promise(callback_function)
    */
    Axios
        .get('https://randomuser.me/api/?nat=br&results=5')
        .then(response => {
          const { results } = response.data;
          this.setState({
            peoples: results
          });
        });
  }

  render(){
    return (
      <View>
        <Header title="Contacts" />
        <PeopleList peoples={ this.state.peoples }/>
        <StatusBar style="auto" />
      </View>
    );
  };
}