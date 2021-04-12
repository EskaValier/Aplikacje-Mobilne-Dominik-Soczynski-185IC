import React, { useState } from 'react';
import { Button, Text, View} from 'react-native';
import styles from './styles';
import Example from './Hook';

// przykladowy kod z strony podanej w opisie zadania
const funkcjaPrzyklad = `function Example() {
    // Zadeklaruj nową zmienną stanu, którą nazwiemy „count”
      const [count, setCount] = useState(0);
  
      return (
          <div>
              <p>Kliknięto {count} razy</p>
              <button onClick={() => setCount(count + 1)}>
                  Kliknij mnie
              </button>
          </div>
      );
  }`;

export default function UseState({ navigation }) {
    return (
        <View style={styles.content.container}>
            <Text style={styles.content.title}>UseState</Text>
            <Button styles={styles.content.button} onPress={() => navigation.openDrawer()} title="Menu" />
            <Text style={styles.content.text}>"UseState" jest to "Hook" który jest specjalną funkcją, która pozwala „zahaczyć się” w wewnętrzne mechanizmy Reacta. Na przykład useState jest hookiem, który pozwala korzystać ze stanu w komponencie funkcyjnym.</Text>
            <Text style={styles.content.textCode}>{funkcjaPrzyklad}</Text>
            
        </View>
    );
}
