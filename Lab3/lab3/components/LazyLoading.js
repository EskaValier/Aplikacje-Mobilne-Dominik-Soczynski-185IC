import React, {Component, Suspense} from 'react';
import { Text, View } from 'react-native';
import styles from './styles'

const GeneratedRandText = React.lazy(() => import('./RandText'))

export default class LazyLoading extends Component {
    render(){ 
        return (
            <View style={styles.content.container}>
                <Text style={styles.content.title}>'Lazy loading'</Text>
                <Text style={styles.content.text}>Komponent GeneratedRandText ładowany jest przy użyciu React.lazy() oraz funkcji strzałkowej w następujący sposób</Text>
                <Text style={styles.content.textCode}>React.lazy(() =&gt; import('./RandText'))</Text>
                <Suspense fallback={<Text>Loading rand text</Text>}>
                    <GeneratedRandText length="1000"/>
                </Suspense>
            </View>
        )
    };
}
