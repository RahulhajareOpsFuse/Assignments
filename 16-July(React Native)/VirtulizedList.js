import React from 'react';
import { SafeAreaView, View, VirtualizedList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [];

const getItem = (data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: `Hii Rahul ${index+1} times  : )`
});

const getItemCount = (data) => 100;

const Item = ({ title }) => ( <
    View style = { styles.item } >
    <
    Text style = { styles.title } > { title } < /Text> <
    /View>
);

const App = () => {

        return ( <
            SafeAreaView style = { styles.container } >
            <
            VirtualizedList data = { DATA }
            initialNumToRender = { 4 }
            renderItem = {
                ({ item }) => < Item title = { item.title }
                />}
                keyExtractor = { item => item.key }
                getItemCount = { getItemCount }
                getItem = { getItem }
                /> <
                /SafeAreaView>
            );
        }

        const styles = StyleSheet.create({
            container: {
                flex: 1,
                marginTop: StatusBar.currentHeight,
            },
            item: {
                backgroundColor: 'blue',
                height: 50,
                justifyContent: 'center',
                marginVertical: 8,
                marginHorizontal: 16,
                padding: 10,
            },
            title: {
                fontSize: 20,
                color: 'white'
            },
        });

        export default App;