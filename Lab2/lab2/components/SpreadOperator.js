import React from 'react';
import { Button, Text, View} from 'react-native';
import styles from './styles'

// przykladowy kod z strony podanej w opisie zadania, powinien wypisać w konsoli dwie 6-tki
function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

console.log(sum.apply(null, numbers));
// expected output: 6

const funkcjaPrzyklad = `function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

console.log(sum.apply(null, numbers));
// expected output: 6`;

export default function SpreadOperator({ navigation }) {
    return (
        <View style={styles.content.container}>
            <Text style={styles.content.title}>Spread Operator</Text>
            <Button styles={styles.content.button} onPress={() => navigation.openDrawer()} title="Menu" />
            <Text style={styles.content.text}>"Spread Operator" umożliwia rozwinięcie iterowalnych elementów, takich jak wyrażenie tablicowe lub ciąg znaków, w miejscach, w których oczekuje się zera lub większej liczby argumentów (dla wywołań funkcji) lub elementów (dla literałów tablicowych), lub wyrażenie obiektu do rozwinięcia w miejsca, w których oczekiwanych jest zero lub więcej par klucz-wartość (dla literałów obiektów).</Text>
            <Text style={styles.content.textCode}>{funkcjaPrzyklad}</Text>
        </View>
    );
}
