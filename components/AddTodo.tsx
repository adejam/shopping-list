import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

interface AddTodoProps {
    handleSubmit: (...args: string[]) => void;
}

const AddTodo: React.FunctionComponent<AddTodoProps> = ({ handleSubmit }) => {
    const [text, setText] = useState('');

    const changeHandler = (val: string) => {
        setText(val);
    };

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="new todo..."
                onChangeText={changeHandler}
                value={text}
            />
            <Button
                color="coral"
                onPress={() => {
                    handleSubmit(text);
                    setText('');
                }}
                title="Add Item"
            />
        </View>
    );
};

export default AddTodo;

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
});
