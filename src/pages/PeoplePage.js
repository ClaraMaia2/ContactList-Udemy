import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import Axios from 'axios';

import PeopleList from '../components/PeopleList';
/**
 * PeoplePage Component
 * 
 * This React component fetches and displays a list of people from an external API.
 * It manages loading and error states to provide feedback to the user during the fetch process.
 * 
 * State:
 * - peoples: Array of people data fetched from the API.
 * - loading: Boolean indicating whether the data is currently being fetched.
 * - error: Boolean indicating whether there was an error fetching the data.
 * 
 * Methods:
 * - constructor(props): Initializes the component's state.
 * - componentDidMount(): Fetches data from the API when the component mounts.
 * - renderPage(): Renders the appropriate UI based on the current state (loading, error, or data).
 * - render(): Renders the main view of the component.
 * 
 * Dependencies:
 * - Axios: Used to make HTTP requests to the external API.
 * - ActivityIndicator: Displays a loading indicator while data is being fetched.
 * - Text: Displays error messages.
 * - PeopleList: Custom component to display the list of people.
 * - View, StatusBar: Used to structure and style the main view.
 * 
 * Props:
 * - navigation: Used to navigate to the 'peopleDetails' page when an item is pressed.
 */
export default class PeoplePage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      peoples: [],
      loading: false,
      error: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    setTimeout(() => {
        /* Promises = treat asynchronous calls  
          - resolved -> the promise could get the call results
          - rejected -> the promise couldn't get the call results
          - pending -> the promise doesn't know if the promise was resolved or rejected
        Promise(callback_function)
      */
      Axios
          .get('https://randomuser.me/api/?nat=br&results=16')
          .then((response) => {
              const { results } = response.data;
              this.setState({
                peoples: results,
                loading: false,
            });
          }).catch(error => {
            this.setState({ error: true, loading: false, });
          });
    }, 1500);
  }

  renderPage() {
    const { navigation } = this.props;

    if (this.state.loading) {
      return <ActivityIndicator size="large" color="black"/>;
    }

    if(this.state.error) {
      return <Text style={ styles.errorText }>Erro ao carregar dados</Text>;
    }

    return (
      <PeopleList peoples={ this.state.peoples } onPressItem={(pageParams) => {navigation.navigate('peopleDetails', pageParams)}}/>
    );
  }

  render(){
    return (
      <View style={ styles.container }>
        { this.renderPage() }
        <StatusBar style="auto" />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  errorText: {
    color: "red",
    alignSelf: "center",
    fontSize: 18,
  }
});