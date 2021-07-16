import React from "react";
import { Text, View, StyleSheet, button, TextInput } from "react-native";

const HelloApp = () => {
    return ( <
        View style = { styles.container } >
        <
        Text style = { styles.text } > Login Form < /Text> <
        TextInput placeholder = "Enter User Name"
        style = { styles.textInput } >
        < /TextInput> <
        TextInput placeholder = "Enter Password"
        style = { styles.textInput }
        secureTextEntry = { true } >
        < /TextInput> <
        TextInput placeholder = "Confirm Password"
        style = { styles.textInput }
        secureTextEntry = { true } >
        < /TextInput> <
        button styele = { styles.sub } > Submit < /button> <
        /View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "yellow"
    },
    textInput: {
        alignItems: "center",
        backgroundColor: "white",
        color: "blue",
        bordorColor: "red",
        borderWidth: 0.1,
        height: 25,
        width: 200,
        padding: 10,
        marginHorizontal: 30,
        marginVertical: 5
    },
    text: {
        color: "blue",
        fontSize: 30
    },
    sub: {
        backgroundColor: "blue",
        color: "white",
        width: 30,
        borderWidth: 2,
        marginVertical: 30
    }
});

export default HelloApp;