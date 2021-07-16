import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

class App extends Component {
    state = {
        count: 0
    };

    onPress = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    render() {
        return ( <
                View style = { styles.container } >
                <
                TouchableOpacity style = { styles.button }
                onPress = { this.onPress } >
                <
                Text > Lets Count: ) < /Text> <
            /TouchableOpacity> <
            View >
            <
            Text style = { styles.text } > You clicked { this.state.count }
        times < /Text> <
            /View> <
            /View>
    );
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        marginBottom: 10
    },
    text: {
        backgroundColor: "yellow",
        color: "red"
    }
});

export default App;