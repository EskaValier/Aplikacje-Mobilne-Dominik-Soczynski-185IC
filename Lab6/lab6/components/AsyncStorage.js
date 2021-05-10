import React, {Component} from 'react';
import { Button, ScrollView, Text, TextInput, View, } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles'

export default class AsyncStorageCmp extends Component {
    constructor(){
        super()
    }
    state = {
        saveKey:'',
        saveValue:'',
        readKey:''
    }
    save = async () => {
        var key = this.state.saveKey
        var value = this.state.saveValue
        await AsyncStorage.setItem(key,value);
        alert('Zapisano parę: klucz -'+ key +' ,wartość - '+ value)
    };
    read = async () => {
        var key = this.state.readKey
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            alert('Klucz: '+ key +' Wartość: '+ value);
        }else{
            alert('Brak elementu');
        }
    };
    render(){ 
        return (
            <View style={styles.content.container}>
                <Text style={styles.content.title}>Komponent 'AsyncStorage'</Text>
                <View style={styles.content.container} >
                    <Text style={styles.content.text}>Dane zapisywane są w postaci Klucz-Wartość</Text>
                    <View >
                        <TextInput style={styles.content.textCode} onEndEditing={event =>{this.setState({saveKey: event.nativeEvent.text})}} placeholder="Podaj klucz" />
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput style={styles.content.textCode} onEndEditing={event =>{this.setState({saveValue: event.nativeEvent.text})}} placeholder="Podaj wartość" />
                    </View>
                    <Button title='Zapis' onPress={this.save}></Button>
                </View>
                <View style={styles.content.container}>
                    <Text style={styles.content.text}>Podaj klucz od odczytania wartości zapisanej pod nim</Text>
                    <View >
                        <TextInput style={styles.content.textCode} onEndEditing={event =>{this.setState({readKey: event.nativeEvent.text})}} placeholder="Podaj klucz" />
                    </View>
                    <Button title='Odczyt' onPress={this.read}></Button>
                </View>
            </View>
        )
    };
}