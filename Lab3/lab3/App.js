import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home  from './components/Home';
import SpreadOperator  from './components/SpreadOperator';
import RestParameters  from './components/RestParameters';
import UseState  from './components/UseState';
import SortNumbers from './components/SortNumbers';
import LazyLoading from './components/LazyLoading';
import StepProgress1 from './components/StepProgress1';
import StepProgress2 from './components/StepProgress2';
import StepProgress3 from './components/StepProgress3';

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="SpreadOperator" component={SpreadOperator} />
            <Drawer.Screen name="RestParameters" component={RestParameters} />
            <Drawer.Screen name="UseState" component={UseState} />
            <Drawer.Screen name="SortNumbers" component={SortNumbers} />
            <Drawer.Screen name="LazyLoading" component={LazyLoading} />
            <Drawer.Screen name="StepProgress1" component={StepProgress1} />
            <Drawer.Screen name="StepProgress2" component={StepProgress2} />
            <Drawer.Screen name="StepProgress3" component={StepProgress3} />
        </Drawer.Navigator>
        </NavigationContainer>
    );
}
