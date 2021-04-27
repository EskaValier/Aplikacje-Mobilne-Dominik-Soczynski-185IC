import React, {Component} from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import styles from './styles'

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text> //bold text in Text

const editableCode = 'editable={false}';
const multiline3 = 'multiline={true} numberOfLines={3}';
const onEndEdit = 'onEndEditing={event =>{alert(event.nativeEvent.text)}}';

export default class TextInputs extends Component {
    render(){ 
        return (
            <View style={styles.content.container}>
                <ScrollView >
                    <View >
                        <Text style={styles.content.title}>Podstawowy TextInput</Text>
                        <TextInput style={styles.content.textCode} /><Text/>
                    </View>
                    <View >
                        <Text style={styles.content.title}>autoCapitalize="words"</Text>
                        <Text style={styles.content.text}>TextInput z automatycznym formatowaniem pierwszej litery słowa na wielką.{"\n"}
                            <B>Parammetry</B> jakie przyjmuje to:{"\n"}
                            <B>characters:</B> dla wszystkich znaków{"\n"}
                            <B>words:</B> pierwsza litera słowa{"\n"}
                            <B>sentences:</B> pierwsza litera zdania (wartość domyślna){"\n"}
                            <B>none:</B> nie ustawia wielkich liter
                        </Text>
                        <TextInput style={styles.content.textCode} autoCapitalize="words" />
                    </View>
                    <View >
                        <Text style={styles.content.title}>value="Ustawiony tekst"</Text>
                        <Text style={styles.content.text}>TextInput z ustawionym parametrem <B>value</B> jest nie edytowalny</Text>
                        <TextInput style={styles.content.textCode} value="Ustawiony tekst" />
                    </View>
                    <View >
                        <Text style={styles.content.title}>defaultValue="Ustawiony tekst"</Text>
                        <Text style={styles.content.text}>TextInput z wartością domyślną <B>defaultValue</B> wyświetla przykładowy tekst i może być edytowany</Text>
                        <TextInput style={styles.content.textCode} defaultValue="Ustawiony tekst" />
                    </View>
                    <View >
                        <Text style={styles.content.title}>{editableCode}</Text>
                        <Text style={styles.content.text}>TextInput z wyłączoną możliwością edycji <B>editable</B>. Domyślnie wartość ustawiona na 'true'</Text>
                        <TextInput style={styles.content.textCode} editable={false} />
                    </View>
                    <View >
                        <Text style={styles.content.title}>keyboardType="numeric"</Text>
                        <Text style={styles.content.text}>TextInput uruchamiający klawiaturę numeryczną parametrem <B>keyboardType</B>{"\n"}
                            <B>Parametry</B> jakie jeszcze przyjmuje to:{"\n"}
                            <B>default</B>{"\n"}
                            <B>number-pad</B>{"\n"}
                            <B>decimal-pad</B>{"\n"}
                            <B>numeric</B>{"\n"}
                            <B>email-address</B>{"\n"}
                            <B>phone-pad</B>
                        </Text>
                        <TextInput style={styles.content.textCode} keyboardType="numeric" />
                    </View>
                    <View >
                        <Text style={styles.content.title}> {multiline3}</Text>
                        <Text style={styles.content.text}>TextInput z ustawionym widokiem inputa na wiele linii parametrem <B>multiline</B> na 'true' oraz ustwioną ilością linii na 3 parametrem <B>numberOfLines</B></Text>
                        <TextInput style={styles.content.textCode} multiline={true} numberOfLines={3}/>
                    </View>
                    <View >
                        <Text style={styles.content.title}>{onEndEdit}</Text>
                        <Text style={styles.content.text}>TextInput z przykładową parametrem <B>onEndEditing</B> z metodą wyswietlającą alert z wpisanym</Text>
                        <TextInput style={styles.content.textCode} onEndEditing={event =>{alert(event.nativeEvent.text)}} />
                    </View>
                </ScrollView>
            </View>
        )
    };
}