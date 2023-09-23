import { Text, SafeAreaView, StyleSheet } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'

import NavegacaoAba from './routes/NavegacaoTab';

import Gaveta from './routes/Gaveta';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Gaveta />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
