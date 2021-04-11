import React from 'react';
import { Text, View} from 'react-native';
import styles from './styles'

export default function Home({ navigation }) {
  return (
    <View style={styles.home.container}>
        <Text>Home</Text>
    </View>
  );
}
