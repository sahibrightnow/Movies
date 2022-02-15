import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import IndexScreen from '../screens/IndexScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ShowScreen from '../screens/ShowScreen'


const Stack = createNativeStackNavigator()

const AppStack = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name='Index'
                component={IndexScreen}
                options={{
                    title: 'Movies App',
                    headerStyle: {
                        backgroundColor: '#2c3e50'
                    },
                    headerTitleStyle: {
                        color: '#fff'
                    }
                }}
            />
            <Stack.Screen
                name='Show'
                component={ShowScreen}
                options={({ route }) => ({
                    title: route.params.name
                })}
            />

        </Stack.Navigator>
    </NavigationContainer>
)

export default AppStack