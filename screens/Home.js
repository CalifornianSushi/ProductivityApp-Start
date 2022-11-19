import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Home extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.textStyle}>Home</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#B9B7BD"
    },
    textStyle: {
        color: "#868B8E",
        fontSize: 20,
        alignSelf: "center",
        fontWeight: "bold",
        justifyContent: "center",
        //fontFamily: "comic sans ms",
    }
})

/* The main part of the app, where your personal dashboard is viewable*/
