import React, {Component} from 'react';
import { ScrollView, Modal, Switch, Text, View } from 'react-native';
import styles from './styles'

const CustomSwitch = () => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    return (
        <><Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        <Modal animationType="slide" transparent={true} visible={isSwitchOn} onRequestClose={() => {setModalVisible(isSwitchOn);}}>
            <View style={styles.content.container}>
                <Text style={styles.content.text} >{Math.floor(Math.random() * 1000) + 1}</Text>
            </View>
        </Modal></>
    );
};

export default class SwitchScreen extends Component {
    render(){ 
        return (
            <ScrollView style={styles.content.container}>
                <Text style={styles.content.title}>Switch</Text>
                <View style={styles.content.text}>                    
                    <CustomSwitch/>
                </View>
            </ScrollView>
        )
    };
}