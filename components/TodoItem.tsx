import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type Item = {
    key: string;
    text: string;
};

interface ItemProps {
    pressHandler: (...args: string[]) => void;
    item: Item;
}

const TodoItem: React.FunctionComponent<ItemProps> = ({ pressHandler, item }) => {
    return (
        <View style={styles.item}>
            <TouchableOpacity onPress={() => pressHandler(item.key)}>
                <MaterialIcons name="delete" size={18} color="#333" />
            </TouchableOpacity>
            <Text style={styles.itemText}>{item.text}</Text>
        </View>
    );
};

export default TodoItem;

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        // borderRadius: 1,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemText: {
        marginLeft: 10,
    },
});
