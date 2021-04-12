import React from 'react';
import { Button, Text, ScrollView} from 'react-native';
import styles from './styles'

// przykladowy kod z strony podanej w opisie zadania, powinien wypisać w konsoli 6 i 10
function sum(...theArgs) {
    return theArgs.reduce((previous, current) => {
        return previous + current;
    });
}
  
console.log(sum(1, 2, 3));
// expected output: 6
  
console.log(sum(1, 2, 3, 4));
// expected output: 10

const funkcjaPrzyklad = `function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}

console.log(sum(1, 2, 3));
// expected output: 6

console.log(sum(1, 2, 3, 4));
// expected output: 10`;

// 2-gi przykladowy kod z strony podanej w opisie zadania
function myFun(a,  b, ...manyMoreArgs) {
    console.log("a,", a);
    console.log("b,", b);
    console.log("manyMoreArgs,", manyMoreArgs);
}
  
myFun("one", "two", "three", "four", "five", "six");
  
// Console Output:
// a, one
// b, two
// manyMoreArgs, ["three", "four", "five", "six"]

const funkcjaPrzyklad2 = `function myFun(a,  b, ...manyMoreArgs) {
    console.log("a,", a);
    console.log("b,", b);
    console.log("manyMoreArgs,", manyMoreArgs);
}
  
myFun("one", "two", "three", "four", "five", "six");
  
  // Console Output:
  // a, one
  // b, two
  // manyMoreArgs, ["three", "four", "five", "six"]`;

export default function RestParameter({ navigation }) {
    return (
        <ScrollView style={styles.content.container}>
            <Text style={styles.content.title}>Rest Parameter</Text>
            <Button styles={styles.content.button} onPress={() => navigation.openDrawer()} title="Menu" />
            <Text style={styles.content.text}>"Rest Parameter" pozwala funkcji na przyjmowanie nieokreślonej liczby argumentów jako tablicy, zapewniając sposób reprezentowania funkcji wariadycznych w JavaScript.</Text>
            <Text style={styles.content.title}>Przykład 1</Text>
            <Text style={styles.content.textCode}>{funkcjaPrzyklad}</Text>
            <Text style={styles.content.title}>Przykład 2</Text>
            <Text style={styles.content.textCode}>{funkcjaPrzyklad2}</Text>
        </ScrollView>
    );
}
