import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/layout/Header';
import Selection from './src/components/layout/Selection';
import Tabs from './src/components/layout/Tabs';
import Titles_Container from './src/components/layout/Titles_Container';
import AppStack from './src/components/stacks/AppStack';

export default function App() {
  return (
    <NativeBaseProvider>

      <AppStack />
      <StatusBar style='light' />
    </NativeBaseProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
