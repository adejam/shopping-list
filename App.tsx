import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
    StyleSheet,
    // Text,
    View,
    // Button,
    // TextInput,
    // ScrollView,
    FlatList,
    // TouchableOpacity,
    Alert,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

const App: React.FunctionComponent = () => {
    const pressHandler = (key: string) => {
        setTodos(prevTodos => {
            return prevTodos.filter(todo => todo.key != key);
        });
    };

    const [todos, setTodos] = useState([
        { text: 'buy coffee', key: '1' },
        { text: 'create an app', key: '2' },
        { text: 'play on the switch', key: '3' },
    ]);

    const submitHandler = (text: string) => {
        if (text.length > 3) {
            setTodos(prevTodos => {
                return [{ text, key: Math.random().toString() }, ...prevTodos];
            });
        } else {
            Alert.alert('OOPS', 'Todo must be over 3 characters long', [
                { text: 'Understood', onPress: () => console.log('alert closed') },
            ]);
        }
    };
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
                console.log('dismissed');
            }}
        >
            <View style={styles.container}>
                <Header />
                <View style={styles.content}>
                    <AddTodo handleSubmit={submitHandler} />
                    <View style={styles.list}>
                        <FlatList
                            data={todos}
                            renderItem={({ item }) => (
                                <TodoItem item={item} pressHandler={pressHandler} />
                            )}
                        />
                    </View>
                </View>
                <StatusBar style="auto" />
            </View>
        </TouchableWithoutFeedback>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 40,
        flex: 1,
    },
    list: {
        marginTop: 20,
        flex: 1,
    },
});
