import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import PeopleListItem from './PeopleListItem';
/**
 * Renders a list of people using a FlatList component.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Array} props.peoples - An array of people objects to be displayed in the list.
 * @param {Function} props.onPressItem - A callback function to be called when an item is pressed.
 *
 * @returns {JSX.Element} A FlatList component that renders the list of people.
 */ 
function PeopleList(props) {
    const { peoples, onPressItem } = props;

    return (
        <FlatList style={styles.container} data={peoples} renderItem={({ item }) => (
            <PeopleListItem people={item} navigateToPeopleDetails={onPressItem} />
        )} keyExtractor={item => item.id.value} />
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d3d3d3', //light_grey
    },
});

export default PeopleList;