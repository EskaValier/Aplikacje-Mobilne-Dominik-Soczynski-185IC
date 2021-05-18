import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({name: 'UserDatabase.db'});

const HomeScreen = ({navigation}) => {
    useEffect(() => {
        db.transaction(function (txn) {
        txn.executeSql(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
            [],
            function (tx, res) {
            console.log('item:', res.rows.length);
            if (res.rows.length == 0) {
                txn.executeSql('DROP TABLE IF EXISTS table_user', []);
                txn.executeSql(
                'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
                [],
                );
            }
            },
        );
        });
    }, []);

    return (
        <View style={styles.home.container}>
                <Text style={styles.home.title}>Home</Text>
                <Text style={styles.home.text}>Menu utworzone z wykorzystaniem drawer-navigation. Wysuwa się je z lewej strony, lub za pomocą przyciski poniżej.</Text>
                <Button styles={styles.home.button} onPress={() => navigation.openDrawer()} title="Otworz menu" />
            </View>
    );
};

export default HomeScreen;
