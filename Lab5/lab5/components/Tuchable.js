import React, {Component } from 'react';
import { ScrollView, Text, View,TouchableOpacity, TouchableHighlight, Button, TextInput, Modal  } from 'react-native';
import {WebView} from "react-native-webview";
import styles from './styles'
import { IconButton } from 'react-native-paper';

export default class Touchable extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            countTouchableOpacity : 0,
            countTouchableHighlight : 0,
            searchPhasese:'',
            showBrowser: false,
        };
    }

    onPressTouchableOpacity = () => {
        this.setState({
            countTouchableOpacity: this.state.countTouchableOpacity + 1
        });
    };
    onPressTouchableHighlight = () => {
        this.setState({
            countTouchableHighlight: this.state.countTouchableHighlight + 1
        });
    };

    renderBrowser() {
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.showBrowser}
                onRequestClose={() => {
                    this.setState({showBrowser: !showBrowser});
                }}
            >
                  <IconButton
                    icon="close"
                    size={40}
                    onPress={() => this.setState({showBrowser: false})}
                />
                <WebView
                    source={{
                        uri: 'https://www.google.com/search?q=' + this.state.searchPhasese,
                    }}
                    onNavigationStateChange={this.onNavigationStateChange}
                    startInLoadingState
                    scalesPageToFit
                    javaScriptEnabled
                    style={{ flex: 1}}
                />
            </Modal>
        );
    }

    render(){ 
        return (
            <View style={styles.content.container}>
                <Text style={styles.content.title}>Komponenty Touchable</Text>
                { this.state.showBrowser && this.renderBrowser() }
                <ScrollView >
                    <View style={styles.content.textCode}>
                        <TouchableOpacity
                            onPress={this.onPressTouchableOpacity}>
                            <Text style={styles.content.text}>TouchableOpacity</Text>
                        </TouchableOpacity>
                        <Text style={styles.content.text}>ilość kliknięć: {this.state.countTouchableOpacity} </Text>
                    </View>
                    <View style={styles.content.textCode}>
                        <TouchableHighlight
                                    onPress={this.onPressTouchableHighlight}>
                            <Text style={styles.content.text}>TouchableHighlight</Text>
                        </TouchableHighlight>
                        <Text style={styles.content.text}>ilość kliknięć:  {this.state.countTouchableHighlight}</Text>
                    </View>
                    <View style={styles.content.textCode}>
                        <Text style={styles.content.text}>Wyszukaj frazę w google</Text>
                        <TextInput style={styles.content.input} defaultValue='Wyszukaj' onEndEditing={event =>{this.setState({searchPhasese: event.nativeEvent.text})}}/>
                        <Button
                            title='Wyszukaj'
                            onPress={() => this.setState({showBrowser: true})}>
                        </Button>
                    </View>
                </ScrollView>
            </View>
        )
    };
}