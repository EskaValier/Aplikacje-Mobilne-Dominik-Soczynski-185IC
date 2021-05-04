import React, {Component} from 'react';
import { ScrollView, Text, View} from 'react-native';
import styles from './styles'

export default class ScrollViewTwo extends Component {
    render(){ 
        return (
            <View style={styles.content.container}>
                <Text style={styles.content.title}>Drugi ScrollView</Text>
                <Text style={styles.content.text}>ScorllView z ustawionym 'stickyHeaderIndices' na pierwszy element znajdujący się w 'ScrollView' oraz wyświetlanym komunikatem przy zakończeniu scroolowania</Text>
                <ScrollView stickyHeaderIndices={[0]}
                    onScrollEndDrag ={() => alert("Parametrem 'onScrollEndDrag' elementu 'ScrollView' można ustawić co ma się zdarzyć po zakończeniu scroolowania")}
                    style={styles.content.textCode}
                >
                    <View>
                        <Text style={styles.content.header}>Lorem ipsum</Text>
                    </View>
                    <Text style={styles.content.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                    <Text style={styles.content.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                    <Text style={styles.content.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                    <Text style={styles.content.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                </ScrollView>
            </View >
        )
    };
}