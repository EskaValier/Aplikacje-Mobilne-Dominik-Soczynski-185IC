import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import styles from './styles'
import ProgressBar from 'react-native-progress/Bar';
 
const kod = `<Progress.Bar progress={this.state.progress} width={200} />`;

export default class ProgressElements extends Component {
    state = {
        progress: 0,
    }

    progressUp = function() {
        if(this.state.progress < 1){
            this.setState({ progress: this.state.progress + 0.1});
        }else{
            this.setState({ progress: 0});
        }
        
    }

    render() {
        return (
        <View style={styles.content.container}>
            <Text style={styles.content.text}>Step progress z ustawionym kolorem na biały</Text>
            <Text style={styles.content.text}>Kod uruchomionego ActivityIndicator: </Text>
            <Text style={styles.content.textCode}>{kod}</Text>
            <Button title='Start Progress' onPress={this.progressUp.bind(this)} style={styles.content.button}/>
            <Text style={styles.content.text}>Uruchomienie kodu: </Text>
            <View style={styles.content.textCode}>
                <ProgressBar progress={this.state.progress} width={200} /> 
                {/* <Text>{this.state.progress}</Text> */}
            </View>
        </View>
        );
    }
}

