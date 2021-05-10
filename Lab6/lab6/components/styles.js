import { StyleSheet } from 'react-native';

const styles = {}

styles.home = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#777',
        justifyContent: 'center',
        marginTop: 25,
    },
    button:{
        backgroundColor: 'red',
    },
    title: {
        color:'#0af',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    text: {
        color:'#0af',
        fontSize: 15,
        textAlign: 'left',
        marginHorizontal: 15,
        marginVertical: 15,
    },
    alignCenter: {
        textAlign: 'center',
    }
});


styles.content = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
        backgroundColor: '#555',
        paddingHorizontal:30,
        paddingVertical:30,
    },
    title: {
        color:'#0af',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 15,
    },
    text: {
        color:'#0af',
        fontSize:20,
        marginHorizontal: 15,
        marginVertical: 30,
    },
    textCode: {
        backgroundColor: '#666',
        color:'#0af',
        fontSize:15,
        padding: 10,
        marginHorizontal: 15,
        marginBottom:30,
    },
    input: {
        backgroundColor: '#888',
        color:'#fff',
        fontSize:15,
        padding: 10,
        marginBottom:5,
    },
    header: {
        backgroundColor: '#777',
        color:'#0af',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});  

export default styles
