import React, {Component} from 'react';
import { Button, Text, View, ScrollView } from 'react-native';
import styles from './styles'


const NumbersList = ({ liczby: Numbers }) => {
    var index = 0
    console.log(Numbers)
        return (
            <ScrollView >
                {Numbers.map(Number => <Text key={index++} >{Number}</Text>)}
            </ScrollView>
        );
};

export default class SortNumbers extends Component{
    constructor(){
        super();
        const arr = []; 
        for (let i = 0; i < 100; i++) {
            arr.push(Math.floor(Math.random() * 1000) + 1);
        }
        this.state = { arr };
    }
    randomizeAndSort = () =>{
        console.log(this.state.arr)
        const newarr = [];
        for (let i = 0; i < this.state.arr.length; i++) {
            newarr.push(Math.floor(Math.random() * 1000) + 1);
        }
        this.state.arr = newarr;
        this.state.arr.sort((a,b) => a > b ? 1:-1);
        this.forceUpdate();
    }
    
    render(){ 
        return (
            <View style={styles.content.container}>
            
                <Text style={styles.content.title}>Sortowanie Liczb</Text>
                <View style={styles.content.example}>
                    <View >
                        <Text style={styles.content.text}>Wyświetlanie wylosowanych i posortowanych liczb z przedziału od 1 do 1000.</Text>
                    </View>
                    <View >
                        <Button style={styles.content.button} onPress={this.randomizeAndSort} title="Losuj i sortuj" />
                    </View>
                </View>
                <View style={styles.content.textCode} >
                    <NumbersList  liczby={this.state.arr} />
                </View>
            </View>
        )
    };
}
