import React from "react";
import {
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    StatusBar
} from "react-native";

const App = () => {
    return ( <
        SafeAreaView style = { styles.container } >
        <
        Text style = { styles.title } > National Anthem < /Text> <
        ScrollView style = { styles.scrollView } >
        <
        Text style = { styles.text } >
        Jana - gana - mana - adhinayaka jaya he Bharata - bhagya - vidhata Panjaba - Sindhu - Gujarata - Maratha Dravida - Utkala - Banga Vindhya - Himachala - Yamuna - Ganga uchchala - jaladhi - taranga Tava Subha name jage, tava subha asisa mage, gahe tava jaya - gatha.Jana - gana - mangala - dayaka jaya he Bharata - bhagya - vidhata.Jaya he, Jaya he, Jaya he, jaya jaya jaya jaya he. <
        /Text> < /
        ScrollView > <
        /SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        justifyContent: "center"
    },
    scrollView: {
        backgroundColor: "#1a1a1f",
        marginHorizontal: 5,
        marginVertical: 10
    },
    title: {
        color: "#5cff9d",
        textAlign: 'center',
        fontSize: 25
    },
    text: {
        fontSize: 25,
        color: "#e995ed"
    }
});

export default App;