import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const PeopleListItem = (props) => {
    const { people } = props;
    const { first, last } = people.name;

    return (
        <View style={ styles.line }>
            <Text style={ styles.lineText }>{ first }</Text>
        </View>
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
    }
});

export default PeopleListItem;