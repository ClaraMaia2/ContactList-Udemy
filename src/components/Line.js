import React from "react";
import { View, Text, StyleSheet } from "react-native";
/**
 * A functional component that renders a line with a label and content.
 *
 * @param {Object} props - The properties object.
 * @param {string} [props.label=""] - The label to display in the line.
 * @param {string} [props.content="-"] - The content to display in the line.
 * @returns {JSX.Element} The rendered component.
 */
function Line({ label = "", content = "-" }) {
    return (
        <View style={styles.line}>
            <Text style={[styles.cell, styles.label]}>{label}</Text>
            <Text style={styles.cell}>{content}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    line: {
        flexDirection: 'row',
        padding: 3,
        borderWidth: 1,
        borderColor: 'grey',
    },
    cell: {
        fontSize: 15,
        paddingLeft: 5,
    },
    label: {
        fontWeight: 'bold',
    }
});

export default Line;