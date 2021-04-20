import React, { Component } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import styles from './styles'

const kod = `<ActivityIndicator size="large" color="#00ff00" />`;

export default class StepProgress3 extends Component {
    render() {
        return (
            <View style={styles.content.container}>
            <Text style={styles.content.text}>Step progress z ustawionym rozmiarem na 'large' kolorem na zielony</Text>
            <Text style={styles.content.text}>Kod uruchomionego ActivityIndicator: </Text>
            <Text style={styles.content.textCode}>{kod}</Text>
            <Text style={styles.content.text}>Uruchomienie kodu: </Text>
            <View style={styles.content.textCode}>
                <ActivityIndicator size="large" color="#00ff00" />
            </View>
        </View>
        );
    }
}
