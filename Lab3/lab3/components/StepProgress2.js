import React, { Component } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import styles from './styles'

const kod = `<ActivityIndicator size="small" color="#0000ff" />`;

export default class StepProgress2 extends Component {
    render() {
        return (
            <View style={styles.content.container}>
            <Text style={styles.content.text}>Step progress z ustawionym rozmiarem na 'small' oraz kolorem na niebieski</Text>
            <Text style={styles.content.text}>Kod uruchomionego ActivityIndicator: </Text>
            <Text style={styles.content.textCode}>{kod}</Text>
            <Text style={styles.content.text}>Uruchomienie kodu: </Text>
            <View style={styles.content.textCode}>
                <ActivityIndicator size="small" color="#0000ff" />
            </View>
        </View>
        );
    }
}
