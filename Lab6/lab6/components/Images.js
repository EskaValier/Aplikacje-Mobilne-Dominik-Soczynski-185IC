import React, {Component} from 'react';
import { ScrollView, Text, View, Image  } from 'react-native';
import styles from './styles'


export default class Images extends Component {
    render(){ 
        return (
            <ScrollView style={styles.content.container}>
                <Text style={styles.content.title}>Ładownie obrazków wykonane 2-ma metodami</Text>
                <View style={styles.content.textCode} >
                    <Text style={styles.content.text}>Ładownie obrazka za pomocą właściwości 'uri'</Text>
                    <Image style={{width: 300, height: 300}} source={{uri: 'https://cdn.getyourguide.com/img/country/58de136b73284.jpeg/88.jpg',}}  /> 
                </View>
                <View style={styles.content.textCode} >
                    <Text style={styles.content.text}>Ładownie obrazka z użyciem metody 'require()'</Text>
                    <Image style={{width: 300, height: 300}} source={require('../assets/adaptive-icon.png')}  /> 
                </View>
            </ScrollView >
        )
    };
}