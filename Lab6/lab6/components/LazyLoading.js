import React, {Component} from 'react';
import {ScrollView, Text, View, Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

export default class LazyLoading extends Component {
    
    render(){ 
        return (
            <View style={styles.content.container}>
                <Text style={styles.content.title}>LazyLoading obrazka</Text>
                <View style={styles.content.center}>
                    <Image style={{width: 200, height: 200}} source={{uri: 'https://cdn.getyourguide.com/img/country/58de136b73284.jpeg/88.jpg',}} progressiveRenderingEnabled={false}/>
                </View>
                
                <View style={styles.content.container}>
                    <Text style={styles.content.title}>Ikony AntDesign</Text> 
                    <ScrollView style={styles.content.textCode}>
                        <Text style={styles.content.text}>Strzałki</Text>
                        <AntDesign name="stepforward" size={24} color="black" />
                        <AntDesign name="stepbackward" size={24} color="black" />
                        <AntDesign name="forward" size={24} color="black" />
                        <AntDesign name="banckward" size={24} color="black" />
                        <AntDesign name="caretright" size={24} color="black" />
                        <AntDesign name="caretleft" size={24} color="black" />
                        <AntDesign name="caretdown" size={24} color="black" />
                        <AntDesign name="caretup" size={24} color="black" />
                        <AntDesign name="rightcircle" size={24} color="black" />
                        <AntDesign name="leftcircle" size={24} color="black" />
                        <AntDesign name="upcircle" size={24} color="black" />
                        <AntDesign name="downcircle" size={24} color="black" />
                        <AntDesign name="rightcircleo" size={24} color="black" />
                        <AntDesign name="leftcircleo" size={24} color="black" />
                        <AntDesign name="upcircleo" size={24} color="black" />
                        <AntDesign name="downcircleo" size={24} color="black" />
                        <AntDesign name="verticleleft" size={24} color="black" />
                        <AntDesign name="verticleright" size={24} color="black" />
                        <AntDesign name="back" size={24} color="black" />
                        <AntDesign name="retweet" size={24} color="black" />
                        
                        <Text></Text>
                    </ScrollView>
                </View>
            </View>
        )
    }
}
