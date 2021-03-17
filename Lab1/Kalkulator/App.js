import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput,Alert } from 'react-native';
import Constants from 'expo-constants';


export default class App extends Component {
    state = {
        text: 0,
        input: '',
        inputValue: 0,
        inputValue2: 0,
        symbol: '',
        result: 0,
        errorMesage: '',
    }
    onButtonPressed = function() { this.setState({ text:this.state.inputValue })}
    _handleTextChange = inputValue => { this.setState({ inputValue }); };
    _handleTextChange2 = inputValue2 => { this.setState({ inputValue2 }); };

    add = function() {
        this.setState({ symbol: "+"});
    }

    subtract = function() {
        this.setState({ symbol: "-"});
    }

    divide = function(){
        this.setState({ symbol: "/"});
    }

    multiplicate = function(){
        this.setState({ symbol: "*"});
    }

    equal = function(){
        switch(this.state.symbol){
            case '+':
                let x = parseFloat(this.state.inputValue);
                let y = parseFloat(this.state.inputValue2);
                let result = x + y;
                this.setState({ text: result});
                this.setState({ errorMesage: ""});
                break;
            case '-':
                x = parseFloat(this.state.inputValue);
                y = parseFloat(this.state.inputValue2);
                result = x - y;
                this.setState({ text: result});
                this.setState({ errorMesage: ""});
                break;
            case '/':
                x = parseFloat(this.state.inputValue);
                y = parseFloat(this.state.inputValue2);
                if(y==0){
                    this.setState({ errorMesage: "Nie dziel przez 0"});
                    this.setState({ text: "0"});
                }
                else{
                    result = x / y;
                    this.setState({ errorMesage: ""});
                    this.setState({ text: result});
                }
                break;
            case '*':
                x = parseFloat(this.state.inputValue);
                y = parseFloat(this.state.inputValue2);
                result = x * y;
                this.setState({ text: result});
                this.setState({ errorMesage: ""});
                break;
            default:
                break;
        }
    }

    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.headerStyle}> Kalkulator </Text>

            <Text style={styles.textStyle}> Pierwsza liczba: </Text>

            <TextInput
            value={this.state.inputValue}
            keyboardType = 'numeric'
            onChangeText={this._handleTextChange}
            style={styles.textInputStyle}
            />
            
            <Text style={styles.textStyle}> Dzialanie:   {this.state.symbol} </Text>

            <View style={styles.buttonContainer}>
                <View style={styles.buttonStyle}>
                    <Button title='+' onPress={this.add.bind(this)} style={styles.buttonStyle}/>
                </View>
                <View style={styles.buttonStyle}>
                    <Button title='-' onPress={this.subtract.bind(this)} style={styles.buttonStyle}/>
                </View>
                <View style={styles.buttonStyle}>
                    <Button title='/' onPress={this.divide.bind(this)} style={styles.buttonStyle}/>
                </View>
                <View style={styles.buttonStyle}>
                    <Button title='*' onPress={this.multiplicate.bind(this)} style={styles.buttonStyle}/>
                </View>
            </View>

            <Text style={styles.textStyle}> Druga liczba: </Text>

            <TextInput
            value={this.state.inputValue2}
            keyboardType = 'numeric'
            onChangeText={this._handleTextChange2}
            style={styles.textInputStyle}
            />

            <View style={styles.buttonStyle}>
                <Button title='=' onPress={this.equal.bind(this)} style={styles.buttonStyle}/>
            </View>
            
            <Text style={styles.textStyle, {color: 'red'}}> {this.state.errorMesage} </Text>

            <Text style={styles.textStyle}> Wynik: </Text>
            <Text style={styles.paragraph}> {this.state.text} </Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'darkgray',
    },
    paragraph: {
        fontSize: 18,
        width: 200,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
        borderWidth: 2, 
        backgroundColor: 'yellow',
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 0,
    },
    buttonStyle: {
        margin: 19,
    },
    textInputStyle: {
        height: 40, 
        borderColor: 'black', 
        borderWidth: 2,
        textAlign: 'center',
        marginBottom: 20,
        backgroundColor: 'yellow',
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    headerStyle: {
        color: 'yellow',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: '30px',
    }

});
