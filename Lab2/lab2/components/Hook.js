import React, { useState } from 'react';
import { Button, Text, View} from 'react-native';

// przykladowy kod z strony podanej w opisie zadania
export default function Example() {
    // Zadeklaruj nową zmienną stanu, którą nazwiemy „count”
    const [count, setCount] = useState(0);

    return (
        <View>
            <Text>Kliknięto {count} razy</Text>
            <Button onClick={() => setCount(count + 1)}>
                Kliknij mnie
            </Button>
        </View>
    );
}
