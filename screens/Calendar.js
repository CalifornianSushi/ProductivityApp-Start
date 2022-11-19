import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class Calendar extends React.Component {
    render() {
        return(
            <View>
                <Text>Calendar</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})

/* The calendar function allows you too view the weeks and days in a whole monthly calendar. 
Includes a siginificant function: List out your tasks, reminders & goals for each day! Default, your reminders
are going to be showcased in the Home Screen as per the day. That can be changed to the other two (Goals and Tasks) */