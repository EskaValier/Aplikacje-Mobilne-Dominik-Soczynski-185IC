import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import  Home  from './components/Home';
import  SpreadOperator  from './components/SpreadOperator';
import  RestParameters  from './components/RestParameters';
import  UseState  from './components/UseState';
import  ScrollViewOne from './components/ScrollView';
import  ScrollViewTwo from './components/ScrollView2';
import  Touchable from './components/Tuchable';

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="SpreadOperator" component={SpreadOperator} />
            <Drawer.Screen name="RestParameters" component={RestParameters} />
            <Drawer.Screen name="UseState" component={UseState} />
            <Drawer.Screen name="ScrollView" component={ScrollViewOne} />
            <Drawer.Screen name="ScrollView2" component={ScrollViewTwo} />
            <Drawer.Screen name="Touchable" component={Touchable} />
        </Drawer.Navigator>
        </NavigationContainer>
    );
}
