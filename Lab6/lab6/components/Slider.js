import React, {Component} from 'react';
import { Text, View, Image  } from 'react-native';
import styles from './styles'
import Slider from '@react-native-community/slider';

export default class SlideComponent extends Component {
    state = {
        imageScale: 1
    }
    imageResize = (value) => {
        this.setState({imageScale: value});
    }
    render(){ 
        return (
            <View style={styles.content.container}>
                <Text style={styles.content.title}>Komponent Slider</Text>
                <View style={styles.content.textCode,styles.content.center}>
                    <Text style={styles.content.text}>Zmiana rozmiaru obrazka za pomocą suwaka</Text>
                    <Slider
                        style={{width: 300, height: 40}}
                        value={1.5} //początkowa wartość suwaka
                        minimumValue={0} // wartość przy suwaku wychylonym maxymalnie w lewo
                        maximumValue={3} // wartość przy suwaka wychylonym maxymalnie w prawo
                        thumbTintColor='#0af' // kolor kulki suwaka
                        minimumTrackTintColor="#0af" // kolor suwaka po lewej stronie kulki
                        maximumTrackTintColor="#0af" // kolor suwaka po prawej stronie od kulki
                        onValueChange={this.imageResize} // funkcja wykonywana przy przesuwania suwaka (zmiana wartośsci)
                    />
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Image source={require('../assets/favicon.png')} style={[{transform: [{ scale: this.state.imageScale }]}]}/> 
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                </View>
            </View>
        )
    };
}