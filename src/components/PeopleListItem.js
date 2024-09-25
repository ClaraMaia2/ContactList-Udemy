import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
/**
 * Renders a list item for a person with their picture and name.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.people - The person object containing their details.
 * @param {Object} props.people.name - The name object of the person.
 * @param {string} props.people.name.first - The first name of the person.
 * @param {string} props.people.name.last - The last name of the person.
 * @param {Object} props.people.picture - The picture object of the person.
 * @param {string} props.people.picture.thumbnail - The URL of the person's thumbnail picture.
 * @param {Function} props.navigateToPeopleDetails - The function to navigate to the person's details page.
 *
 * @returns {JSX.Element} A touchable list item displaying the person's picture and name.
 */
function PeopleListItem(props) {
    const { people, navigateToPeopleDetails } = props;
    const { first, last } = people.name;

    return (
        <TouchableOpacity onPress={() => { navigateToPeopleDetails({ people }); } }>
            <View style={styles.line}>
                <Image style={styles.avatar} source={{ uri: people.picture.thumbnail }} />
                <Text style={styles.lineText}>{`${first} ${last}`}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 2,
        borderBottomColor: 'grey', //dark_grey
        alignItems: 'center',
        flexDirection: 'row',
        
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 10,
        flex: 7,
    },
    avatar: {
        aspectRatio: 1,
        flex: 1,
        marginLeft: 10,
        borderRadius: 50,
    }
});

export default PeopleListItem;