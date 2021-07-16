import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const image = {
    uri: "https://www.guinnessworldrecords.com/Images/Burj-portrait-lagre_tcm25-475749.jpg"
};

const App = () => ( <
    View style = { styles.container } >
    <
    ImageBackground source = { image }
    resizeMode = "cover"
    style = { styles.image } >
    <
    Text style = { styles.text } > Burj Khalifa < /Text> < /
    ImageBackground > <
    /View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    text: {
        color: "#e33c09",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#1bb5d1c0"
    }
});

export default App;