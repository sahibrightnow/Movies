import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';


import AppStack from './src/components/stacks/AppStack';

export default function App() {
  return (
    <NativeBaseProvider>

      <AppStack />
      <StatusBar style='light' />
    </NativeBaseProvider>

  );
}


