import React, {Component} from 'react';
import {Text, ScrollView} from 'react-native';
import styles from './styles'

export default class RandText extends Component {
    constructor(props){
        super(props);
        const length = props.length ? props.length : 0;     //wylosuje tyle znaków ile podaliśmy w props.length, w przeciwnym wypadku nie losuje
        const chars ='aąbcćdeęfghijklmnńoópqrsśtuvwxyzżź AĄBCĆDEĘFGHIJKLMNŃOÓPQRSŚTUVWXYZŻŹ 0123456789 `~!@#$%^&*()-_=+'; //dodane znaki specjalne względem przykładu
        let RandomChars = '';
        const charsLength = chars.length;

        for ( let i = 0; i < length; i++ ) {
            RandomChars += chars.charAt(Math.floor(Math.random() * charsLength));
        }
        this.state = { text: RandomChars };
    }
    render(){ 
        return (
            <ScrollView>
                <Text style={styles.content.textCode} >{this.state.text}</Text>
            </ScrollView>
        )
    };
}