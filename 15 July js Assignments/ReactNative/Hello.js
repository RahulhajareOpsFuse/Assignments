import React from "react";
import {
    Button,
    StyleSheet,
    Text,
    View
} from "react-native";

function App() {
    return ( <
        View style = { styles.app } >
        <
        Text style = { styles.red } >
        Rahul Hajare <
        /Text>

        <
        Button onPress = {
            () => {}
        }
        title = "Submit"
        style = {
            [styles.red]
        }
        /> < /
        View >
    );
}

const styles = StyleSheet.create({
    red: {
        color: "red"
    }
});

export default App;