import React, { Component } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import styles from './styles'

const kod = `<ActivityIndicator color="#ffffff"/>`;

export default class StepProgress1 extends Component {
    render() {
        return (
        <View style={styles.content.container}>
            <Text style={styles.content.text}>Step progress z ustawionym kolorem na biały</Text>
            <Text style={styles.content.text}>Kod uruchomionego ActivityIndicator: </Text>
            <Text style={styles.content.textCode}>{kod}</Text>
            <Text style={styles.content.text}>Uruchomienie kodu: </Text>
            <View style={styles.content.textCode}>
                <ActivityIndicator color="#ffffff"/>
            </View>
        </View>
        );
    }
}

