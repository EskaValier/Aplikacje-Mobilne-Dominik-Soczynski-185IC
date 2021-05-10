import React, {Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import styles from './styles'

export default class ConectionDetector extends Component {
    state = {};
    componentDidMount() {
        this.fetchState();
    }
    fetchState = async () => {
        const state = await NetInfo.fetch();
        var tempState = JSON.stringify(state)
        this.setState(JSON.parse(tempState))
    };

    render(){ 
        var details = this.state.details ? JSON.parse(JSON.stringify(this.state.details,null)) : ''
        return (
            <View style={styles.content.container}>
                <Text style={styles.content.title}>Informacje o połączeniu</Text>
                <ScrollView >
                    <View style={styles.content.textCode}>  
                        <Text style={styles.content.text}>IP: {details.ipAddress}</Text>
                        <Text style={styles.content.text}>Maska sieci: {details.subnet}</Text>
                        <Text style={styles.content.text}>Jakość: {details.strength}%</Text>
                        <Text style={styles.content.text}>Częstotliwość: {details.frequency}MHz</Text>
                        <Text style={styles.content.text}>Internet osiągalny: {this.state.isInternetReachable?`Tak`:`Nie`}</Text>
                        <Text style={styles.content.text}>Typ połączenia: {this.state.type}</Text>
                        <Text style={styles.content.text}>Połączony: {this.state.isConnected?`Tak`:`Nie`}</Text>
                        <Text style={styles.content.text}>Wifi: {this.state.isWifiEnabled?`Tak`:`Nie`}</Text>
                        <Text/>
                    </View>
                </ScrollView>
            </View>
        )
    };
}