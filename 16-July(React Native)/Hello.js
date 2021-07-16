import React from "react";
import { Text, View, StyleSheet } from "react-native";

const HelloApp = () => {
    return ( <
        View style = { styles.container } >
        <
        Text style = { styles.text } > Hello, Rahul! < /Text> <
        /View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        alignItems: "center",
        color: "red",
        fontsize: 30
    }
});

export default HelloApp;