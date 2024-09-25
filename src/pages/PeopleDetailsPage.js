import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import Line from "../components/Line";
/**
 * PeopleDetailsPage is a functional component that displays detailed information about a person.
 *
 * @param {Object} props - The properties object.
 * @param {Object} props.route - The route object passed to the component.
 * @param {Object} props.route.params - The parameters passed through the route.
 * @param {Object} props.route.params.people - The object containing people's details.
 * @param {string} props.route.params.people.picture.large - The URL of the person's large picture.
 * @param {string} props.route.params.people.email - The email address of the person.
 * @param {Object} props.route.params.people.location - The location object of the person.
 * @param {string} props.route.params.people.location.city - The city where the person resides.
 * @param {string} props.route.params.people.location.state - The state where the person resides.
 * @param {string} props.route.params.people.phone - The phone number of the person.
 * @param {string} props.route.params.people.cell - The mobile number of the person.
 * @param {string} props.route.params.people.nat - The nationality of the person.
 *
 * @returns {JSX.Element} The JSX code to render the PeopleDetailsPage component.
 */
export default function PeopleDetailsPage ({ route }) {
    const { people } = route.params;

    return (
        <View style={ styles.container }>
            <Image style={ styles.avatar } source={{ uri: people.picture.large }}/>
            <View style={ styles.detailsContainer }>
                <Line label="E-mail:" content={ people.email }/>
                <Line label="City:" content={ people.location.city }/>
                <Line label="State:" content={ people.location.state }/>
                <Line label="Phone:" content={ people.phone }/>
                <Line label="Mobile:" content={ people.cell }/>
                <Line label="Nationality:" content={ people.nat }/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    avatar: {
        aspectRatio: 1,
        borderRadius: 200,
    },
    detailsContainer:{
        backgroundColor: '#e6e6e6',
        marginTop: 20,
        elevation: 2
    },
});