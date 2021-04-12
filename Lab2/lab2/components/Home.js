import React from 'react';
import { Button, Text, View} from 'react-native';
import styles from './styles'

export default function Home({ navigation }) {
    return (
        <View style={styles.home.container}>
            <Text style={styles.home.title}>Home</Text>
            <Text style={styles.home.text}>Menu utworzone z wykorzystaniem drawer-navigation. Wysuwa się je z lewej strony, lub za pomocą przyciski poniżej.</Text>
            <Button styles={styles.home.button} onPress={() => navigation.openDrawer()} title="Otworz menu" />
        </View>
    );
}
