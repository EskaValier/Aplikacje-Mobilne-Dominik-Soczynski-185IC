import React, {Component} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Swipeable from 'react-native-swipeable';
import styles from './styles';

export default class  SwipeableScreen extends Component{
    state = {
        leftAction: false,
        toggle: false
      };
    render() {
    const {leftAction, toggle} = this.state;
    const leftContent=[
        <View style={[styles.content.container,{ backgroundColor: leftAction ? '#800080' : '#0af'}]}>
          {leftAction ?
            <Text>Puść!</Text> :
            <Text>Przeciągaj dalej!</Text>}
        </View>
    ]

    const rightButtons = [
      <TouchableOpacity onPress={() => this.setState({toggle: !toggle})}><Text style={styles.content.text}>Opcja 1</Text></TouchableOpacity>,
      <TouchableOpacity onPress={() => this.setState({toggle: !toggle})}><Text style={styles.content.text}>Opcja 2</Text></TouchableOpacity>
    ];
    return (
      <View style={styles.content.container}>
        <Text style={styles.content.title}>Prosty przykład Swipeable</Text>
        <ScrollView style={styles.content.container} onScroll={this.handleScroll} >
          <Swipeable leftActionActivationDistance={100} leftContent={leftContent} rightButtons={rightButtons} onLeftActionActivate={() => this.setState({leftAction: true})} onLeftActionDeactivate={() => this.setState({leftAction: false})} onLeftActionComplete={() => this.setState({toggle: !toggle})}>
            <Text style={[styles.content.container, {backgroundColor: toggle ? '#800080' : '#0af', color: toggle ? '#fff' : '#000'}]}>My swipeable content</Text>
          </Swipeable>
        </ScrollView>
      </View>
    );
  }
}