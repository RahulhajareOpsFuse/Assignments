import React from "react";
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar
} from "react-native";

const DATA = [{
        id: "1",
        title: "Hii"
    },
    {
        id: "2",
        title: "Rahul"
    },
    {
        id: "3",
        title: "How are you ?"
    }
];

const Item = ({ title }) => ( <
    View style = { styles.item } >
    <
    Text style = { styles.title } > { title } < /Text> < /
    View >
);

const App = () => {
    const renderItem = ({ item }) => < Item title = {
        [item.id, "\n", item.title]
    }
    />;

    return ( <
        SafeAreaView style = { styles.container } >
        <
        FlatList data = { DATA }
        renderItem = { renderItem }
        keyExtractor = {
            (item) => item.id
        }
        /> < /
        SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    item: {
        backgroundColor: "purple",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    },
    title: {
        fontSize: 32,
        color: "white"
    }
});

export default App;