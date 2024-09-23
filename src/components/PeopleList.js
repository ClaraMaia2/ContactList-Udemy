import React from 'react';
import { View, StyleSheet } from 'react-native';

import PeopleListItem from './PeopleListItem';

const PeopleList = (props) => {
    const { peoples } = props;
    const items = peoples.map(person => 
        <PeopleListItem key={ person.name.first } people={ person }/>
    );

    return (
        <View style={ styles.container }>
            { items }
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d3d3d3', //light_grey
    },
});

export default PeopleList;