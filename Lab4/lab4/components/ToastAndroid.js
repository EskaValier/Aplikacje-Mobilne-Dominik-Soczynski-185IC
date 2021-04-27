import React, {Component, useEffect, useState} from 'react';
import { ScrollView,Button, Modal,ToastAndroid, Text, View } from 'react-native';
import styles from './styles'

const Toast = ({ visible, message }) => {
    if (visible) {
      ToastAndroid.showWithGravityAndOffset(
        message,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
      return null;
    }
    return null;
  };


const ToastAndroidEx = () => {
    const [visibleToast, setVisibleToast] = useState(false);
    useEffect(() => setVisibleToast(false), [visibleToast]);
    const handleButtonPress = () => {
      setVisibleToast(true);
    };
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    const [time, setTime] = useState(0);
    var promise = null;
    const createPromise = () => {
        var tempTime = Math.floor(Math.random()*5000) + 1000;
        setTime(tempTime);
        promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('hide');
            }, tempTime);
        });
    }

    return (
        <View>
            
            <Toast visible={visibleToast} message="ToastAndroid done" />
            <Button title="Toast" onPress={() => {
                onToggleSwitch()
                handleButtonPress()
                createPromise()
                promise.then((value) => {
                    if(value == 'hide'){
                        setIsSwitchOn(false)
                    }
                });
            }}/>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isSwitchOn}
                onRequestClose={() => {
                    setModalVisible(!isSwitchOn);
                }}
            >
                <View style={styles.content.container}>
                    <Text style={styles.content.textCode} onPress={onToggleSwitch} >{time} ms</Text>
                </View>
            </Modal> 
        </View>
    );
};
export default class ToastScreen extends Component {
    render() {
        return (
            <ScrollView style={styles.content.container}>
                <Text style={styles.content.title}>ToastAndroid</Text>
                <Text style={styles.content.title}>Losuj czas z zakresu 1-6 sec</Text>
                <ToastAndroidEx/>
            </ScrollView>
        );
    }
}