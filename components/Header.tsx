import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header: React.FunctionComponent = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Shopping List</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'coral',
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});
