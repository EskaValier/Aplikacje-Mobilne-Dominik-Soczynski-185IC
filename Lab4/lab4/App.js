import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home  from './components/Home';
import SpreadOperator  from './components/SpreadOperator';
import RestParameters  from './components/RestParameters';
import UseState  from './components/UseState';
import TextInputs from './components/TextInputs';
import Select from './components/Select';
import Switch from './components/Switch';
import DateTimePickerEx from './components/DateTimePicker';

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="SpreadOperator" component={SpreadOperator} />
            <Drawer.Screen name="RestParameters" component={RestParameters} />
            <Drawer.Screen name="UseState" component={UseState} />
            <Drawer.Screen name="Text Input" component={TextInputs} />
            <Drawer.Screen name="Select" component={Select} />
            <Drawer.Screen name="Switch" component={Switch} />
            <Drawer.Screen name="DateTimePicker" component={DateTimePickerEx} />
        </Drawer.Navigator>
        </NavigationContainer>
    );
}
