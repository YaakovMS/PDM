// App.js

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Box from './components/Box';

function App() {
  return (
    <View style={styles.container}>
      {/* Renderize três instâncias do componente Box com cores e tamanhos diferentes */}
      <Box size={100} color="red" />
      <Box size={150} color="green" />
      <Box size={200} color="blue" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  backgroundColor: 'aliceBlue',
  flexDirection: 'row-reverse',
  alignItems:'stretch',
  justifyContent:'space-around',

  },
});

export default App;
