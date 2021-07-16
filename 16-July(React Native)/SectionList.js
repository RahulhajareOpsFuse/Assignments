import React, { Component } from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";

export default class SectionListBasics extends Component {
    render() {
        return ( <
            View style = { styles.container } >
            <
            SectionList sections = {
                [{
                        title: "Name",
                        data: ["Rahul", "Rahim", "Atul", "Vedant", "Akash"]
                    },
                    {
                        title: "Sirname",
                        data: ["Hajare", "Shinde", "Patil", "Jawale", "Sonawane"]
                    },
                    { title: "City", data: ["Pune", "Nagar", "Nanded"] }
                ]
            }
            renderItem = {
                ({ item }) => < Text style = { styles.item } > { item } < /Text>}
                renderSectionHeader = {
                    ({ section }) => ( <
                        Text style = { styles.sectionHeader } > { section.title } < /Text>
                    )
                }
                keyExtractor = {
                    (item, index) => index }
                /> <
                /View>
            );
        }
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#5ead97"
        },
        sectionHeader: {
            paddingTop: 2,
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 2,
            fontSize: 22,
            fontWeight: "bold",
            color: "#fff",
            backgroundColor: "red"
        },
        item: {
            padding: 10,
            fontSize: 18,
            height: 44
        }
    });