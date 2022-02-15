import React from 'react';


import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Selection from './Selection';
import Search from '../layout/Search'


const Tab = createMaterialTopTabNavigator();


function Tabs({navigation}) {

   
    return (
        <Tab.Navigator screenOptions={{
            tabBarLabelStyle: { fontSize: 12 },


        }}>
            <Tab.Screen name="Movies" children={() => <Selection category="movie" navigation={navigation}/>} />
            <Tab.Screen name="Search Results" children={() => <Search  navigation={navigation}/>} />
            <Tab.Screen name="TV Shows" children={() => <Selection category="tv" navigation={navigation}/>} />

        </Tab.Navigator>
    );
}
export default Tabs