import React from "react";
import {
    Button,
    StyleSheet,
    Text,
    View
} from "react-native";

//add another file path to import components
import component from './component.js'

function App() {
    return ( <
        View style = { styles.app } >
        <
        Text style = {
            [styles.red] } > Welcome in react js < /Text>

        <
        Button onPress = {
            () => {} }
        title = "Submit"
        style = {
            [styles.red, styles.font] }
        /> <
        /View>
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