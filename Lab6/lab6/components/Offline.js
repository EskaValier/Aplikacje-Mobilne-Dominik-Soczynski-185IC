import React, {Component} from 'react';
import { Text, View, Switch, TextInput } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles'

export default class Offline extends Component {
    
    changeValue = async (value) => {    // pobieranie danych z textinput
        var key = "localValue"
        try {
            await AsyncStorage.setItem(key,value.toString());
        } catch (error) {
            console.error(error)
        }

        try {
            const tempValue = await AsyncStorage.getItem(key);
            if (tempValue !== null) {
                this.setState({localValue:tempValue})
            }else{
                this.setState({localValue:'n/a'})
            }
        } catch (error) {
            this.setState({localValue:error})
        }
    }
    state = {
        internetConnection: true, // dana do textu switcha
        localValue:'',      // dane dostepne lokalnie
        remoteValue:'',     // dane dostepne przez internet
    }
    
    checkData = () =>{ // funkcja sprawdzająca zgodność danych lokalnych i zdalnych
        if(this.state.internetConnection){ // połączenie z internetem nawiązane, aktualizacja danych
            this.setState({remoteValue:this.state.localValue})
        }
    }
    componentDidMount(){ //sprawdzanie stanu połączenia z internetem co 1/2 sekundy (szybkość odświerzania danych)
        setInterval(this.checkData, 500)
    }
    
    render(){ 
        return (
            <View style={styles.content.container}>
                <Text style={styles.content.title}>Synchronizacja danych w przypadku połączenia z internetem i jego braku</Text>
                <Text style={styles.content.text}>{this.state.internetConnection?`Połączenie z internetem `:`Brak połączenia z internetem`}</Text>
                <Switch value={this.state.internetConnection} onValueChange={val =>{this.setState({ internetConnection: val})}}/> 
                <Text style={styles.content.text}>Wprowadzanie danych </Text>
                <TextInput style={styles.content.textCode} onChangeText={this.changeValue} placeholder="Podaj wartość" />
                <View style={styles.content.textCode}>
                    <Text style={styles.content.text}>Podgląd danych: </Text>
                    <Text >- Dane lokalnie: {this.state.localValue}</Text>
                    <Text >- Dane zdalne: {this.state.remoteValue}</Text>
                </View>
            </View>
        )
    };
}