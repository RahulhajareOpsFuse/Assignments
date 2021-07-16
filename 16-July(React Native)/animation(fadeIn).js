import React, { useRef, useEffect } from "react";
import { Animated, Text, View } from "react-native";

const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

    React.useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 5,
            duration: 20000
        }).start();
    }, [fadeAnim]);

    return ( <
        Animated.View style = {
            {
                ...props.style,
                    opacity: fadeAnim
            }
        } >
        { props.children } <
        /Animated.View>
    );
};

export default () => {
    return ( <
        View style = {
            { flex: 1, alignItems: "center", justifyContent: "center" } } >
        <
        FadeInView style = {
            { width: 250, height: 50, backgroundColor: "yellow" } } >
        <
        Text style = {
            {
                fontSize: 28,
                textAlign: "center",
                margin: 10,
                color: "red",
                fontSize: 50,
                font: "Lucida Console"
            }
        } >
        Magic <
        /Text> <
        /FadeInView> <
        /View>
    );
};