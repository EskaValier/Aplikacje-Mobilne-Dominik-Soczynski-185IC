import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles'

class Select extends Component {
    setSelectedValue = (selectedValue) => {
        if (selectedValue){
            this.setState({ selectedValue: selectedValue })
        }
    }
    render() {
        return (
            <View>
                <Picker onValueChange = {this.setSelectedValue}>
                    {this.props.items ? this.props.items.map(item => <Picker.Item key = {item.title} label = {item.title} />) : <Picker.Item key = {0} enabled={false}/>}
                </Picker>
            </View>
        )
    }
}

export default class SelectsScreen extends Component {
    constructor(props){
        super(props)
        const options = [
            {title: 'Czerwony' },
            {title: 'Zielony' },
            {title: 'Niebieski' }
        ]
        this.state = {options}
    }
    async componentDidMount() {
        const responseToDoTitle = await fetch(`https://jsonplaceholder.typicode.com/todos`);
        const jsonToDoTitle = await responseToDoTitle.json();
        this.setState({ ToDoS: jsonToDoTitle });

        const responsePostTitle = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const jsonPosts = await responsePostTitle.json();
        this.setState({ posts: jsonPosts });
    }
    render(){ 
        return (
            <ScrollView style={styles.content.container}>
                <Text style={styles.content.title}>Select</Text>
                <View>
                    <Text style={styles.content.text}>Select z ustawionymi parametrami (kolory RGB)</Text>
                    <Select  items={this.state.options}/>
                </View>
                <View style={styles.content.example}>
                    <Text style={styles.content.text}>Pusty Select (brak elemntów)</Text>
                    <Select />
                </View>
                <View>
                    <Text style={styles.content.text}>Przykład z pobieraniem danych (tytułów - title) asynchronicznie z strony "https://jsonplaceholder.typicode.com/todos"</Text>
                    <Select  items={this.state.ToDoS}/>
                </View>
                <View>
                    <Text style={styles.content.text}>Select z pobieranymi danymi (tytułów - title) asynchronicznie z strony "https://jsonplaceholder.typicode.com/posts"</Text>
                    <Select items={this.state.posts}/>
                </View>
            </ScrollView>
        )
    };
}