import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Functional Component
const Header = (props) => (
    <View style={ style.container }>
        <Text style={ style.title }>{ props.title }</Text>
    </View>
);

// StyleSheet - optimize performance
const style = StyleSheet.create({
    container: {
        marginTop: 50,
        backgroundColor: 'black',
    
        // Flex Box - align items
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 60,
        color: 'white',
    },
});

export default Header;