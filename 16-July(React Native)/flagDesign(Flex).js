import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const logoUri = `https://i.pinimg.com/originals/59/07/0f/59070f3b44bdfa6191495c20de317fac.png`;

const Flex = () => {
    return ( <
        View style = {
            [
                styles.container,
                {
                    // Try setting `flexDirection` to `"row"`.
                    // flexDirection: "row"
                    //set direction as column
                    flexDirection: "column-reverse"
                }
            ]
        } >
        <
        View style = {
            { flex: 1, backgroundColor: "green" } }
        /> <
        View style = {
            ({ flex: 1, backgroundColor: "white" }, styles.header) } >
        <
        Image accessibilityLabel = "React logo"
        source = {
            { uri: logoUri } }
        resizeMode = "contain"
        style = { styles.logo }
        /> <
        Text > MAKE IN INDIA < /Text> <
        /View> <
        View style = {
            { flex: 1, backgroundColor: "orange" } }
        /> <
        /View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    logo: {
        height: 80,
        height: 120
    },
    header: {
        padding: 40
    }
});

export default Flex;