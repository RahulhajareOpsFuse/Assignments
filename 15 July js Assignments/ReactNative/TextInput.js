import React from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";

function App() {
    return ( <
        View style = { styles.app } >
        <
        Text style = {
            [styles.red]
        } > Welcome in react js < /Text> <
        Text > . < /Text>   < /
        Text >

        //use to take a input from user.
        <
        TextInput placeholder = "Enter First Number" > < /TextInput> <
        TextInput placeholder = "Enter second Number" > < /TextInput> <
        Button onPress = {
            () => {}
        }
        title = "Submit"
        style = {
            [styles.red, styles.font]
        }
        /> < /
        View >
    );
}
//to apply external css.
const styles = StyleSheet.create({
    red: {
        color: "red",
        alignment: "center"
    }
});

export default App;